import { useState } from 'react';
import './App.css'
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import FetchNormal from './fetchnormal/FetchNormal';
import Shop from "./shop/Shop";
import Detail from './detail/Detail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/fetchnormal' element={<FetchNormal/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
