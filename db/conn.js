const mongodb = require('mongodb').MongoClient
const url = 'mongodb://localhost/via'
let _db

exports.getConnection = async(callback) => {
    if (_db) callback(_db)
    mongodb.connect(url, async(err, db) => {
        if (err) throw err
        _db = db.db('via')
        console.log('Database connecting...')
        callback(_db)
    })
}