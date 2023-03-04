'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDs = 1000*60;

//check count connect:
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log('Number of connection: ' + numConnection);
}

//check over-load connect:
const overLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        //THop: PC 4 core, 1 core toi da 5 ket noi:
        const maxConnections = numCores * 5;

        console.log('Active connect: ', numConnection, '    Cores number: ', numCores, '   Memory usage: ', memoryUsage / 1024 / 1024, 'MB');

        if(numConnection >= maxConnections) {
            console.log(`Over load!`);
        }

    },_SECONDs);
}

module.exports = { countConnect, overLoad }; //export function