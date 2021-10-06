const express = require("express");
const productoController = require("../controllers/Producto.controller");
const router = express.Router();

// Modelo de Producto

router.get("/productos",productoController.getAll);
router.get("/productos/:code", productoController.getByCode);
router.post("/productos",productoController.create);
router.put("/productos/:code",productoController.update);
router.delete("/productos/:code", productoController.delete);

//Crear Producto

// Editar Producto

module.exports = router;
