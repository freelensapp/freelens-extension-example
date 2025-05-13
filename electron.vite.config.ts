import { resolve } from "node:path";
import replacePlugin from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";

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
        },
      },
      sourcemap: true,
    },
    plugins: [
      externalizeDepsPlugin({
        // do not bundle modules provided by the host app
        include: ["@freelensapp/extensions"],
      }),
      replacePlugin({
        values: {
          // this module is provided by the host app as a global variable
          "require('@freelensapp/extensions')": "global.LensExtensions",
        },
        preventAssignment: true,
        delimiters: ["", ""],
      }),
    ],
  },
  // renderer process in Freelens can use Node.js modules then it is configured
  // with settings for preload script
  preload: {
    build: {
      lib: {
        entry: resolve(__dirname, "src/preload/index.tsx"),
        // Freelens 1.xx extensions are CommonJS modules
        formats: ["cjs"],
      },
      rollupOptions: {
        output: {
          // silence warning about using `chunk.default` to access the default export
          exports: "named",
          // prefer separate files for each module
          preserveModules: true,
        },
      },
      sourcemap: true,
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
      replacePlugin({
        values: {
          // this module is provided by the host app as a global variable
          "require('@freelensapp/extensions')": "global.LensExtensions",
          // this module is provided by the host app as a global variable
          "require('react')": "global.React",
        },
        preventAssignment: true,
        delimiters: ["", ""],
      }),
    ],
  },
});
