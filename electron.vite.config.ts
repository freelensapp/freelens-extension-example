import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import pluginExternal from "vite-plugin-external";

export default defineConfig({
  // main process has full access to Node.js APIs
  main: {
    build: {
      lib: {
        entry: resolve(__dirname, "src/main/index.ts"),
        // Freelens 1.xx extensions are CommonJS modules
        formats: ["cjs"],
      },
      rollupOptions: {
        output: {
          // silence warning about using `chunk.default` to access the default export
          exports: "named",
          // prefer separate files for each module
          preserveModules: true,
          preserveModulesRoot: "src/main",
        },
      },
      sourcemap: true,
    },
    plugins: [
      externalizeDepsPlugin({
        // do not bundle modules provided by the host app
        include: ["@freelensapp/extensions"],
      }),
      pluginExternal({
        externals: {
          "@freelensapp/extensions": "global.LensExtensions",
        },
      }),
    ],
  },
  // renderer process in Freelens can use Node.js modules then it is configured
  // with settings for preload script
  preload: {
    build: {
      lib: {
        entry: resolve(__dirname, "src/renderer/index.tsx"),
        // Freelens 1.xx extensions are CommonJS modules
        formats: ["cjs"],
      },
      outDir: "out/renderer",
      rollupOptions: {
        output: {
          // silence warning about using `chunk.default` to access the default export
          exports: "named",
          // prefer separate files for each module
          preserveModules: true,
          preserveModulesRoot: "src/renderer",
        },
      },
      sourcemap: true,
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },
    plugins: [
      react({
        // do not use `react/jsx-runtime` module in transpiled code
        jsxRuntime: "classic",
      }),
      externalizeDepsPlugin({
        // do not bundle modules provided by the host app
        include: ["@freelensapp/extensions", "electron", "react"],
        // bundle all other modules
        exclude: [],
      }),
      pluginExternal({
        // the modules are provided by the host app as a global variable
        externals: {
          "@freelensapp/extensions": "global.LensExtensions",
          react: "global.React",
        },
      }),
    ],
  },
});
