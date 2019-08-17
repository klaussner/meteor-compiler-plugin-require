Package.describe({
  name: "compiler",
  version: "1.0.0"
});

Package.registerBuildPlugin({
  name: "compiler",
  use: ["ecmascript@0.12.7"],
  sources: ["compiler.js"]
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.1");
  api.use("isobuild:compiler-plugin@1.0.0");
});
