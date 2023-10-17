import style from "./App.module.css"
import NavBar from './components/NavBar/NavBar'

import { Detail, Form, Home, Landing } from './views'
import { Route, Routes, useLocation } from 'react-router-dom'
//import { useState, useEffect } from 'react'
//import axios from 'axios'


function App() {

  const {pathname} = useLocation();

  return (
    <div className={style.App}>
      {pathname !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
