const http = require('http');
const querystring = require('querystring');
const mysql = require('mysql2');

const server = http.createServer((req, res) => {

    let postVal ="";
    req.on("data", (chunk) => {
        postVal += chunk;
    })

    req.on("end", ()=>{
        let formVal = querystring.parse(postVal);
        let userName = formVal.userName;
        let userPwd = formVal.userPwd;

        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root123",
            database: "demo1"
        })

        connection.connect();

        connection.query("select * from user", (err, results, fields)=>{
            if(err) throw err;
            

        })

        res.end();
    })
})

server.listen(8080);









