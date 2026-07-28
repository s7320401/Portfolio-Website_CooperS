import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders both academic projects and the provided contact method", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Retail Customer Churn Prediction/);
  assert.match(html, /Interactive Data Visualization Website/);
  assert.match(html, /Classification/);
  assert.match(html, /ISSS608/);
  assert.match(html, /View Live Website/);
  assert.match(html, /View LinkedIn Profile/);
  assert.match(html, /isss608-ay2025-t1ss\.netlify\.app/);
  assert.match(html, /linkedin\.com\/in\/coopers0401/);
  assert.doesNotMatch(html, /Featured Project|Main Project|Best Project/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("external links open in a new tab", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /href="https:\/\/isss608-ay2025-t1ss\.netlify\.app\/"[^>]*target="_blank"/,
  );
  assert.match(
    html,
    /href="https:\/\/www\.linkedin\.com\/in\/coopers0401"[^>]*target="_blank"/,
  );
});
