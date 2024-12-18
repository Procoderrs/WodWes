
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
const Mern = () => {
useEffect(()=>{
  window.scrollTo(0,0)
},[])

  const imageArray = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
  ];
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show 3 items at once (adjust as per your requirement)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval between slides
  
  
 responsive: [

  {
    breakpoint: 375, // Small screens (sm)
    settings: {
      slidesToShow: 1, // Show 2 slides
    },
  },
      {
        breakpoint: 576, // Small screens (sm)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 992, // Medium screens (md)
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 1200, // Large screens (lg)
        settings: {
          slidesToShow: 3, // Show 4 slides
        },
      },
      {
        breakpoint: 1440, // Extra large screens
        settings: {
          slidesToShow: 3, // Show 5 slides
        },
      },
    ], 
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Speed in milliseconds between slides
    swipe: true, // Enables swipe on touch devices
    touchMove: true,
  };
  const settingsThree = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust based on design
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576, // Screens smaller than 600px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 990, // Screens smaller than 900px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1800, // Screens smaller than 900px
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const faqData = [
    {
      question: "How does WODWES ensure the quality of its MERN stack services?",
      answer:
        "At WODWES, we follow industry-standard best practices and use the latest technologies and frameworks to ensure the highest quality of our MERN stack services. We also conduct thorough testing and quality assurance to ensure your web application is functioning optimally.             ",
    },
    {
      question:
        "What kind of MERN stack services does WODWES offer?",
      answer:
        "WODWES offers a range of MERN stack services, including web application development, UI/UX design, support and maintenance, migration and integration, and consultancy services                    ",
    },
    {
      question: "How can I hire MERN Stack Developers from WODWES?",
      answer:
        "You can easily hire MERN Stack developers from WODWES by contacting us via our website or email. Our team of experts will work with you to identify your business needs and provide customized solutions tailored to your requirements.                       ",
    },
    {
      question: "What sets WODWES apart from other MERN Stack services providers?",
      answer:
        "The MERN Stack services we offer at WODWES are tailored to your business needs. Communication, transparency, and collaboration are key to delivering your web application on time, within budget, and to your satisfaction.",
    },
    
  ];
  return (
   <>

<div className="relative py-16 md:pb-32 md:pt-20 ">
  <img
    src="/product-img.png"
    className="absolute top-0 left-0 w-full h-full  z-0"
    alt="Background"
  />
  <div className="relative w-[90%] mx-auto max-w-[1690px] text-white grid grid-cols-1 gap:10 lg:grid-cols-2   ">
    {/* Grid Layout */}
    
      {/* Left Section */}
      <div className=" ">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl md:leading-10 xl:text-6xl font-black">
          <span className="text-[#f72d74]">MERN</span> Stack Development 
        </h1>
        <p className="text-[#e8e6e6] my-5 lg:my-11 text-lg leading-8 max-w-[500px] ">
        At WODWES, we offer comprehensive MERN stack development services to 
        help businesses build robust, scalable web applications that meet their
         unique needs. Our team of experts uses the latest technologies and best 
         practices to design, develop, and deliver high-quality web applications
          that are fast, responsive, and intuitive. Contact us today to learn more
           about how we can help you harness the 
        power of the MERN stack and take your business to the next level

        </p>
        <Link
              to={"/"}
              className="text-white border-2 border-[#f72d74] w-44 px-9 py-3 hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
      </div>

      {/* Right Section */}
      <div className="relative  max-w-[687px] rounded-xl bg-[#53544e] px-4 py-16 sm:px-8 xl:py-[60px]">
        <h3 className="text-2xl font-semibold xl:text-3xl">Let's discuss your project</h3>
        <p className="text-black mt-3 mb-5 text-base">
          Submit a request and we’ll get in touch within a day
        </p>
        <form>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-6"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-6"
              required
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              className="bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-6"
              required
            />
            <select className="bg-[#a4a6a6] rounded-lg text-[#6d6e6e] w-full px-4 py-6">
              <option value="">About project</option>
              <option value="Web Design">Web Design</option>
              <option value="Web Design UI/UX">Web Design UI/UX</option>
            </select>
            <button
              type="submit"
              className="flex items-center justify-center gap-4 w-full p-4 text-sm font-semibold bg-[#f72d74] text-white"
            >
              <Link to="/">Get a Quote</Link>
              <FontAwesomeIcon icon={faPaperPlane} className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

      <div className="my-16 max-w-[1440px] mx-auto w-[90%]  z-10  overflow-hidden">
        <Marquee speed={150} gradient={false}>
          {imageArray.map((src, index) => (
            <div
              key={index}
              className=" mx-28 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-20    object-cover rounded-full shadow-md"
              />
            </div>
          ))}
        </Marquee>
      </div>


      <div className='py-12 w-[90%] max-w-[1440px] mx-auto '>
      <div className='flex  justify-between md:flex-row gap-10 3xl:gap-40 maxmd:flex-col'>
      <div className='lg:w-[50%] max-w-[480px] '>
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> MERN Stack Development Services ?</h2>
        
        <div className='pb-8'>
        <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3  hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
        </div>
      </div>
      <div className=' lg:w-[50%]'>
      <p className='mb-7  leading-9 text-lg'>Wodwes is a leading software development company 
      with expertise in MERN stack development services.They have a team of skilled developers 
      who are proficient in building complex and scalable web applications using MERN stack.With a
       client-centric approach and a commitment to delivering quality solutions,
       Wodwes is a trusted partner for MERN stack development projects.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>High-End Technology Stack</h3>

    </div>
    
   
<ul className='flex flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>Node Js</li>
  <li>Express JS</li>
  <li>MongoDB</li>
  <li>AppSync</li>
  <li>DynamoDB</li>
  
  
</ul>
    </div>





    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Advanced Development Process</h3>

    </div>
    
   
<ul className='flex flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-12 '>
  <li>Extensive Suits of Tools</li>
  <li> Highly Scalable Solutions</li>
  <li>Interactive UI/UX Designing</li>
  <li>High-Performance Applications</li>
  <li>Front-end & Back-end Compatibility</li>
  
  
</ul>
    </div>


    <div className='border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Diverse Industries & Domains</h3>

    </div>
   
<ul className='flex flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>Education</li>
  <li>Healthcare</li>
  <li>Entertainment</li>
  <li>Business & Retail</li>
  <li>Banking & Finance</li>
  
  
</ul>
    </div>
      </div>
      </div>
      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[430px] font-extrabold'>
     Transforming Your Web Vision Into Reality With MERN Stack Excellence
     </h2>
     
     <p className='mt-7 text-[16px] leading-9'>From UI/UX design to support and maintenance, we offer end-to-end solutions to ensure 
     your web application runs smoothly and meets your business goals. Whether you're building a
      new web application from scratch or looking to scale up your existing one, we have the expertise
       and experience to deliver exceptional MERN stack
      development services that help you stay ahead of the competition.</p>
      <div className='mt-7'>
      <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3 hover:text-white hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
      </div>

     </div>
    
     
<div className=' grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:w-1/2'>

<div className='space-y-4 2xl:space-y-5 '>
<div className='  rounded-lg bg-[#f7f7f7] coxs:px-3 coxs:py-5   hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>MERN Stack Full Consultancy</h2>
       <p className='leading-7 mt-4 text-sm'>Venture into the world of web application 
       development with WODWES. Our team of experts specializes 
       in leveraging the MERN stack to create custom solutions tailoredto your
        business needs. We thoroughly assess your requirements and devise a strategic
         plan that maps out potential opportunities and challenges to ensure a successful
          project outcome. Let us guide you through the process and bring your vision to life. 
          Contact us today to experience the WODWES difference.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>MERN Stack Web Development
</h2>
       <p className='leading-7 text-sm'>Unlock the true potential of web development with WODWES. 
       Our team of seasoned professionals specializes in utilizing the MERN stack architecture to
        create custom webapplications that meet your business needs. We can start from scratch or 
        scale up your existing application while following agile development methodologies to ensure
         timely project delivery. Let us bring your vision to life. Contact us today to
        experience the expertise of our MERN stack web developer</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>MERN Stack Support Service</h2>
       <p className='leading-7 text-sm'>At WODWES, we know that creating a successful MERN 
       stack solution is just the beginning. That's why we offer reliable support and maintenance 
       services toensure your application runs smoothly, from bug fixing to troubleshooting 
       and performance monitoring. We are committed to providing timely assistance, 
       so you can focus on your business and rest easy knowing your application is in good hands. 
       Contact us today to hire our team of expert
        MERN Stack developers, and let us take care of the rest.</p>
       

       </div>





</div>


<div className=' space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>MERN Stack UI/UX Designing</h2>
       <p className='leading-7 text-sm'>At WODWES, we understand the importance
        of a user-friendly interface in creating a successful web solution on the MERN
         stack. We offer bespoke UI/UX designservices tailored to your needs to help you 
         achieve this goal. Our skilled designers create visually stunning and intuitive 
         interfaces that adhere to the highest quality standards and optimization guidelines.
          Contact us today to elevate 
       your MERN stack web solution with our expert UI/UX design services.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>MERN Stack App Development
</h2>
       <p className='leading-7 text-sm'>Join the mobile revolution with WODWES, where we offer
        custom development services for building robust MERN stack mobile applications. 
        Our team of experts uses thelatest technologies and frameworks to design and develop faster,
         more responsive, and highly intuitive apps. We understand that every business has unique needs,
          and we create bespoke solutions tailored to your specific requirements. Contact us today to experience
           the difference with our exceptional 
       MERN Stack developers for your next application.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>MERN Stack Quick Migration
</h2>
       <p className='leading-7 text-sm'>Looking to take your business to the next 
       level with the power of the MERN stack framework? WODWES is here to help with our
        migrationand integration services. Our team of experts will assess the feasibility of 
        the migration or integration, identify potential risks, and provide a detailed plan for
         a seamless transition. We are committed to ensuring your business makes the switch easily,
          so you can focus on what matters most. Contact us today to hire our MERN Stack developers 
          and experience the transformative 
       power of our migration and integration services.</p>
       

       </div>
</div>


</div>





     </div>


     <div className="relative w-full py-12 lg:py-24">
        <img
          src="/section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto max-w-[1440px] font-Inter">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h1 className="text-4xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
              Let's Build Your Dream Website{" "}
              <span className="text-[#f72d74]">Together!</span>
            </h1>
            <p className="text-white text-lg font-Inter">
              Whether you need a website redesign, development from scratch, or
              any other web-related services, team WODWES got you covered. Our
              experienced team of designers and developers will work closely
              with you to create a website that truly represents your vision and
              engages your target audience.
            </p>
          </div>
          {/* Button */}
          <Link
            to={"/contact"}
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]  px-5 py-3 max-w-xs w-44 font-bold text-center "
          >
            Let's Talk
          </Link>
        </div>
      </div>

      <div className='mt-20 py-20 bg-[#f8f8f8]'>
  <div className='w-[90%] max-w-[1440px] mx-auto'>
   <div className='flex mb-14    md:items-center md:justify-between maxmd:flex-col'>
   <h2 className='text-3xl max-w-[633px] leading-10 font-extrabold mb-7'>
   WODWES Is Your Go-to Solution For MERN Stack Development Company. We Aim To Get The Potential
    Audience to Reach And Recognize Your Services</h2>
   <Link
            to={"/contact"}
            className="black border-2 border-[#f72d74] hover:text-white hover:bg-[#f72d74]  px-8 py-3 max-w-xs w-44 font-bold text-center "
          >
            Get Started
          </Link>
   </div>

  </div>
         
  

 


  <div className="w-[90%] mx-auto max-w-[1440px] mt-20">
  <Slider {...settingsThree}>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/domain.png" alt="domain" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Budget-friendly Web Solutions</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">99.9% Effecient Apps And Sites</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Innovation-Driven Applications
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Years OF Legit Industry Service</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img
            src="/competitive.png"
            alt="awards"
            className="h-9 w-9 mx-auto"
          />
          <p className="text-sm pb-4 text-center">
          98% Guaranteed Virtual Growth
          </p>
        </div>
      </div>
    </div>

    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img
            src="/comprehensive.png"
            alt="awards"
            className="h-9 w-9 mx-auto"
          />
          <p className="text-sm pb-4 text-center">
            Qualified Full-Stack Developers
          </p>
        </div>
      </div>
    </div>

    
   
  </Slider>
</div>




 </div>
 <div className="relative w-full py-12 lg:py-24">
        <img
          src="/section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto max-w-[1440px] font-Inter">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h1 className="text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74]'>Hire Remote & Project</span> Based Developers for Wodwes
              
            </h1>
            <p className="text-white text-lg font-Inter">
            Power up your projects with WODWES remote developers. Boost productivity and 
            achieve exceptional results. Get started today to unlock your project's full potential!
            </p>
          </div>
          {/* Button */}
          <Link
            to={"/contact"}
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]  px-5 py-3 max-w-xs w-44 font-bold text-center "
          >
            Let's Talk
          </Link>
        </div>
      </div>

      <div className="my-12 lg:my-16 mx-auto w-[90%] max-w-[1440px]">
        <h2 className="text-left text-2xl font-bold lg:text-3xl">
          Frequently Asked <span className="text-[#f72d74]">Questions!</span>
        </h2>
        <p className="mb-7 mt-4 text-left text-base font-normal text-[#272821]">
          We love hearing about how our work has helped businesses succeed and
          how WODWES became their go-to development team.
        </p>
        <div className="mx-auto md:max-w-[1000px]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-t border-gray-200 first:!border-t-0"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex w-full items-center gap-6 justify-between py-4 md:py-6 maxsm:text-sm"
              >
                <span className="text-left text-base font-semibold text-[#272821] md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`h-9 w-9 flex items-center justify-center text-[#f72d74] font-bold  p-2`}
                >
                  <img src={activeIndex === index ? "/minusicon.png" : "/plusicon.png"} alt="" />
                </span>
              </button>
              {activeIndex === index && (
                <p className="py-4 text-base text-[#272821]">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

   </>
  )
}

export default Mern