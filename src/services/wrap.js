"use strict";
const _ = require("lodash");

let wrap = (json,model)=>{
    return json.map((val)=>{
        return {
            [model]:val
        }
    })
}
module.exports = wrap;