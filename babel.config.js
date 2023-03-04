// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            "@src": ["./src"],
            "@components": ["./src/components"],
            "@hooks": ["./src/hooks"],
            "@lib": ["./src/lib"],
            "@navigation": ["./src/navigation"],
            "@redux": ["./src/redux"],
            "@screens": ["./src/screens"],
            "@types": ["./src/types"],
            "@utils": ["./src/utils"],
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
