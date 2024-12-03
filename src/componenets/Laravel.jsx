import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons/faPaperPlane'
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';


const Laravel = () => {
  // Array of image paths
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576, // Screens smaller than 600px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 990, // Screens smaller than 600px
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Speed in milliseconds between slides
    swipe: true, // Enables swipe on touch devices
    touchMove: true,
  };

  const slides = [
    { img: "/domain.png", text: "Front-end Technologies" },
    { img: "/versatile.png", text: "Backend Technologies" },
    { img: "/secure.png", text: "Laravel Development Capabilities" },
    { img: "/transport.png", text: "Robust MVC Support" },
    { img: "/competitive.png", text: "Best Agency Award&Achievement" },
  ];


  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
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


  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    touchMove: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 576, // Small screens (sm)
        settings: {
          slidesToShow: 1, // Show 2 slides
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
          slidesToShow: 5, // Show 4 slides
        },
      },
      {
        breakpoint: 1440, // Extra large screens
        settings: {
          slidesToShow: 5, // Show 5 slides
        },
      },
    ],
  };


  const faqData = [
    {
      question: "Do you provide Laravel consulting services?",
      answer:
        "Yes - To help clients in finding the right technology and forecasting expectations, we provide Laravel consulting services. To book your consultation, please email us as https://wodwes.com/wodwes/.",
    },
    {
      question:
        "How do you ensure the quality of the project?",
      answer:
        "We have a strong quality assurance process to ensure all quality standards are met during the development phase. We run multiple tests and analyze the product for cross browsers to make sure we have achieved your goals.",
    },
    {
      question: "How do you ensure privacy and security?",
      answer:
        "We sign NDA (Non-disclosure Agreement) with clients as well as with our team members to ensure privacy and security during and after the project development process.",
    },
    {
      question: "How do u handle communication during a project?",
      answer:
        "We handle communication using project management tools like Basecamp, Slack, and Asana. Additionally, we can choose your preferred tool as well.",
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
              <h1 className="md:text-6xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74]'>Laravel</span> E-commerce Development
              </h1>
              <p className="text-[#e8e6e6] mt-5 mb-5 text-[20px] leading-8 font-Inter max-w-[637px]">
              As a top-rated Laravel development services company, WODWES has extended expertise 
              in building robust, scalable, and high performance development solutions.
               We house a proficient team who are well-versed in developing 
               web applications and software using Laravel - a PHP-based framework. 
              At WODWES, we partner with clients to understand their requirements 
              first and by aligning to their specific business goals, we render 
              efficient and cost-effective solutions. Get your next
               project developed by a vetted team of developers at the best price!
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
  
      <div className='pb-12 w-[90%] max-w-[1440px] mx-auto '>
      <div className='flex  gap-10 3xl:gap-40 maxmd:flex-col'>
      <div className='max-w-[522px] w-full'>
        <h2 className='text-3xl mb-5 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> For Laravel Services?</h2>
        <div className='pb-8'>
        <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3  hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
        </div>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74]  box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Advanced Front-End Technologies</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We specialize in using the latest front-end technologies to deliver top-notch solutions that exceed your expectations. Our team uses latest technologies to build responsive, intuitive, and user-friendly interfaces that enhance the user experience.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>HTML</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>JQuery</li>
  <li>Angular.Js</li>
  <li>React.Js</li>
</ul>
    </div>





    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Powerful Back-End Technologies</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We boost your web development
     with these reliable and efficient technologies, allowing you to create dynamic 
     and scalable Laravel web applications that meet your business needs.
     Our team will make sure that your Laravel solutions are high-performing.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>PHP</li>
  <li>MySQL</li>
  <li>PostgreSQL</li>
  <li>Laravel</li>
  <li>Cake PHP</li>
  <li>Ajax</li>
</ul>
    </div>





    <div className='coxs:border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Laravel Development Capabilities</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We understand that
     with Laravel’s robust MVC support, built-in security features, and flexible
      and robust framework, it is the perfect choice for your next project. That’s why we help you leverage
     its advanced development capabilities in real-time.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>Robust MVC Support</li>
  <li>Built-in Security</li>
  <li>Flexible and Robust Framework</li>
  <li>Multiple Cache Configuration</li>
  <li>Instictive Packaging system</li>
  <li>Integrated Analytical Tools</li>
</ul>
    </div>
      </div>
      </div>

     <div className='mx-auto w-[90%]  max-w-[1440px] py-12 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl text-[#282922] font-extrabold'>
     OUR LARAVEL DEVELOPMENT SERVICES
     </h2>
     <p className='my-5 leading-8 text-sm text-[#282922]'>We offer a comprehensive solution to meet your Laravel design and development needs.
      Get our services to buil powerful and
      scalable websites and web applications that are easy-to-navigate and scale up.</p>
      <div className=''>
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
<div className='  rounded-lg bg-[#f7f7f7] coxs:px-3 coxs:py-5  text-[#282922]  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4   font-extrabold'>Laravel CRM & ERP Development</h2>
       <p className='leading-7 text-sm '>Our team of Laravel developers has extensive expertise in building
        complex business solutions on the Laravel framework. We provide fully 
        functional and high-performance CRM & ERP solutions customized to your 
        specific needs. Our services include inventory management, accounting,
         and supply chain management. With our services, you can efficiently
        manage your business operations and increase your productivity.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] text-[#282922] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold '>Laravel-Based Website Development</h2>
       <p className='leading-7  text-sm'>At WODWES, we offer Laravel website 
       development services to develop highly functional and intuitive
        websites on the Laravel framework. Our proficient team of developers
         has years of experience in building robust and reliable solutions to 
         improve your web presence. Whether it's a static website or a dynamic web 
         application, we have the expertise to deliver quality
        solutions that meet your specific business requirements.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  text-[#282922] hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl   mt-4 font-extrabold'>Laravel RESTFul API Development</h2>
       <p className='leading-7  text-sm'>Our vetted team of developers has a 
       wide range of expertise in developing RESTFul solutions. 
       We utilize Laravel API generator packages to build high-performance applications 
       and cloud-based backends to help you reach your targeted audience from any device.
        With our Laravel RESTFul API Development services,
        you can easily integrate your applications with third-party services whenever required.</p>
       

       </div>





</div>


<div className=' coxs:space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5  text-[#282922] bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Laravel Enterprise Application Development</h2>
       <p className='leading-7 text-sm'>We provide scalable Laravel
        enterprise application development services to boost your business
         revenue and growth. Our team of experts develops enterprise-grade 
         business solutions that include CMS, CRM, and Cloud solutions.
          We utilize cutting-edge technologies to drive the best out of the Laravel framework.
           With our Laravel Enterprise Application Development 
       services, you can take your business to the next level.</p>
       

       </div>

       <div className='  rounded-lg mt-5   text-[#282922]  bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>On-Going Support & Maintenance</h2>
       <p className='leading-7 text-sm'>We understand that maintaining your 
       website or software is crucial to your business operations. 
       That's why we provide full-cycle Laravel Support and Maintenance 
       services to our clients. Our proactive maintenance team continually
        monitors your website or software to address any issues before they even occur. We offer 24/7 support in
        multiple time zone shifts to ensure optimal performance of your system.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] text-[#282922]  px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Laravel Web Application Development</h2>
       <p className='leading-7 text-sm'>We provide end-to-end Laravel 
       Web Application development services to deliver secure and reliable solutions. 
       Our team of developers builds enterprise-grade and functionality-enriched apps to boost
        our client's business growth and take their online presence to the next level. 
        Whether it's a custom web application or an existing web application migration,
        we have the expertise to deliver solutions that meet your requirements.</p>
       

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
   <h2 className='text-3xl max-w-[633px] leading-10 font-extrabold mb-7'>The Wodwes Laravel Service Team Is Your Digital Innovation Partner,Helping Business To Transform their Business With Laravel.</h2>
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
          <p className="text-sm pb-4 text-center">Frontend Technologies</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Backend Technologies</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Laravel Development Capabilities
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Robust MVC Support</p>
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
            Best Agency Awards & Achievements
          </p>
        </div>
      </div>
    </div>
    {/* Add more slides as needed */}
  </Slider>
</div>




 </div>

<div className='pt-20 pb-10 w-[90%] mx-auto max-w-[1440px]'>
  <h2 className='text-3xl font-bold'>Our Happy <span className='text-[#f72d74]'>Clients</span></h2>
  <p className='mt-5 leading-8 text-lg mb-5'>We love hearing about how our work has helped businesses succeed and how WODWES became their go-to
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
                  <img src="/laravel.png" alt="Laravel" className="w-8 h-8" />
                  <img src="/statimic.png" alt="Statamic" className="w-8 h-8" />
                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://vodlix.com" className="w-full lg:w-[50%]">
              <img
                src="/vodlix.png"
                alt="Vodlix"
                className="rounded-lg w-full object-cover"
              />
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[50%] flex flex-col gap-12">
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
                  <img src="/laravel.png" alt="Laravel" className="w-8 h-8" />
                  <img src="/hubspot.png" alt="Hubspot" className="w-8 h-8" />
                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://ecomdevelopment.us" className="w-full lg:w-[50%]">
              <img
                src="/ecom-development.png"
                alt="Ecom Development"
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
        <div className="coxs:px-12 lg:px-24 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/ecom.png" alt="Ecom" className="h-20 w-12" />
        </div>

        {/* Slide 2 */}
        <div className=" coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/vodlix.webp" alt="Vodlix" className="h-20 w-44" />
        </div>

        {/* Slide 3 */}
        <div className="coxs:px-12 lg:px-24 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/ecom.png" alt="Ecom" className="h-20 w-12" />
        </div>

        {/* Slide 4 */}
        <div className="  coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400 border-r-2  ">
          <img src="/vodlix.webp" alt="Vodlix" className="h-20 w-44" />
        </div>

        {/* Slide 5 */}
        <div className="coxs:px-12 lg:px-24 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/ecom.png" alt="Ecom" className="coxs:h-20 coxs:w-12 lg" />
        </div>

        {/* Slide 6 */}
        <div className="coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/vodlix.webp" alt="Vodlix" className="h-20 w-44" />
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
                  className={`h-9 w-9 flex items-center justify-center text-[#f72d74] font-bold  p-2 border-[#f72d74] rounded-full`}
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

export default Laravel





