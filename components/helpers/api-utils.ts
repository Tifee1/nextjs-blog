import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export type PostType = Data & {
  slug: string
  content: string
}
type Data = {
  title: string
  date: string
  image: string
  excerpt: string
  isFeatured: boolean
}

const fileDirectory = path.join(process.cwd(), 'posts')

export const getPostName = () => {
  return fs.readdirSync(fileDirectory)
}

export const getPostData = (postIdentifier: string): PostType => {
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(fileDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const post: PostType = {
    slug: postSlug,
    ...(data as Data),
    content,
  }
  return post
}

export const getAllPosts = () => {
  const allFiles = getPostName()
  const allPosts = allFiles.map((file) => getPostData(file))
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export const getFeaturedPost = () => {
  const allFiles = getAllPosts()
  return allFiles.filter((file) => file.isFeatured)
}
