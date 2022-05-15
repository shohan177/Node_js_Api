// const data = require('./data');
// const fs = require('fs')


// file create_______________________

// fs.writeFile('db.json', '{"name":"shohan"}', (err, data) => {

// })

// file append_____________________

// fs.appendFile('db.json', '{"name":"shohan"},', (err, data) => {

// })

// file Rename_____________________

// fs.rename('db.json', 'shohan.jsona', (err, data) => {

// })

//delete file__________________________

// fs.unlink('db.json', (erre) => {

// });

//delete file with sync__________________________

// fs.unlinkSync('db.json');

// read file__________________________________

// fs.readFile('object.json', (err, data) => {
//     console.log(data.toString())
// })

//console.log(data);

//server create 
const http = require('http');
const fs = require('fs')
const url = require('url')


let jsonData = fs.readFileSync('./object.json')

http.createServer((request, responce) => {

    let urlHit = url.parse("http://localhost:5050/" + request.url)

    console.log('post number---', urlHit.port)
    console.log('serach---', urlHit.search)

    responce.writeHead(200, { 'Content-Type': 'application/json' })
    responce.write('its works')
    responce.end()

    console.log('method---', request.method)
    console.log('url---', request.url)

}).listen(5050, () => {
    console.log('server is running......')
})