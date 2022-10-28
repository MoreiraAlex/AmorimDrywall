import styles from '../styles/pages/Auth.module.css'

import { useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { RotatingLines } from  'react-loader-spinner'

import api from '../services/api'
import Message from '../components/Message'



export default function Auth() {

    const[loading, setLoading] = useState(false)
    const[message, setMessage] = useState('')
    const[visible, setVisible] = useState(false)
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
                maxAge: 60 * 60 * 1 //1 Hora
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`
           
            router.push('/admin')
        })
        .catch((error) => {
            setLoading(false)
            if(error.response.status){
                setMessage('Senha ou usuário inválido')
                setVisible(true)

                const time = setTimeout(() => {
                    setVisible(false)
                }, 3000)

                return () => clearTimeout(time) 
            } else {
                setMessage('Erro do lado do servidor')
                setVisible(true)

                const time = setTimeout(() => {
                    setVisible(false)
                }, 3000)

                return () => clearTimeout(time) 
            }
        })
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Message type='error' visible={visible}>{message}</Message>
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