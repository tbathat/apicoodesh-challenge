const dbArticles = require("mongodb");

function connectToDataBase() {
dbArticles.connect(
    "mongodb+srv://tabpradier:vip123@cluster0.vigcwtz.mongodb.net/?retryWrites=true&w=majority", 
    { 
        useNewUrlParser: true,
        useUnifiedTipology: true
});

const db = dbArticles.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DataBase!"))
}

module.exports = connectToDataBase;
