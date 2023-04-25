
const { Router } = require("express");


const { reservas, reserva, actualizarReserva, eliminarReserva } = require("./../Controllers/Booking.js");

const router = Router();

//[GET] Muestra todas las reservas
router.get("/", reservas);

// [POST] Crear un reserva
router.post("/", reserva);

// [PATCH] actualiza una reserva
router.patch("/:codigo", actualizarReserva);

// [DELETE] eliminar la reserva
router.delete("/:codigo", eliminarReserva);

module.exports = router;

