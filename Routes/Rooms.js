const { Router } = require("express");

const { rooms, roomsId } = require("./../Controllers/Rooms");

const router = new Router();

// [GET] Muestra todas las habitaciones
router.get("/", rooms);

// [GET] Muestra una habitacion por el codigo
router.get("/:codigo", roomsId);

module.exports = router