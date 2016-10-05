"use strict";

class Comment{
    constructor(){ }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `comment` WHERE `idComment`= ?",[id],
            (err,res)=> Comment.handleRequest(err,res,resolve,reject))
        });
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `comment`",
            (err,res)=> Comment.handleRequest(err,res,resolve,reject))
        });
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error) reject(error);     
        resolve(results);
    }
    static create(connection, content,date){
        return new Promise((resolve,reject)=>{
            let comment = {"content":content,"date":date}
            connection.query("INSERT INTO `comment` SET ?",[comment],
            (err,res)=> Comment.handleRequest(err,res,resolve,reject));
        })
    }
}
module.exports = City;