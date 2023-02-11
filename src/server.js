require('dotenv').config();
const express = require("express");
const client = require("./db");

const server = express();
console.log("🚀 Server is running");

server.use(express.json());
server.listen(8081);

//Rota padrão inicial solicitada no desafio
server.get("/", async (req, res) => {

const db = client.db("spaceflightnews");
const collection = db.collection('articles');

const insertResult = await collection.insertMany([{
    "id": 0,
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

// the following code examples can be pasted here...
    return res.send ("Back-end Challenge 2021 🏅 - Space Flight News");

});



