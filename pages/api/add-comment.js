import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { monitorCommands: true });
const db = client.db("fe-com");
const col = db.collection("comments");

//handler for adding new comment to db
const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send('Unknown')
    }

    const { user, comID, content } = req.body

    try {
        await client.connect()

        //finds the highest comment number currnetly in db so we know what the new
        //comment number will be
        //TODO - Something a little more elegant for this
        const index = await col.find().sort({ comID: -1 }).toArray()

        //creates object that will be inserted into db (new comment)
        //user is hard coded in now as there's no authentication set up for this app
        let obj = {
            comID: index[0].comID + 1,
            content: content,
            createdAt: new Date().toISOString(),
            score: 1,
            replyingTo: user.username || null,
            user: {
                image: { webp: '/images/image-juliusomo.webp'},
                username: 'juliusomo'
            },
            replies: []
        }

        //skips next step if it's not a reply as another comment won't need to be updated
        if (!user) {
            await col.insertOne(obj)
            res.status(200).send('Done')
            return
        }

        //inserts new comment into db and also updates the comment it is replying to
        //adding the new comment id (comID) into the array of replies 
        const result = await col.bulkWrite([
            { updateOne: { filter: { comID: comID }, update: { $push: { replies: obj.comID } } } },
            { insertOne: { "document": obj } }
        ])

        res.status(200).send(result)
    } catch (error) {
        res.status(422).send(error.message)
    } finally {
        await client.close()
    }
}

export default handler