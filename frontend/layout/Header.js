import styles from '../styles/layout/Header.module.css'

// import Logo from '../components/Logo'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          {/* <Logo tittle='AMAgency' color='#ffff'/> */}
        </a>
      </Link>
    </header>
  )
}