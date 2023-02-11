const api = require("./api");
const express = require("express");
const db = require("./db")

const server = express();

server.use(express.json());

server.listen(8081);

//Rota padrão inicial solicitada no desafio
server.get("/", (req, res) => {
    return res.send ({ "HTTP 200": "Back-end Challenge 2021 🏅 - Space Flight News" });
});

//A mensagem do navegador pra essa rota tem sido "Cannot GET articles/1"
server.get("/articles", async (req, res) => {
    try {
        const { data } = await api.get("articles/1");

    return res.send({ title: data.title })

    } catch (error) {
        res.send({error: error.message})
    }
})
