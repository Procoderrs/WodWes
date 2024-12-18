import React from 'react'

import { Link } from 'react-router-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
 import Marquee from 'react-fast-marquee'

 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
const Shopify = () => {

 useEffect(()=>{
window.scrollTo(0,0)
},[])
 

  const faqData = [
    {
      question: "what makes WODWES the best Shopify development agency?",
      answer:
        "At WODWES, we follow a customer-centric approach ensuring transparency to develop the Shopify store that caters to your project needs. Moreover, as a specialized Shopify development agency, we have extended experience in building stores for small to enterprise-level businesses and rendering cost-effective development solutions that are under your budget. We not only take requirements and deliver projects but keep you updated about the progress.                  ",
    },
    {
      question:
        "How long will it take to set up and launch my shopify store?",
      answer:
        "Setting up a Shopify store usually takes 3-4 weeks. Moreover, if you want to build a store/website from scratch then it completely varies according to the project scope and custom requirements. Reach out to us at https://wodwes.com/wodwes/ to book a free consultation and get a proposal that includes timelines.           ",
    },
    {
      question: "What service will you offer me after launching the shopify website?",
      answer:
        "Our job is not done after launching your store or website. After it, we provide continuous maintenance and support services to keep it up to the performance. Additionally, we also offer marketing services to get your business more sales and conversions              ",
    },
    {
      question: "Can you redesign my existing Shopify theme?",
      answer:
        "We at WODWES provide Shopify theme customization and development services that will allow us to redesign your existing theme to your new requirements.               ",
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 items at once (adjust as per your requirement)
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

  const imageArray = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
  ];


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
  return (
    <>

<div className="relative py-16 md:pb-32 md:pt-20 ">
  <img
    src="/product-img.png"
    className="absolute top-0 left-0 w-full h-full  z-0"
    alt="Background"
  />
  <div className="relative w-[90%] mx-auto max-w-[1690px] gap-10 text-white grid grid-cols-1 gap:10 lg:grid-cols-2   ">
    {/* Grid Layout */}
    
      {/* Left Section */}
      <div className=" ">
        <h1 className="text-3xl sm:text-4xl max-w-[400px] md:text-4xl lg:text-5xl md:leading-10 xl:text-6xl font-black">
          <span className="text-[#f72d74]">Why</span> Choose WODWES For Shopify Development Services?
        </h1>
        <p className="text-[#e8e6e6] my-5 lg:my-11 text-lg leading-8 max-w-[500px] ">
        Hire the most proficient team for Shopify Development Services. We at WODWES 
        have a team of dedicated shopify experts building scalable, robust, 
        and high-performing e-commerce solutions to help you stay competitive.
         With years of experience and expertise, we have made a distinctive mark as a leading shopify development 
        agency transforming businesses with high-quality solutions.
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

      <div className="my-16   mx-auto max-w-[1440px] w-[90%]  overflow-hidden">
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


      <div className='py-20 w-[90%] max-w-[1440px] mx-auto '>
      <div className='flex  justify-between md:flex-row gap-10 3xl:gap-40 maxmd:flex-col'>
      <div className='lg:w-[50%] max-w-[422px] '>
        <h2 className='text-3xl mb-8 font-black'><span className='text-[#f72d74]'>undefined</span>  </h2>
        
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
      <p className='mb-7 leading-9 text-lg '>WODWES is an experienced and professional 
      Shopify development company that provides a wide range of services to help businesses of
       all sizes to build and grow their online stores. There are several 
       reasons why choosing WODWES for your Shopify development needs can be a great decision.WODWES offers exceptional
       services that you would never find anywhere else.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74]  box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center gap-5 '>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-[26px] font-extrabold'>Shopify Development Solutions</h3>

    </div>
   
<ul className='flex flex-col gap-5 list-disc pl-5 mt-7 pb-7 '>
  <li>Shopify Marketing Automation Solutions</li>
  <li>Shopify B2B & B2C Marketplaces</li>
  <li>Shopify Enterprise Solutions</li>
  <li>Shopify Speed Optimization</li>
  <li>Shopify POS Development</li>

  
</ul>
    </div>





    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-[26px] font-extrabold'>Shopify Integration Solutions</h3>

    </div>
   
<ul className='flex flex-col gap-5 list-disc pl-5 mt-7 '>
  <li>Shopify ERP Integration</li>
  <li>Shopify CRM Integration</li>
  <li>Shopify Migration Support</li>
  <li>Loyalty Program Integration</li>
  <li>Payment Gateway Integration</li>
  
</ul>
    </div>





    <div className='border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-[26px] font-extrabold'>Shopify Migration Support</h3>

    </div>
   
<ul className='flex flex-col gap-5 list-disc pl-5 mt-7 '>
  <li>WooCommerce to Shopify</li>
  <li>Magento to Shopify</li>
  <li>Joomla to Shopify</li>
  <li>Drupal to Shopify</li>
  <li>OpenCart to Shopify</li>
  
</ul>
    </div>
      </div>
      </div>


      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between pb-24 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl font-extrabold'>
     Premimum Shopify Development Services
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

       <h2 className='text-xl mt-4 font-extrabold'>Shopify Store Design Services</h2>
       <p className='leading-7 mt-4 text-sm'>Get your store built by a team of experts - 
       From revamping existing design to creating from scratch, we got you covered. 
       With our Shopifystore design services, we can help you build mobile-ready,
        highly intuitive, and usable stores for all types of eCommerce businesses. 
        By understanding your brand, we can customize the design that resonates with 
        your targeted audience and delivers an excellent customer experience. 
        Moreover, our team of Shopify designers creates uncluttered, 
       appealing, and high-converting designs that drive more sales.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Shopify App Development Services</h2>
       <p className='leading-7 text-sm'>With years of experience and 
       certified app developers, we provide Shopify app development 
       services to develop custom apps and enhance the functionality 
       of your storefront.As a specialized Shopify development agency, 
       we build add-on features in existing apps customized to your 
       specific requirements and needs. From marketing, custom pricing, 
       and inventory to order management apps, WODWES is your stop.
        Our proficiency in Shopify app enables us to deliver end-to-end solutions.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Shopify Migration Services</h2>
       <p className='leading-7 text-sm'>Get the best of Shopify migration services
        from WODWES to migrate your existing website to Shopify without any hassle. 
        Migration from legacy systems to anyother platform comes with complexity - 
        With extended proficiency and experience, our experts in seamless and risk-free
         migration with no downtime and data loss. Our migration services include Magento to Shopify migration,
        WooCommerce to Shopify migration, OpenCart to Shopify migration, and more</p>
       

       </div>





</div>


<div className=' space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Shopify Custom Theme Development Services</h2>
       <p className='leading-7 text-sm'>Improve the outlook of your storefront with our Shopify custom theme 
       development services. We develop pixel-perfect, responsive, and visually appealing themes 
       that highlight the client’sbrand identity. With years of experience and proficiency, 
       our Shopify web designers develop custom themes that are completely SEO-friendly and can
        increase the conversion rate for your business. 
       We can also help you in Shopify PWA theme development to attract prospective customers.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Shopify Integration Services</h2>
       <p className='leading-7 text-sm'>Integrate your Shopify store with third-party 
       apps & extensions seamlessly and without any hassle - As a specialized Shopify
        Integration services provider, we help clientsconnect their storefront to other 
        applications, marketplaces, e-commerce platforms, and CRM & ERP systems. Our 
        skilled Shopify developers proffer multiple integration solutions that include 
        payment gateway integrations, Shipping & Marketing channel integration,
         POS integration, Social Media Integration, Reporting, and Accounting integration. 
         By streamlining your sales and marketing operations utilizing our services,
        we help eCommerce businesses to scale and grow on the Shopify platform.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Shopify Plus Development Services</h2>
       <p className='leading-7 text-sm'>As a Shopify partner agency, 
       we provide Shopify Plus Development Services to enterprise-level
        businesses to drive high-volume sales and revenue.
         We have an in-house teamof Shopify Plus developers with 
         full-cycle Shopify Plus development solutions, including 
         custom theme development, store setup, migration and maintenance 
         support, custom app development, design, and optimization services. 
         With Shopify Plus integration service, we help clients with all 
       types of integrations to take their online business to the next level.</p>
       

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
            <h1 className="text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
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
   At Wodwes Shopify Services, We Are Recognized For Our Functional Expertise And Dedication To Client Satisfaction
    Across All E-Commerce Store Digital Growth Domains. </h2>
   <Link
            to={"/contact"}
            className="black border-2 border-[#f72d74] hover:text-white hover:bg-[#f72d74]  px-8 py-3 max-w-xs w-44 font-bold text-center "
          >
            Get Started
          </Link>
   </div>

  </div>
         
  

 


  <div className="w-[90%] max-w-[1440px] mx-auto mt-20">
  <Slider {...settingsThree}>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/domain.png" alt="domain" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">House Of Shopify Experts</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Top-Notch Methologies</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Flexible Engagement Model
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">24/7 Fast Support</p>
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
            Strong Quality Assurance Process
          </p>
        </div>
      </div>
    </div>
   
  </Slider>
</div>
 </div>


 <div className='pt-20 pb-10 w-[90%] mx-auto max-w-[1440px]'>
  <h2 className='text-3xl font-bold'>Our Happy <span className='text-[#f72d74]'>Clients</span></h2>
  <p className='mt-5 leading-8 text-lg mb-5 max-w-[880px]'>We love hearing about how our work has helped businesses succeed and how WODWES became their go-to
  development team. Don't just take our word for it - read what our satisfied clients have to say!</p>
  <button>
  <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3 hover:text-white hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
  </button>
  <div className="mt-20 mx-auto max-w-9xl">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                  <img src="/shopify.png" alt="php" className="w-8 h-8" />
                  


                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://www.eslscadigitaldataschool.com/" className="w-full lg:w-[50%]">
              <img
                src="/cpap.png"
                alt="base"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>






        {/* Slide 2 */}
        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+8%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+8.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">

                
                  <img src="/shopify.png" alt="php" className="w-8 h-8" />                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://leoshine.com/" className="w-full lg:w-[50%]">
              <img
                src="/leoshine.png"
                alt="leoshine"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>



        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+8%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/shopify.png" alt="php" className="w-8 h-8" />
                  

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/vivitar.png"
                alt="vivitar"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>


        



       


        

        
        


       


        


      </Slider>
    </div>







    <div className="mt-20 mx-auto w-[90%]">
<Slider {...settingsTwo}>
        {/* Slide 1 */}
        <div className="coxs:px-12 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/cpaplogo.png" alt="logo" className="h-28 w-32" />
        </div>

        {/* Slide 2 */}
        <div className=" coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/leoshinelogo.png" alt="logo" className="h-28 w-32" />
        </div>

        {/* Slide 3 */}
        <div className="coxs:px-12 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/vivatar.png" alt="logo" className="h-28 w-32" />
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
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] max-w-[1440px] mx-auto font-Inter">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h1 className="text-4xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
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
        <h2 className="text-left coxs:text-2xl font-bold lg:text-3xl">
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
                  className={`h-9 w-9 flex items-center justify-center p-2 `}
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

export default Shopify