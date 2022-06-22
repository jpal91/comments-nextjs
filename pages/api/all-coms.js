import { MongoClient } from 'mongodb'

import { formatting } from '../../helpers/formatting'

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { monitorCommands: true });
const db = client.db("fe-com");
const col = db.collection("comments");

//api route to get all comments
//finds every comment and returns them
const handler = async (req, res) => {
    if (req.method !== 'GET') {
        res.status(400).send('Unknown')
    }

    try {
        await client.connect()

        const result = await col.find().toArray()

        //extra step to format data coming from db
        //in db, all comments are inserted, replies are not attached to the comment
        //replies are instead referenced by comID in the db, formatting combines them together
        //into one object which helps when rendering components
        const formattedData = formatting(result)

        res.status(200).send(formattedData)

    } catch (error) {
        res.status(422).send(error.message)
    } finally {
        await client.close()
    }
}

export default handler