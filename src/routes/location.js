"use strict";

module.exports = (app, db) => {
    const wrap = require("../services/wrap");
    const uuid = require("uuid");
    const Location = require("../models/location");
    const auth = require("../services/auth")(app, db);

    let getOneLocation = (req,res)=>{
        let id = req.params.id;
        Location.getOne(id,db).then(
            (response)=>
             res.status(200).send(JSON.stringify({"location":results.pop()})),
            (err)=> {throw err}
        )
    }
    let getAllLocations = (req,res)=>{
        Location.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(wrap(results,"location"))),
            (err) => { throw err }
        );
    }
    let createLocation = (req,res)=>{

        let location = {
         name : req.body.name,
         idLocation : uuid.v4(),
         coordonateX : req.body.coordonateX,
         coordonateY : req.body.coordonateY,
         image : req.body.image,
         contact : req.body.contact,
         city_idCity : req.body.idCity
        };


        

        Location.create(db,location)
            .then(
                (results)=>res.status(200).send(JSON.stringify({"location":results})),
                (err) =>console.log(err)
            )
    }

    app.get("/location/:id",getOneLocation);

    app.get("/location", getAllLocations);

    app.post("/location", createLocation)
}