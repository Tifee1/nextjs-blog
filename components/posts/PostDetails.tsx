import { PostType } from '../helpers/api-utils'
import PostDetailHeader from './PostDetailHeader'
import ReactMarkDown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('php', php)

type Props = {
  post: PostType
}

const PostDetails = ({ post }: Props) => {
  const customComponent = {
    img(image: any) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          height={300}
          width={600}
          alt={image.alt}
        />
      )
    },
    code(code: any) {
      const { language, children } = code
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  const imagePath = `/images/posts/${post.slug}/${post.image}`
  return (
    <article className='markdown bg-[#dfdbe6] w-[95%] max-w-[60rem] mx-auto my-8 leading-8 rounded-md p-4 md:p-8'>
      <PostDetailHeader title={post.title} image={imagePath} />
      <ReactMarkDown components={customComponent}>{post.content}</ReactMarkDown>
    </article>
  )
}

export default PostDetails
