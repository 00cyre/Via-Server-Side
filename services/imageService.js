const db = require('../db/db')
const collection = 'images'

class ImageService {
    constructor() {
        this._db = new db(collection)
        console.log('Created new imageService')
    }

    async insertImage(user) {
        let toInsert = { user }

        return await new Promise(async(response) => {
            let res = await this._db.insert(toInsert)
            response(res)
        })
    }
}

module.exports = new ImageService()