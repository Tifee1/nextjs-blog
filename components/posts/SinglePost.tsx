import Image from 'next/legacy/image'
import Link from 'next/link'
import { PostType } from '../helpers/api-utils'
import day from 'dayjs'

type Props = {
  post: PostType
}

const SinglePost = ({ post }: Props) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const linkPath = `/posts/${post.slug}`

  return (
    <article className='bg-[#343036] shadow-2xl grid text-center text-white/70'>
      <Link href={linkPath}>
        <div className='w-full max-h-80 overflow-hidden'>
          <Image
            src={imagePath}
            alt={post.title}
            width={300}
            height={200}
            priority
            className='object-cover'
            layout='responsive'
          />
        </div>
        <div className='my-6 mx-4'>
          <h3 className='mb-2'>{post.title}</h3>
          <p className='italic text-white/40 text-sm'>
            {day(post.date).format('MMMM DD, YYYY')}
          </p>
          <p className='leading-6 text-sm'>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default SinglePost
