import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'


import { useEffect, useState } from 'react'

export default function Index() {

  const [reduce, setReduce] = useState(false);
  
  useEffect(() => {
    const navReduce = () => {
      if(window.scrollY >= 50){
        setReduce(true)
      } else {
        setReduce(false)
      }
    }
    window.addEventListener('scroll', navReduce)

  }, []);

  return (
    <>
      <Header reduce={reduce}/>
      <Main />
      <Footer/>
    </>
  )
}