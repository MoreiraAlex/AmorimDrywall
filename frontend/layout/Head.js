import NextHead from 'next/head'
import { useEffect } from 'react'
// import TagManager from 'react-gtm-module'

export default function Head() {

//   useEffect(() => {
//     const tagManagerArgs = {
//       gtmId: 'G-VEN9Z7QGTN'
//     }
//     TagManager.initialize(tagManagerArgs)
//   },[])

  return (
    <NextHead>
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="author" content="Alex Moreira" />
      <meta name="reply-to" content="alexmoreira.dev@gmail.com" />

      {/* <meta name='description' content='Agência de Marketing Digital / Gerenciamento em Redes Sociais / Campanhas Google ADS / Criação de Sites / Planejamento de Marketing Digital'/>

      <meta name="keywords" content="o que é leads no marketing digital, Marketing digital, Agência de marketing, Agência, Fundador, gestor de trafego, Home office, vivendo de home office, amagency, redes sociais, landing page, criação de sites, empresa de criação de sites, design, web design"/> */}

      <link rel="canonical" href="https://amorimdrywall.alexmoreira.dev.br/" />
      <link rel="icon" href="/favicon.ico" />

      <title>Amorim Drywall</title>
    </NextHead>
  )
}