// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
	integrations: [tailwind()],
	vite: {
		build: {
			cssMinify: 'lightningcss'
		},
		ssr: {
			noExternal: ["path-to-regexp"]
		}
	}
})
