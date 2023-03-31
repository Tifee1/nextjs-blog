import { MongoClient } from 'mongodb'
import { hash, compare } from 'bcryptjs'

export const connectToDatabase = async () => {
  return await MongoClient.connect(
    'mongodb+srv://blog1:9UwRoLe6eQwru2ax@cluster0.x5npoxe.mongodb.net/blog?retryWrites=true&w=majority'
  )
}

export const insertData = async (db: any, insertedData: {}) => {
  return await db.collection('users').insertOne(insertedData)
}

export const hashPassword = async (password: string) => {
  return await hash(password, 12)
}

export const comparePassword = async (
  enteredPassword: string,
  dbPassword: string
) => {
  return await compare(enteredPassword, dbPassword)
}
