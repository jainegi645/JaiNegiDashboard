module.exports = ({ env }) => ({
  apps: [
    {
      name: "JaiNegiDashboard", // Your project name
      cwd: "/home/ubuntu/JaiNegiDashboard", // Path to your project
      script: "npm", // For this example we're using npm, could also be yarn
      args: "start", // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS:
          "IMmdfGPbNhBhSFkPEFuHmw==,cGOHikgm2d+oQlAgH9pC9A==,iWAE1Boh/is8ASulQYRabQ==,F9g5Zf0JD4VmYYReSpMBYw==",
        API_TOKEN_SALT: env("API_TOKEN_SALT="),
        ADMIN_JWT_SECRET: env("ADMIN_JWT_SECRET"),
        JWT_SECRET: env("JWT_SECRET"),
        NODE_ENV: "production",
        DATABASE_HOST: env("DATABASE_HOST"), // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: env("DATABASE_PORT"),
        DATABASE_NAME: env("DATABASE_NAME"), // DB name under 'Configuration' tab
        DATABASE_USERNAME: env("DATABASE_USERNAME"), // default username
        DATABASE_PASSWORD: env("DATABASE_PASSWORD"),
        AWS_ACCESS_KEY_ID: env("AWS_ACCESS_KEY_ID"),
        AWS_ACCESS_SECRET: env("AWS_ACCESS_SECRET"), // Find it in Amazon S3 Dashboard
        AWS_REGION: env("AWS_REGION"),
        AWS_BUCKET_NAME: env("AWS_BUCKET_NAME"),
      },
    },
  ],
});
