/* var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const http = require('http').Server(app);
app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body)
    res.sendFile(__dirname + '/index.html')
})
const io = require('socket.io')(http);
const container = require('./injector/container');
const sockets = container.getInstanceOf(require('./via/socket'));
http.listen(3000, function() {
    console.log('Listening on *:3000')
    //sockets.connect(io)
})
app.get(/^(.+)$/, function(req, res){ 
    res.sendfile( __dirname + req.params[0]); 
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})  */
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const http = require('http').Server(app);
app.post('/cadastro', urlencodedParser, function (req, res) {
  console.log(req.body)
  res.sendFile(__dirname + '/index.html')
})

http.listen(3000, function() {
    console.log('Listening on *:3000')
})

app.get(/^(.+)$/, function(req, res){ 
    res.sendfile( __dirname + req.params[0]); 
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
}) 


