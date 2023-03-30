import Image from 'next/image'
import Link from 'next/link'

const SinglePost = () => {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6 content-center pt-8'>
      <article className='bg-[#343036] shadow-2xl grid text-center text-white/70'>
        <Link href='/posts/hello-world'>
          <div className='w-full max-h-80 overflow-hidden'>
            <Image
              src='/images/posts/nextjs-file-based-routing/nextjs-file-based-routing.png'
              alt='nextjs-file-based-routing'
              width={300}
              height={200}
              className='object-cover'
              layout='responsive'
            />
          </div>
          <div className='my-6 mx-4'>
            <h3 className='mb-2'>title</h3>
            <p className='italic text-white/40 text-sm'>date</p>
            <p className='leading-6 text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              placeat obcaecati, molestias ut adipisci, at possimus inventore
              numquam laudantium laborum architecto aspernatur vitae voluptas
              nihil.
            </p>
          </div>
        </Link>
      </article>
    </section>
  )
}

export default SinglePost
