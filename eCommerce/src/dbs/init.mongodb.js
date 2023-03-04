'use strict'

const mongoose = require("mongoose")

// const mongoose = require('mongoose');

// const connectionString = mongoose.connect('mongodb://localhost:27017/eshop')
//     .then(_ => console.log('Connected Database'))
//     .catch(err => console.log('Error Connect'));

// //dev
// if (1 === 0) {
//     mongoose.set('debug', true)
//     mongoose.set('debug', { color: true })
// }

// module.exports = mongoose

const connectionString = 'mongodb://localhost:27017/eshop'

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectionString)
        .then(() => console.log('Connected Mongodb Success'))
        .catch(err => console.log('Error Connect!'));
    }

    //chi khoi tao mot ket noi:

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb;