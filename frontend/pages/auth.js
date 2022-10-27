import styles from '../styles/pages/Auth.module.css'

import { useState } from 'react'
import { setCookie } from 'nookies'

import api from '../services/api'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

import { RotatingLines } from  'react-loader-spinner'


export default function Auth() {

    const[loading, setLoading] = useState(false)
    const router = useRouter()
    

    const { 'amorimdrywall-token': token } = parseCookies()

    if(token){
        router.push('/admin')
    }

    function SingIn(data){
        data.preventDefault();  

        setLoading(true)

        const user = {
            username: data.target[0].value,
            password: data.target[1].value
        } 

        api.post('auth/login', user)
        .then(response => {
            
            const { token } = response.data
            
            setCookie(undefined, 'amorimdrywall-token', token, {
                maxAge: 60 * 1 * 1 //1 Hora
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`
           
            router.push('/admin')
        })
        .catch((error) => {
            setLoading(false)
            console.log(error)
        })
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form onSubmit={SingIn}>
                    <label>
                        <input type='text' placeholder='Usuario' required></input>
                    </label>
                    <label>
                        <input type='password' placeholder='Senha' required></input>
                    </label>
                    {loading ? 
                        <RotatingLines strokeColor="grey" strokeWidth="2" animationDuration="1" width="40" visible={true}/>
                    :
                        <button type='submit'>login</button>
                    }
                </form>
            </div>
        </div>
    )
}