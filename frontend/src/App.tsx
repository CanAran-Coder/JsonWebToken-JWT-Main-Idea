import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Login from "./Components/Login";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {




  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={< Login />}></Route>
      </Routes>
    </>



  );
}

export default App;
