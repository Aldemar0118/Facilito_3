const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productoSchema = new Schema(
  {
    
    
      createdAt:{type:Date,default:Date.now},
      },
  {
    collection: "producto",
  }
);

module.exports = mongoose.model("Producto", productoSchema);
