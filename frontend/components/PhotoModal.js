import styles from '../styles/components/PhotoModal.module.css'

import Image from 'next/image'

import * as Data from '../public/data/Photos.json'
import { useRef, useState } from 'react'


export default function PhotoModal({modal, close, photoId}){

    const [isDown, setIsDown] = useState(false);

    const slider = useRef(null);
    const itm = useRef(null);

    function toLeft(){
        slider.current.scrollLeft -= itm.current.offsetWidth;

    }

    const toRight = (e) => {
        e.preventDefault()
        slider.current.scrollLeft += itm.current.offsetWidth;

    }


    const closeModal = (e) => {
        if(e.target.id == 'canClose'){
            close()
        }
    }


   const photos = Data.filter((photo) => photo.idPai == photoId)

    return(
        <>
            {modal ? 
                <div id='canClose' className={styles.container} onClick={closeModal}>
                    <div className={styles.modal}>
                        <div className={styles.button} >
                            <button onClick={toLeft}><i class="bi bi-chevron-left"></i></button>
                            <button onClick={toRight}><i class="bi bi-chevron-right"></i></button>
                        </div>
                        <div className={styles.slider} ref={slider}>
                            {photos.map(item =>
                                <img key={item.id} src={item.url} className={styles.img} ref={itm} />
                                )}
                        </div>
                    </div>
                </div>
            
            : null}
        </>
    )
}