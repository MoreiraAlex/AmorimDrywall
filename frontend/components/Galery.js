import styles from '../styles/components/Galery.module.css'

import { useState, useEffect } from 'react';

import PhotoModal from './PhotoModal';
import api from '../services/api'

export default function Galery(){    

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [obj, setObj] = useState(null);

    useEffect(() => {
            api.get('job', data)
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    if(!data || !data.length) {
        return (
            <h1 style={{marginBottom: '100px', marginTop: '50px'}}>Sem dados!</h1>
        )
    } 

    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    return(
        <>
            <div className={styles.galery}>
                {data.map(item => 
                    <div key={item.v_id} className={styles.card} style={{backgroundImage: `url(${item.img[1]})`}} 
                        onClick={()=>{
                            setObj(item)
                            openModal()
                        }}
                    >
                        <p>{item.desc}</p>
                    </div>
                )}
            <PhotoModal modal = {modal} close = {closeModal} obj = {obj}/>
            </div>
        </>
        
    )
}