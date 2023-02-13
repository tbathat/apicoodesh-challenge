const express = require("express");
const ArticleController = require("../src/controllers/Articlecontrollers");

const routes = express.Router();

//Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News
routes.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "Back-end Challenge 2021 🏅 - Space Flight News" });
});

//Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a req
routes.get("/articles?page=:page", ArticleController.index);

//Obter a informação somente de um artigo
routes.get("/articles/:id", ArticleController.show);

//Adicionar um novo artigo
routes.post("/articles", ArticleController.store);

// Atualizar um artigo baseado no id
routes.put("/articles/:id", ArticleController.update);

//Remover um artigo baseado no id
routes.delete("/articles/:id", ArticleController.destroy);

//exporta as rotas
module.exports = routes;
