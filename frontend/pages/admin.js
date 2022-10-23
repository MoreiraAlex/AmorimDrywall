import styles from '../styles/pages/Admin.module.css'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

import api from '../services/api';
import Logo from '../public/LogoReduce.png';

export default function Admin() {

    const[modal, setModal] = useState(false)
    const[data, setData] = useState([])
    const[refresh, setRefresh] = useState(false)
    const[files, setFiles] = useState([])
    const[photos, setPhotos] = useState([])
    const[length, setLength] = useState(-1)
    const[img, setImg] = useState([])


    const closeModal = (e) => {
        if(e.target.id == 'canClose'){
            setModal(false)
        }
    }

    function DeleteJob(id, img, urls){

        urls.map((url) => {            
            api.delete(`upload/${url[0]}`)
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        })

          
        api.delete(`upload/${img[0]}`)
        .then(response => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })


        api.delete(`job/${id}`)
        .then(response => {
            console.log(response.data)
            refresh ? setRefresh(false) : setRefresh(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function DataForm(data){
        data.preventDefault();
        
        setFiles([])
        Object.values(data.target).map((value) => {
            setFiles(oldArray => [...oldArray, value.value])
        })

        const formData = new FormData();

        formData.set('file', data.target[2].files[0])

        api.post('upload', formData)
        .then(response => {
            setImg([response.data.key, response.data.url])
        })
        .catch((error) => {
            console.log(error)
        }) 
        

        setLength(data.target[3].files.length)

        setPhotos([])

        Object.values(data.target[3].files).map(element => {

            formData.set('file', element)

            api.post('upload', formData)
            .then(response => {
                setPhotos(oldArray => [...oldArray, [response.data.key, response.data.url]])
            })
            .catch((error) => {
                console.log(error)
            })
        })

        setModal(false)
    }

    useEffect(() => {
        if(length == photos.length && img.length != 0){
            const form = {
                name: files[0],
                desc: files[1],
                img: img,
                photos: photos
            }

            api.post('job', form)
            .then(response => {
                console.log(response.data)
                setLength(-1)
                setImg([])
                refresh ? setRefresh(false) : setRefresh(true)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [photos, img])



    useEffect(() => {
        return () => {
            api.get('job', data)
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [refresh])


  return (    
    <>
        <header className={styles.header}>
            <Image src={Logo} alt='Logo' width='70px' height='55px'/>
            <h1>Painel</h1>
            <div>
                <Link href='/'>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dcb36f" className="bi bi-house" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </a>
                </Link>
            </div>
        </header>
        <main className={styles.main}>
            <section>
                <div>
                    <h2>Jobs</h2>
                    <button onClick={() => setModal(true)}>
                        Adicionar
                    </button>
                </div>
                <div>
                    {data.map((item) => (
                        <div key={item._id}>
                            <div>
                                <h3>{item.name}</h3>
                                <span onClick={() => {DeleteJob(item._id, item.img, item.photos)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </span>
                            </div>
                            <Image  src={item.img[1]} width='290px' height='290px' alt='Trabalhos'/>
                        </div>
                    ))}
                </div>
            </section>    
        </main>
        <footer className={styles.footer}>
            <a href="https://github.com/MoreiraAlex" target="_blank" rel="noopener noreferrer">
                Desenvolvido por Alex Moreira
            </a>
        </footer>
        {modal ? 
            <div id='canClose' className={styles.container} onClick={closeModal}>
                <div className={styles.modal}>
                    <h3>Novo Serviço</h3>
                    <form encType="multipart/form-data" onSubmit={DataForm}>
                        <label>
                            <input type='text' placeholder='Nome' required></input>
                        </label>
                        <label>
                            <input type='text' placeholder='Descrição' required></input>
                        </label>
                        <label>
                            Imagens de capa:
                            <input type='file' name='file' required></input>
                        </label>
                        <label>
                            Imagens do serviço:
                            <input type='file' name='file[]' multiple required></input>
                        </label>
                        <div>
                            <button>Cadastrar</button>
                            <button id='canClose'>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        : null}
    </>
  )
}