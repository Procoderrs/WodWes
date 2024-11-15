import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Marquee from "react-fast-marquee";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const HomeSection = () => {
  // Array of image paths
  const imageArray = [
    "./img-1.png",
    "./img-2.png",
    "./img-3.png",
    "./img-4.png",
    "./img-5.png",
    "./img-6.png"
  ];



  

  return (
    <div>
      <Nav />

      <section className="z-0 bg-banner-image bg-cover py-28">
  <div className="flex items-center justify-center">
    <div className="mx-auto w-[90%] max-w-[950px] text-center lg:w-full">
      <h1 className="text-3xl font-black text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl">
        We're a Full-Service 
        {/* <div className="inline-block ">
        
        <div className="overflow-hidden flex flex-col items-center justify-center w-44 h-8  bg-pink-300 text-center whitespace-nowrap animate-marquee">
      <p className="text-2xl px-10 py-4 mx-4 text-center">Design</p>
      <p className="text-xl mx-4">Effeciency</p>
      <p className="text-xl mx-4">Effort</p>
      <p className="text-xl mx-4">Design</p>
    </div>
        </div> */}

        <br className="" />
        
        
           {/* <span className="inline overflow-hidden ">
            <Marquee gradient={false} direction="up" speed={50} className="text-pink-500 text-xl p-4 ">
             <div className=" w-[400px] p-4" >
             <span className="">Design</span>
              <span className="">with ease</span>
              <span className="mr-4">Efficiency</span>
             </div>
            </Marquee>
          </span>  */}
        
        Development Agency
      </h1>
      <h2 className="py-6 text-xl font-medium text-[#f72d74] md:my-8">
        Empowering Businesses with Cutting-Edge Web Technologies
      </h2>
      <p className="mb-12 text-white">
        A web design and development agency crafting seamless web and software apps for startups,
        <br className="max-lg:hidden" />
        businesses, and large enterprises to help them in building a strong online presence
        <br className="max-lg:hidden" />
        and thrive in the digital age.
      </p>
      <div className="flex justify-center">
        <button className="bg-[#f72d74] border-2 border-transparent text-white px-14 font-bold py-3 hover:bg-[#282922] hover:border-2 hover:border-[#f72d74] transition-colors duration-300">
          <a href="#">Let's Talk</a>
        </button>
      </div>
    </div>
  </div>
</section>


      <div className="my-9 mx-6 lg:mx-18">
  <div className="grid lg:grid-cols-2 gap-6 p-4 lg:p-6">
    <div className="px-3 lg:pr-8 flex items-start justify-center xl:max-w-[690px] flex-col">
      <h2 className="xl:text-3xl text-4xl font-extrabold">
        <span className="text-[#f72d74]">Empowering Digital Dreams:</span> Our Commitment to Crafting Exceptional Designs and Solutions for a Connected World.
      </h2>
      <p className="pb-10 mt-6 leading-9 text-lg font-normal">
      At our design and development agency, we are dedicated to empowering your digital dreams. Our mission is to create exceptional designs and innovative solutions that resonate with your audience, drive growth, and leave a lasting impact. We blend creativity and technology to build digital experiences that bridge the gap between vision and reality. We believe in collaboration, quality, and exceeding expectations. With us, you'll find a partner committed to transforming your ideas into digital success stories and helping you thrive in today's interconnected world.      </p>
      <button className="bg-white font-Inter px-14 py-3 text-black hover:bg-[#f72d74] hover:text-white border-2 border-[#f72d74] font-medium">
        <a href="#">Get Started</a>
      </button>
    </div>

    <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 comd:grid-cols-2 ">
      {[
        { count: "60+", label: "Clients" },
        { count: "6", label: "Years Experience" },
        { count: "90+", label: "Completed Projects" },
        { count: "3", label: "Achievements" },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex items-center flex-col justify-center lg:max-w-[690px] shadow font-Inter border rounded-md  "
        >
          <h3 className="text-[#f72d74] text-4xl font-extrabold">{stat.count}</h3>
          <p className="text-lg font-medium  text-[#282922]">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Infinite Scroll Image Gallery */}
      <div className="my-16 mx-16  bg-white overflow-hidden">
        <Marquee speed={150} gradient={false}>
        {imageArray.map((src, index) => (
            <div key={index} className="image-wrapper mx-28">
            <img
              
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-20    object-cover rounded-full shadow-md"
            />
            </div>
          ))}
          </Marquee>
            </div>

            <section>
              
            </section>
			 










    
       
    </div>
  );
};

export default HomeSection;


