module.exports = ({ env }) => ({
  proxy: true,
  url: env("RAILWAY_STATIC_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
