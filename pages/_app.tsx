import Layout from '@/components/layout/Layout'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <Head>
          <title>Tifee's Blog || HOMEPAGE</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer position='top-center' />
      </SessionProvider>
    </>
  )
}
