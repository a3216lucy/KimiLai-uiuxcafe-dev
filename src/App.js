import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardB from './component/CardB';
import CardA from './component/CardA';
import MenuPage from './component/MenuPage';
import Home from './component/Home';
// import { HashRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
          <MenuPage >
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/CardA" element={<CardA/>}/>
          <Route path="/CardB" element={<CardB/>}/>
        </Routes>
          </MenuPage>
    </BrowserRouter>
  );
};

export default App;
