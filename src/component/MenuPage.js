import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faA, faB, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';


const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

function MenuPage() {
  return (
    <div class="m-0 p-0 box-border flex justify-start items-center">
    <div class="nav relative h-screen w-16 bg-dark-blue shadow-3xl border-l-8 border-dark-blue overflow-x-hidden hover:w-60 transition duration-300">
      <ul class="absolute top-0 left-0 w-full pl-2 mt-10">
        <li class="list active">
        <NavLink exact to="/">
          <a>
            <span class="icon"><FontAwesomeIcon icon={faHouse} /></span>
            <span class="title">Home</span>
            </a>
          </NavLink>
        </li>
        <li class="list">
          <NavLink to="/CardA">
          <a>
            <span class="icon"><FontAwesomeIcon icon={faA} /></span>
            <span class="title">CardA</span>
            </a>
          </NavLink>
        </li>
        <li class="list">
          <NavLink to="/CardB">
          <a>
            <span class="icon"><FontAwesomeIcon icon={faB} /></span>
            <span class="title">CardB</span>
            </a>
          </NavLink>
        </li>
        <li class="list">
          <NavLink to="/">
          <a>
            <span class="icon"><FontAwesomeIcon icon={faFilePowerpoint} /></span>
            <span class="title">Slide Web</span>
            </a>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default MenuPage