// @ts-check
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
	output: "server",
	integrations: [tailwind()],
	adapter: vercel(),
	vite: {
		build: {
			cssMinify: 'lightningcss'
		},
		ssr: {
			noExternal: ["path-to-regexp"]
		}
	}
})
