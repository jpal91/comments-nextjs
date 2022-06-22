import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { monitorCommands: true });
const db = client.db("fe-com");
const col = db.collection("comments");

//api handle for updating score
const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send('Unknown')
        return
    }

    const { score, comID } = req.body

    try {
        await client.connect()

        const result = await col.updateOne(
            { comID: comID },
            { $set: { score: score } }
        )

        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        res.status(422).send(error.message)
    } finally {
        await client.close()
    }
}

export default handler