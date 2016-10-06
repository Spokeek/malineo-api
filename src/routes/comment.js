"use strict";

module.exports = (app, db) => {
    const wrap = require("../services/wrap");
    const Comment = require("../models/comment");
    const auth = require("../services/auth")(app, db);
    const requireAuth = auth.requireAuth;

    let getOneComment = (req, res) => {
        let id = req.params.id;

        Comment.getOne(id,db).then(
            (results) =>
                res.status(200).send(JSON.stringify({"comment":results.pop()})),
            (err) => {
                throw err
            }
        )
    }
    let getAllComment = (req, res) => {
        Comment.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(wrap(results,"comment"))),
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
            (results)=>res.status(200).send(JSON.stringify({"comment":results})),
            (err) =>res.status(500).send("we could not create this comment :(")
        );
    }

    let getCommentsByUser = (req, res)=>{
        let id = req.params.id;

        Comment.getCommentByUser(db,id).then(
            (results) =>
                res.status(200).send(JSON.stringify(wrap(results,"comment"))),
            (err) => 
                res.status(404).send("can't find comments for this user")
        )
    }

    let getCommentByLocation = (req, res)=>{
        let id = req.params.id;

        Comment.getCommentByLocation(db,id).then(
            (results) =>
                res.status(200).send(JSON.stringify(wrap(results,"comment"))),
            (err) => 
                res.status(404).send("can't find comments for this location")
        );
    }

    app.get("/comment/:id",getOneComment);

    app.get("/comment", getAllComment);

    app.get("/comment/user/:id",getCommentsByUser);

    app.get("/comment/location/:id", getCommentByLocation);

    app.post("/comment", createComment)


}