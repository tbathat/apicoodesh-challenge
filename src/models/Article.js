const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
  _id: Number,
  title: {
    type: String,
    required: true,
  },
  url: String,

  imageUrl: String,

  newsSite: String,

  summary: String,

  publishedAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },

  featured: Boolean,

  launches: [
    {
      id: String,
      provider: String,
    },
  ],
  events: [
    {
      id: String,
      provider: String,
    },
  ],
});
// exporta o schema e model
module.exports = model("Article", ArticleSchema);
