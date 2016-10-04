module.exports = (db,cb)=>{

    db.define("city",{
        /**
         * idRegion 
         */
        idCity : { type: 'serial', key: true },
        name: String,
        postalCode: String,

    });
    return cb();
}