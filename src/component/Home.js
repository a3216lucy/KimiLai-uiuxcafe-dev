import React from 'react';

function Home() {
  return (
    <>
      <h1 class="right-10 text-center text-2xl font-medium">
        UIUX Cafe 測試題目
      </h1>
      <div class="flex flew-wrap items-center justify-around">
        <div class="flex flex-col sm:w-full">
          <img src="https://i.imgur.com/giMTYdJ.png" />
          <p class="text-center text-2xl font-medium">CardA</p>
        </div>
        <div class="flex flex-col sm:w-full">
          <img src="https://i.imgur.com/giMTYdJ.png" />
          <p class="text-center text-2xl font-medium">CardB</p>
        </div>
        <div class="flex flex-col sm:w-full">
          <img src="https://i.imgur.com/giMTYdJ.png" />      
          <p class="text-center text-2xl font-medium">Slide Web</p>
        </div>
      </div>
    </>
  );
}

export default Home;
