const http = require('http');
const querystring = require('querystring');
const mysql = require('mysql2');

const server = http.createServer((req, res) => {

    if (req.url != '/favicon.ico') {  // 过滤掉浏览器自动请求的 favicon.ico 
    
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
        
        connection.query("select * from user where userName=? and userPwd=?", [userName, userPwd], (err, results, fields)=>{
            if(err) throw err;
            if(results.length > 0){
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
                res.write('登录成功');
                res.end();
            } else {
                res.end("登录失败");
            }
        })
        connection.end();
        
    })
    
    }

})

server.listen(8080);









