import styles from '../styles/pages/Admin.module.css'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

import api from '../services/api';
import Logo from '../public/LogoReduce.png';

import { RotatingLines } from  'react-loader-spinner'

export default function Admin() {

    const[data, setData] = useState([])
    const[images, setImages] = useState([])
    const[modal, setModal] = useState(false)
    const[refresh, setRefresh] = useState(false)
    const[loading, setLoading] = useState(true)


    const closeModal = (e) => {
        if(e.target.id == 'canClose'){
            setModal(false)
        }
    }

    function DataForm(data){
        data.preventDefault();

        setLoading(true)
        setModal(false)

        const form = {
            name:  data.target[0].value,
            desc:  data.target[1].value
        }

        api.post('job', form)
        .then(response => {

            const formData = new FormData();

            formData.set('file', data.target[2].files[0])
            formData.append('jobId', response.data.id)
            formData.append('isMain', 'true')
            
            api.post('upload', formData)
            .then(() => {

                Object.values(data.target[3].files).map(element => {

                    formData.set('file', element)
                    formData.append('jobId', response.data.id)
                    formData.append('isMain', 'false')
        
                    api.post('upload', formData)
                    .then(() => {
                        refresh ? setRefresh(false) : setRefresh(true)
                    })
                    .catch((error) => {
                        console.log(`Image error: ${error}`)
                    })
                })                
            })
            .catch((error) => {
                console.log(`Main Image error: ${error}`)
            }) 
        })
        .catch((error) => {
            console.log(`Job error: ${error}`)
        })
    }

    function DeleteJob(id){

        setLoading(true)

        api.delete(`job/${id}`)
        .then(response => {
            console.log(response.data)
            setData([])
            setImages([])
            refresh ? setRefresh(false) : setRefresh(true)
        })
        .catch((error) => {
            console.log(error)
        })

        images.filter(image => image.jobId == id).map(image => {
            api.delete(`upload/${image.id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        })
    }

    useEffect(() => {
        return () => {
            api.get('job')
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
        }
    }, [refresh])

  return (    
    <>
        <header className={styles.header}>
            <Image src={Logo} alt='Logo' width='70px' height='55px'/>
            <h1>Administração</h1>
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
                    <h2>Serviços</h2>
                    <button onClick={() => setModal(true)}>
                        Adicionar
                    </button>
                </div>
                <div>
                    {loading ?
                        <RotatingLines strokeColor="grey" strokeWidth="2" animationDuration="1" width="100" visible={true}/>
                    :
                        data.length ? 
                            <>
                                {data.map((item) => (
                                    <div key={item.id}>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <span onClick={() => {DeleteJob(item.id)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <Image src={`${images.filter(image => image.jobId == item.id && image.isMain == true).map(image => image.url)}`} width='290px' height='290px' alt='Trabalhos'/>
                                    </div>
                                ))}
                            </>
                        : 
                            <h3>Nenhum serviço cadastrado!</h3>
                    }
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
                            <input type='text' placeholder='Nome' ></input>
                        </label>
                        <label>
                            <input type='text' placeholder='Descrição' ></input>
                        </label>
                        <label>
                            Imagens de capa:
                            <input type='file' name='file' ></input>
                        </label>
                        <label>
                            Imagens do serviço:
                            <input type='file' name='file[]' multiple ></input>
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