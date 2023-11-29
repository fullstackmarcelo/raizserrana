// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react';

import Header from "./components/layauts/Header";
import Nav from "./components/layauts/Nav";
import Footer from "./components/layauts/Footer";

import HomePage from './pages/HomePage';
import Tienda from './pages/Tienda';
import Reserva from './pages/Reserva';
import Contactos from './pages/Contactos';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/tienda' element={<Tienda/>}/>
          <Route path='/reserva' element={<Reserva/>}/>
          <Route path='/contactos' element={<Contactos/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
