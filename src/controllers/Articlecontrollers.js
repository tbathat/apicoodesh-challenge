const Article = require("../models/Article");

module.exports = {
  //Show all
  async index(req, res) {
    return res.status(200).json(articles);
  },

  async store(req, res, data) {
    try {
      if (req) {
        var data = req.body;
      }

      const articleExist = await Article.findOne({ id: data.id });
      if (articleExist) {
        return res
          .status(400)
          .json({ msg: "ID=" + articleExist.id + " Already exists" });
      } else {
        //Insere no database
        const articleInsert = Article.insertMany(data);
        if (articleInsert) {
          console.log(data.id);
          return res.status(200).json({ msg: "Sucessfully saved on database" });
        }
      }
    } catch (error) {
      if (error.response) {
        return res.status(400).json("error.response.status");
      }
    }
  },

  //Get by id
  async show(req, res) {
    const id = req.params.id;

    const article = await Article.find({ id: id });
    return res.status(200).json(article);
  },

  //Update by id
  async update(req, res) {
    const id = req.params.id;
    const data = req.body;

    const article = await Article.updateOne(
      { id: id },
      {
        title: data.title,
        url: data.url,
        imageUrl: data.imageUrl,
        newsSite: data.newsSite,
        summary: data.summary,
        updatedAt: Date.now(),
        featured: data.featured,
        launches: data.launches,
        events: data.events,
      });

      if(article.modifiedCount === 1){
          return res.status(200).json({msg:'ID ='+ id + ' Sucessfully update'});
      }
      return res.status(404).json({msg: 'ID ='+ id + ' Error, try again.'});
  },

  //Delete by id
  async destroy(req, res) {
    const id = req.params.id;

    const article = await Article.deleteOne({ id: id });

    if (article.deletedCount === 1) {
      return res.status(200).json({ msg: "ID=" + id + " Sucessfully deleted" });
    }

    return res.status(404).json({ msg: "ID=" + id + " Error, try agaiin!" });
  },
};
