const index = require('./index.js')

module.exports = class SocketConnection {
    async connect(io) {
        await io.on('connection', async(socket) => {
            let userid = socket.handshake.query.userid
            console.log(`A user connected. UserId: ${userid}`)
            socket.on('disconnect', () => {
                console.log(`User disconnected. UserId: ${userid}`)
            })
            socket.on('EncodedImg', async(msg) => {
                let toSend = await index.InsertTextToDb(msg)
                console.log(`Sending ${toSend} to user. UserId: ${userid}`)
                socket.emit('testclient', toSend)
            })
            socket.on('speech',async(id)=>{
                let text = await index.SelectTextFromDB(id)
                socket.emit('testclient', text)
            })
        })
        console.log('Sockets initialized')
    }
}