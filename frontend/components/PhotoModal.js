import styles from '../styles/components/PhotoModal.module.css'

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

    return(
        <>
            {modal ? 
                <div id='canClose' className={styles.container} onClick={closeModal}>
                    <div className={styles.modal}>
                        <div className={styles.button} >
                            <button onClick={toLeft}><i className="bi bi-chevron-left"></i></button>
                            <button onClick={toRight}><i className="bi bi-chevron-right"></i></button>
                        </div>
                        <div className={styles.slider} ref={slider}>
                            {obj.map(item =>
                                <img key={item.id} src={item.url} alt='Imagens do serviço' className={styles.img} ref={itm} />
                            )}
                        </div>
                    </div>
                </div>
            
            : null}
        </>
    )
}