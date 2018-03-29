const index = require('./index.js')

this.Init = async() => {
    await this.io.on('connection', async(socket) => {
        let userid = socket.handshake.query.userid
        console.log(`A user connected. UserId: ${userid}`)
        socket.on('disconnect', () => {
            console.log(`User disconnected. UserId: ${userid}`)
        })
        socket.on('test', async(msg) => {
            let toSend = await index.getBrailleFromBase64Image(userid, msg)
            console.log(`Sending ${toSend} to user. UserId: ${userid}`)
            socket.emit('testclient', toSend)
        })
    })
    console.log('Sockets initialized')
}

module.exports = async(io) => {
    this.io = io
    this.Init()
}