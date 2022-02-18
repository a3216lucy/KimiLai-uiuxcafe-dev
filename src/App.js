import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import CardA from './component/CardA';
import CardB from './component/CardB';
import Slide from './component/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faA,
  faB,
  faFilePowerpoint,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

// const list = document.querySelectorAll('.list');
// function activeLink() {
//   list.forEach((item) => item.classList.remove('active'));
//   this.classList.add('active');
// }
// list.forEach((item) => item.addEventListener('click', activeLink));

// const menu = document.querySelectorAll('.menu-btn');
// const nav = document.querySelectorAll('.nav');
// function activeMenu() {
//   nav.classList.toggle('active');
//   menu.classList.toggle('active');
// }
// menu.forEach((item) => item.addEventListener('click', activeMenu));


// for (var i = 0 ; i < button.length; i++) {
//   button[i].addEventListener('click', navToggle);
// }

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
        class="w-full flex flex-col fixed sm:relative sm:m-0 sm:p-0 bg-white pin-t pin-r pin-l"
      >
        <nav
          id="site-menu"
          class="flex flex-col sm:flex-row w-full justify-between items-center px-4 py-4 sm:px-6  bg-white shadow sm:shadow-none border-t-4 border-darker-blue"
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
            class="w-full sm:w-auto sm:self-center sm:flex flex-col sm:flex-row justify-evenly items-center h-full py-4  sm:py-0 sm:pb-0  hidden"
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


// <BrowserRouter>
//       <div class="m-0 p-0 box-border flex items-center" id="menu">
//         <div class="nav relative h-screen w-16 bg-dark-blue shadow-3xl border-l-8 border-dark-blue overflow-x-hidden hover:w-60 transition duration-300">
//           <ul class="absolute top-0 left-0 w-full mt-10">
//             <li class="list active">
//               <a>
//                 <Link  exact to={process.env.PUBLIC_URL + '/'}>
//                   <span class="icon">
//                     <FontAwesomeIcon icon={faHouse} />
//                   </span>
//                   <span class="title">Home</span>
//                 </Link>
//               </a>
//             </li>
//             <li class="list">
//               <a>
//                 <Link to={process.env.PUBLIC_URL + '/CardA'}>
//                   <span class="icon">
//                     <FontAwesomeIcon icon={faA} />
//                   </span>
//                   <span class="title">CardA</span>
//                 </Link>
//               </a>
//             </li>
//             <li class="list">
//               <a>
//                 <Link to={process.env.PUBLIC_URL + '/CardB'}>
//                   <span class="icon">
//                     <FontAwesomeIcon icon={faB} />
//                   </span>
//                   <span class="title">CardB</span>
//                 </Link>
//               </a>
//             </li>
//             <li class="list">
//               <a>
//                 <Link to={process.env.PUBLIC_URL + '/Slide'}>
//                   <span class="icon">
//                     <FontAwesomeIcon icon={faFilePowerpoint} />
//                   </span>
//                   <span class="title">Slide</span>
//                 </Link>
//               </a>
//             </li>
//           </ul>
//           <div class="menu-btn cursor-pointer hidden ph:block ph:z-50" id="menu-button">
//             <FontAwesomeIcon icon={faBars} />
//           </div>
//         </div>
//         <div class="container">
//           <Routes>
//             <Route path={process.env.PUBLIC_URL + '/CardA'} element={<CardA />} />
//             <Route path={process.env.PUBLIC_URL + '/CardB'} element={<CardB />} />
//             <Route path={process.env.PUBLIC_URL + '/Slide'} element={<Slide />} />
//             <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
