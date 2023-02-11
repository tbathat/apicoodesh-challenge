const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

/*async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close()); */

module.exports = client;
