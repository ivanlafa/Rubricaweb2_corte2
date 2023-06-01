const { request, response } = require("express");
const { pool } = require("./../Config/db");
const { booking, createbooking, updatebooking, deletebooking } = require("./../utils/queries");

// Muestra todas las reservas que no esten eliminadas
const reservas = (req = request, res = response) => {
    try {
        data = pool.query(booking, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).json({ "reservas": results });
        });

    } catch (error) {
        res.status(500).json(error);
    }
}

// Guarda la reservas
const reserva = (req = request, res = response) => {
    try {
        const data = req.body;
        pool.execute(createbooking, [data.codigo_habitacion, data.nombre_cliente, data.telefono_cliente, data.fecha_reserva, data.fecha_entrada, data.fecha_salida], (err, result) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).json({ "msg": `Se realizo la reserva con el codigo #${result.insertId}` });
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// Actualiza la reserva
const actualizarReserva = (req = request, res = response,) => {
    try {
        let codigo = req.params.codigo;
        const dataUpdate = req.body;
        const sql = updatebooking;
        const values = [dataUpdate.codigo_habitacion, dataUpdate.nombre_cliente, dataUpdate.telefono_cliente, dataUpdate.fecha_reserva, dataUpdate.fecha_entrada, dataUpdate.fecha_salida, codigo];
        pool.execute(sql, values, (err, result) => {
            if (err) {
                res.status(500).json(err)
            }
            console.log(result);
            res.status(200).json({ "msg": `${result.affectedRows} registro(s) actualizados` })
        });
    } catch (error) {
        res.status(500).json(error)
    }
}

// Elimina la reserva
const eliminarReserva = (req = request, res = response) => {
    try {
        let codigo = req.params.codigo
        // Este realiza un soft delete, cambia el paramtro del eleminada en la tabla mas no borra el registo.
        pool.query(deletebooking, (err, result) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).json({
                "msg": `${result.affectedRows} registro(s) eliminado`
            });
        })

        // Este elimina el registro por completo de la base de datos
        // pool.query(`DELETE * FROM reservas WHERE codigo = ${codigo}`, (err, result) => {
        //     if (err) {
        //         res.status(500).json(err)
        //     }
        //     res.status(200).json({
        //         "msg": `${result.affectedRows} registo(s) eliminado`
        //     });
        // });
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    reservas,
    reserva,
    actualizarReserva,
    eliminarReserva
}
