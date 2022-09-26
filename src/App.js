import logo from './logo.svg';
import './App.css';
// import Memo from './memo/Memo';
import { useState, useRef } from 'react';
// import Parent from './ref/Parent'
// import UseCallbacks from './Component/UseCallbacks';
import Navbar from './components/Navbar';
// import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add';
import View from './components/View';
import EmpDetails from './components/EmpDetails';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<View />} />
          {/* <Route exact path='/home' element={<Home />} /> */}
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/view' element={<View />} />
          <Route  path='/emp/:id' element={<EmpDetails />} />

        </Routes>
      </div>


    </BrowserRouter >
  );
}

export default App;



