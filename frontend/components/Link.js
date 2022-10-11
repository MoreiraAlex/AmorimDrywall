import styles from '../styles/components/Link.module.css'

import NextLink from 'next/link'

export default function Link({children, link, offset}) {
  return (
    <NextLink href={link}>
        <a className={`${styles.link} ${offset > 50 ? styles.link_reduce : ''}`}>
            {children}
        </a>
    </NextLink>
  )
}