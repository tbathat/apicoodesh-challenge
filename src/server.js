require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const routes = require("../src/routes");
const services = require("../src/api");

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const MONGO_STRING = process.env.MONGO_URL;

const server = express();

mongoose.connect(MONGO_STRING);

server.use(express.json());
server.use(routes);

server.listen(PORT, HOST, () => {
  // salva todos artigos no BD
  services.loadArticles();

  console.log(`Servidor escutando na porta: ${process.env.SERVER_PORT}`);
});

console.log("🚀 Server is running");
