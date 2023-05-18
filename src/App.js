import React, { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import UpdateEmp from './pages/UpdateEmp';

function App() {
  return (
  <BrowserRouter>
  <div className='App'>
      <ToastContainer position='top-center' /> 
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/addrecord" Component={AddEdit} />
      <Route path="/update/:id"  Component={UpdateEmp} />
      </Routes>
    </div>
  </BrowserRouter>
    
  );
}
export default App;

 

