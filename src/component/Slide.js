import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

class Slide extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={"YOUR_LICENSE_KEY"}
        navigation = {true}
        scrollingSpeed = {1000} 
        slidesNavigation = {true}
        slidesNavPosition = {'bottom'}
 
        render={({ state,  }) => {
          return (
            <div class="fullpage-wrapper">
              <div className="section bg-orange h-[100vh] flex items-center">
                <div class="container flex flex-col items-center text-center align-middle">
                  <div>
                    <h1 class="text-center text-white font-bold text-10xl mt-16">
                      fullPage
                    </h1>
                    <h3 class="text-center text-3xl text-zinc-300">
                      Create Beautiful Fullscreen Scrolling Websites
                    </h3>
                  </div>
                  <div>
                    <button class="button text-orange bg-white mx-3 my-8">
                      <a href="https://alvarotrigo.com/fullPage/extensions/" target="_blank" >
                        Extensions
                      </a>
                    </button>
                    <button class="button text-white bg-darker-blue mx-3 my-8">
                      <a href="https://github.com/alvarotrigo/fullpage.js/archive/master.zip" target="_blank" >
                        Download
                      </a>
                    </button>
                    <button class="button text-orange bg-white mx-3 my-8">
                      <a href="https://github.com/alvarotrigo/fullpage.js" target="_blank" >
                        View on GitHub
                      </a>
                    </button>
                  </div>
                  <img
                    class="align-bottom mt-[17rem]"
                    src="https://alvarotrigo.com/fullPage/imgs/trusted-by.png"
                  />
                </div>
              </div>
              <div className="section bg-light-blue h-[100vh] flex flex-col items-center justify-center">
                <div class="container flex flex-row items-center">
                  <div class="slide flex items-center" data-anchor="slide1">
                    <div class="flex flex-col">
                      <h1 class="text-center text-white font-bold text-10xl mt-16">
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
                  <div class="slide flex items-center" data-anchor="slide2">
                    <div class="flex flex-col items-center">
                      <h1 class="text-center text-white font-bold text-10xl mt-16">
                        The best!
                      </h1>
                      <h3 class="text-center text-3xl text-white">
                        Proud of being the most complete framework of its kind.
                      </h3>
                      <h3 class="text-center text-3xl text-white">
                        Trusted by the most innovative companies.
                      </h3>
                      <img class="mt-[5rem]" src="https://alvarotrigo.com/fullPage/imgs/trusted-by-big.png" />
                    </div>
                  </div>
                  <div class="slide flex items-center" data-anchor="slide3">
                    <div class="flex flex-col items-center">
                      <h1 class="text-center text-white font-bold text-10xl mt-16">
                        Compatible
                      </h1>
                      <h3 class="text-center text-3xl text-white">
                        Working in modern and old browsers too! Even IE 9!
                      </h3>
                      <h3 class="text-center text-3xl text-white">
                        Make a beautiful site for all! Not just a few!
                      </h3>
                      <img class="mt-[5rem]" src="https://alvarotrigo.com/fullPage/imgs/compatible.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section bg-pink h-[100vh] flex flex-col items-center justify-center">
                <div class="container flex flex-row items-center">
                  <div class="w-2/5 mx-20 flex flex-col items-start justify-start">
                    <h1 class="text-left text-white font-bold text-10xl">
                      Easy!
                    </h1>
                    <h3 class="text-2xl text-white text-left">
                      fullPage.js is designed to be easy to use and customize. It
                      includes tens of examples, great documentation and both
                      community and personal support.
                    </h3>
                  </div>
                  <div class="w-2/5">
                    <a href="https://codepen.io/alvarotrigo/pen/qqabrp"
                      alt="see in codepen" target="_blank" >
                      <img src="https://i.imgur.com/DdbDOyx.png" />
                    </a>
                  </div>
                </div> 
              </div>
              <div className="section bg-yellow h-[100vh] flex flex-col items-center justify-center">
                <div class="container">
                  <div>
                    <h1 class="text-center text-white font-bold text-10xl mt-16">
                      Touch me!
                    </h1>
                    <h3 class="text-center text-3xl text-white z-50">
                      Designed for mobiles and tablets, totally responsive.
                    </h3>
                    <h3 class="text-center text-3xl text-white z-50">
                      Because not only kids like to grab things.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
      );
    }}
  />
    )
}
}

export default Slide;
