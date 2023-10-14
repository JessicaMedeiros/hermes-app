const app = require("./src/app");
const http = require("http");

const db = require('./config/db'); 
//our all the query connections are there in query.js
const path = require('path');

const server = http.createServer(app);

app.get("/", function (req, res, next) {

  res.render("index", { title: "Express" });
});


const dotenv = require("dotenv");
dotenv.config();


var port = process.env.PORT ||   3333 

server.listen(port, () => {
    console.log("Aplicação executando na porta ", port);
  });
