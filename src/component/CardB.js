import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function CardB() {
  return (
    <div class="flex justify-center items-center">
      <div class="max-w-sm rounded-md overflow-hidden shadow-lg mt-[8rem] mx-5 md:max-w-md hover:left-[50px] hover:transform-gpu hover:-translate-x-2 hover:-translate-y-2 hover:shadow-6xl">
        <img
          class="CardB-pic w-full"
          src="https://images.wunderstock.com/White-And-Brown-House_vPXatHMabMqp_800.jpeg"
          alt="CardB Pic"
        />
        <div class="divide-y divide-slate-70">
          <div class="pl-6 pr-8 py-4">
            <div class="text-gray-600 font-bold text-lg mb-2">
              DETACHED HOUSE・5Y OLD
            </div>
            <div class="font-normal text-4xl mb-2">$ 750,000</div>
            <p class="text-gray-600 font-normal text-lg">
              742 Evergreen Terrace
            </p>
          </div>

          <div class="pl-6 pr-8 pt-4 pb-2 sm:text-sm">
            <div class="flex flex-nowrap flex-row justify-between items-stretch">
              <div class="flex flex-nowrap flex-row items-center mb-2">
                <div class="text-slate-600">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div class="text-black font-bold text-lg mx-2">3</div>
                <p class="text-gray-600 font-normal text-lg">Bedrooms</p>
              </div>
              <div class="flex flex-nowrap flex-row ml-2 items-center mb-2">
                <div class="text-slate-600">
                  <FontAwesomeIcon icon={faBath} />
                </div>
                <div class="text-black font-bold text-lg mx-2">3</div>
                <p class="text-gray-600 font-normal text-lg">Bedrooms</p>
              </div>
            </div>
          </div>

          <div class="pl-6 pr-8  bg-slate-100">
            <div class="flex flex-nowrap flex-col">
              <div class="text-gray-500 font-bold text-sm my-3">PEALTOR</div>
              <div class="flex flex-row mb-3">
                <img
                  class="rounded-full w-14 h-14"
                  src="https://exchange.bitsguild.com/assets/landing/images/testimonial.png"
                  alt="CardB Pic"
                />
                <div class="flex flex-nowrap flex-col ml-3">
                  <div class="text-black font-bold text-base">
                    Tiffany Heffner
                  </div>
                  <div class="text-gray-500 font-medium text-base">
                    (555) 555-4321
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardB;
