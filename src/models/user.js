"use strict";
const config = require("../config/env");
const bcrypt = require("bcrypt");

class User{
    constructor(){ }

    static generatePwd(textPwd){     
        return new Promise((resolve,reject)=>{
            // documentation : https://github.com/kelektiv/node.bcrypt.js
            bcrypt.hash(textPwd, config.saltRounds, (err, hash)=> {
                if (err) reject(err);
                resolve(hash);
            });
        });
    }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `user` WHERE `idUser`= ?",[id],
            (err,res)=> User.handleRequest(err,res,resolve,reject))
        })
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `user`",
            (err,res)=> User.handleRequest(err,res,resolve,reject))
        })
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error)
            reject(error);     
        else
            resolve(results);
    }
    static testPwd(user,pwd){
        let hash = user.password
        return new Promise((resolve,reject)=>{
            bcrypt.compare(pwd,hash,(err,res)=>{                       
                if (err || (res===false))
                     reject(err);
                else{
                    resolve(user);
                }
            })
        });
    }
    static login(connection, user){
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM user WHERE mail=?",[user.mail],
            (err,res)=> User.testPwd(res.pop(), user.password).then(
                (result)=>User.handleRequest(null,result,resolve,reject)),
                (err)=>reject(err)
            );
        });
    }
  static create(connection, user){
     
        return new Promise((resolve,reject)=>{
            connection.query("INSERT INTO `user` SET ?",[user],
            (err,res)=> User.handleRequest(err,res,resolve,reject))
        })
    }
}
module.exports = User;
