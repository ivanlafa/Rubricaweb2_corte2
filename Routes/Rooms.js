const { Router } = require("express");
const { rooms, roomsId } = require("./../Controllers/Rooms");
const { validateToken } = require("./../utils/validatetoken");

const router = new Router();

// [GET] Muestra todas las habitaciones
router.get("/", validateToken, rooms);

// [GET] Muestra una habitacion por el codigo
router.get("/:codigo", validateToken, roomsId);

module.exports = router