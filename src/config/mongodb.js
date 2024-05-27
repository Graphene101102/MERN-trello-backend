import { MongoClient } from "mongodb";
import { env } from "./environtment";

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    try {
        await client.connect()
        console.log('connect succesfully to server!');

        //list db
        await listDatabases(client)

    } finally {
        await client.close()
    }
}

const listDatabases = async (client) => {
    const databases = await client.db().admin().listDatabases()
    console.log(databases);
}