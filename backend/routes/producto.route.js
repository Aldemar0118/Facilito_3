const express = require("express");
const productoRoute = express.Router();

// Modelo de Producto
let ProductoModel = require("../models/Producto");

productoRoute.route("/").get((req, res) => {
  ProductoModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});
//Crear Producto
productoRoute.route("/create-producto").post((req, res, next) => {
  ProductoModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// Editar Producto
productoRoute.route("/edit-producto/:id").get((req, res) => {
  ProductoModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Producto
productoRoute.route("/update-producto/:id").put((req, res, next) => {
  ProductoModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Producto Creado Correctamente");
      }
    }
  );
});

// Borrar Producto
productoRoute.route("/delete-producto/:id").delete((req, res, next) => {
  ProductoModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = productoRoute;
