import styles from '../styles/components/Galery.module.css'

import { useState } from 'react';

import PhotoModal from './PhotoModal';
import * as Data from '../public/data/Job.json'

export default function Galery(){    

    const [modal, setModal] = useState(false);
    const [id, setId] = useState(0)

    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    return(
        <>
            <div className={styles.galery}>
                {Data.map(item => 
                <div id='job' key={item.id} className={styles.card} style={{backgroundImage: `url(${item.url})`}} 
                    onClick={()=>{
                        openModal()
                        setId(item.id)
                    }}
                >
                    <div>
                        {item.tags.map(tag =>
                            <span key={tag}>{tag}</span>                    
                        )}
                    </div>
                    <p>{item.descricao}</p>
                </div>
                )}
            </div>
            <PhotoModal modal = {modal} close = {closeModal} photoId = {id}/>
        </>
        
    )
}