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
    const[editPhotos, setEditPhotos] = useState([])
    const[length, setLength] = useState(-1)
    const[img, setImg] = useState([])
    const[editData, setEditData] = useState([])



    const closeModal = (e) => {
        if(e.target.id == 'canClose'){
            setModal(false)
        }
    }

    function removeImg(action, key){
        if(action == 'remove'){
            const index = editData.photos.findIndex(photo => photo[0] == key)

            if(index >= 0){
                editData.photos.splice(index, 1)
            }

        } else if (action == 'add'){
            editData.photos.push(key)
        }

    }

    function EditJob(id){

        api.get(`job/${id}`, data)
        .then(response => {
            setEditData(response.data)
            setModal(true)
        })
        .catch((error) => {
            console.log(error)
        })

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

    function DataForm(data, method){
        data.preventDefault();
        
        if(method == 'post'){

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
        } else if (method == 'put'){

        }


        setModal(false)
    }

    // useEffect(() => {
    //     if(length == photos.length && img.length != 0){
    //         const form = {
    //             name: files[0],
    //             desc: files[1],
    //             img: img,
    //             photos: photos
    //         }

    //         api.post('job', form)
    //         .then(response => {
    //             console.log(response.data)
    //             setLength(-1)
    //             setImg([])
    //             refresh ? setRefresh(false) : setRefresh(true)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     }
    // }, [photos, img])



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
                    <button onClick={() => {
                        setEditData([])
                        setModal(true)
                            }}
                    >
                        Adicionar
                    </button>
                </div>
                <div>
                    {data.map((item) => (
                        <div key={item._id}>
                            <div>
                                <h3>{item.name}</h3>
                                <div>
                                    <span onClick={() => EditJob(item._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg>
                                    </span>
                                    <span onClick={() => {DeleteJob(item._id, item.img, item.photos)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                    </span>
                                </div>
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
                    <form encType="multipart/form-data" onSubmit={(data) => {editData.length != 0 ? DataForm(data, 'put') : DataForm(data, 'post')}}>
                        <label>
                            <input type='text' placeholder='Nome' defaultValue={editData.length != 0 ? editData.name : null} required></input>
                        </label>
                        <label>
                            <input type='text' placeholder='Descrição' defaultValue={editData.length != 0 ? editData.desc : null} required></input>
                        </label>
                        <label>
                            Imagens de capa:
                            {editData.length != 0 ?
                                <input type='file' name='file'></input>
                            :
                                <input type='file' name='file' required></input>
                            }
                        </label>
                        <label>
                            Imagens do serviço:
                            {editData.length != 0 ?
                                <input type='file' name='file[]' multiple></input>
                            :
                                <input type='file' name='file[]' multiple required></input>
                            }
                        </label>
                        {editData.length != 0 ?
                            <div className={styles.photos}>
                                {editData.photos.map(photo => 
                                    <>
                                        {editData.photos.findIndex(element => element[0] == photo[0]) >= 0 ?
                                            <div style={{backgroundImage: `url(${photo[1]})`}} key={photo[0]}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-x ${styles.iconX}`} viewBox="0 0 16 16" onClick={() => removeImg('remove', photo[0])}>
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </div>
                                        :
                                            <div style={{backgroundImage: `url(${photo[1]})`}} className={styles.none} key={photo[0]}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-arrow-clockwise ${styles.iconR}`} viewBox="0 0 16 16" onClick={() => removeImg('add', photo)}>
                                                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                                </svg>
                                            </div>
                                        }
                                    </>
                                )}
                            </div>
                        :
                            null
                        }
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