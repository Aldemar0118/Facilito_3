const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let categoriaSchema = new Schema ({
    nombre:{type:String,maxlength:50,unique:true,required:true},
    descripcion:{type:String,maxlength:255},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
    
},
{
  collection: "categoria",
}
);

module.exports = mongoose.model("Categiria", categoriaSchema);