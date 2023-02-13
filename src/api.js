const axios = require("axios");
const articleController = require("../src/controllers/Articlecontrollers");
const Article = require("./models/Article");

module.exports = {
  //Fetch de todos os artigos da API
  async getArticles(limit) {
    try {
      const result = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`
      );
      return result;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        return res.status(404).json(error.response.status);
      }
    }
  },

  //Salva esses artigos da API no database
  async loadArticles(req, res) {
    const numRegistro = await Article.estimatedDocumentCount();
    if (numRegistro == 0) {
      const limit = 100;
      const response = await this.getArticles(limit);

      response.data.forEach((i) => {
        articleController.store(req, res, i);
      });
    }
    console.log(numRegistro);
  },

  // caso surja artigo novo na API ele será inserido no BD, Func disparado diariamente as 9:00
  async reloadArticles(req, res) {
    const limit = 20;
    const response = await this.getArticles(limit);

    response.data.forEach((i) => {
      articleController.store(req, res, i);
    });
  },
};
