module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  plugins.push("react-native-worklets/plugin");
  plugins.push([
    "module-resolver",
    {
      alias: {
        "@": "./",
        "@shared": "./shared",
      },
    },
  ]);

  // Plugin to strip className attributes to avoid Tailwind processing
  plugins.push(function stripClassNamePlugin() {
    return {
      visitor: {
        JSXAttribute(path) {
          if (path.node.name.name === 'className') {
            path.remove();
          }
        },
      },
    };
  });

  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
