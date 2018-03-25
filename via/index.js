const fs = require('fs')
const vision = require('./vision')
const db = require('../db/images')

exports.writeBase64InPNGFile = async(name, base64file) => {
    let saveDir = `./images/${name}.png`
    return new Promise(fileName => {
        fs.writeFile(saveDir, base64file, 'base64', function(err) {
            if (err) {
                console.log(err)
            } else {
                fileName(saveDir)
            }
        })
    })
}

exports.getBrailleFromBase64Image = async(base64file) => {
    let imageId = await db.insert('goku')
    let file = await this.writeBase64InPNGFile(imageId, base64file)
    let text = await vision.getImageText(file)
    console.log(text)
}