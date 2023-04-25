// const mysql2 = require("mysql2/promise");
const mysql2 = require("mysql2");
const {DB_HOST, DB_USER, DB_PORT, DB_DATABASE, DB_PASSWORD} = require("./config");
//LINEA AGREGADAs
//import { DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER,PORT } from "./config";

// Paramtros de conexion de la base de datos.
// Si estos estan malos el aplicativo no funciona.

const pool = mysql2.createConnection({
    host:`${DB_HOST}` ,
    user: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    port: `${DB_PORT}`,
    database: `${DB_DATABASE}`,
});

module.exports = pool;

// export const pool=createPool({
//     host:DB_HOST,
//     user:DB_USER,
//     password:DB_PASSWORD,
//     port: DB_PORT,
//     database:DB_DATABASE,
// })