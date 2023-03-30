import { getAllPosts, PostType } from '@/components/helpers/api-utils'
import Allposts from '@/components/posts/Allposts'
import Head from 'next/head'

type Props = {
  allPosts: PostType[]
}

const AllPostPage = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Tifee's Blog || All Posts</title>
        <meta name='description' content='View all our blog posts' />
      </Head>
      <Allposts posts={allPosts} />
    </>
  )
}
export default AllPostPage

export const getStaticProps = () => {
  const allPosts = getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}
