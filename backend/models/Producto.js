const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productoSchema = new Schema(
  {
    nombre_del_producto: {
      type: String,
      maxlength: 30,
      required: true,
    },
    talla: {
      type: String,
      maxlength: 30,
      required: true,
    },
    tipo: {
      type: String,
      maxlength: 30,
      required: true,
    },
    costo: {
      type: Number,
      maxlength: 30,
      required: true,
    },
    precio: {
      type: Number,
      maxlength: 30,
      required: true,
    },
    color: {
      type: String,
      maxlength: 30,
      required: true,
    },
    genero: {
      type: String,
      maxlength: 30,
      required: true,
    },
    marca: {
      type: String,
      maxlength: 30,
      required: true,
    },
    distribuidor: {
      type: String,
      maxlength: 30,
      required: true,
    },
    stock: {
      type: Number,
    },
  },
  {
    collection: "producto",
  }
);

module.exports = mongoose.model("Producto", productoSchema);
