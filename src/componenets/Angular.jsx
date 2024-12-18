import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
const Angular = () => {

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
      question: "What are the Benefits of Using Angular?",
      answer:
        "There are multiple benefits attached to using Angular. Some of them include Efficient Development, Reliable, and secured web applications, Cross-platform adaptable apps, and mobile-oriented philosophy.        ",
    },
    {
      question:
        "Does WODWES Offers Design Service for Angular Projects?",
      answer:
        "Yes, we do offer design services as per our custom Front-end Angular development services. We deliver everything from wireframes to frameworks with unparalleled design expertise and quality.               ",
    },
    {
      question: "How Much Time WODWES Take to Develop an Angular Project?",
      answer:
        "There is no fixed time for the completion of the Angular development project. Each project takes a different time to complete depending on the factors like Business scale, Project scope, Development requirements, Integrated features, Customization, Functionality, and more. On average, developing Angular-based software from the scratch can take from a few weeks to months.                ",
    },
    {
      question: "Will you give Code Authority After Completing the Project?",
      answer:
        "After we deployed the project, the code authority goes to the owner. Then, he/ she retains all the rights to modify it any way they want and WODWES will have no authority over it.              ",
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
          <span className="text-[#f72d74]">Angular</span>  Development Services
        </h1>
        <p className="text-[#e8e6e6] my-5 lg:my-11 text-lg leading-8 max-w-[500px] ">
        As an enterprise-grade Angular development company, we house a hybrid team 
        with extensive domain expertise and Angular framework integration capabilities
         to develop tailor-built, highly functional, and ready-to-market web solutions. 
        Our detail-oriented developers deeply analyze your business to devise the right blend of 
        front-end and back-end development technologies, delivering intuitive and business-transforming
         Angular web solutions. Fast-paced, interactive applications are our trademark, bringing unparalleled 
        user experience, and claiming your share of online success.
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

      <div className="my-16 mx-auto max-w-[1440px] w-[90%]  z-10  overflow-hidden">
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
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> For Angular Development Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES is an industry-leading Angular
       development company transforming small businesses, startups, and large enterprises 
       with our custom Angular web development services. We aim to create dynamic,
       and high-performing apps to help your business yield digital growth.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className=' border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Expert Angular Development Services</h3>

    </div>
    <p className='leading-7 text-sm'>Our in-house experts are dedicatedly immersed in the 
    Angular web development gamut to provide full-suit Angular-based solutions. From ideation to 
    software launch, we have you covered in each phase of Angular development.</p>
   
<ul className='flex flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>In-depth Angular Consultancy</li>
  <li>Guaranteed Client Satisfaction</li>
  <li>99% Successful Implementation</li>
  
  
</ul>
    </div>





    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Flexible Angular Hiring Models</h3>

    </div>
    <p className='text-sm leading-7'>We offer flexible hiring models considering your budget and business’s 
    development needs. You can avail of a specific Angular web development service, or hire a dedicated team to 
    carry out your full project professionally and budget efficiently.</p>
   
<ul className='flex flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-12 '>
  <li>Hourly or Monthly Hiring Options</li>
  <li>Ready-to-hire Professional Developers</li>
  <li>Budget-friendly Development</li>
  
  
</ul>
    </div>


    <div className='border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Industry-trained Angular Web Developers</h3>

    </div>
   <p className='text-sm leading-7'>WOur dedicated developers have nurtured their expertise in 
   serving the industry for years. With a proven track record of digitally transforming multiple businesses, we collaborate 
   with you to build scalable and ROI-driven Angular-based solutions.</p>
<ul className='flex flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>Years of Industry Service</li>
  <li>Qualified Angular Developers</li>
  <li>Expert Angular Framework Handling</li>
  
  
</ul>
    </div>
      </div>
      </div>


      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[400px] font-extrabold'>
     Our Angular Web  development Services
     </h2>
     
     
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
<div className='  rounded-lg bg-[#f7f7f7] px-3 py-5   hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Angular Development Consultancy</h2>
       <p className='leading-7 mt-4 text-sm'>As an industry-leading Angular development
        company, we offer expert Angular consultancy to guide you throughout the development 
        of your Angular-based software. From giving initial Angularframework understanding to 
        analyzing your business, and using the right Dev technologies,
        we commit to shaping your business for web success.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Angular Migration & Upgadation</h2>
       <p className='leading-7 text-sm'>We understand the evolving nature of technology 
       thus, keep pace with the latest updates to deliver web solutions with new designs, 
       capabilities, and functionalities. Weprovide expert resources to migrate your legacy
        app/site or upgrade it to the latest version/platform, boosting
        your business’s success and dominating the competition through innovation.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Angular Cross-platform Development</h2>
       <p className='leading-7 text-sm'>We are fully aware of the Angular framework's adaptability despite 
       being renowned for front-end development. We leverage this knowledge to create cutting-edge, 
       feature-rich apps, andsites having unparalleled versatility with multiple platforms including progressive web apps,
        open-source projects, JavaScript mobile applications, desktop apps, etc.</p>
       

       </div>





</div>


<div className=' space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Angular Custom-based Development</h2>
       <p className='leading-7 text-sm'>
       Our dedicated team works tirelessly to offer the right Angular development services, 
       transforming your business to achieve your tangible business goals. We comprehensively examine
        yourbusiness’s uniqueness to craft a relevant Angular web development solution that reflects 
       your business identity and lives exactly up to its requirements.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Angular Front-end Development</h2>
       <p className='leading-7 text-sm'>
       We house top-notch Angular developers to deliver user-interactive, 
       and conversion-driving sites, apps, and portals. Our multi-faceted developers
        combine their UI/UX design expertise with the Angularframework handling, creating 
        rich-featured, user-friendly, and high-performing 
       web applications that are designed to yield an optimal user experience.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Angular E-commerce Development
</h2>
       <p className='leading-7 text-sm'>We build rich-featured, user-oriented, 
       e-commerce stores to boost your customer reach globally. E-commerce is an extremely
        competitive place to achieve online business success. Our highly-specializeddevelopers 
        help develop your e-commerce store from the scratch or upgrade
        it to the Angular platform, outperforming the competition, and achieving goals.</p>
       

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
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] max-w-[1440px] mx-auto font-Inter">
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
   From Ideation To Building Fully polished Software Products, We Deliver End-to-end, 
   Secure, And Adaptable Angular Solutions To Businesses Of All Sizes And Sorts</h2>
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
          <p className="text-sm pb-4 text-center">On-time Project Completion</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Collaborative Work Approach</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Custom Angular Development
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Future-proof Software Products</p>
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
            Business-oriented Hiring Models
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
            95% Guaranteed Client Retention
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

export default Angular