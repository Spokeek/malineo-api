"use strict";


module.exports = (app,db)=>{
    let city = require("./city")(app,db);
    let region = require("./region")(app,db);
    let user = require("./user")(app,db);
    let comment = require("./comment")(app,db);
}