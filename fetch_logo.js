const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream('./public/logo.png');
https.get('https://ticksafe.com.au/wp-content/uploads/2023/06/logo-1.png', function (response) {
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download complete.');
    });
}).on('error', (err) => {
    fs.unlink('./public/logo.png');
    console.error('Error downloading: ' + err.message);
});
