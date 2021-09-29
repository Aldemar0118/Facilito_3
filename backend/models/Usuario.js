const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let usuarioSchema = new Schema ({
    rol:{type:String,maxlength:30, required:true},
    nombre:{type:String,maxlength:30,unique:true,required:true},
    tipo_documento:{type:String,maxlength:20},
    num_documento:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:20},
    email:{type:String,maxlength:50,required:true},
    password:{type:String,maxlength:60,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
    
},
{
  collection: "usuario",
}
);

module.exports = mongoose.model("Usuario", usuarioSchema);