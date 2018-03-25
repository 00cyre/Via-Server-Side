const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const sockets = require('./via/socket')(io)

http.listen(3000, function() {
    console.log('listening on *:3000')
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})