import Image from 'next/image'

import logo from '../public/Logo.png'
import logoReduce from '../public/LogoReduce.png'

export default function Logo({reduce}){
    return(
        <div style={{cursor: 'pointer'}}>
            { reduce ? <Image src={logoReduce} alt='Logo' width='70px' height='55px'/> : 
                       <Image src={logo} alt='Logo' width='100px' height='100px' />}
        </div>
    )
}