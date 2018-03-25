const mongodb = require('mongodb').MongoClient
const url = 'mongodb://localhost/via'
const collection = 'images'

class DB {
    constructor() {
        mongodb.connect(url, async(err, db) => {
            if (err) throw err
            this._db = db.db('via')
            await this.create()
        })
    }

    async create() {
        await this._db.createCollection(collection, (err, res) => {
            if (err) throw err
            console.log(`Collection ${collection} created successfully.`)
        })
    }

    async insert(user) {
        let toInsert = { user }

        return new Promise(Id => {
            this._db.collection(collection).insertOne(toInsert, (err, res) => {
                Id(res.insertedId)
            })
        })
    }
}

module.exports = new DB()