import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='bg-[#221f23] text-white/80 flex flex-col xs:flex-row items-center justify-between px-[10%] h-24 w-full'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul className='flex items-baseline flex-col xs:flex-row'>
          <li className='trans mx-4 uppercase hover:text-white/60'>
            <Link href='/posts'>posts</Link>
          </li>
          <li className='trans mx-4 uppercase hover:text-white/60'>
            <Link href='/contact'>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
