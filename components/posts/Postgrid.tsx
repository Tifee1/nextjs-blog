import { PostType } from '../helpers/api-utils'
import SinglePost from './SinglePost'

type Props = {
  posts: PostType[]
}

const Postgrid = ({ posts }: Props) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6 content-center pt-8'>
      {posts.map((post) => {
        return <SinglePost post={post} key={post.slug} />
      })}
    </section>
  )
}

export default Postgrid
