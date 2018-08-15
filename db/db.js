const container = require('../injector/container')
const dbConnector = container.getInstanceOf(require('./conn'))
const dbService = require('../services/dbService')
const mysql = require('mysql')

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "via"
    })
    module.exports = class DB {
    constructor(collection) {
    }




    select(idpic, callback) 
    {
        var sql ="SELECT `text` FROM `pic` WHERE `idpic` = " + idpic 
        con.query(sql, function (err, result, fields) {
            if (err)
            {
            	callback(err, null);
            } else {

                callback(null, result[0].text);
            }
            }
            //console.log("Selected " + x1);
        )
    }
    
    async insert(image,text) {
        return await new Promise(async(response) => {
            
            //console.log(text);
            
            
            var sql = "INSERT INTO `pic`(`idpic`, `image`,`text`) VALUES (NULL, '" + image + "', '" + text + "');";
            console.log(sql);
            con.query(sql, function (err, result) {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    //console.log(toInsert);
                    console.log("1 record inserted");
                }
            })
        })
    }

    
}