module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),   //ec2-3-109-2-132.ap-south-1.compute.amazonaws.com
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
