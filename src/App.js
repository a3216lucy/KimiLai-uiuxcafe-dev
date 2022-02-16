import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import CardA from './component/CardA';
import CardB from './component/CardB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faA,
  faB,
  faFilePowerpoint,
} from '@fortawesome/free-solid-svg-icons';

const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));

const App = () => {
  return (
    <BrowserRouter>
      <div class="m-0 p-0 box-border flex justify-start items-center">
        <div class="nav relative h-screen w-16 bg-dark-blue shadow-3xl border-l-8 border-dark-blue overflow-x-hidden hover:w-60 transition duration-300">
          <ul class="absolute top-0 left-0 w-full pl-2 mt-10">
            <li class="list active">
              <Link exact to="/">
                <a>
                  <span class="icon">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span class="title">Home</span>
                </a>
              </Link>
            </li>
            <li class="list">
              <Link to="/CardA">
                <a>
                  <span class="icon">
                    <FontAwesomeIcon icon={faA} />
                  </span>
                  <span class="title">CardA</span>
                </a>
              </Link>
            </li>
            <li class="list">
              <Link to="/CardB">
                <a>
                  <span class="icon">
                    <FontAwesomeIcon icon={faB} />
                  </span>
                  <span class="title">CardB</span>
                </a>
              </Link>
            </li>
            <li class="list">
              <Link to="/">
                <a>
                  <span class="icon">
                    <FontAwesomeIcon icon={faFilePowerpoint} />
                  </span>
                  <span class="title">Slide Web</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div class="container left-10">
          <Routes>
            <Route path="/CardA" element={<CardA />} />
            <Route path="/CardB" element={<CardB />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
