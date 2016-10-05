"use strict";

class HandicapType{
    constructor(){ }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * from `handicapType` WHERE `idHandicapType`= ?",[id],
            (err,res)=> HandicapType.handleRequest(err,res,resolve,reject))
        });
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * from handicapType",
            (err,res)=> HandicapType.handleRequest(err,res,resolve,reject))
        });
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error) reject(error);     
        resolve(results);
    }

}
module.exports = HandicapType;