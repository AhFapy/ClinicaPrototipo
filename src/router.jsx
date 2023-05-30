import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/home'
import Reseñas from './layouts/reseñas'
import Servicios from './layouts/servicios'
import Valores from './layouts/valores'

export default function Routing() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/reseñas' element={<Reseñas/>}></Route>
        <Route path='/servicios' element={<Servicios/>}></Route>
        <Route path="/valores" element={<Valores/>}></Route>
        <Route path="*" element={<h1>Not Found - Error 404</h1>}></Route>
     </Routes>
    </>
  )
}