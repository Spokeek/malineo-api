# malineo-api 



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