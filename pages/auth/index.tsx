import AuthHeader from '@/components/auth/AuthHeader'

const AuthPage = () => {
  return (
    <>
      <AuthHeader />
      <section className='grid items-center justify-center py-12'>
        <h2 className='text-center'>
          welcome to my authenticated page. <br /> enjoy!!!
        </h2>
      </section>
    </>
  )
}

export default AuthPage
