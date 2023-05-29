module.exports = ({ env }) => ({
  url: env("RAILWAY_STATIC_URL"),
  dirs: {
    public: "/public",
  },
});
