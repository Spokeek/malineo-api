"use strict";

const User = require("../models/user");
const uuid = require("uuid");

module.exports = (app, db) => {
    const wrap = require("../services/wrap");
    let getOneUser = (req, res) => {

        let id = req.params.id;
        User.getOne(id, db).then(

            (results) =>
            res.status(200).send(JSON.stringify({"user":results.pop()})),
            (err) => {
                throw err
            }
        );
    }

    let getAllUsers = (req, res) => {
        User.getAll(db).then(
            (results) => res.status(200).send(JSON.stringify(wrap(results,"user"))),
            (err) => {
                throw err
            }
        );
    }

    let createUser = (req, res) => {

        User.generatePwd(req.body.password).then(            
            (hash) => {
                let user = {
                    "idUser" : uuid.v4(),
                    "username": req.body.username,
                    "password": hash,
                    "mail": req.body.mail,
                    "phoneNumber": req.body.phoneNumber,
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "birth" : new Date(req.body.bith)
                   // "birth": JSON.parse(req.body.birth)
                }              
                User.create(db, user).then(
            res.status(200).send(JSON.stringify({"user":results})),

                    (err) => {throw err}
                )
            },
            (err) => {
                throw err
            }
        )

    }

    let loginUser = (req,res)=>{
        let user = {         
            "password": req.body.password,
            "mail": req.body.mail,
        }              
        User.login(db,user).then(
            res.status(200).send(JSON.stringify({"user":results})),
            (err) =>  res.status(401).send("invalid credentials")
        )   
    }

    app.get("/user/:id", getOneUser);
    app.get("/user", getAllUsers);

    app.post("/user/login",loginUser)
    app.post("/user/create", createUser)
}