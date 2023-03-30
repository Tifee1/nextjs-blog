import { getFeaturedPost, PostType } from '@/components/helpers/api-utils'
import FeaturedPosts from '@/components/homepage/FeaturedPosts'
import Hero from '@/components/homepage/Hero'

type Props = {
  featuredPosts: PostType[]
}

const HomePage = ({ featuredPosts }: Props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

export default HomePage

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPost()

  return {
    props: {
      featuredPosts,
    },
  }
}
