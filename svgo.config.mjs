export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          sortAttrs: true,
          removeOffCanvasPaths: true,
        },
      },
    },
  ],
};
