var Mongoose =  require("mongoose")
var Schema = Mongoose.Schema;

var schema = new Schema({
    title : {type:String , required: true},
    details : {type:String , required: true},
    level : {type:String , required: true},
    types : {type:String , required: true},
})

module.exports= Mongoose.model('CreateFocus',schema);