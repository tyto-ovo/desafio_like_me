const pool = require("./conexion");

const obtenerRegistros = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const agregarRegistro = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log("Registro agregado");
};

module.exports = { obtenerRegistros, agregarRegistro };
