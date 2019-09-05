import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {  initialize } from 'redux-form'
import { FETCH_SESSIONS,
         FETCH_ALBUM_ONE } from './constants'
import _ from 'lodash'



export function fetchSessions() {
    return (dispatch, getState) => {
       
        const { app } = getState(),
                url = `${app.endpoints.api.host}/1/sessions`

               axios.get(url)
                    .then(resp => {
                        dispatch([{
                            type: FETCH_SESSIONS,
                            payload: _.get(resp.data, 'data.content') || []
                        }])
                    })
                    .catch(e => {
                        toastr.error('Atenção', 'Falha na listagem das sessões')
                    })
        
    }
}

export function fetchAlbumOne(param) {
    return (dispatch, getState) => {

        const { app } = getState(),
                url = `${app.endpoints.api.host}/sessions/one/${param}`

        axios.get(url)
            .then(resp => {
                dispatch([{
                    type: FETCH_ALBUM_ONE,
                    payload: resp.data.album[0]
                },
                    initialize('album_update', resp.data.album[0])
            ])
            })
            .catch(e => {
                toastr.error('Atenção', 'Falha na obtenção do álbum')
            })
    }
}

export function updateAlbum(album) {
    return (dispatch, getState) => {

        const { app } = getState(),
            url = `${app.endpoints.api.host}/sessions`

        axios.put(url, album)
            .then(resp => {
                dispatch([
                    fetchAlbumOne(album._id)
                ])
                 toastr.success('Sucesso', 'Operação Realizada com Sucesso')
            }).catch(e => {
                toastr.error('Atenção', 'Falha no cadastramento.')
            })

    }
}


export function deleteAlbum(_id) {
    return (dispatch, getState) => {
     
    }
}



export function handleAlbum(values) {

    return (dispatch, getState) => {

        const { app } = getState(),
                uriPost = `${app.endpoints.api.host}/sessions`

            const album = {
                id: parseInt(values.id),
                userId: parseInt(values.userId),
            title: values.title
         }
   
       axios.post(uriPost, album)
            .then(resp => {
                dispatch([
                    fetchSessions()
                ])
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                app.history.push('/')
            }).catch(e => {
                toastr.error('Atenção', e)
            })

    }
}



export function handleDump() {

    return (dispatch, getState) => {

        const { app } = getState(),
            uriPost = `${app.endpoints.api.host}/sessions/dump`
        axios.get(uriPost)
            .then(resp => {
                dispatch([
                    fetchSessions()
                ])
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                app.history.push('/')
            }).catch(e => {
                toastr.error('Atenção', e)
            })

    }
}

