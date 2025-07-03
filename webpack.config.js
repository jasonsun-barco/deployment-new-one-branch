import path from "node:path";
import url from "node:url";

const ROOT_PATH = path.resolve(import.meta.dirname);
const QJSENGINE_ROOT_PATH = path.resolve(
  import.meta.dirname,
  "node_modules",
  "@barcoemu/disw-qjsengine"
);

export default [
  // component entry
  {
    mode: "none",
    context: path.resolve(ROOT_PATH, "src/packages/componentG/"),
    resolve: { extensions: [".ts", ".js"] },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [
            path.resolve(ROOT_PATH, "src/packages/componentG/"),
            path.resolve(ROOT_PATH, "node_modules"),
          ],
          //exclude: /node_modules/,
          use: {
            loader: import.meta.resolve("babel-loader"),

            options: {
              presets: [import.meta.resolve("@babel/preset-typescript")],
              plugins: [
                "@babel/plugin-transform-object-rest-spread",
                "@babel/plugin-transform-optional-catch-binding",
              ].map((p) => import.meta.resolve(p)),
            },
          },
        },
      ],
    },
    resolveLoader: {
      alias: {
        [url.pathToFileURL(ROOT_PATH)]: ROOT_PATH,
        [url.pathToFileURL(QJSENGINE_ROOT_PATH)]: QJSENGINE_ROOT_PATH,
      },
    },

    entry: { Component: "./meta/installscript.ts" },
    output: {
      path: path.resolve(ROOT_PATH, "dist"),
      filename: `./packages/componentG/meta/installscript.js`,
      library: { name: "Component", type: "assign", export: "Component" },
    },
  },

  // controller entry
  {
    mode: "none",
    context: path.resolve(ROOT_PATH, "./src/config/"),
    resolve: { extensions: [".ts", ".js"] },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [
            path.resolve(ROOT_PATH, "./src/config/"),
            path.resolve(ROOT_PATH, "node_modules"),
          ],
          //exclude: /node_modules/,
          use: {
            loader: import.meta.resolve("babel-loader"),

            options: {
              presets: [import.meta.resolve("@babel/preset-typescript")],
              plugins: [
                "@babel/plugin-transform-object-rest-spread",
                "@babel/plugin-transform-optional-catch-binding",
              ].map((p) => import.meta.resolve(p)),
            },
          },
        },
      ],
    },
    resolveLoader: {
      alias: {
        [url.pathToFileURL(ROOT_PATH)]: ROOT_PATH,
        [url.pathToFileURL(QJSENGINE_ROOT_PATH)]: QJSENGINE_ROOT_PATH,
      },
    },

    entry: { Controller: "./controller.ts" },
    output: {
      path: path.resolve(ROOT_PATH, "dist"),
      filename: `./config/controller.js`,
      library: { name: "Controller", type: "assign", export: "Controller" },
    },
  },
];
