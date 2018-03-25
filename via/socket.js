const index = require('./index.js')

this.Init = async() => {
    await this.io.on('connection', async(socket) => {
        console.log('a user connected')
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
        socket.on('test', async(msg) => {
            index.getBrailleFromBase64Image(msg)
        })
    })
    console.log('sockets initialized')
}

module.exports = async(io) => {
    this.io = io
    this.Init()
}