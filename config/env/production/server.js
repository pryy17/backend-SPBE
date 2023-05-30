module.exports = ({ env }) => ({
  proxy: true,
  url: env("VERCEL_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
