const { createProxyMiddleware } = require("https-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "https://localhost:4000",
      changeOrigin: true,
      secure: false,
    })
  );
};
