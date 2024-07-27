import React from 'react'
import Avatar from 'react-avatar'

function Client({username}) {
  return (
    <div className='flex flex-col gap-2 p-3'l>
      <Avatar name={username} size='50' round="14px"/>
      <span className='text-white font-semibold'>{username}</span>
    </div>
  )
}

export default Client