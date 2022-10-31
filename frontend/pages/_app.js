import '../styles/globals.css'

import Head from '../layout/Head'
import Cookies from '../components/Cookies'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Cookies/>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp