import { getFeaturedPost, PostType } from '../helpers/api-utils'
import Postgrid from '../posts/Postgrid'
import SinglePost from '../posts/SinglePost'

type Props = {
  posts: PostType[]
}

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className='bg-[#87848b] py-8 w-[90%] max-w-7xl mx-auto'>
      <h2 className='text-center pb-4'>Featured Posts</h2>
      <Postgrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
