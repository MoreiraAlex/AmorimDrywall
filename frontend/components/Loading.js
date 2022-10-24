import styles from '../styles/components/Loading.module.css'

import Logo from '../public/Logo.png'

import Image from "next/image";

export default function Loading(){
    return <Image src={Logo} width='100px' height='100px' className={styles.img}/>
}