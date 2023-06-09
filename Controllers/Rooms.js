const { request, response } = require("express");
const { pool } = require("./../Config/db");
const { queryrooms, queryroomId } = require("./../utils/queries");

// Controlador que muestras todas las habitaciones
const rooms = (req = request, res = response) => {
    try {
        data = pool.query(queryrooms, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).json({ "habitaciones": results });
        });

    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

// Controlador que muestra una habitacion por su codigo
const roomsId = (req = request, res = response) => {
    try {
        let codigo = req.params.codigo;
        const data = pool.query(queryroomId(codigo), function (err, results, fields) {
            if (err) {
                res.status(500).json(err);
            }
            //console.log(data._rows[0][0]);
            res.status(200).json({ "habitacion": results[0] });
        });

    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

module.exports = {
    rooms,
    roomsId
}