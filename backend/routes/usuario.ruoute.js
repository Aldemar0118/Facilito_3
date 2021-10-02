const express = require("express");
const usuarioRoute = express.Router();

// Modelo de Producto
let UsuarioModel = require("../models/Usuario");

usuarioRoute.route("/").get((req, res) => {
  UsuarioModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});
//Crear Producto
usuarioRoute.route("/crear-usuario").post((req, res, next) => {
  UsuarioModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// Editar Producto
usuarioRoute.route("/editar-usuario/:id").get((req, res) => {
  UsuarioModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });

});
// Update Producto
usuarioRoute.route("/update-usuario/:id").put((req, res, next) => {
  UsuarioModel.findByIdAndUpdate(
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
usuarioRoute.route("/delete-usuario/:id").delete((req, res, next) => {
  UsuarioModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = usuarioRoute;
