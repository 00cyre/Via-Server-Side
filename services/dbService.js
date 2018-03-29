module.exports = class dbService {
    constructor(db) {
        this._db = db
        console.log('Created new dbService')
    }

    checkIfCollectionExists(collection) {
        let cols = this._db.listCollections({ name: collection })
        console.log(`Checking if ${collection} exists...`)
        cols.next((err, collinfo) => {
            if (collinfo) {
                return true
            }
            return false
        })
    }
}