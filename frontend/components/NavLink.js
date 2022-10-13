import styles from '../styles/components/NavLink.module.css'

import { Link } from 'react-scroll'

export default function NavLink({children, link, reduce, offset, duration}) {
  return (
    <Link activeClass={styles.active} to={link} spy={true} smooth={true} offset={offset} duration={duration} className={`${styles.link} ${reduce ? styles.link_reduce : ''}`}>
      {children}
    </Link>
  )
}