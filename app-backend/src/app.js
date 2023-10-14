const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const index = require("./routes/index");

app.use(express.urlencoded({ extended: true }));

var distDir = __dirname + "/dist";
app.use(express.static(distDir));
// app.use(express.static(distDir));

console.log("distdir", distDir);
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(path.join(distDir));
});

app.use(cors());
app.use(index);

//BEM ESTAR
const bemEstarBuscar = require("./routes/bem-estar/bem-estar.routes");
app.use("/api/", bemEstarBuscar);

//Ocorrência
const ocorrencia = require("./routes/ocorrencia/ocorrencia.routes");
app.use("/api/", ocorrencia);

module.exports = app;
