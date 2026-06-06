const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// ─── Web: stub out native-only modules ───────────────────────────────────────
// react-native-maps uses native codegen that crashes the web bundler.
// We redirect it to an empty stub when bundling for web.
const nativeOnlyModules = [
  "react-native-maps",
];

const originalResolver = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === "web" && nativeOnlyModules.some((m) => moduleName === m || moduleName.startsWith(m + "/"))) {
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, "stubs/react-native-maps.js"),
    };
  }
  if (originalResolver) {
    return originalResolver(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
