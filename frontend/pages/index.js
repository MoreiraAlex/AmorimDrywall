import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'

import { useEffect, useState } from 'react'

export default function Index() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (
    <>
      <Header offset={offset}/>
      <Main />
      <Footer/>
    </>
  )
}