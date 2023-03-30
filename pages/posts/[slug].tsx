import {
  getPostData,
  getPostName,
  PostType,
} from '@/components/helpers/api-utils'
import PostDetails from '@/components/posts/PostDetails'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'

type Props = {
  post: PostType
}

const SinglePostPage = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>Tifee's Blog || {post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostDetails post={post} />
    </>
  )
}
export default SinglePostPage

export const getStaticProps = (context: GetStaticPropsContext) => {
  if (!context.params) return
  const slug = context.params.slug
  const post = getPostData(slug as string)

  return {
    props: {
      post,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = () => {
  const postNames = getPostName()
  const slug = postNames.map((item) => item.replace(/\.md$/, ''))
  return {
    paths: slug.map((item) => {
      return { params: { slug: item } }
    }),
    fallback: false,
  }
}
