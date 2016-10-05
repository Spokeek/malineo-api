"use strict";
const config = require("./env");
const mysql = require("mysql");


let connection =  mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database: config.database
});
connection.connect();
module.exports = connection;


