// Load environment variables with proper priority (system > .env)
import "./scripts/load-env.js";
import type { ExpoConfig } from "expo/config";

// Package name for Android: ma.mgoungeoparc.myapp
// iOS bundle ID: ma.mgoungeoparc.myapp
const iosBundleId = "ma.mgoungeoparc.myapp";
const androidPackage = "ma.mgoungeoparc.myapp";
const schemeFromBundleId = "manusmgoun";

const env = {
  // App branding - update these values directly (do not use env vars)
  appName: "M'goun Geopark",
  appSlug: "mgoun-geopark-mobile",
  // S3 URL of the app logo - set this to the URL returned by generate_image when creating custom logo
  // Leave empty to use the default icon from assets/images/icon.png
  logoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663068642245/eKUGmXioxpHabzIA.png",
  scheme: schemeFromBundleId,
  iosBundleId,
  androidPackage,
};

const config: ExpoConfig = {
  projectId: "cinx87nF2kuFubfULeGUEP",
  name: env.appName,
  slug: env.appSlug,
  version: "1.0.1",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: env.scheme,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: env.iosBundleId,
    "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false
      },

  },
  android: {
    versionCode: 10019,
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: env.androidPackage,
    permissions: ["POST_NOTIFICATIONS", "ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
    intentFilters: [
      {
        action: "VIEW",
        autoVerify: true,
        data: [
          {
            scheme: env.scheme,
            host: "*",
          },
        ],
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-task-manager"
    ],
    [
      "expo-location",
      {
        "locationAlwaysAndWhenInUsePermission": "Géoparc M'goun utilise votre position pour vous alerter à l'approche des géosites et calculer les distances.",
        "locationAlwaysPermission": "Géoparc M'goun utilise votre position en arrière-plan pour vous envoyer des alertes quand vous approchez d'un géosite.",
        "locationWhenInUsePermission": "Géoparc M'goun utilise votre position pour afficher les géosites à proximité sur la carte.",
        "isIosBackgroundLocationEnabled": true,
        "isAndroidBackgroundLocationEnabled": true
      }
    ],
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    [
      "expo-build-properties",
      {
        android: {
          buildArchs: ["armeabi-v7a", "arm64-v8a"],
          minSdkVersion: 24,
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    eas: {
      projectId: "43825152-c476-4908-ae55-f82e8a5d5a6c",
    },
  },
};

export default config;
