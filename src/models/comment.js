"use strict";
const uuid = require("uuid");

class Comment {

    constructor() {}

    static getOne(id, connection) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM `comment` WHERE `idComment`= ?", [id],
                (err, res) => Comment.handleRequest(err, res, resolve, reject))
        });
    }
    static getAll(connection) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM `comment`",
                (err, res) => Comment.handleRequest(err, res, resolve, reject))
        });
    }

    static getCommentByUser(connection,id){
        return new Promise((resolve, reject) => {
                connection.query(`SELECT c.idComment,c.content,c.date FROM user_comment_location ucl
                                    JOIN comment c ON c.idComment = ucl.comment_idComment
                                    WHERE ucl.user_idUser=?`,[id],
                    (err, res) => Comment.handleRequest(err, res, resolve, reject))
            });
    }
    static getCommentByLocation(connection,id){

        return new Promise((resolve, reject) => {
            connection.query(`SELECT c.idComment,c.content,c.date FROM user_comment_location ucl
                                JOIN comment c ON c.idComment = ucl.comment_idComment
                                WHERE ucl.location_idLocation=?`,[id],
                (err, res) => Comment.handleRequest(err, res, resolve, reject))
        });
    }

    static handleRequest(error, results, resolve, reject) {      
        if (error)
            reject(error);
        else
            resolve(results);
    }
    static create(connection, content, date, idUser, idLocation) {
            return new Promise((resolve, reject) => {
                let idComment = uuid.v4()
                let comment = {"idComment":idComment,"content": content,"date": date};
                connection.query("INSERT INTO `comment` SET ?", [comment],
                    (err, res) => {                      

                        Comment.createUser_Comment_Location(connection,idUser,idLocation,idComment)
                        .then(
                            (res)=> Comment.handleRequest(null, res, resolve, reject),
                            (err)=>reject(err)
                        )
                    });
            })
        }
        //UCL= User_comment_Location
    static createUser_Comment_Location(connection, idUser, idLocation, idComment) {
        return new Promise((resolve, reject) => {
            let UCL = {"user_idUser": idUser,"location_idLocation": idLocation,"comment_idComment": idComment}
            connection.query("INSERT INTO `user_comment_location` SET ?", [UCL],
                (err, res) => Comment.handleRequest(err, res, resolve, reject));
        });
    }
}
module.exports = Comment;