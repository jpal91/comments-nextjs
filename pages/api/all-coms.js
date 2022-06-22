import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { monitorCommands: true });
const db = client.db("fe-com");
const col = db.collection("comments");

const handler = async (req, res) => {
    if (req.method !== 'GET') {
        res.status(400).send('Unknown')
    }

    try {
        await client.connect()

        const result = await col.find().toArray()

        res.status(200).send(result)

    } catch (error) {
        res.status(422).send(error.message)
    } finally {
        await client.close()
    }
}

export default handler