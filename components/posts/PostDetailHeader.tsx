import Image from 'next/image'

const PostDetailHeader = () => {
  return (
    <header className='pb-8 border-b-8 border-[#a07aaa] my-4 md:my-8 flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-4'>
      <h1 className='text-[#5a097a] text-center m-0 md:text-left'>title</h1>
      <Image
        src='/images/posts/nextjs-file-based-routing/nextjs-file-based-routing.png'
        alt='next-js'
        width={200}
        height={120}
        className='object-cover w-[200px] h-[120px]'
      />
    </header>
  )
}

export default PostDetailHeader
