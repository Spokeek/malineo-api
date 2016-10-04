"use strict";
const config = require("./env");
const orm = require("orm");
// Or you can simply use a connection uri
let connection = `mysql://${config.user}:${config.password}@${config.host}:${config.port}/malineo`;

let connectionSucess = (err, db) => {
    if (err) throw err;

    db.load("../models/model", (err) => {
        if (err) throw err;
        var Region = db.models.region;
        var City = db.models.city;

      //  Region.hasMany("city",{})

         db.sync((err) => {
            if (err) throw err;

            Region.get(1, (err, region) => {
                if (err) console.log(err);
                console.log(region.name);
            });
        })
    });
}
orm.connect(connection, connectionSucess);