module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID','AKIAW53ZRXDKGBETOKP3'),
          secretAccessKey: env('AWS_ACCESS_SECRET','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'),
          region: env('AWS_REGION','ap-south-1'),
          params: {
              Bucket: env('AWS_BUCKET_NAME','jainegiporfoliobucket'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    },

  });