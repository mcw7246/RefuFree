import sqlite from 'sqlite3';

function authentication(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var http = require('http');

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello');
    }).listen(8080);
    
}
