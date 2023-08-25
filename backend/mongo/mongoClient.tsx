import { MongoClient } from 'mongodb'

const uri:any = process.env.NEXT_PUBLIC_MONGO_URI
const options:any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
let client = new MongoClient(uri, options)
let clientPromise = client.connect()

export default clientPromise