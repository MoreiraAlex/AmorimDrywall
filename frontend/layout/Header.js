import styles from '../styles/layout/Header.module.css'

import { Link } from 'react-scroll'
import { useState } from 'react';

import Logo from '../components/Logo'
import NavLink from '../components/NavLink'
import Icon from '../components/Icon'

export default function Header({reduce}) {

  const [button, setButton] = useState(false);

  return (
    <header>
      <nav className={`${styles.nav} ${reduce ? styles.nav_reduce : styles.transition}`}>
        <Link to='home' spy={true} smooth={true} offset={0} duration={800}>
          <Logo reduce={reduce}/>
        </Link>
        <ul className={`${styles.mobile} ${button ? styles.mobile_active : null}`}>
          <li>
            <NavLink link='about' offset={0} duration={800} reduce={reduce}>sobre nós</NavLink>
          </li>
          <li>
            <NavLink link='services' offset={-50} duration={800} reduce={reduce}>serviços</NavLink>
          </li>
          <li>
            <NavLink link='galery' offset={0} duration={800} reduce={reduce}>galeria</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://www.instagram.com/amorim_drywall/?hl=pt-br' target="_blank">
              <Icon size='1.5rem' reduce={reduce}>&#xF437;</Icon>
            </a>
          </li>
          <li>
            <a href='https://wa.me/5513988393565' target="_blank">
              <Icon size='1.5rem' reduce={reduce}>&#xF618;</Icon>
            </a>
          </li>
        </ul>
        <button onClick={() => {
          button ? setButton(false) : setButton(true)
        }}>
          <i className="bi bi-list"></i>
        </button>
      </nav>
    </header>
  )
}