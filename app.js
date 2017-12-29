var express = require('express');
var app = express();
var server = require('http').Server(app);
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(PORT, () => {
    console.log('server is running');
});