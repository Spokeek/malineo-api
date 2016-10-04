module.exports = (db,cb)=>{
    db.load(["./Region","./City"],()=> cb())
}