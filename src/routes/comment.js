"use strict";

module.exports = (app, db) => {

    const Comment = require("../models/comment");
    const auth = require("../services/auth")(app, db);
    const requireAuth = auth.requireAuth;

    let getOneComment = (req, res) => {
        let id = req.params.id;

        Comment.getOne(id,db).then(
            (results) =>
                res.status(200).send(JSON.stringify(results.pop())),
            (err) => {
                throw err
            }
        )
    }
    let getAllComment = (req, res) => {
        Comment.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(results)),
            (err) => { throw err }
        );
    }
    let createComment = (req, res) => {
        let content=req.body.content;
        // let date=JSON.parse(req.body.date);
        let date = new Date();
        let idUser = req.body.idUser;
        let idLocation = req.body.idLocation;
        Comment.create(db,content,date,idUser,idLocation)
        .then(
            (results)=>res.status(200).send(JSON.stringify(results)),
            (err) => {throw err}
        )
    }

    let getCommentsByUser = (req, res)=>{

    }

    let getCommentByLocation = (req, res)=>{

    }

    app.get("/comment/:id",getOneComment);

    app.get("/comment", getAllComment);

    app.get("/comment/user/:id",getCommentsByUser);

    app.get("/comment/location/:id", getCommentByLocation);



    app.post("/comment", createComment)
}