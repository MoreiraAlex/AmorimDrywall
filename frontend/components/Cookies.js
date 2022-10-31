import styles from '../styles/components/Cookies.module.css'

import Link from 'next/link'
import { useEffect, useState } from 'react';

import { setCookie, parseCookies } from 'nookies'


export default function Cookies(){
    const [hide, setHide] = useState(false)

    const { 'accept': cookie } = parseCookies()

    useEffect(() => {
        if(cookie){
            setHide(true)
        } else {
            setHide(false)
        }
    }, [])

    return(
        <>
            {hide ? 
                null
            :
                <div className={styles.cookie}>
                    <h1>Cookies</h1>
                    <p>
                        Este site utiliza cookies para te proporcionar uma melhor experiência. Ao continuar navegando, você aceita nossa 
                        <Link href='/policy'>
                            <a> Politica de Privacidade</a>
                        </Link>
                    </p>
                    <button onClick={() => {
                        setCookie(undefined, 'accept', '1', { expires: new Date('2030') })
                        setHide(true)
                    }}>Aceito</button>
                </div>
            }
        </>
    )
}