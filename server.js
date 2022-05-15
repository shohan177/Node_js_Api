const http = require('http');
const fs = require('fs');

let data = fs.readFileSync('./object.json');
let dataObj = JSON.parse(data);

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' })

    switch (request.url) {
        case '/':
            response.write(JSON.stringify(dataObj))
            break;

        case '/info':
            response.write(JSON.stringify(dataObj.info))
            break;

        case '/product':
            response.write(JSON.stringify(dataObj.product))
            break;

        default:
            break;
    }

    response.end()

})
    .listen('5050', () => {
        console.log('server running....')

    })