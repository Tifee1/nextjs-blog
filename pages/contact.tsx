import ContactForm from '@/components/contact/ContactForm'
import Head from 'next/head'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Tifee's Blog || CONTACT US</title>
        <meta name='description' content='contact us' />
      </Head>
      <ContactForm />
    </>
  )
}
export default ContactPage
