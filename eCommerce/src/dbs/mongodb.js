const MongoClient = require('mongodb').MongoClient;

const connectionString = "mongodb://localhost:27017/"
const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
};
MongoClient.connect(connectionString, options)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log("Error Connecting", err)
    });

module.exports = MongoClient