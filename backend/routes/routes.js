const express = require("express");
const router = express.Router();

// Modelo de Producto
let ProductoModel = require("../models/Producto");
let UsuarioModel = require("../models/Usuario");

router.route("/").get((req, res) => {
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
router.route("/create-producto").post((req, res, next) => {
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
router.route("/edit-producto/:id").get((req, res) => {
  ProductoModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// agregar Producto
router.route("/add-producto/:id").get((req, res) => {
  ProductoModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// retirar Producto
router.route("/att-producto/:id").get((req, res) => {
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
router.route("/update-producto/:id").put((req, res, next) => {
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
router.route("/delete-producto/:id").delete((req, res, next) => {
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


router.route("/").get((req, res) => {
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
  router.route("/crear-usuario").post((req, res, next) => {
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
  router.route("/editar-usuario/:id").get((req, res) => {
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
  router.route("/update-usuario/:id").put((req, res, next) => {
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
  router.route("/delete-usuario/:id").delete((req, res, next) => {
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
module.exports = router;
