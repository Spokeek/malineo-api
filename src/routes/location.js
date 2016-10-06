"use strict";

module.exports = (app, db) => {
    const uuid = require("uuid");
    const Location = require("../models/location");
    const auth = require("../services/auth")(app, db);

    let getOneLocation = (req,res)=>{
        let id = req.params.id;
        Location.getOne(id,db).then(
            (response)=>
             res.status(200).send(JSON.stringify(results.pop())),
            (err)=> {throw err}
        )
    }
    let getAllLocations = (req,res)=>{
        Location.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(results)),
            (err) => { throw err }
        );
    }
    let createLocation = (req,res)=>{

        let name = req.body.name;
        let idLocation = uuid.v4();
        let coordonateX = req.body.coordonateX
        let coordonateY = req.body.coordonateY;
        let image = req.body.image;
        let contact = req.body.image;
        let idCity = req.body.idCity;

        
        console.log(Location);
        Location.create(db,idLocation, name, coordonateX, coordonateY, image, contact, idCity)
            .then(
                (results)=>res.status(200).send(JSON.stringify(results)),
                (err) =>console.log(err)
            )
    }

    app.get("/location/:id",getOneLocation);

    app.get("/location", getAllLocations);

    app.post("/location", createLocation)
}