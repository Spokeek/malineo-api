"use strict";

module.exports = (app, db) => {

    const auth = require("../services/auth")(app, db);
    const requireAuth = auth.requireAuth;
    const City = require("../models/city");
    const Location = require("../models/location");
    const wrap = require("../services/wrap");

    let searchByCity = (req, res) => {

        let name = req.params.name;
        Location.getByCityName(db,name).then(
            (results)   =>  res.status(200).send(JSON.stringify(results)),
            (err)       =>  res.status(404).send("loaction not found " + err) 
        )

    }



    let searchByName = (req, res) => {

        let name = req.params.name;
        Location.getByName(db,name).then(
            (results)   =>  res.status(200).send(JSON.stringify({"location":results})),
            (err)       =>  res.status(404).send(err) 
        )

    }

    let searchByHandicapType = (req,res)=>{

        let handicapType = req.params.handicap;
        Location.getByHandicapType(db,handicapType)
        .then(
            (results)   =>  res.status(200).send(JSON.stringify(wrap(results,"location"))),
            (err)       =>  res.status(404).send(err)                        
        )
    };

    let searchByRegion = (req,res) =>{

        let region = req.params.region;

        Location.getByRegion(db,region)
        .then(
            (results)   =>  res.status(200).send(JSON.stringify(wrap(results,"location"))),

            (err)       =>  res.status(404).send( err) 
        )
    };

    let searchByPostalcode = (req, res) => {
        let code = req.params.code;

        Location.getByPostalcode(db,code)
        .then(
            (results)   =>  res.status(200).send(JSON.stringify(wrap(results,"location"))),

            (err)       =>  res.status(404).send(err)            
        )
    }

    app.get("/search/name/:name", searchByName);
    app.get("/search/city/:name", searchByCity);
    app.get("/search/region/:region",searchByRegion);
    app.get("/search/postalcode/:code",searchByPostalcode);
    app.get("/search/handicap/:handicap",searchByHandicapType);
 //type handicap 
}
