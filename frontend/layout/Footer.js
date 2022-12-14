import styles from '../styles/layout/Footer.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/Logo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
          <Image src={Logo} width='230px' height='240px' alt='Logo da Pagina'/>
        <div>
            <a href="https://www.instagram.com/amorim_drywall/?hl=pt-br" target="_blank">@amorim_drywall</a>
            <p>(13) 98839-3565</p>
            <a href=" https://wa.me/5513988393565" target="_blank">
                <span>Entre em Contato</span>
                <i className="bi bi-whatsapp"></i>
            </a>
        </div>
      </div>
      <div>
          <p>AmorimDrywall &copy; 2022 Todos os direitos reservados</p>
          <Link href='/policy'>
            <a>Privacidade e termos</a>
          </Link>
          <p>Desenvolvido por <a href="https://github.com/MoreiraAlex" target="_blank">Alex Moreira</a></p>
      </div>
  </footer>
  )
}