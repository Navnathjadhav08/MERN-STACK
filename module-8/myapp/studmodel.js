const mongoose = require(`mongoose`)

const studSchema= mongoose.Schema({
    fname:String,
    lname:String,
    mobno:Number
})

module.exports=mongoose.model(`studinfo`,studSchema)