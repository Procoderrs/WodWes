import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState , useEffect } from 'react';
const Joomla = () => {

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
      question: "Will WODWES Sign a Non-disclosure Agreement?",
      answer:

  "We highly respect our client’s privacy and security. Thus, you won’t even have to ask for NDA. We work using a strategic approach. And our very first step to start working towards your project is signing a non-disclosure agreement to ensure mutual safety and collaboration.    "
    },
    {
      question:
        "How Much WODWES Cost for Joomla Development Services?",
      answer:
"We offer custom-base Joomla development solutions. Thus, the cost that we may charge for our services will depend on multiple factors like your project scale, scope, requirements, features, integrations, and development. You can contact us to have an estimate of the cost of Joomla development services." },
    {
      question: "How Long does it Take for Joomla Development Project to Complete?",
      answer:
"Joomla development doesn’t take place at one defined time for every project. We analyze each business’s unique requirements to give a deadline for project completion. It also depends on the nature of the project. For example, conversion of PSD to Joomla will take lesser time than creating a Joomla website from scratch."  },
    {
      question: "Does WODWES Help Migrate My Website To the Joomla Platform?",
      answer:
"Yes, our dedicated Joomla migration experts ensure seamless migration of your website to the Joomla platform. No matter what CMS your website is currently built on, we ensure a 99.9% successful and secure migration to Joomla CMS. Additionally, we also provide expert integration services. Our experts are well-versed in integrating any third-party tool into your Joomla CMS rendering maximum accuracy."    },
    
  ];
  return (
    <>
      <div className="relative py-16 md:pb-32 md:pt-20 ">
  <img
    src="/product-img.png"
    className="absolute top-0 left-0 w-full h-full  z-0"
    alt="Background"
  />
  <div className="relative w-[90%] mx-auto max-w-[1690px] text-white grid coxs:grid-cols-1 gap-10 lg:grid-cols-2   ">
    {/* Grid Layout */}
    
      {/* Left Section */}
      <div className=" ">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl md:leading-10 xl:text-6xl font-black">
          <span className="text-[#f72d74]">Joomla</span> Development Services
        </h1>
        <p className="text-[#e8e6e6] my-5 lg:my-11 text-lg leading-8 max-w-[500px] ">
        We deliver top-grade, high-performing, and scalable 
        Joomla-built sites, apps, and portals with our proven
         methodologies and best-in-breed tech stack. Having thrived startups, 
         small businesses, and enterprises with our smart Joomla-based transformation, 
         we are your authorized partner for Joomla development services. From providing
          comprehensive consultancy to Joomla-amateur organizations to offering expert 
          improvement and maintenance to Joomla-developed sites, we help conceptualize,
         develop, maintain, or deploy anything Joomla.
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
      <div className="my-16 mx-auto max-w-[1440px] w-[90%]    z-10  overflow-hidden">
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
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span>  for Joomla Development Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES has established itself to be the 
      industry-leading Joomla development company for delivering exceptional 
      Joomla-based solutions. We consider our clients our utmost priority and support and provide them with all 
      the Joomla–built solutions, thriving their businesses on the web.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Qualified Joomla Experts</h3>
   
    
    </div>
    <p className='text-sm mt-7 leading-7'>We house a dynamic team of Joomla experts who are 
    well-versed in handling all the cutting-edge technologies and platforms to build robust and fast-paced websites and apps.

</p>
    
   
<ul className='flex coxs:flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>Advanced Technologies</li>
  <li>Streamlined Methodology</li>
  <li>Transparent Communication</li>
  
  
  
</ul>
    </div>





    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Custom Joomla Solutions</h3>

    </div>
    <p className='text-sm mt-7 leading-7'>
    We understand that each business is unique in its needs, objectives, and resources. We deeply analyze your business’s 
    details to offer custom solutions tailored to meet your business needs.
    </p>
    
   
<ul className='flex coxs:flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-7 '>
  <li>Tailor-made Solution</li>
  <li>Round-the-clock Support</li>
  <li>Comprehensive</li>
  
  
  
</ul>
    </div>


    <div className='coxs:border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Flexible Hiring Models</h3>

    </div>
    
    <p className='text-sm mt-7 leading-7'>
    WODWES values your investment and strives painlessly to return the compounded value for it. 
    We offer flexible hiring packages 
    which made our services available for businesses of all sorts.
    </p>
   
<ul className='flex coxs:flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>Secured Development</li>
  <li>ROI-oriented Solutions</li>
  <li>Uncompromising Quality</li>
  
  
  
</ul>
    </div>
      </div>
      </div>

      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[430px] font-extrabold'>
     Our Joomla Development Services </h2>
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

       <h2 className='text-xl mt-4 font-extrabold'>Joomla Site/App Development</h2>
       <p className='leading-7 mt-4 text-sm'>Whether you need to develop user-centered 
       and responsive sites that reflect your unique business or cross-platform adaptable
        apps to boost leads and ROI, our diversely-qualifieddevelopers have your 
       back for building all including portals, and modules on Joomla</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Joomla Hosting Services</h2>
       <p className='leading-7 text-sm'>We ensure seamless creation, management, and 
       running of your site with our expert hosting services. This entails multiple
        hosting features including custom domains, multi-domain registration,free regular backups, 
       unlimited storage space, support for multiple CMSs, etc.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Joomla E-commerce Solutions</h2>
       <p className='leading-7 text-sm'>Leveraging our in-house experts and advanced tools,
        we create secured, trackable, and SEO-optimized stores that help you sell, manage stores
         and strengthen user-brand relations. Wealso offer expert
        resources to develop or integrate third-party extensions to your store.</p>
       

       </div>





</div>


<div className=' coxs:space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Joomla Customization Services</h2>
       <p className='leading-7 text-sm'>We stay on the same page with our clients and 
       get deep insights into their company objectives to offer tailor-made Joomla-built sites
        and apps thatare an exact reflection of their brand voice and needs. We tailor themes, 
       graphics, and features to your business’s unique identity.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Joomla Migration Services</h2>
       <p className='leading-7 text-sm'>Our specialized Joomla experts ensure seamless migration, 
       installation, and configuration of your data from your existing CMS to Joomla. Our migration process 
       is closely supervisedby dedicated Joomla coders to
        fix any technical issues that may occur during migration.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Joomla Social Networking Solutions</h2>
       <p className='leading-7 text-sm'>Our professionals’ multi-extensions handling capability 
       do wonders to turn your Joomla CMS into a full-suite social networking site.
        We create high-performing sites with built-in managementand presentation features including polls,
        profiles, blogs, groups, comments, and more.</p>
       

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
   <h2 className='text-3xl max-w-[640px] leading-10 font-extrabold mb-7'>
   Partner Up With Unparalleled Joomla Development Services Provider To Build User-centric, High-Performing,
    And Robust Domains That Reflect Your Business’s Name

</h2>
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
          <p className="text-sm pb-4 text-center">Agile And Secured Development</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Expert Support And Maintenance</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
           Responsive Joomla-built Solutions
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Compounded Return On Investment</p>
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
          Industry-speciallized Joomla Experts
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
          Industry-speciallized Joomla Experts
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
     
        
        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-10">
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
                  <img src="/joomla.png" alt="joomla" className="w-9 h-9" />
                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/beautybins.png"
                alt="base"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>






        



       
    </div>







    <div className="mt-20 mx-auto max-w-[1440px] w-[90%] flex">

        {/* Slide 1 */}
        <div className="  coxs:px-12 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/beauty-beans.png" alt="logo" className="h-20 w-42" />
        </div>

        {/* Slide 2 */}
        <div className=" coxs:px-2  w-[50%] lg:px-10 py-8 border-t-2 border-gray-400 ">
          
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

export default Joomla