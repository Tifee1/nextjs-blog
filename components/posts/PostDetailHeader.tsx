import Image from 'next/image'

type Props = {
  title: string
  image: string
}

const PostDetailHeader = ({ title, image }: Props) => {
  return (
    <header className='pb-8 border-b-8 border-[#a07aaa] my-4 md:my-8 flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-4'>
      <h1 className='text-[#5a097a] text-center m-0 md:text-left'>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={120}
        className='object-cover w-[200px] h-[120px]'
      />
    </header>
  )
}

export default PostDetailHeader
