import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
function Home() {
    const [roomid, setRoomid] = useState("")
    const [username, setUsername] = useState("")
    function createNewRoom(e) {
        e.preventDefault()
        const id = uuidv4()
        setRoomid(id)
        toast.success("Created a new room")
    }
    const navigate = useNavigate()
    function joinRoom() {
        if (!roomid || !username) {
            toast.error("roomid and username required")
            return
        }
        navigate(`/editor/${roomid}`, {
            state: {
                username,
            }
        })
    }

    function handleInputEnter(e){
        if(e.code === 'Enter') joinRoom()
    }  

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='h-[40%] w-[30%] rounded-xl border-3 bg-slate-900'>
                <span className='text-white text-5xl font-bold'>Code Sync</span>
                <p className='text-green-400 font-semibold mt-1 text-sm'>Realtime collaboration</p>
                <div className='p-3 flex flex-col gap-3'>
                    <p className='text-white font-semibold'>Paste invitation roomid</p>
                    <input onChange={(e) => setRoomid(e.target.value)} value={roomid} className='bg-transparent text-white' type='text' placeholder='ROOM ID'></input>
                    <input onKeyUp={handleInputEnter} onChange={(e) => setUsername(e.target.value)} value={username} className='bg-transparent text-white' type='text' placeholder='USERNAME'></input>
                </div>
                <button onClick={joinRoom} className='text-white font-semibold m-3 w-[20%] p-1 ml-84 bg-green-700 rounded-lg hover:bg-red-500 duration-300'>Join</button>
                <div className='flex gap-3'>
                    <p className='text-white'>If you dont have invite create</p>
                    <a onClick={createNewRoom} href='' className='text-blue-600'>Create</a>
                </div>
            </div>
        </div>
    )
}

export default Home