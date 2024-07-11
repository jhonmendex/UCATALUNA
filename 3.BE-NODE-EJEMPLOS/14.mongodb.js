import { MongoClient } from "mongodb";

// pull Connection
const url = "mongodb+srv://jhonmendex:123@clusterbackend.n2cx2ve.mongodb.net/";
const client = new MongoClient(url);
const dbName = "libreria";

//funcion principal
async function main() {
  await client.connect();
  console.log("Conexión exitosa...");
  const db = client.db(dbName);
  const collection = db.collection("autor");
  const autores = await collection.find({}).toArray();
  console.log(autores);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log("esto se ejecuta si o si");
    client.close();
  });
