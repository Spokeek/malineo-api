"use strict";

class Location{
    constructor(){ }

    static getOne(id,connection){
        
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location` WHERE `idLocation`= ?",[id],
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }
    static getAll(connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location`",
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }

        static getByName(name,connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location` WHERE `name` = ?" ,[name],
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }
    
        static getByIdApproval(IdApproval,connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location` AS l JOIN `user_ask_location` AS ual ON `ual.location_idLocation`=`l.idLocation` WHERE `ual.approval_idApproval` = ?" ,[IdApproval],
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }

        static getByIdCity(IdCity,connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location` WHERE `city_idCity` = ?" ,[IdCity],
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }

        static getByIdRegion(IdRegion,connection){

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM `location` AS l JOIN `city` AS c ON l.city_idCity = c.idCity WHERE `c.region_idRegion` = ?" ,[IdRegion],
            (err,res)=> Location.handleRequest(err,res,resolve,reject))
        });
    }
    
    static handleRequest(error,results,resolve,reject){

        if (error) reject(error);     
        resolve(results);
    }
    static create(connection, name,coordonateX, coordonateY, image, contact,idCity){
        return new Promise((resolve,reject)=>{
            let location = {"name":name,"cordonnateX":coordonateX,"coordonateY":cordonnateY, "image":image, "contact":contact, "city_idCity":idCity}
            connection.query("INSERT INTO location SET ?",[location],
            (err,res)=> Location.handleRequest(err,res,resolve,reject));
        })
    }
}
module.exports = City;