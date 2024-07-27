import React, { useState } from 'react'
import Client from '../components/Client'

function Editor() {
  const [clients, setClients] = useState([{ socketId: 1, username: "Viraj B" }])
  return (
    <div id='client' className='h-full w-full'>
      <div id='sidebar' className='h-full w-[20%] bg-slate-900 flex flex-col justify-between'>
        <div id='img'>
          <span className='text-4xl font-bold text-white'>Code Sync</span>
          <p className='text-green-500 font-semibold'>Realtime Collaboration</p>
        </div>
        <div id='clients'>
          {clients.map((client) => {
            return <Client key={client.socketId} username={client.username} />
          })}
        </div>
        <div id='buttons' className='flex flex-col p-1'>
          <button className='text-white font-semibold mx-2 bg-green-700 rounded-lg p-1'>Copy Room ID</button>
          <button className='text-white font-semibold mx-2 mt-2 bg-zinc-600 rounded-lg p-1'>Leave</button>
        </div>
      </div>

      <div id='editor' className='h-full w-[80%]'>

      </div>

    </div>
  )
}

export default Editor