import { createContext, useState } from 'react'
import { setCookie } from 'nookies'

import api from '../services/api'
import { Router } from 'next/router'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState({})

    const isAuthenticated = false

    async function SingIn(data){

        api.post('auth/login', data)
        .then(response => {
            console.log(response.data)

            const { id, username, token } = response.data

            setCookie(undefined, 'amorimdrywall-token', token, {
                maxAge: 60 * 60 * 1 //1 Hora
            })

            setUser({
                id: id,
                username: username,
            })

            isAuthenticated = true

            Router.push('/admin')
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, SingIn }}>
            {children}
        </AuthContext.Provider>
    )
}