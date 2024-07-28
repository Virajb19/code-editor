import React, { useEffect, useRef, useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'
import initSocket from '../socket'
import {ACTIONS} from '../actions'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

function EditorPage({}) {

  const socketRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const {roomId} = useParams()

  useEffect(() => {
     async function init(){
      socketRef.current = await initSocket()
      socketRef.current.on('connect_error',(err) => handleErrors(err))
      socketRef.current.on('connect_failed', (err) => handleErrors(err))

     function handleErrors(e){
      console.log('socket error',e);
      toast.error('Socket connection failed Try again later')
      navigate("/")
     }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username
      })
     }
     init()
  }, [])

  const [clients, setClients] = useState([])

  return (
    <div id='client' className='h-full w-full flex'>
      <div id='sidebar' className='h-full w-[20%] bg-slate-900 flex flex-col gap-1 justify-between border-r-2 border-gray-200 '>
         <div id='clients+img' className='h-full'>
         <div id='img'>
          <span className='text-4xl font-bold text-white'>Code Sync</span>
          <p className='text-green-500 font-semibold'>Realtime Collaboration</p>
          <span className='text-white font-semibold'>Connected</span>
        </div>
        <div id='clients' className='grid grid-cols-3'>
          {clients.map((client) => {
            return <Client key={client.socketId} username={client.username} />
          })}
        </div>
         </div>
        <div id='buttons' className='flex flex-col p-1'>
          <button className='text-white font-semibold mx-2 bg-green-700 rounded-lg p-1 hover:bg-green-900 duration-300'>Copy Room ID</button>
          <button className='text-white font-semibold mx-2 mt-2 bg-zinc-600 rounded-lg p-1 hover:bg-zinc-900 duration-300'>Leave</button>
        </div>
      </div>

      <div id='editor' className='h-full w-[80%]'>
            <Editor />
      </div>

    </div>
  )
}

export default EditorPage