import { comparePassword, connectToDatabase } from '@/lib/db'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      // @ts-ignore
      async authorize(credentials) {
        let client
        try {
          client = await connectToDatabase()
        } catch (error) {
          throw new Error('Couldnt connect to database')
        }
        const collection = client.db().collection('users')
        const user = await collection.findOne({ email: credentials!.email })
        if (!user) {
          client.close()
          throw new Error('user not found')
        }
        const passwordValid = await comparePassword(
          credentials!.password,
          user.password
        )
        if (!passwordValid) {
          client.close()
          throw new Error('Incorrect password')
        }
        client.close()
        return { email: user.email }
      },
    }),
  ],
}

export default NextAuth(authOptions)
