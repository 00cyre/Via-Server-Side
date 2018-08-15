const container = require('../injector/container')
const db = require('../db/db')
const speech = require('../via/speech.js')
const collection = 'images'

module.exports = class textService {
    constructor() {

        this._db = new db()
    }

    async selectText(id) {

        var x1 = new  Promise(async(response) => {

            let res = await this._db.select(id,function(err, content) {
            if (err) {
                console.log(err);
            } else {
                res = content;
            }
            
            let toSend = speech.TexttoSpeech(res)

        })
            console.log(res);
    })
    }
    async callbackselect(value)
    {
      
    }
}