import { MongoClient } from "mongodb";
import { env } from "./environtment";

let dbInstance = null

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    //connect client to server
    await client.connect()
    dbInstance = client.db('Trello-Viet')

}

export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to DB first!')
    return dbInstance
}