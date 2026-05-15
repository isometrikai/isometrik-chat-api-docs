/**
 * Initializes Swagger UI on static doc pages (`/docs/*.html`).
 *
 * Reuse pattern:
 *   - Each page sets `<html data-api-id="<catalog id>">` matching `apis/<id>.json`.
 *   - `new URL(specPath, window.location.href)` resolves correctly on GitHub Pages
 *     project sites (any repo path prefix) without hardcoding BASE_URL.
 *
 * Swagger options:
 *   - deepLinking: hash/query links to tags and operations
 *   - filter: top-of-page filter box (Swagger UI native)
 */

(function () {
  "use strict";

  function init() {
    var root = document.documentElement;
    var apiId = root.getAttribute("data-api-id") || "";

    var specHref = apiId ? new URL("../apis/" + apiId + ".json", window.location.href).href : "";

    var el = document.getElementById("swagger-ui");
    if (!specHref || !el || typeof SwaggerUIBundle === "undefined") {
      console.error("[api-portal] Missing spec id or SwaggerUIBundle.", { apiId: apiId });
      return;
    }

    var StandalonePreset = window.SwaggerUIStandalonePreset;

    window.ui = SwaggerUIBundle({
      url: specHref,
      dom_id: "#swagger-ui",
      deepLinking: true,
      filter: true,
      persistAuthorization: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        StandalonePreset,
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl,
      ],
      layout: "StandaloneLayout",
      tryItOutEnabled: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
