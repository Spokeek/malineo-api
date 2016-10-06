"use strict";

module.exports = (app, db) => {
    const wrap = require("../services/wrap");
    const City = require("../models/city");
    const auth = require("../services/auth")(app, db);
    const requireAuth = auth.requireAuth;

    let getOneCity = (req, res) => {

        let id = req.params.id;
        City.getOne(id, db).then(

            (results)   =>  res.status(200).send(JSON.stringify({ "city": results.pop() })),
            (err)       =>  res.status(404).send("city not found")
        );
    }

    let getCityByName = (req,res) =>{

        let name = req.params.name;
        City.getByName(db,name).then(   

            (results)   =>  res.status(200).send(JSON.stringify({ "city":  results.pop()} )),
            (err)       =>  res.status(404).send("city not found")
        );

    }
    let getAllCities = (req, res) => {
        City.getAll(db).then(
            (results)   => 
            res.status(200).send(JSON.stringify(wrap(results,"city"))),
            (err)       =>  res.status(404).send("no city have been found :/")
        );
    }
    let createCity = (req, res) => {
        let name = req.body.name;
        let postalCode = req.body.postalCode;
        let idRegion = req.body.idRegion;
        City.create(db, name, postalCode, idRegion).then(
            (results)   => res.status(200).send(JSON.stringify({"city":results})),
            (err)       => res.status(500).send("An error occured while creating this city")
        )
    }

    app.get("/city/:id",getOneCity);

    app.get("/city/name/:name",getCityByName)

    app.get("/city", getAllCities);

    app.post("/city", createCity)
}