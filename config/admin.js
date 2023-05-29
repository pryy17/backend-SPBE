module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "J49DNGB63pFM1XHwBmX0Jg"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
