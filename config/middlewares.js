// image was breakin  while uploading to S3 bucket, so we need to add the `strapi::security` middleware 
const BUCKET = process.env.AWS_BUCKET_NAME;
const BUCKET_URL = `https://${BUCKET}.s3.amazonaws.com`;

module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", BUCKET_URL],
          "media-src": ["'self'", "data:", "blob:", BUCKET_URL],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
