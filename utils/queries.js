// Query de consulta para el login
const auth = (correo, password) => { return `SELECT uid, idusuario, nombre, apellido, email, identificacion, telefono, direccion, eliminado, created_at, updated_at FROM usuarios WHERE email = "${correo}" AND contraseña = "${password}" AND eliminado = 0` }

// Query de las Rooms
const queryrooms = `SELECT * FROM habitaciones WHERE eliminado = 0`;
const queryroomId = (codigo) => { return `SELECT * FROM habitaciones Where codigo = ${codigo} AND eliminado = 0` };

// Query de las Bookings
const booking = `SELECT * FROM reservas WHERE eliminada = 0`;
const createbooking = `INSERT INTO reservas (codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reserva, fecha_entrada, fecha_salida) VALUES (?, ?, ?, ?, ?, ?)`;
const updatebooking = `UPDATE reservas SET codigo_habitacion = ?, nombre_cliente = ?, telefono_cliente = ?, fecha_reserva = ?, fecha_entrada = ?, fecha_salida = ? WHERE codigo = ?`;
const deletebooking = (codigo) => { return `UPDATE reservas SET eliminada = 1 WHERE codigo = ${codigo}` }

module.exports = {
    auth,
    queryrooms,
    queryroomId,
    booking,
    createbooking,
    updatebooking,
    deletebooking
}