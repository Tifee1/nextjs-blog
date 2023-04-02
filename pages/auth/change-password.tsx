import AuthHeader from '@/components/auth/AuthHeader'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'

import { useSession } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'

const ChangePassword = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <h2 className='text-center'>loading...</h2>
  }

  // if (!session) {
  //   router.push('/auth/login')
  // }

  return (
    <>
      <AuthHeader />
      <section className='w-[90%] max-w-md border border-black mx-auto my-12 p-8'>
        <h2 className='text-center'>Change Password</h2>
        <form className='grid items-center justify-center'>
          <div className='grid my-2'>
            <label htmlFor='oldPassword' className='mr-4'>
              Your Old Password:
            </label>
            <input
              type='password'
              id='oldPassword'
              className='bg-transparent border border-black rounded-sm p-1'
            />
          </div>
          <div className='grid my-2'>
            <label htmlFor='newPassword' className='mr-4'>
              Your New Password:
            </label>
            <input
              type='password'
              id='newPassword'
              className='bg-transparent border border-black rounded-sm p-1'
            />
          </div>
          <div className='grid my-2'>
            <label htmlFor='verifyPassword' className='mr-4'>
              ReEnter Your New Password:
            </label>
            <input
              type='password'
              id='verifyPassword'
              className='bg-transparent border border-black rounded-sm p-1'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='trans bg-black text-white hover:bg-black/60 px-2 py-1 rounded-md'
            >
              Change Password
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ChangePassword

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
