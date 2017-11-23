const http = require('http');
const Storage = require('@google-cloud/storage');

const hostname = '127.0.0.1';
const port = 3000;

const storage = Storage();

const bucketName = 'staging.testlivv-186809.appspot.com';
const filename = 'test_upload.txt';


const server = http.createServer((req, res) => {
    // storage
    //     .getBuckets()
    //     .then((results) => {
    //         const buckets = results[0];
    //         console.log('Buckets:');
    //         buckets.forEach((bucket) => {
    //             console.log(bucket.name);
    //     });
    // })
    // .catch((err) => {
    //   console.error('ERROR:', err);
    // });
    storage
        .bucket(bucketName)
        .upload(filename)
        .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
        })
        .catch(err => {
        console.error('ERROR:', err);
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});