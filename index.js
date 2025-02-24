const { express } = require("express");
const { Pool } = require("pg");
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());

app.listen(3000, console.log("SERVIDOR ENCENDIDO"));

app.post("/usuarios", async (req, res) => {
  const { nombre, apellido, edad, pais } = req.body;
  await agregarUsuario(nombre, apellido, edad, pais);
  res.send("Usuario agregado con éxito");
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await obtenerUsuarios();
  res.json(usuarios);
});

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  allowExitOnIdle: true,
});

const obtenerUsuarios = async () => {
  const { rows } = await pool.query("SELECT * FROM usuarios");
  console.log(rows);
  return rows;
};

const agregarUsuario = async (nombre, apellido, edad, pais) => {
  const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)";
  const values = [nombre, apellido, edad, pais];
  const result = await pool.query(consulta, values);
  console.log("Usuario agregado");
};

const obtenerMayoresEdad = async;

/* agregarUsuario("Sara", "Jolly", 27, "Chile"); */
/* obtenerUsuarios();
 */
