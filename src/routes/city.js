"use strict";

module.exports = (app, db) => {

    const City = require("../models/city");
    const auth = require("../services/auth")(app, db);
    const requireAuth = auth.requireAuth;

    let getOneCity = (req, res) => {

        let id = req.params.id;
        City.getOne(id, db).then(

            (results) =>
            res.status(200).send(JSON.stringify(results.pop())),
            (err) => {
                throw err
            }
        );
    }
    let getAllCities = (req, res) => {
        City.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(results)),
            (err) => {
                throw err
            }
        );
    }
    let createCity = (req, res) => {
        let name = req.body.name;
        let postalCode = req.body.postalCode;
        let idRegion = req.body.idRegion;
        City.create(db, name, postalCode, idRegion).then(
            (results) => res.status(200).send(JSON.stringify(results)),
            (err) => {
                throw err
            }
        )
    }





    app.get("/city/:id",getOneCity);

    app.get("/city", getAllCities);

    app.post("/city", createCity)
}