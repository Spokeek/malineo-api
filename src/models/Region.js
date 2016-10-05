"use strict";

class Region{
    constructor(){ }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `region` WHERE `idRegion`= ?",[id],
            (err,res)=> Region.handleRequest(err,res,resolve,reject))
        })
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `region`",
            (err,res)=> Region.handleRequest(err,res,resolve,reject))
        })
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error) reject(error);     
        resolve(results);
    }
    static create(connection, name){
        return new Promise((resolve,reject)=>{

            let region = {"name":name}
            connection.query("INSERT INTO `region` SET ?",[region],
            (err,res)=> Region.handleRequest(err,res,resolve,reject))
        })
    }
}
module.exports = Region;