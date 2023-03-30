const ContactForm = () => {
  return (
    <section className='bg-[#dfdbe6] w-[90%] max-w-3xl mx-auto my-8 rounded-md shadow-2xl py-8 px-6'>
      <h2 className='text-center'>how can i help you?</h2>
      <form className='mt-6'>
        <div className='md:grid md:grid-cols-2 md:gap-4'>
          <div className='grid gap-2 my-3'>
            <label htmlFor='email'>
              <h3>your email</h3>
            </label>
            <input
              type='email'
              id='email'
              className='bg-[#f4effa] border border-[#918d96] w-full rounded-sm px-2 py-1'
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
