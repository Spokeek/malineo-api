/**
 * module.exports permet d'accéder aux variables qu'il y a dans ce fichier,
 * un peu comme les namespace en c#
 * 
 * ce module prend deux parametres, obligatoires par ORM (l'orm qu'on utilise)
 * 
 * documentation : https://github.com/dresende/node-orm2
 */
module.exports = (db,cb)=>{

/**
 * le db.define sert a créer la classe qui nous servira de model
 */
    db.define("region",{
        /**
         * idRegion 
         */
        idRegion : { type: 'serial', key: true },
        name: String
    });
    return cb();
}