#!/usr/bin/env python3
"""
Build static API documentation for GitHub Pages.

Reusability / maintenance:
  - OpenAPI specs in this repo today live *inside* Phoenix-exported
    `**/swagger-ui-init.js` files (embedded `"swaggerDoc"` JSON), not as standalone
    YAML files. This script extracts that JSON into `apis/<id>.json` so the portal
    can load specs via URL (Swagger UI CDN) without modifying the originals.

When to run:
  - After updating any `swagger-ui-init.js` swaggerDoc, re-run:
      python3 scripts/build-api-portal.py

Prerequisites:

  - Python 3.x and **Node.js** on your PATH. Node is only used at build time so
    swaggerDoc JavaScript object literals (often with trailing commas) can be parsed
    without editing the Phoenix export files.

Adding a new API module:
  - Add a row to MODULES below (source_dir, json_id, card title, short description).
  - Re-run this script to refresh `apis/*.json`, `apis/catalog.json`, and `docs/*.html`.
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

# (source directory under repo root, stable id for apis/<id>.json + docs/<id>.html, card title, description)
# json_id matches the filenames the user asked for where possible (users, messages, broadcasters, channels, auth).
MODULES: list[tuple[str, str, str, str]] = [
    ("chat-users", "users", "Users", "Publish and manage realtime messages to users."),
    ("chat-messages", "messages", "Messages", "Chat message APIs (send, history, delivery helpers)."),
    ("broadcast-forward", "broadcasters", "Broadcasters", "Broadcast / forward message flows."),
    ("conversations", "channels", "Channels", "Conversations, members, and channel-style resources."),
    ("membership-control", "auth", "Auth & membership", "Membership and access control for chat participants."),
    ("cleanup", "cleanup", "Cleanup", "Cleanup-related maintenance endpoints."),
    ("delivery-status", "delivery-status", "Delivery status", "Message delivery state and tracking."),
    ("unread-messages", "unread-messages", "Unread messages", "Unread counts and related message queries."),
]

ROOT = Path(__file__).resolve().parents[1]


def _extract_brace_object_source(text: str, start: int) -> str:
    """
    Return the source slice for a balanced `{ ... }` starting at `start`,
    respecting string literals (avoids counting braces inside descriptions).
    """

    depth = 0
    in_str = False
    quote: str | None = None
    escape = False
    i = start
    if start >= len(text) or text[start] != "{":
        raise ValueError("extract_brace_object_source: start must point at '{'")
    while i < len(text):
        c = text[i]
        if in_str:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == quote:
                in_str = False
                quote = None
            i += 1
            continue
        if c in ('"', "'"):
            in_str = True
            quote = c
            i += 1
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]
        i += 1
    raise ValueError("Unterminated brace object")


def extract_swagger_doc(init_js: Path) -> dict:
    """
    Phoenix swagger exports sometimes embed swaggerDoc using JavaScript object
    literals (e.g. trailing commas) that are not strict JSON — parse via Node.
    Original files under `**/swagger-ui-init.js` are never modified.
    """

    text = init_js.read_text(encoding="utf-8")
    needle = '"swaggerDoc":'
    idx = text.index(needle) + len(needle)
    while idx < len(text) and text[idx].isspace():
        idx += 1
    brace = text.index("{", idx)
    snippet = _extract_brace_object_source(text, brace)
    proc = subprocess.run(
        [
            "node",
            "-e",
            """
const fs = require('fs');
const snippet = fs.readFileSync(0, 'utf8');
const parsed = Function('"use strict"; return (' + snippet + ')')();
console.log(JSON.stringify(parsed));
""",
        ],
        input=snippet,
        text=True,
        capture_output=True,
        cwd=ROOT,
        check=False,
    )
    if proc.returncode != 0:
        detail = proc.stderr.strip() or proc.stdout.strip() or "(no stderr)"
        raise RuntimeError(f"Node failed parsing swaggerDoc from {init_js}:\n{detail}")
    return json.loads(proc.stdout)


def scan_repo_for_openapi_files() -> list[Path]:
    """Best-effort scan for sibling spec files (*.yaml / *.yml / *.json) at repo root."""

    found: list[Path] = []
    exts = {".yaml", ".yml", ".json"}
    for p in ROOT.rglob("*"):
        if any(part.startswith(".") for part in p.parts):
            continue
        try:
            rel = p.relative_to(ROOT)
        except ValueError:
            continue
        if rel.parts and rel.parts[0] == "apis":
            continue
        if "node_modules" in p.parts:
            continue
        if p.suffix.lower() not in exts:
            continue
        try:
            head = p.read_text(encoding="utf-8", errors="ignore")[:8000].lower()
        except OSError:
            continue
        if "openapi" in head or "swagger" in head:
            found.append(p)
    return sorted(found, key=lambda x: str(x))


def spec_title(spec: dict, fallback: str) -> str:
    info = spec.get("info") if isinstance(spec.get("info"), dict) else {}
    return str(info.get("title") or fallback).strip()


def write_if_changed(path: Path, content: str) -> None:
    if path.exists() and path.read_text(encoding="utf-8") == content:
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def doc_page_html(api_id: str, page_title: str) -> str:
    # Single template for every API page — data-api-id selects `../apis/<id>.json`.
    return f"""<!DOCTYPE html>
<html lang="en" data-api-id="{api_id}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{page_title} · API reference</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./css/portal.css" />
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" crossorigin="anonymous" />
</head>
<body class="docs-body">
  <header class="docs-header">
    <a class="back-link" href="../index.html">← Developer portal</a>
    <div class="docs-header__titles">
      <h1 class="docs-header__title">{page_title}</h1>
      <p class="docs-header__subtitle">OpenAPI (Swagger) · static hosting</p>
    </div>
  </header>
  <main class="docs-main">
    <div id="swagger-ui"></div>
  </main>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js" crossorigin="anonymous"></script>
  <script src="./js/swagger-page.js"></script>
</body>
</html>
"""


def main() -> None:
    apis_dir = ROOT / "apis"
    apis_dir.mkdir(parents=True, exist_ok=True)

    catalog: list[dict] = []

    for source_dir, json_id, card_title, description in MODULES:
        init_path = ROOT / source_dir / "swagger-ui-init.js"
        if not init_path.is_file():
            raise FileNotFoundError(f"Missing swagger-ui-init.js: {init_path}")

        spec = extract_swagger_doc(init_path)
        out_json = apis_dir / f"{json_id}.json"
        # Pretty JSON for readable diffs when specs change.
        out_json.write_text(json.dumps(spec, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

        inferred = spec_title(spec, card_title)
        catalog.append(
            {
                "id": json_id,
                "title": card_title,
                "specTitle": inferred,
                "description": description,
                "file": f"{json_id}.json",
                "source": f"{source_dir}/swagger-ui-init.js",
                "docPage": f"docs/{json_id}.html",
            }
        )

        page_path = ROOT / "docs" / f"{json_id}.html"
        write_if_changed(page_path, doc_page_html(json_id, card_title))

    catalog_path = apis_dir / "catalog.json"
    catalog_path.write_text(
        json.dumps({"apis": catalog}, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    loose_in_apis: list[str] = []
    for p in sorted(apis_dir.glob("*")):
        if not p.is_file():
            continue
        if p.suffix.lower() not in {".yaml", ".yml", ".json"}:
            continue
        if p.name == "catalog.json":
            continue
        if p.stem in {e["id"] for e in catalog}:
            continue
        loose_in_apis.append(p.name)

    standalone = scan_repo_for_openapi_files()
    print(f"Wrote {len(catalog)} specs into {apis_dir.relative_to(ROOT)}/")
    if loose_in_apis:
        print(
            "Note: unmatched spec files under apis/: "
            + ", ".join(loose_in_apis)
            + " (extend MODULES in scripts/build-api-portal.py to wire these in)."
        )
    if standalone:
        preview = ", ".join(str(p.relative_to(ROOT)) for p in standalone[:12])
        more = "" if len(standalone) <= 12 else f" (+{len(standalone) - 12} more)"
        print(f"Standalone OpenAPI-ish files elsewhere in repo: {preview}{more}")


if __name__ == "__main__":
    main()
