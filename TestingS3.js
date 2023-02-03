const fs = require('fs')
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    region: 'ap-south-1',
    accessKeyId: 'AKIAW53ZRXDKGBETOKP3',
    secretAccessKey: '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'
});
 
const fileName = 'test.txt';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'jainegiporfoliobucket',
         Key: 'test.txt',
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

uploadFile();