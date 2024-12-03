import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme CSS
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Button = () => {

  /* const slides = [
    { id: 1, text: "Design Efficiency" },
    { id: 2, text: "Style Innovation" },
    { id: 3, text: "Creative Solutions" },
    { id: 4, text: "Modern Aesthetics" },
  ]; */
  const slides = [
    'Innovative Solutions',
    'Scalable Platforms',
    'Efficient Workflows',
    'Custom Designs',
  ];
  return (





    <>







<h1 className="text-3xl font-black text-black md:text-4xl md:leading-[60px] lg:text-6xl ">
        We're a Full-Service
      {/*   <div className=" mx-auto inline-block">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        verticalSwipe="natural"
        axis="vertical"
        autoPlay='true'
        useKeyboardArrows
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex justify-center items-center h-full"
          >
            <h2 className="text-4xl p-2 font-bold text-blue-600">{slide.text}</h2>
            
          </div>
          
        ))}
      </Carousel>
    </div> */}



       
         {/* <div className=" inline-block">
          <Slider {...settings}>
            {slides.map((text, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full"
              >
                <span className="text-3xl lg:text-6xl text-[#f72d74] font-black  md:text-4xl md:leading-[60px] ">
                  {text}
                </span>
              </div>
            ))}
          </Slider>
        </div>  */}


				
        <br />
        Development Agency
      </h1>







     {/*  <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>
</div> */}

<section className="z-0 bg-banner-image bg-cover py-24">
  <div className="flex items-center justify-center">
    <div className="mx-auto text-center w-full">
      <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        <div className="flex flex-wrap items-center justify-center">
          <p className=" max-coxs:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            We’re a Full Service
          </p>
          <div className="inline-block mt-4 coxs:mt-2 w-full coxs:w-auto md:w-auto lg:w-[300px]">
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                direction: 'ttb', // Vertical sliding
                autoplay: true,
                interval: 4000,
                speed: 1000,
                arrows: false,
                height:65,
                pagination: false,
              }}
              className="inline-block coxs:w-52 max-cosx:h-[80px] coxs:text-[3xl] md:w-[400px] xl:w-[350px] xl:h-[68px] lg:w-[300px] lg:h-[65px] sm:w-[130px] sm:h-12 md:h-12   "
            >
              <SplideSlide>
                <div className="font-bold text-[#f72d74] coxs:text-3xl md:text-3xl lg:text-6xl xl:text-6xl ">
                  with ease
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="font-bold text-[#f72d74] coxs:text-3xl md:text-3xl lg:text-6xl xl:text-6xl">
                  efficiency
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="font-bold text-[#f72d74] coxs:text-3xl md:text-3xl lg:text-6xl xl:text-6xl">
                  design
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </h1>

      <h2 className="coxs:text-3xl md:text-3xl lg:text-5xl  font-bold xl:text-6xl text-white">
        Development Agency
      </h2>

      <h2 className="py-6 text-xl md:text-2xl font-medium text-[#f72d74] md:my-8">
        Empowering Businesses with Cutting-Edge Web Technologies
      </h2>

      <p className="mb-12 text-white text-sm md:text-base lg:text-lg">
        A web design and development agency crafting seamless web and software
        apps for startups, <br className="max-lg:hidden" />
        businesses, and large enterprises to help them build a strong online
        presence <br className="max-lg:hidden" />
        and thrive in the digital age.
      </p>

      <div className="flex justify-center">
        <button className="bg-[#f72d74] border-2 border-transparent text-white px-8 md:px-14 font-bold py-3 hover:bg-[#282922] hover:border-2 hover:border-[#f72d74] transition-colors duration-300">
          <a href="/contact">Let's Talk</a>
        </button>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Button