const path = require("path");

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "src", "server.js"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
  },
  target: "node",
  node: {
    __dirname: false,
  },
};
