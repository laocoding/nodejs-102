var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 2094;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => {
    console.log('server is running');
});