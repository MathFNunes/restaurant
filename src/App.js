import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/Header';
import List from './components/ListRestaurants';
import AddPlate from './components/AddPlate'
import ListPlates from './components/ListPlates';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route path='/' exact element={<List/>}/>
            <Route path='/addplate' element={<AddPlate/>}/>
            <Route path='/listplates' element={<ListPlates/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
