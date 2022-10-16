import styles from '../styles/components/PhotoModal.module.css'

// import * as Data from '../public/data/Photos.json'
import { useRef } from 'react'


export default function PhotoModal({modal, close, obj}){

    const slider = useRef(null);
    const itm = useRef(null);

    function toLeft(){
        slider.current.scrollLeft -= itm.current.offsetWidth;
    }

    const toRight = (e) => {
        slider.current.scrollLeft += itm.current.offsetWidth;
    }

    const closeModal = (e) => {
        if(e.target.id == 'canClose'){
            close()
        }
    }


//    const photos = Data.filter((photo) => photo.idPai == photoId)

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
                            {obj.photos.map(item =>
                                <img key={item} src={item} className={styles.img} ref={itm} />
                                )}
                        </div>
                    </div>
                </div>
            
            : null}
        </>
    )
}