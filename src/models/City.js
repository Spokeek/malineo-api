"use strict";

class City{
    constructor(){ }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * from `city` WHERE `idCity`= ?",[id],
            (err,res)=> City.handleRequest(err,res,resolve,reject))
        });
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * from city",
            (err,res)=> City.handleRequest(err,res,resolve,reject))
        });
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error) reject(error);     
        resolve(results);
    }
    static create(connection, name,postalCode,idRegion){
        return new Promise((resolve,reject)=>{
            let city = {"name":name,"postalCode":postalCode,"region_idRegion":idRegion}
            connection.query("INSERT INTO city SET ?",[city],
            (err,res)=> City.handleRequest(err,res,resolve,reject));
        })
    }
}
module.exports = City;