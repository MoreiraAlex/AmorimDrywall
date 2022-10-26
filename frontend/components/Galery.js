import styles from '../styles/components/Galery.module.css'

import { useState, useEffect } from 'react';

import PhotoModal from './PhotoModal';
import api from '../services/api'

import { RotatingLines } from  'react-loader-spinner'

export default function Galery(){    

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [obj, setObj] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            api.get('job', data)
            .then(response => {
                setData(response.data)

                api.get('upload')
                .then(response => {
                    setImages(response.data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }, [])

    if(loading){
        return (
            <RotatingLines strokeColor="grey" strokeWidth="2" animationDuration="1" width="100" visible={true}/>
        )
    }
    else if((!data || !data.length) && !loading) {
        return (
            <h3 style={{marginBottom: '100px', marginTop: '50px'}}>Estamos trabalhando no cadastro de serviços novos!</h3>
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
                    <div key={item.id} className={styles.card} style={{backgroundImage: `url(${
                        images.filter(image => image.jobId == item.id && image.isMain == true).map(image => image.url)
                    })`}} 
                        onClick={()=>{
                            setObj(images.filter(image => image.jobId == item.id))
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