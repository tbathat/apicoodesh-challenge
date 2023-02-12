require('dotenv').config();
const express = require("express");
const client = require("./db");

const server = express();
console.log("🚀 Server is running");

server.use(express.json());
server.listen(8081);

//Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News
server.get("/", async (req, res) => {

const db = client.db("spaceflightnews");
const collection = db.collection('articles');

const insertResult = await collection.insertMany([{
    "id": "string",
    "featured": false,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
      {
        "id": "string",
        "provider": "string"
      }
    ],
    "events": [
      {
        "id": "string",
        "provider": "string"
      }
    ]

}]);
console.log('Inserted documents =>', insertResult);

/*Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar 
a REQUEST -> [GET]/articles/: */
server.get("/articles/:", (req, res) => {})

//Obter a informação somente de um artigo -> [GET]/articles/{id}
server.get("/articles/{id}", (req, res) => {});

//Adicionar um novo artigo -> [PUT]/articles/:
server.put("/articles/:", (req, res) => {});

//Atualizar um artigo baseado no id -> [POST]/articles/{id}:
server.post("/articles/{id}:", (req, res) => {});

//Remover um artigo baseado no id -> [DELETE]/articles/{id}:
server.delete("/articles/{id}:", (req, res) => {});


// the following code examples can be pasted here...
    return res.send ("Back-end Challenge 2021 🏅 - Space Flight News");

});



