const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    let postVal = '';
    req.on('data', (chunk)=>{
        postVal += chunk;
    })

    req.on('end', ()=> {
        console.log(querystring.parse(postVal));
        res.end('');
    })
})



server.listen(8080);



