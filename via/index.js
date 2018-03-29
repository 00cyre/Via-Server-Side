const fs = require('fs')
const vision = require('./vision')
const imageService = require('../services/imageService')
const translator = require('./translator')

exports.writeBase64InPNGFile = async(name, base64file) => {
    let saveDir = `./images/${name}.png`
    return await new Promise(async(fileName) => {
        fs.writeFile(saveDir, base64file, 'base64', function(err) {
            if (err) {
                console.log(err)
            } else {
                fileName(saveDir)
            }
        })
    })
}

exports.getBrailleFromBase64Image = async(userid, base64file) => {
    let insertImageResponse = await imageService.insertImage(userid)
    let imageId = insertImageResponse.insertedId
    let file = await this.writeBase64InPNGFile(imageId, base64file)
    let text = await vision.getTextFromImage(file)
    let braille = await translator.getBrailleFromText(text)
    return braille
}