import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import CardA from './component/CardA';
import CardB from './component/CardB';
import Slide from './component/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {

  function navToggle() {
      var btn = document.getElementById('menuBtn');
      var nav = document.getElementById('menu');

      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
  }

  return (
    <BrowserRouter>
      <div
        id="top"
        class="w-full flex flex-col fixed  sm:m-0 sm:p-0 bg-white pin-t pin-r pin-l"
      >
        <nav
          id="site-menu"
          class="flex flex-col sm:flex-row w-full justify-between items-center px-4 py-4 sm:px-6  bg-white shadow  border-t-4 border-darker-blue"
        >
          <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <Link exact to={process.env.PUBLIC_URL + '/'}>
              <h1 class="font-bold text-lg tracking-widest">UIUX Cafe Dev Project</h1>
            </Link>
            <button class="hamburger block cursor-pointer sm:hidden focus:outline-none" id="menuBtn" onClick={navToggle}>
              <FontAwesomeIcon icon={faBars} />
          </button>
          </div>
          <div
            id="menu"
            class="w-full sm:w-auto sm:self-center sm:flex flex-col sm:flex-row justify-evenly items-center h-full py-3 sm:py-0 sm:pb-0  hidden"
          >
            <Link exact to={process.env.PUBLIC_URL + '/'}>
              <p class="text-black font-bold hover:text-darker-blue active:text-darker-blue text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 active">
                Home
              </p>
            </Link>
            <Link exact to={process.env.PUBLIC_URL + '/CardA'}>
              <p class="text-black font-bold hover:text-darker-blue active:text-darker-blue text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2">
                CardA
              </p>
            </Link>
            <Link exact to={process.env.PUBLIC_URL + '/CardB'}>
              <p class="text-black font-bold hover:text-darker-blue active:text-darker-blue text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2">
                CardB
              </p>
            </Link>
            <Link exact to={process.env.PUBLIC_URL + '/Slide'}>
              <p class="text-black font-bold hover:text-darker-blue active:text-darker-blue text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2">
                Slide
              </p>
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/CardA'} element={<CardA />} />
          <Route path={process.env.PUBLIC_URL + '/CardB'} element={<CardB />} />
          <Route path={process.env.PUBLIC_URL + '/Slide'} element={<Slide />} />
          <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
