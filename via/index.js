const fs = require('fs')
const container = require('../injector/container')
const vision = container.getInstanceOf(require('./vision'))
const imageService = container.getInstanceOf(require('../services/imageService'))
const txtService = container.getInstanceOf(require('../services/textService'))
const brailleTranslator = require('../braille/translator')

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
    let insertImageResponse = await imageService.insertImage(text)
    let imageId = insertImageResponse.insertedId
    let file = await this.writeBase64InPNGFile(imageId, base64file)
    let text = await vision.getTextFromImage(file)
    let braille = new brailleTranslator(text).getBrailleFromText()
    return braille
}
exports.InsertTextToDb = async(base64file) => {
    let file = await this.writeBase64InPNGFile("LatestImgSent",base64file)
    let text = await vision.getTextFromImage(file)
    let insertImageResponse = await imageService.insertImage(base64file,text)
    return text
}
exports.GetText = async(id) => {
    let text = await vision.getTextFromImage(file)
    let insertImageResponse = await imageService.insertImage(text)
    return text
}
exports.SelectTextFromDB = async(id) => {
    
    let text = await txtService.selectText(id)
    return text
}