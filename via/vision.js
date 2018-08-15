const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient({
    keyFilename: '../googlekey.json'
})

module.exports = class ImageRecognition {
    async getImageRecognitionResponse(fileDir) {
        return await new Promise(async(res) => {
            client
                .documentTextDetection(fileDir)
                .then(results => {
                    res(results[0])
                })
                .catch(err => {
                    console.error('ERROR:', err)
                })
        })
    }

    async getTextFromImage(fileDir) {
        let recognitionResponse = await this.getImageRecognitionResponse(fileDir)
        if (recognitionResponse)
        {
        return recognitionResponse.fullTextAnnotation.text
    }
    else{
        console.log("Não Consegui identificar palavras.")
    }
    }
}