import styles from '../styles/layout/Header.module.css'

import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import Logo from '../components/Logo'
import Link from '../components/Link'
import Icon from '../components/Icon'

export default function Header() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);

    }, []);

  return (
    <header>
      <nav className={`${styles.nav} ${offset > 50 ? styles.nav_reduce : styles.transition}`}>
        <NextLink href='/'>
          <a>
            <Logo offset={offset}/>
          </a>
        </NextLink>
        <ul>
          <li>
            <Link link='#about' offset={offset}>sobre nós</Link>
          </li>
          <li>
            <Link link='#service' offset={offset}>serviços</Link>
          </li>
          <li>
            <Link link='#galery' offset={offset}>galeria</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://www.instagram.com/amorim_drywall/?hl=pt-br' target="_blank">
              <Icon size='1.5rem' offset={offset}>&#xF437;</Icon>
            </a>
          </li>
          <li>
            <a href='https://wa.me/5513988393565' target="_blank">
              <Icon size='1.5rem' offset={offset}>&#xF618;</Icon>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}