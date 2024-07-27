
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Editor from './pages/Editor'

function App() {

    return (
        <>
          <Toaster position='top-right' toastOptions={{}}>

          </Toaster>
            <div className='w-screen h-screen bg-slate-800'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/editor/:roomId' element={<Editor />}></Route>
                </Routes>

            </div>
        </>
    )
}

export default App