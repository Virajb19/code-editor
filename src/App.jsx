
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'

function App() {

    return (
        <>
          <Toaster position='top-right' toastOptions={{}} />

            <div className='w-screen h-screen bg-slate-800'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/editor/:roomId' element={<EditorPage />}></Route>
                </Routes>

            </div>
        </>
    )
}

export default App