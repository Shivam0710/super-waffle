import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://shivamsagar022:9988419043@socialdoze.9pnelwl.mongodb.net/blog?retryWrites=true&w=majority"
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
let client = new MongoClient(uri, options)
let clientPromise = client.connect()

export default clientPromise