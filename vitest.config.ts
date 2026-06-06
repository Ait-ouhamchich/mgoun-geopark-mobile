import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    // Mock native modules that can't be parsed in Node.js environment
    alias: {
      "react-native": path.resolve(__dirname, "tests/__mocks__/react-native.ts"),
      "expo-file-system/legacy": path.resolve(__dirname, "tests/__mocks__/expo-file-system.ts"),
      "expo-location": path.resolve(__dirname, "tests/__mocks__/expo-location.ts"),
      "expo-notifications": path.resolve(__dirname, "tests/__mocks__/expo-notifications.ts"),
      "expo-task-manager": path.resolve(__dirname, "tests/__mocks__/expo-task-manager.ts"),
      "@react-native-async-storage/async-storage": path.resolve(__dirname, "tests/__mocks__/async-storage.ts"),
      "@/constants/geosites": path.resolve(__dirname, "constants/geosites.ts"),
      "@/lib/offlineManager": path.resolve(__dirname, "lib/offlineManager.ts"),
      "@/lib/geofencingManager": path.resolve(__dirname, "lib/geofencingManager.ts"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
