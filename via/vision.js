const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient()

exports.getImageText = async(fileDir) => {
    return new Promise(text => {
        client
            .textDetection(fileDir)
            .then(results => {
                let detections = results[0].fullTextAnnotation.text
                text(detections)
            })
            .catch(err => {
                console.error('ERROR:', err)
            })
    })
}