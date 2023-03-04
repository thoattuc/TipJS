const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require("helmet");
const compression = require("compression");

//---init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//---init db
require('./dbs/init.mongodb');
const {countConnect, overLoad} = require('./helper/check.connect');
countConnect();
overLoad();


//---init routes
app.get('/test-compression', (req, res,next) => {
    const strCompress = "Namdv";
    res.status(200).json({
        message: 'Hello namdv!',
        metaData: strCompress.repeat(10000)
    })
});

//---init handling errors

module.exports = app;