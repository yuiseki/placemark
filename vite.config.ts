import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	worker: {
		format: "es",
		plugins: () => [tsconfigPaths()],
	},
	test: {
		dir: "./",
		deps: {
			interopDefault: true,
		},
		globals: true,
		setupFiles: "./test/setup.ts",
		coverage: {
			reporter: ["text", "json", "html"],
		},
	},
});
