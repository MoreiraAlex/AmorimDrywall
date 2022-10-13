import '../styles/globals.css'

import Head from '../layout/Head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp