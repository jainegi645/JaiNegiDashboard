module.exports = {
    apps: [
      {
        name: 'JaiNegiDashboard', // Your project name
        cwd: '/home/ubuntu/JaiNegiDashboard', // Path to your project
        script: 'npm', // For this example we're using npm, could also be yarn
        args: 'start', // Script to start the Strapi server, `start` by default
        env: {
          APP_KEYS:'IMmdfGPbNhBhSFkPEFuHmw==,cGOHikgm2d+oQlAgH9pC9A==,iWAE1Boh/is8ASulQYRabQ==,F9g5Zf0JD4VmYYReSpMBYw==',
          API_TOKEN_SALT: 'BAgoO+iLQ8ZIzmawSmviwg==',
          ADMIN_JWT_SECRET: 'nxxHSC5aeEkr0j7yC/lq0A==',
          JWT_SECRET: 'kdaM0Yn0zmUhZSawg4dccg==',
          NODE_ENV: 'production',
          DATABASE_HOST: 'porfoliodashboarddb.ctkmvzgif0cy.ap-south-1.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
          DATABASE_PORT: '5432',
          DATABASE_NAME: 'porfoliodashboarddb', // DB name under 'Configuration' tab
          DATABASE_USERNAME: 'postgres', // default username
          DATABASE_PASSWORD: 'Negijai1234',
          AWS_ACCESS_KEY_ID: 'AKIAW53ZRXDKGBETOKP3',
          AWS_ACCESS_SECRET: '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', // Find it in Amazon S3 Dashboard
          AWS_REGION: 'ap-south-1',
          AWS_BUCKET_NAME: 'jainegiporfoliobucket',
        },
      },
    ],
  };