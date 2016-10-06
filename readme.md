# malineo-api 

before running the project, pls create the database,
the create a file in src/config/env.js
with the folowing content : 
```json

module.exports = {
    "host" :"127.0.0.1",
    "user" :"",
    "password" :"",
    "port" : "3306",
    "database" : "malineo",
    "saltRounds" : 10
};

```



ROUTES

--------

USER :

- login : POST /user/login

 payload : 
```json
{
    "password": "myPwd",
    "mail":"myMail@test.com",
}              
```

- register : POST /user/create

 payload : 
```json
{
    "username": "",
    "password": "",
    "mail":"",
    "phoneNumber": "",
    "firstName": "",
    "lastName": "",
    "birth" :""
}              
```

- get one user  : /user/:id
- get all users : /user
--------

LOCATION : 

create : POST /loacation

```json

{
    "name" :"",
    "coordonateX" : "",
    "coordonateY" : "",
    "image" : "",
    "contact" : "",
    "idCity" : ""
}

```
-------

CITY : 
 get by name : GET /city/name/:name

 get by id   : GET /city/:id

 get all     : GET /city

create       : POST /city

payload : 
```json

 {
    "name":"",
    "postalCode":"",
    "idRegion":""
 }

```