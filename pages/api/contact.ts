import { MongoClient } from 'mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, comment, name } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !comment ||
      comment.trim() === '' ||
      !name ||
      name.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Inputs' })
      return
    }
    let client
    try {
      client = await MongoClient.connect(
        'mongodb+srv://tifee2:OmnBtNhQyICfmNBU@cluster0.x5npoxe.mongodb.net/blog?retryWrites=true&w=majority'
      )
    } catch (error) {
      res.status(422).json({ message: 'Connection to database failed' })
      return
    }
    const db = client.db()
    let documents
    try {
      documents = await db
        .collection('contact')
        .insertOne({ email, name, comment })
    } catch (error) {
      res.status(422).json({ message: 'Submitting message failed' })
      client.close()
      return
    }
    res.status(200).json({ message: 'Successfully submitted' })
    client.close()
  }
}
export default handler
