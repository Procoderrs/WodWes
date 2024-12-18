import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState,useEffect } from 'react'

const Vue = () => {

useEffect(()=>{
window.scrollTo(0,0)
},[])

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "Why Should I Choose Vue.Js?",
      answer:
        "Vue.Js is highly beneficial, unlike other JS frameworks. It is fast, simple, and easy thus allowing developers to build scalable, and engaging applications in less time, money, and effort. This makes it the best JS framework to create ready-to-market software products.        ",
    },
    {
      question:
        "Why Should I Hire a Vue.Js Development Company?",
      answer:
        "Hiring a Vue.Js development company helps you develop your project smoothly and flawlessly. From analyzing your business needs and choosing the right technology for it to creating high-performing, growth-boosting web solutions, a Vue.Js development company streamlines everything efficiently within an optimal timeframe.               ",
    },
    {
      question: "What Vue.Js Development Services WODWES Offers?",
      answer:
        "WODWES offers full-suit of Vue.JS development services. However, some prominent ones include Vue.Js consultancy, web development, SPA development, mobile app development, migration and upgradation, and third-party integration.           ",
    },
    {
      question: "How Long does WODWES Take to Complete a Vue.js Project?",
      answer:
        "The timeframe to complete the Vue.Js project highly depends on your business size and needs, project scope and complexity, integrated features, and multiple relevant features. On average, building a Vue.Js product from the scratch can take from a few weeks to months.               ",
    },
    
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
    autoplay: false, // Enables autoplay
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
  <div className="relative w-[90%] mx-auto max-w-[1690px] text-white grid grid-cols-1 gap:10 lg:grid-cols-2   ">
    {/* Grid Layout */}
    
      {/* Left Section */}
      <div className=" ">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl md:leading-10 xl:text-6xl font-black">
          <span className="text-[#f72d74]">Vue.Js</span>  Development Services
        </h1>
        <p className="text-[#e8e6e6] my-5 lg:my-11 text-lg leading-8 max-w-[500px] ">
        We build a mighty performance Vue. js-based user interfaces, ensuring seamless 
        workflow across versatile platforms and devices. From single-page applications to 
        complex websites and CRMs, we deliver responsive, intuitive, and scalable web solutions, 
        tailored to your user aesthetic taste, attracting growth opportunities, and establishing
         credibility throughout your industry. We combine our technical skills with an extensive
          understanding of the Vue.js framework, creating business-oriented, fast-build, and
         cost-effective Vue.js solutions with uncompromisable quality.
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

      <div className="my-16 w-[90%] max-w-[1440px]  mx-auto z-10  overflow-hidden">
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
      <div className='lg:w-[50%] max-w-[500px] '>
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> For Vue.js Development Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES is a state-of-the-art provider of Vue.js 
      development services. With a proven track record of digitally transforming startups,
       small businesses, and large-scale enterprises, we confidently claim that we meet the 
       highest technology standards in creating top-notch Vue.Js products. Our dedicated Vue.Js 
       developers use a result-driven approach to
       create user-oriented software products that drive maximum leads and conversions.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Trusted Vue.js Partner</h3>

    </div>
    <p className='leading-7 text-sm'>Our customers are our uncompromisable priority, 
    thus we create high-quality codes, ensuring maximum data security. We keep our clients on the same page with us, 
    updating them consistently, and ensuring 
    timely delivery of business-oriented Vue.Js solutions to achieve desired business goals.</p>
   
<ul className='flex flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>100% Quality Assurance</li>
  <li>User-Oriented End products</li>
  <li>Guaranteed User Satisfaction</li>
  
  
</ul>
    </div>





    <div className='border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Diversely Qualified Team</h3>

    </div>
    <p className='text-sm leading-7'>WODWES houses multi-dimensional experts 
    who are not just skilled Vue.Js developers but also well-versed in handling critical 
    business needs, and advanced design expertise. We combine all these expertise through 
    our collaborative work approach to deliver products 
    that work efficiently while satisfying user viewing pleasures.</p>
   
<ul className='flex flex-col gap-5  text-sm mt-7 list-disc pl-5 pb-12 '>
  <li>Export UI/UX Designers</li>
  <li>Holistic Development Approach</li>
  <li>Advanced Technologies' Experts</li>
  
  
</ul>
    </div>





    <div className='border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-black'>Flexible Development Cost</h3>

    </div>
   <p className='text-sm leading-7'>
   We offer more than what we charge. The cost we may charge you is barely compensation for our developers’ tireless effort who dedicatedly do full justice to their jobs We don’t just partner up with you on a project basis, we fully internalize this partnership and go the extra mile to not just deliver Vue.Js products but excellence.   </p>
<ul className='flex flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>Zero Added Expense</li>
  <li>Competitively-priced Service</li>
  <li>Budget-oriented Development</li>
  
  
</ul>
    </div>
      </div>
      </div>

      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[430px] font-extrabold'>
     Our Vue.js development Services
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

       <h2 className='text-xl mt-4 font-extrabold'>Vue.js Expert Consultancy</h2>
       <p className='leading-7 mt-4 text-sm'>Choosing the right framework for your business is hard. 
       Our Vue.Js consultants are well-versed in analyzing your business-critical needs, suggesting the right Vue.Js 
       solution thataddresses your business’s pain points to meet tangible end goals</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Vue.Js Mobile App Development</h2>
       <p className='leading-7 text-sm'>Our highly-specialized Vue.Js developers create intuitive
        and compelling mobile apps, that are optimized for a compelling mobile viewing experience. We use the Vue.Js framework
        versatilityto create mobile-friendly apps for iOS, Android, and the web.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Vue.Js Seamless Migration</h2>
       <p className='leading-7 text-sm'>We offer end-to-end assistance to migrate your 
       legacy applications to Vue.Js or upgrade your existing Vue.Js product to the latest version. 
       Keep your business pacewith innovative 
       technology to create optimal working products for your users.</p>
       

       </div>





</div>


<div className=' space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Vue.Js Web Development</h2>
       <p className='leading-7 text-sm'>Our Vue.Js specialized developers create responsive, adaptable, 
       and user-centric sites and CRMs. We leverage the fast-paced Vue.Js framework to develop seamless software products, 
       ensuring optimalfunctionality across multiple browsers.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Vue.Js SPA Development</h2>
       <p className='leading-7 text-sm'>
       We offer unparalleled Vue.Js expertise to create lightweight single-page apps (SPA). 
       Our extensive understanding of front-end development technology has proven to build high-end, 
       and responsivesingle-page apps within a given time frame.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Vue.Js Third-party Integration</h2>
       <p className='leading-7 text-sm'>Being a full-suit provider of Vue.Js development 
       services, we ensure seamless third-party integration. Whether you want to integrate
        Vue.Js in your existing CRM or anyother 
       technology into your Vue.Js product, our skilled developers got your back.</p>
       

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
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10 max-w-[1440px]  w-[90%] mx-auto font-Inter">
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
   Wealth Of Specialized Vue.Js Developers Creating Scalable And Robust Software Solutions With Progressive JS Framework  </h2>
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
          <p className="text-sm pb-4 text-center">Seamless Migration $ Integration</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Conversion-driving User Interfaces</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Industry-qualified Vue.Js Developer
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Unparalleled Front-end Development</p>
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
            Extensive Vue.js Framework Expertise
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
            Reliable and Secured software Products
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
                  <img src="/vue.png" alt="php" className="w-9 h-9" />
                  <img src="/firebase.png" alt="php" className="w-9 h-9" />
                  <img src="/hubspot.png" alt="php" className="w-9 h-9" />


                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="" className="w-full lg:w-[50%]">
              <img
                src="/cvmakerhub.png"
                alt="base"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>






        



       
    </div>







    <div className="mt-20 mx-auto w-[90%] max-w-[1440px] flex">

        {/* Slide 1 */}
        <div className=" w-[50%] px-4 lg:px-20 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/cvmakerhublogo.png" alt="logo" className="h-20 w-56" />
        </div>

        {/* Slide 2 */}
        <div className=" px-2  w-[50%] lg:px-10 py-8 border-t-2 border-gray-400 ">
          
        </div>

        
      
    </div>
    </div>


    <div className="relative w-full py-12 lg:py-24">
        <img
          src="/section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] max-w-[1440px]  mx-auto font-Inter">
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

export default Vue