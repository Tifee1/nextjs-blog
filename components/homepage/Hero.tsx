import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-[#343036]'>
      <article className='flex flex-col items-center justify-center text-white/70 w-[70%] max-w-xl mx-auto text-center py-6'>
        <div className='w-[300px] h-[300px] rounded-full mb-8 overflow-hidden m-auto shadow-2xl'>
          <Image
            src='/images/pic.jpg'
            alt='My Picture'
            className='w-full h-full object-cover'
            width={300}
            height={300}
          />
        </div>
        <h2 className='my-6'>hi, i'm Tife</h2>
        <p className='text-lg'>
          I blog about web development - especially front-end frameworks like
          React and Angular
        </p>
      </article>
    </section>
  )
}

export default Hero
