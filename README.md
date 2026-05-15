# Chat API documentation portal

Static **Swagger UI** developer portal for the Phoenix realtime chat specs in this repo.  
Original Phoenix exports (`*/swagger-ui-init.js`) are never modified — a small build script extracts embedded `swaggerDoc` objects into `apis/*.json`.

## Repository layout

| Path | Purpose |
|------|---------|
| `index.html` | Dark-themed homepage with searchable module cards |
| `docs/*.html` | One HTML page per module; loads Swagger UI from a CDN |
| `docs/css/portal.css` | Shared layout and theme |
| `docs/js/home.js` | Homepage catalog loader + module filter (`?q=` deep link) |
| `docs/js/swagger-page.js` | Swagger UI bootstrap (`deepLinking`, `filter`, `persistAuthorization`) |
| `apis/*.json` | Extracted OpenAPI **Swagger 2.0** JSON (generated) |
| `apis/catalog.json` | Machine-readable list of modules + source paths |
| `.nojekyll` | Ensures GitHub Pages does not run Jekyll (avoids odd path quirks) |

## Prerequisites

- **Python 3** — runs `scripts/build-api-portal.py`
- **Node.js** — required only during the build: Phoenix bundles often embed non-JSON (JavaScript literals with trailing commas). Node parses that safely without touching originals.

After changing any `swagger-ui-init.js` `swaggerDoc`, regenerate:

```bash
python3 scripts/build-api-portal.py
```

## Run locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

- Portal: http://localhost:8080/index.html  
- Example module: http://localhost:8080/docs/messages.html  
- Raw spec: http://localhost:8080/apis/messages.json  

Using a simple static server avoids `file://` CORS/XHR restrictions when Swagger UI `fetch()`es `./apis/*.json`.

## Detected OpenAPI material in this repo

| Module page | Spec file | Source (unchanged export) |
|-------------|-----------|-----------------------------|
| `docs/users.html` | `apis/users.json` | `chat-users/swagger-ui-init.js` |
| `docs/messages.html` | `apis/messages.json` | `chat-messages/swagger-ui-init.js` |
| `docs/broadcasters.html` | `apis/broadcasters.json` | `broadcast-forward/swagger-ui-init.js` |
| `docs/channels.html` | `apis/channels.json` | `conversations/swagger-ui-init.js` |
| `docs/auth.html` | `apis/auth.json` | `membership-control/swagger-ui-init.js` |
| `docs/cleanup.html` | `apis/cleanup.json` | `cleanup/swagger-ui-init.js` |
| `docs/delivery-status.html` | `apis/delivery-status.json` | `delivery-status/swagger-ui-init.js` |
| `docs/unread-messages.html` | `apis/unread-messages.json` | `unread-messages/swagger-ui-init.js` |

Standalone `.yaml` / `.yml` / `.json` OpenAPI files were **not** present in this tree when the portal was built; the build script also prints a scan hint if any appear later under the repo root.

## Enable GitHub Pages

1. Push this branch to GitHub.
2. In the repo on GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the branch you use (often `main`) and **folder `/ (root)`** — **not** only the `/docs` folder, because the site entrypoint is `./index.html` at the repository root (see layout table above).
5. Save. After the first deploy (usually within a minute or two), GitHub shows the live URL on the same settings page.

Optional: add a **Custom domain** on that screen if you use your own DNS.

## Public URL structure (project site)

For a normal user/org project (repo `Chat-doc`, owner `YOUR_USER`), GitHub serves:

- **Homepage:** `https://YOUR_USER.github.io/Chat-doc/index.html`  
  ( `/index.html` is optional; `/` usually resolves to the same page.)
- **Module:** `https://YOUR_USER.github.io/Chat-doc/docs/messages.html`
- **Spec:** `https://YOUR_USER.github.io/Chat-doc/apis/messages.json`
- **Catalog:** `https://YOUR_USER.github.io/Chat-doc/apis/catalog.json`

All asset and spec URLs are resolved with **`new URL(relativePath, window.location.href)`** so everything keeps working regardless of repo name (`/Chat-doc/` segment).

### User/org site exception

If this repository is **`YOUR_USER.github.io`** (same name as `{owner}.github.io`), the pages root has **no extra path segment**:

- `https://YOUR_USER.github.io/index.html`
- `https://YOUR_USER.github.io/docs/messages.html`
- …

The same relative resolution logic applies.

## Features

- **Homepage:** filter modules (Swagger UI exposes its own operation filter per page).
- **Deep linking:** `index.html?q=channels` pre-fills the homepage filter; each Swagger page uses `deepLinking: true`.
- **Back navigation:** Every `docs/*.html` links back to `/index.html`.
- **No backend:** Swagger UI scripts/styles come from `unpkg.com`; specs are plain static JSON under `apis/`.

## Legacy folders

Bundles under `chat-users/`, `chat-messages/`, etc. (local `swagger-ui-bundle.js`, etc.) remain as-exported Phoenix artifacts. Prefer the CDN-based **`docs/`** pages for browsing so you do not duplicate large JS assets.
