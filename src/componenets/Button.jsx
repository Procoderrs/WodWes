import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Button = () => {

  const slides = [
    { id: 1, text: "Design Efficiency" },
    { id: 2, text: "Style Innovation" },
    { id: 3, text: "Creative Solutions" },
    { id: 4, text: "Modern Aesthetics" },
  ];
  return (





    <>


<div className="w-64 h-96 mx-auto">
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
            className="flex justify-center items-center h-full bg-blue-300"
          >
            <h2 className="text-2xl font-bold text-blue-600">{slide.text}</h2>
            
          </div>
          
        ))}
      </Carousel>
    </div>






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


<p className='bg-green-500'>hello</p>
    </>
  )
}

export default Button