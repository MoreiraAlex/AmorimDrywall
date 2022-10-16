import styles from '../styles/components/Galery.module.css'

import { useState, useEffect } from 'react';

import PhotoModal from './PhotoModal';
import * as Data from '../public/data/Job.json'

export default function Galery(){    

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [obj, setObj] = useState(null);

    useEffect(() => {
        fetch('177.71.174.240:3030/job')
            .then((response) => response.json())
            .then(setData)
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
                <div key={item.v_id} className={styles.card} style={{backgroundImage: `url(${item.img})`}} 
                    onClick={()=>{
                        openModal()
                        setObj(item)
                    }}
                >
                    <div>
                        {item.tags.map(tag =>
                            <span key={tag}>{tag}</span>                    
                        )}
                    </div>
                    <p>{item.desc}</p>
                </div>
                )}
            </div>
            <PhotoModal modal = {modal} close = {closeModal} obj = {obj}/>
        </>
        
    )
}