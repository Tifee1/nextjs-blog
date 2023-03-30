const Footer = () => {
  return (
    <footer className='bg-[#221f23] text-white/80 text-center h-24 w-full text-2xl flex items-center justify-center'>
      &copy; {new Date().getFullYear()}{' '}
      <span className='text-white ml-2'>Tifee</span>
    </footer>
  )
}

export default Footer
