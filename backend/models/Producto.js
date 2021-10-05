const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productoSchema = new Schema(
  { referencia:{
    type:String
  },
    nombre_del_producto: {
      type: String,
    },
    talla: {
      type: String,
    },
    tipo: {
      type: String,
    },
    costo: {
        type: String,
      },
      precio: {
        type: String,
      },
      color: {
        type: String,
      },
      genero: {
        type: String,
      },
      marca: {
        type: String,
      },
      distribuidor: {
        type: String,
      },
      stock: {
        type: String,
      },
  },
  {
    collection: "producto",
  }
);

module.exports = mongoose.model("Producto", productoSchema);
