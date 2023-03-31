import { connectToDatabase, hashPassword, insertData } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Invalid api method' })
    return
  }
  const { email, password }: { email: string; password: string } = req.body
  if (!email || !email.includes('@') || password.length < 6) {
    res
      .status(422)
      .json({ message: 'Invalid Email or Password length is less than 6' })
    return
  }
  let client
  try {
    client = await connectToDatabase()
  } catch (error) {
    res.status(422).json({ message: 'Couldnt connect to database' })
    return
  }
  const db = client.db()

  const emailExist = await db.collection('users').findOne({ email })
  if (emailExist) {
    res.status(422).json({ message: 'Email already exist' })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(password)

  let documents
  try {
    documents = await insertData(db, { email, password: hashedPassword })
  } catch (error) {
    client.close()
    res.status(422).json({ message: 'Couldnt register user' })
    return
  }
  client.close()
  res.status(200).json({ message: 'User created' })
}
export default handler
