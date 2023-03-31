import Link from 'next/link'

import { useSession, signOut } from 'next-auth/react'

const AuthHeader = () => {
  const { data } = useSession()

  const logOut = () => {
    signOut()
  }

  return (
    <header className='bg-[#221f23] text-white/80 flex flex-col xs:flex-row items-center justify-between px-[10%] h-24 w-full'>
      <h2>Auth</h2>
      <nav>
        <ul className='flex items-baseline flex-col xs:flex-row'>
          {!data && (
            <li>
              <Link
                href='/auth/login'
                className='trans mx-4 uppercase hover:text-white/60 border rounded-sm border-white/70 p-1'
              >
                Login
              </Link>
            </li>
          )}

          {data && (
            <>
              <li>
                <Link
                  href='/auth/change-password'
                  className='trans mx-4 uppercase hover:text-white/60 border rounded-sm border-white/70 p-1'
                >
                  Profile
                </Link>
              </li>

              <li>
                <button
                  className='trans mx-4 uppercase hover:text-white/60 border rounded-sm border-white/70 p-1'
                  onClick={logOut}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default AuthHeader
