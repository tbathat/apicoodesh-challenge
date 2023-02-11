const mongoArticles = require("mongodb").MongoArticles;

mongoArticles.connect("mongodb+srv://tabpradier:vip123@cluster0.vigcwtz.mongodb.net/?retryWrites=true&w=majority", { 
    useUnifiedTipology: true,
    useNewUrlParser: true
}, 
    (error, connection) => { 
        if(error) return console.log(error); //callback
        global.connection = connection.db("articles"); 
    });

    module.exports = {
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
}
