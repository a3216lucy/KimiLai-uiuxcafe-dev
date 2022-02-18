import React from 'react';


function SlidePage() {
  return (
    <body>
      <div class="main">
      <nav class="navbar flex flex-wrap justify-between items-center mr-7">
            <ul class="menu">
              <li class="">
                <a
                  href="https://alvarotrigo.com/fullPage/#"
                  class="text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href="https://alvarotrigo.com/fullPage/#examples"
                  class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="https://alvarotrigo.com/fullPage/pricing/"
                  class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alvarotrigo/fullPage.js/#fullpagejs"
                  class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="https://alvarotrigo.com/contact/"
                  class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        <section class="section bg-orange flex items-center" id="page-1">
          <div class="container flex flex-col items-center text-center align-middle">
            <div>
              <h1
                id="intro-hero"
                class="text-center text-white font-bold text-10xl mt-16"
              >
                fullPage
              </h1>
              <h3 class="text-center text-3xl text-zinc-300">
                Create Beautiful Fullscreen Scrolling Websites
              </h3>
            </div>
            <div>
              <button class="button text-orange bg-white mx-3 my-8">
                <a href="https://alvarotrigo.com/fullPage/extensions/">
                  Extensions
                </a>
              </button>
              <button class="button text-white bg-darker-blue mx-3 my-8">
                <a href="https://github.com/alvarotrigo/fullpage.js/archive/master.zip">
                  Download
                </a>
              </button>
              <button class="button text-orange bg-white mx-3 my-8">
                <a href="https://github.com/alvarotrigo/fullpage.js">
                  View on GitHub
                </a>
              </button>
            </div>
            <img
              class="align-bottom mt-[17rem]"
              src="https://alvarotrigo.com/fullPage/imgs/trusted-by.png"
            />
          </div>
        </section>

        <section class="section bg-light-blue" id="page-2">
          <div class="container flex flex-col items-center text-center align-middle">
            <div class="slide" data-anchor="slide1">
              <div>
                <h1
                  id="intro-hero"
                  class="text-center text-white font-bold text-10xl mt-16"
                >
                  Open
                </h1>
                <h3 class="text-center text-3xl text-white">
                  fullPage.js is actively maintained and community driven.
                </h3>
                <h3 class="text-center text-3xl text-white">
                  Solving developers' issues since 2013.
                </h3>
              </div>
            </div>
            <div class="slide" data-anchor="slide2">
              <div>
                <h1
                  id="intro-hero"
                  class="text-center text-white font-bold text-10xl mt-16"
                >
                  Open
                </h1>
                <h3 class="text-center text-3xl text-white">
                  fullPage.js is actively maintained and community driven.
                </h3>
                <h3 class="text-center text-3xl text-white">
                  Solving developers' issues since 2013.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section class="section bg-pink flex items-center" id="page-3">

        <div class="container relative overflow-hidden"> 
            <div class="slider flex w-[500%] h-[55rem] translate-x-0">

                <div class="box1 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the first Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                    </div> 
                </div>                               
                
                <div class="box2 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the second Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p> 
                    </div> 
                </div>
                                
                <div class="box3 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the third Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>  
                    </div>
                </div>
              
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
            <div class="trail">
                    <div class="box1 active">1</div>
                    <div class="box2">2</div>
                    <div class="box3">3</div>
            </div>
        </div> 

      
        </section>
        <section class="section bg-yellow flex items-center justify-center" id="page-4">
          <div class="container">
            <div>
              <h1
                id="intro-hero"
                class="text-center text-white font-bold text-10xl mt-16"
              >
                Touch me!
              </h1>
              <h3 class="text-center text-3xl text-white">
                Designed for mobiles and tablets, totally responsive.
              </h3>
              <h3 class="text-center text-3xl text-white">
                Because not only kids like to grab things.
              </h3>
            </div>
            <img class="z-10 text-center" src="https://alvarotrigo.com/fullPage/imgs/touch-responsive.jpg" />
          </div>
        </section>
      </div>
    </body>
  );
}

export default SlidePage;


{/* <div class="container flex flex-row items-center">
<div class="w-2/5 mx-20">
  <h1
    id="intro-hero"
    class="text-left text-white font-bold text-10xl mt-16"
  >
    Easy!
  </h1>
  <h3 class="text-3xl text-white text-left">
    fullPage.js is designed to be easy to use and customize. It
    includes tens of examples, great documentation and both
    community and personal support.
  </h3>
</div>
<div class="w-2/5">
  <a
    href="https://codepen.io/alvarotrigo/pen/qqabrp"
    alt="see in codepen"
  >
    <img src="https://i.imgur.com/DdbDOyx.png" />
  </a>
</div>
</div> */}