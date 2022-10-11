import styles from '../styles/components/Logo.module.css'

import Image from 'next/image'

import logo from '../public/Logo.png'
import logoReduce from '../public/LogoReduce.png'

export default function Logo({offset}){
    return(
        <div className={styles.Logo}>
            { offset > 50 ? <Image src={logoReduce} alt='Logo' width='70px' height='55px'/> : 
                            <Image src={logo} alt='Logo' width='100px' height='100px' />}
        </div>
    )
}