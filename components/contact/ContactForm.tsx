import { useRef } from 'react'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nameRef.current || !emailRef.current || !commentRef.current) return
    const name = nameRef.current.value
    const email = emailRef.current.value
    const comment = commentRef.current.value
    if (!name || !email || !comment) {
      toast.error('Please fill all values')
      return
    }

    toast.promise(
      async () => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({ name, email, comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = response.json()
        emailRef.current!.value = ''
        nameRef.current!.value = ''
        commentRef.current!.value = ''
      },
      {
        pending: 'Loading...',
        success: 'Submitted Successfully',
        error: 'Error occured',
      }
    )
  }

  return (
    <section className='bg-[#dfdbe6] w-[90%] max-w-3xl mx-auto my-8 rounded-md shadow-2xl py-8 px-6'>
      <h2 className='text-center'>how can i help you?</h2>
      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='md:grid md:grid-cols-2 md:gap-4'>
          <div className='grid gap-2 my-3'>
            <label htmlFor='email'>
              <h3>your email</h3>
            </label>
            <input
              type='email'
              id='email'
              className='bg-[#f4effa] border border-[#918d96] w-full rounded-sm px-2 py-1'
              ref={emailRef}
            />
          </div>
          <div className='grid gap-2 my-3'>
            <label htmlFor='name'>
              <h3>your name</h3>
            </label>
            <input
              type='text'
              id='name'
              className='bg-[#f4effa] border border-[#918d96] w-full rounded-sm px-2 py-1'
              ref={nameRef}
            />
          </div>
        </div>
        <div className='grid gap-2 my-3'>
          <label htmlFor='message'>
            <h3>your message</h3>
          </label>
          <textarea
            id='message'
            rows={5}
            className='bg-[#f4effa] border border-[#918d96] w-full rounded-sm px-2 py-1 resize-none'
            ref={commentRef}
          ></textarea>
        </div>
        <div className='text-right mt-4'>
          <button
            type='submit'
            className='trans shadow-2xl bg-[#480264] text-white/70 px-2 py-1 capitalize rounded-sm hover:bg-[#480264]/70 '
          >
            send message
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
