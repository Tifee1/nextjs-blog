import { PostType } from '../helpers/api-utils'
import Postgrid from './Postgrid'
import SinglePost from './SinglePost'

type Props = {
  posts: PostType[]
}

const Allposts = ({ posts }: Props) => {
  return (
    <section className='py-8 w-[90%] max-w-[60rem] mx-auto'>
      <h2 className='text-center pb-4'>All Posts</h2>
      <Postgrid posts={posts} />
    </section>
  )
}

export default Allposts
