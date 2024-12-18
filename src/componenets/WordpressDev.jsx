import React from 'react'
import { Link, useFetcher} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import Marquee from 'react-fast-marquee'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
const WordpressDev = () => {

useEffect(()=>{
window.scrollTo(0,0)
},[])
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


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const faqData = [
    {
      question: "How much does it cost to hire a WordPress developer?",
      answer:
        "The cost of hiring a WordPress developer always depends on your project requirements. Additionally, we have a fixed and hourly pricing model that you can opt for according to your budge             ",
    },
    {
      question:
        "How does the WordPress development process work?",
      answer:
        "When you choose WODWES for WordPress development services, we will share the complete project timeline and plan with you and assign a dedicated project manager, account manager, and developer for smooth execution and deliveries.           ",
    },
    {
      question: "Do you sign an NDA?",
      answer:
        "Yes, we do sign NDA (Non-Disclosure Agreement) to protect and secure your information. We also sign NDA with our developers and team, who are involved in projects.         ",
    },
    {
      question: "Can you help me  migrate my existing website to WordPress?",
      answer:
        "Yes, we provide WordPress migration services to help clients in smooth and hassle-free migration from any platform to WordPress. To get started, please email us at https://wodwes.com/.        ",
    },
    
  ];
  return (
    <>


<div className="relative w-full py-12 lg:py-20">
        <img
          src=" /product-img.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1690px] text-white z-10">

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 '>

        
          <div className="flex   flex-col  mb-5  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="lg:text-6xl coxs:text-3xl font-black font-Inter  sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74]'>WordPress</span>  Development 
              </h1>
              <p className="text-[#e8e6e6] mt-5 mb-5 text-lg leading-8 font-Inter max-w-[637px]">
              WODWES is a trusted WordPress development company building ROI-driven solutions that 
              deliver security, control, and high-end functionality to increase the efficiency of your business. 
              With an experienced team of WordPress developers, we offer a wide range of professional WordPress 
              design and development services around the globe. We follow agile methodologies and best and proven
               practices to develop feature-enriched 
              WordPress solutions that allow exponential growth of a business.
              </p>

              <Link
              to={"/"}
              className="text-white border-2 border-[#f72d74] w-44 px-9 py-3 hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
            </div>
           
          </div>

          
              <div className='relative ml-auto max-w-[687px] rounded-xl bg-[#53544e] px-4 py-12  sm:px-8 xl:py-[60px]'>
              <h3 className='text-2xl font-semibold text-white xl:text-3xl'>Let's discuss your project</h3>
              <p className='text-black mb-5 mt-3 text-base'>Submit a request and we‘ll get in touch within a day</p>
              <form>
                <div className='space-y-5'>
                <input type="text" placeholder='Enter your name' className=' bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3' required />
                <input type="email" placeholder='Enter your email' className=' bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3' required />
                <input type="number" placeholder='Enter your phone number' className=' bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3' required />
                 <select className=' bg-[#a4a6a6] rounded-lg text-[#6d6e6e] w-full px-4 py-3'>
                  <option value="">About project</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Design UI/UX">Web Design UI/UX</option>
                 </select>
     <button type='submit' className='flex items-center justify-center gap-4 w-full p-4 text-sm font-semibold bg-[#f72d74]  text-white'>
       <Link to='/'> Get a Quote</Link> <span><FontAwesomeIcon icon={faPaperPlane} className='h-6 w-6' /></span>
     </button>

                </div>
              </form>

              </div>
          
         </div>


          
        </div>
      </div>
      <div className="my-16 mx-16  z-10  overflow-hidden">
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
      <div className='lg:w-[50%] max-w-[422px] '>
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> For WordPress Development Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES is a dependable digital agency that specializes
       in WordPress services such as web design, development, and maintenance.
        They have a skilled team committed to providing top-quality solutions, 
      emphasizing customer satisfaction, attention to detail, and timely delivery.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>WordPress Website Maintenance</h3>

    </div>
   
<ul className='flex flex-col  mt-7 gap-5 list-disc pl-5 '>
  <li>Store Configuration Services</li>
  <li>Custom WordPress Development</li>
  <li>WordPress Theme Customization</li>
  <li>WordPress Plugin Integration</li>
  <li>Custom Checkout Pages Services</li>
  
</ul>
    </div>





    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>RWordPress Website Design</h3>

    </div>
   
<ul className='flex flex-col gap-5 mt-7 list-disc pl-5 '>
  <li>Custom WordPress Web Design</li>
  <li>Responsive WordPress Site</li>
  <li>WordPress Theme Customization</li>
  <li>Fast-loading WordPress Services</li>
  <li>Website Development Services</li>
  
</ul>
    </div>





    <div className='border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>WordPress Customized Development</h3>

    </div>
   
<ul className='flex flex-col gap-5 mt-7 list-disc pl-5 '>
  <li>WordPress Storefront Designs</li>
  <li>WordPress Template Development</li>
  <li>WordPress Web Development</li>
  <li>WordPress Extension Development</li>
  <li>WordPress Cross-Compatible UIs</li>
  
</ul>
    </div>
      </div>
      </div>

      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl font-extrabold'>
     OUR Services
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

<div className='coxs:space-y-4 2xl:space-y-5 '>
<div className='  rounded-lg bg-[#f7f7f7] px-3 py-5   hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>WordPress Plugin Development Services</h2>
       <p className='leading-7 mt-4 text-sm'>Enhance the functionality of your website with our WordPress Plugin 
       Development services. With extended expertise in WordPress CMS, our developers can create WordPress plugins 
       fromscratch tailored to your specific requirements. By implementing quality coding & security standards,
        we build reliable, secure, and high-performance modules for your website. We have developed hundreds of 
        plugins for a wide range of industry verticals, including business, automotive, e-commerce, and education. 
        So whether you want to upgrade your 
       existing plugin or have customization needs, we got you covered.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Headless WordPress With React Services</h2>
       <p className='leading-7 text-sm'>With our ReactJS developers, 
       we are providing Headless WordPress with React services to improve the
        performance, speed, and content management of your website. 
        Our custom-designedheadless WordPress helps increase positions
         on SERPs and allows businesses in scalability and improved security. 
         Furthermore, we develop headless CMS to help clients with easy content publishing
        from multiple devices, i.e., computers, mobile, tablets, etc.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>WordPress Web Design Services</h2>
       <p className='leading-7 text-sm'>As a WordPress expert company, WODWES provides 
       full-cycle WordPress web design services to help clients establish a strong digital presence. 
       Leveraging the powerful WordPress platform,we create performance-optimized website designs that convert. 
       Our certified WordPress designers are well-equipped with the latest technologies, WordPress coding standards, 
       and best SEO practices to help you get ranked on Google.
        We also provide seamless HTML to WordPress conversion services that fit your requirements well.</p>
       

       </div>





</div>


<div className=' space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>WordPress Theme Development Services</h2>
       <p className='leading-7 text-sm'>With over years of experience, we render WordPress theme development 
       services to build intuitive, attractive, and SEO-friendly themes for WordPress websites. 
       Our team of WordPressdevelopers is well-versed in custom theme development and turns your ideas 
       into fully-functional websites. We follow best practices and methodologies 
       to make sure developed themes are responsive and compatible with multiple browsers and devices. 
       At WODWES, we also provide WordPress theme customization, theme setup, 
       installation, and maintenance services to clients all around the globe.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Headless WordPress With Vue Services</h2>
       <p className='leading-7 text-sm'>Looking for Headless WordPress with Vue services? We’re here to help! 
       Our certified Vue.JS developers have extended experience in developing Headless WordPress CMS 
       to increasethe efficiency of your content management system. We build fast, reliable, and robust solutions
        that help in scalability and adaptability. You can rely on WODWES to get the best development 
       experience customized to your needs and business standards.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>WordPress Migration Services</h2>
       <p className='leading-7 text-sm'>Want to migrate your existing website to WordPress? 
       We got you covered! At WODWES, we offer WordPress Migration services to help clients in seamless
        andhassle-free website migration to WordPress with “No Downtime.” Our WordPress experts 
        make sure all your features are working efficiently in the migrated platform. Moreover, 
        with our WordPress Multisite Installation Services, we help clients to manage a suite of sites easily and quickly.
        Hire WordPress specialists from WODWES to boost the performance of your website.</p>
       

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
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto font-Inter">
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
   Wodwes WordPress Services Are Your The Go-To Partner For Businesses Looking To Thrive In The Digital Landscape. 
   Using Our Specialty, You Can Master E-Commerce Store Digital Growth.  </h2>
   <Link
            to={"/contact"}
            className="black border-2 border-[#f72d74] hover:text-white hover:bg-[#f72d74]  px-8 py-3 max-w-xs w-44 font-bold text-center "
          >
            Get Started
          </Link>
   </div>

  </div>
         
  

 


  <div className="w-[90%] mx-auto mt-20">
  <Slider {...settingsThree}>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/domain.png" alt="domain" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Flexible engagement Models</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Dedicated Teams</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Pay-Per-Hour
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Project-Based Hiring</p>
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
            Large Talent Pool
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
  <div className="mt-20 mx-auto max-w-6xl">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+8%</h2>
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
                  <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/elementor.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />


                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://www.eslscadigitaldataschool.com/" className="w-full lg:w-[50%]">
              <img
                src="/eslsca.png"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">

                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/elementor.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />               
                   </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://farrisdesigngroup.com/" className="w-full lg:w-[50%]">
              <img
                src="/farrisdesign.png"
                alt="farisdesign"
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
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/elementor.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://de-ella.com/" className="w-full lg:w-[50%]">
              <img
                src="/deella.png"
                alt="kapalya"
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
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/elementor.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://treklaw.pk/" className="w-full lg:w-[50%]">
              <img
                src="/treklaw.png"
                alt="kapalya"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/woocommerce.png" alt="php" className="w-8 h-8" />
                  <img src="/elementor.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="/" className="w-full lg:w-[50%]">
              <img
                src="/sheaffer.png"
                alt="sheafer"
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
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://3-a-media.com/" className="w-full lg:w-[50%]">
              <img
                src="/3media.png"
                alt="sheafer"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/wpbbakery.png" alt="" className='w-8 h-8' />
                <img src="/elementor.png" alt="" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/cjs.png"
                alt="sheafer"
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
                <h2 className="ml-3 text-lg font-extrabold">+8%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/zenationonline.png"
                alt="znation"
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
                <h2 className="ml-3 text-lg font-extrabold">+8%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/wpbbakery.png" alt="wbppbakey" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/centereanvie.png"
                alt="centereanvie"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/canari.png"
                alt="canari"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/rochester.png"
                alt="rochester"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/nrs-market.png"
                alt="nrs-market"
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
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/wpbbakery.png" alt="" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/hydrowheater.png"
                alt="hydro"
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
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/virtual.png"
                alt="virtual"
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
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/virtual.png"
                alt="virtual"
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
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/elementor.png" alt="elementor" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/mediumpizza.png"
                alt="pizza"
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
                <h2 className="ml-3 text-lg font-extrabold">+6.6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/woocommerce.png" alt="elementor" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/belightful.png"
                alt="pizza"
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
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/revtrax.png"
                alt="revtrax"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/thesmartpooch.png"
                alt="smartpooch"
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
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                <img src="/woocommerce.png" alt="" className='w-8 h-8' />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/zoo-guide.png"
                alt="zoo-guide"
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
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7.5%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/soflo.png"
                alt="soflo"
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
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/mnmanti-age.png"
                alt="soflo"
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
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-12 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-12 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/php.png" alt="php" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/altec.png"
                alt="altec"
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
          <img src="/elsa.webp" alt="logo" className="h-20 w-36" />
        </div>

        {/* Slide 2 */}
        <div className=" coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/fairs.jpg" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 3 */}
        <div className="coxs:px-12 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/de-ella.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 4 */}
        <div className="  coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400 border-r-2  ">
          <img src="/treklawlogo.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 5 */}
        <div className="coxs:px-12 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/shaffermakup.png" alt="shaffer" className="h-20 w-36" />
        </div>

        {/* Slide 6 */}
        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/3d-media.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 7 */}
        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/cjssales.png" alt="logo" className="h-20 w-44" />
        </div>
{/* Slide 8 */}
        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/zenationonlinelogo.png" alt="logo" className="h-20 w-44" />
        </div>


        {/* Slide 9 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/Centre-EauVie.png" alt="logo" className="h-20 w-44" />
        </div>
        {/* Slide 10 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/canarilogo.png" alt="logo" className="h-20 w-44" />
        </div>


        {/* Slide 11 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/reochester.webp" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 12 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/reochester.webp" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 13 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/nrs.webp" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 14 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/MeteoLogo.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 15 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/virtuallogo.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 16 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/aleezapizza.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 17 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/beloghful.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 18 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/revtraxlogo.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 19 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/zoo-guide.webp" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 20 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/thesmartpoochlogo.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 21 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/soflo.jpg" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 22 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/mnm.png" alt="logo" className="h-20 w-44" />
        </div>

        {/* Slide 23 */}

        <div className="coxs:px-2 lg:px-10 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/altec.webp" alt="logo" className="h-20 w-44" />
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
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto font-Inter">
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

      <div className="my-12 lg:my-16 mx-auto w-[90%] max-x-[1440px]">
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

export default WordpressDev