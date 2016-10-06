"use strict";
const Region = require("../models/region");

module.exports = (app, db) => {
    const wrap = require("../services/wrap");
    let getOneRegion = (req, res) => {

        let id = req.params.id;
        Region.getOne(id, db).then(

            (results) =>
            res.status(200).send(JSON.stringify({"region":results.pop()})),
            (err) => {
                throw err
            }
        );
    }

    let getAllRegions = (req, res) => {
        Region.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(wrap(results,"region"))),
            (err) => { throw err }
        );
    }

    let createRegion = (req,res) =>{
        let name = req.body.name;
        Region.create(db,name).then(
             (results) => res.status(200).send(JSON.stringify({"region":results})),
            (err) => { throw err }
        )
    }
    app.get("/region/:id", getOneRegion);
    app.get("/region", getAllRegions);
    app.post("/region",createRegion)
}