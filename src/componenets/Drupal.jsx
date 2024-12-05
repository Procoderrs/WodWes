import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';
const Drupal = () => {


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
      question: "How Does Hiring A Drupal Developer Work?",
      answer:

  "Our experts collaborate with you to fully understand your project needs and scope. We then devise custom hiring models that can meet your project needs. You can choose any working model and we will immediately start our development efforts after the contract is signed.  "
    },
    {
      question:
        "Can WODWES Help Me Hire a Drupal Developer If I Have No Idea About This CMS?",
      answer:
"We offer one-on-one Drupal consultancy and provide expert assistance to help you choose the right framework for your project that is future-proof, cost-friendly, and meets your business goals. Hence, we do our work with maximum honesty no matter if you are aware of Drupal or not. " },
    {
      question: "What Is The Cost of Drupal Development Services?",
      answer:
"Our Drupal development services don’t come with a fixed price. It varies based on multiple factors including project needs, scope, developers required, tech stack, engagement model, and business goals. Thus, we provide custom Drupal solutions that render 100% satisfaction within your budget."  },
    {
      question: "How Much Time WODWES Take To Take My Project Live?",
      answer:
"The project duration depends highly on the scale and scope of the project. Hence, it can vary from weeks to months to go live. However, we always give you an initial time estimate and ensure the quality completion of the projects.  "    },
    
  ];
  return (
    <>
<div className="relative w-full py-12 lg:py-20">
        <img
          src=" /product-img.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1440px] text-white z-10">

        <div className='grid coxs:grid-cols-1 gap-6 lg:grid-cols-2 '>

        
          <div className="flex   coxs:flex-col  mb-5  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="lg:text-6xl coxs:text-3xl font-black font-Inter  sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74] font-black'>Drupal </span>   Development Services 
              </h1>
              <p className="text-[#e8e6e6] mt-5 mb-7 text-lg leading-8 font-Inter max-w-[637px]">
              We offer enterprise-grade Drupal development services that deliver robust and end-to-end web,
               social, and mobile experiences. Our comprehensive Drupal framework expertise, agile development
                methodology, and client-focused attitude helped leading businesses boost their next-gen virtual 
                transformation and growth. We offer flexible engagement models that capitalize on radical
               CRM to deliver tangible business results transparently.
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
      <div className='lg:w-[50%] max-w-[495px] '>
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span>  for Drupal Development Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES has established itself as
       the industry-leading platform for Drupal development services and our renowned 
       clientele and portfolio are speaking proof of it. Whether you need Drupal-based development, migration, integration, 
      or need help with compelling design solutions, we have you covered.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Flexible Hiring Models</h3>
   
    
    </div>
    
    <p className='mt-7 text-sm leading-7' >
    Our expert Drupal development services are known for providing end-to-end solutions in a fast and cost-effective manner.
     Whether you want to avail of one-to-one or large-scale services or need custom web solutions, we offer multiple 
     hiring packages to meet your hiring
     needs without compromising your budget estimate.


    </p>
   
<ul className='flex coxs:flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>Hourly & Monthly Rates</li>
  <li>Competitive Service Charges</li>
  <li>Cost-effective Drupal Solutions</li>
  
  
  
</ul>
    </div>





    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Customer-focused Solutions</h3>

    </div>
    <p className='text-sm leading-7 mt-7'>Our customer is our uncompromisable priority. 
    We craft Drupal development solutions keeping our customers’ concerns and unique business
     needs in mind. We take pride in being the entrusted partner of multiple renowned businesses.
     Thus, we go miles to keep that trustworthiness preserved.</p>
   
<ul className='flex coxs:flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-7 '>
  <li>100% User Satisfaction</li>
  <li> Time-effective Deliveries</li>
  <li>End-to-end Drupal Solutions</li>
  
  
  
</ul>
    </div>


    <div className='coxs:border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>In-house Multidisciplinary Team</h3>

    </div>
    <p className='text-sm leading-7 mt-7'>
    We house a versatile team of specialists who has multi-faceted expertise to offer 
    comprehensive Drupal-based solutions. Our seasoned experts collaborate with you to offer solutions 
    for all your Drupal-related needs including
     Front end implementation, Drupal development, and UI/UX design.
    </p>
   
<ul className='flex coxs:flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>Qualified Drupal Experts</li>
  <li>User-Trusted Drupal Partner</li>
  <li>Collaborative Work Approach</li>
  
  
  
</ul>
    </div>
      </div>
      </div>

      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[430px] font-extrabold'>
     Our Drupal Web Development Services     </h2>
     
     <p className='mt-7 text-[16px] leading-9'>WODWES offers a custom and user-oriented approach to
      providing full-suite Drupal development services. Our Drupal-based solutions have proven to 
      transform leading organizations, small businesses, and non-profit organizations,
      bringing maximum ROI and a competitive edge.</p>
      <div className='mt-7'>
      <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3 hover:text-white hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
      </div>

     </div>
    
     
<div className=' grid coxs:grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:w-1/2'>

<div className='coxs:space-y-4 2xl:space-y-5 '>
<div className='  rounded-lg bg-[#f7f7f7] coxs:px-3 coxs:py-5   hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Drupal Web Development</h2>
       <p className='leading-7 mt-4 text-sm'>Our seasoned Drupal developers build custom-based, 
       scalable, and high-performing Drupal websites and applications. We combine our Drupal 
       expertise with our extended UI/UX design handling todeliver captivating 
       web presences that meet diverse businesses’ needs.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Drupal Theme Development
</h2>
       <p className='leading-7 text-sm'>We house a hybrid team of UI/UX designers, Drupal specialists,
        and front-end developers to create personalized, fast-paced, and user-oriented web solutions. 
        We aim to createa compelling user experience,
        capable enough to bring more potential conversions.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Drupal E-commerce Development</h2>
       <p className='leading-7 text-sm'>With a proven track record of developing multiple 
       Drupal-based e-commerce sites, WODWES is your go-to place to avail of Drupal e-commerce services. 
       We set upyour e-commerce store, and ensure quality results in handling any
        third-party integrations you are now utilizing.</p>
       

       </div>





</div>


<div className=' coxs:space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Drupal Application Migration</h2>
       <p className='leading-7 text-sm'>We provide expert assistance to migrate your 
       site from non-Drupal CMs to Drupal or upgrade from the previous Drupal version to the latest one. 
       Ourlong history of carrying out successful Drupal migrations 
       helps us build customized and accelerated Drupal applications.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Drupal Third-party Integration
</h2>
       <p className='leading-7 text-sm'>We take pride in our Polymath Drupal developers who 
       are well-versed in a wealth of third-party tools to carry out successful integrations 
       with multiple integrationmodules. We help you choose the right module and make integration
        seamless, cost-effective, and quick for you.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Drupal Website Maintenace
</h2>
       <p className='leading-7 text-sm'>WODWES has helped multiple businesses maintain and 
       enhanced their Drupal-based applications with our expert Drupal development services.
        We strive to provide value-adding, fast, and unparalleledsite maintenance
        and support you will not find elsewhere.</p>
       

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
   <h2 className='text-3xl max-w-[640px] leading-10 font-extrabold mb-7'>
   WODWES Is Your Agile Development Partner Creating Robust Digital Experiences. 
   We Strengthen Customer-Brand Relation To Deliver Scalable, ROI-oriented Business Results</h2>
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
          <p className="text-sm pb-4 text-center">Expert Front and Back-end Developers</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Bespoke Drupal Development Services</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
           4X Boosted Drupal-based Development
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Seamless Drupal Migration & Integration</p>
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
          Diligent Q/A Testing & Quality Assurance
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
            Hassle-free Collaborative Work Approach
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

export default Drupal