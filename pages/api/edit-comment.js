import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { monitorCommands: true });
const db = client.db("fe-com");
const col = db.collection("comments");

//simple handler to update the comment content in the api
//new content is passed through along with comment id (comID)
const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send('Unknown') 
    }

    const { newContent, comID } = req.body
    console.log(comID)
    try {
        await client.connect()

        const result = await col.updateOne(
            { comID: comID },
            { $set: { content: newContent } }
        )

        res.status(200).send(result)
    } catch (error) {
        res.status(422).send('Error editing')
    } finally {
        await client.close()
    }
}

export default handler