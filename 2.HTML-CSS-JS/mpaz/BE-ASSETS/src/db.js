import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

class DataAccess {
  constructor() {
    if (!DataAccess.instance) {
      this.urlDB = process.env.DATABASE_URL;
      this.dbName = process.env.DATABASE_NAME;
      this.client = new MongoClient(this.urlDB);
      this.db = this.client.db(this.dbName);
      DataAccess.instance = this;
    }
    return DataAccess.instance;
  }

  async connect() {
    try {
      this.connection = await this.client.connect();
      console.log("conexion exitosa");
    } catch (error) {
      console.log("!!!error de conexion: ", error);
    }
  }

  async findAll(collectionName) {
    const collection = this.db.collection(collectionName);
    const data = await collection.find({}).toArray();
    return data;
  }

  async findById(collectionName, id) {
    const collection = this.db.collection(collectionName);
    const data = await collection.findOne({ _id: new ObjectId(id) });
    return data;
  }

  async save(collectionName, document) {
    const collection = this.db.collection(collectionName);
    const data = await collection.insertOne(document);
    return data;
  }

  async updateById(collectionName, document, id) {
    const collection = this.db.collection(collectionName);
    const data = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: document }
    );
    return data;
  }
  async deleteById(collectionName, id) {
    const collection = this.db.collection(collectionName);
    const data = await collection.deleteOne({ _id: new ObjectId(id) });
    return data;
  }
}

export default DataAccess;
