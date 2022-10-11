import styles from '../styles/components/NavLink.module.css'

import NextLink from 'next/link'

import { Link } from 'react-scroll'

export default function NavLink({children, link, reduce, offset, duration}) {
  // var link = scroll.Link
  return (
    <Link activeClass={styles.active} to={link} spy={true} smooth={true} offset={offset} duration={duration} className={`${styles.link} ${reduce ? styles.link_reduce : ''}`}>
      {children}
    </Link>
    // <Button activeClass="active" to={link} spy={true} smooth={true} offset={50} duration={500}>
    //   {children}
    // </Button>
    // <NextLink href={link}>
    //     <a className={`${styles.link} ${reduce ? styles.link_reduce : ''}`}>
    //         {children}
    //     </a>
    // </NextLink>
  )
}