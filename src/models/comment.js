"use strict";

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

    static handleRequest(error, results, resolve, reject) {

        if (error) reject(error);
        resolve(results);
    }
    static create(connection, content, date, idUser, idLocation) {
            return new Promise((resolve, reject) => {
                let comment = {"content": content,"date": date}
                connection.query("INSERT INTO `comment` SET ?", [comment],
                    (err, res) => {
                        let id = res.insertId;
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