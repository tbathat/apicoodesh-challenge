const api = require("./api");
const express = require("express");

const  connectToDataBase = require("./db");

const server = express();

server.use(express.json());
server.listen(8081);

//Rota padrão inicial solicitada no desafio
server.get("/", (req, res) => {
    return res.send ({ "HTTP 200": "Back-end Challenge 2021 🏅 - Space Flight News" });
});

