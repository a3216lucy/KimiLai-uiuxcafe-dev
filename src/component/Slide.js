import React from 'react';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

class Slide extends React.Component {
  render() {
    return (
      <ReactFullpage
        navigation = {true}
        scrollingSpeed = {1000} 
        slidesNavigation = {true}
        slidesNavPosition = {'bottom'}
 
        render={() => {
          return (
          <>
            <ul class="fixed top-[2rem] left-[2rem] sm:left-[4rem] z-9999">
              <li class="text-white font-medium text-2xl cursor-pointer hover:text-dark-blue">
                <Link exact to={process.env.PUBLIC_URL + '/'}>
                Home
                </Link>
                </li>
            </ul>
            <div class="fullpage">
              <div className="section bg-orange h-[100vh] text-center">
                <div class="items-center">
                  <h1 class="text-center text-white font-bold text-7xl md:text-10xl mt-16">
                    fullPage
                  </h1>
                  <h3 class="text-center text-3xl md:text-5xl text-zinc-300 py-6 mx-12">
                    Create Beautiful Fullscreen Scrolling Websites
                  </h3>
                  <div class="flex flex-col md:flex-row justify-center">
                    <button class="button text-orange bg-white mx-20 md:mx-3 my-2 md:my-8 hover:bg-transparent hover:text-white hover:border-white hover:border-2">
                      <a href="https://alvarotrigo.com/fullPage/extensions/" target="_blank" >
                        Extensions
                      </a>
                    </button>
                    <button class="button text-white bg-darker-blue mx-20 md:mx-3 my-2 md:my-8 hover:bg-transparent hover:text-darker-blue hover:border-darker-blue hover:border-2">
                      <a href="https://github.com/alvarotrigo/fullpage.js/archive/master.zip" target="_blank" >
                        Download
                      </a>
                    </button>
                    <button class="button text-orange bg-white mx-20 md:mx-3 my-2 md:my-8 hover:bg-transparent hover:text-white hover:border-white hover:border-2">
                      <a href="https://github.com/alvarotrigo/fullpage.js" target="_blank" >
                        View on GitHub
                      </a>
                    </button>
                  </div>
                  <img
                    class="align-bottom mt-[16rem] m-auto"
                    src="https://alvarotrigo.com/fullPage/imgs/trusted-by.png"
                  />
                </div>
              </div>
              <div className="section bg-light-blue h-[100vh] items-center justify-center">
                <div class="items-center">
                  <div class="slide flex items-center" data-anchor="slide1">
                    <div class="flex flex-col">
                      <h1 class="text-center text-white font-bold text-7xl md:text-10xl mt-16">
                        Open
                      </h1>
                      <h3 class="text-center text-3xl md:text-5xl md:my-2 text-white pt-6 mx-12">
                        fullPage.js is actively maintained and community driven.
                      </h3>
                      <h3 class="text-center text-3xl md:text-5xl text-white mx-12">
                        Solving developers' issues since 2013.
                      </h3>
                    </div>
                  </div>
                  <div class="slide flex items-center" data-anchor="slide2">
                    <div class="flex flex-col items-center">
                      <h1 class="text-center text-white font-bold text-7xl md:text-10xl mt-16">
                        The best!
                      </h1>
                      <h3 class="text-center text-3xl md:text-5xl md:my-2 text-white pt-6 mx-12">
                        Proud of being the most complete framework of its kind.
                      </h3>
                      <h3 class="text-center text-3xl md:text-5xl  text-white mx-12">
                        Trusted by the most innovative companies.
                      </h3>
                      <img class="mt-[5rem] m-auto" src="https://alvarotrigo.com/fullPage/imgs/trusted-by-big.png" />
                    </div>
                  </div>
                  <div class="slide flex items-center" data-anchor="slide3">
                    <div class="flex flex-col items-center">
                      <h1 class="text-center text-white font-bold text-7xl md:text-10xl mt-16">
                        Compatible
                      </h1>
                      <h3 class="text-center text-3xl md:text-5xl md:my-2 text-white pt-6 mx-12">
                        Working in modern and old browsers too! Even IE 9!
                      </h3>
                      <h3 class="text-center text-3xl md:text-5xl text-white mx-12">
                        Make a beautiful site for all! Not just a few!
                      </h3>
                      <img class="mt-[5rem] m-auto" src="https://alvarotrigo.com/fullPage/imgs/compatible.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section bg-pink h-[100vh] items-center justify-center">
                <div class="items-center">
                  <div class="flex flex-col items-center justify-center">
                    <h1 class="text-center text-white font-bold text-7xl md:text-10xl">
                      Easy!
                    </h1>
                    <h3 class="text-3xl md:text-5xl md:my-2 text-white text-center pt-6 mx-12">
                      fullPage.js is designed to be easy to use and customize. It
                      includes tens of examples, great documentation and both
                      community and personal support.
                    </h3>
                  </div>
                </div> 
              </div>
              <div className="section bg-yellow h-[100vh] items-center justify-center">
                <div class="items-center">
                  <div>
                    <h1 class="text-center text-white font-bold text-7xl md:text-10xl mt-16">
                      Touch me!
                    </h1>
                    <h3 class="text-center text-3xl md:text-5xl md:my-2 text-white pt-6 mx-12">
                      Designed for mobiles and tablets, totally responsive.
                    </h3>
                    <h3 class="text-center text-3xl md:text-5xl text-white mx-12">
                      Because not only kids like to grab things.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </>
      );
    }}
  />
    )
}
}

export default Slide;
