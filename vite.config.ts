import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "static",
    server: { entry: "server" },
    pages: [{ path: "/", prerender: { enabled: true, crawlLinks: true } }],
    prerender: { enabled: true },
  },
});
