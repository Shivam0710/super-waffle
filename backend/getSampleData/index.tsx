import clientPromise from '../mongo/mongoClient'

export default async function getSampleData() {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const allPosts = await db.collection("comments").find({}).limit(10).toArray();
    return allPosts;
}