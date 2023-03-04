'use strict'

const mongoose = require('mongoose');

const countConnect = () => {
const countConnection = mongoose.connections.length
console.log('Number of connection: ' + countConnection);
}

module.exports = {countConnect}; //export function