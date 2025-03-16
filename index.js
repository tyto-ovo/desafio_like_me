const { obtenerRegistros, agregarRegistros } = require("./consultas");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor levantado en el puerto 3000");
});

app.get("./", async (res, req) => {
  const registros = await obtenerRegistros();
  res.json(registros);
});

app.post("./", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  await agregarRegistros(titulo, img, descripcion, likes);
  res.send("Registro agregado con exito");
});
