import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';

const Php = () => {

  const imageArray = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
  ];
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "Can WoDWES Help Me Rebuild My Site In the Latest PHP Version?",
      answer:
        "Yes, we provide services to not only design your site from scratch but also rebuild it to the latest version of PHP. All you have to do is contact us through email, phone, or onsite chat option with accurate details and requirements of your website. Our experts will thoroughly analyze your website to update it properly.        ",
    },
    {
      question:
        "Should I Go For PHP If A Large Website Is Concerned?",
      answer:
        "PHP is extremely suitable for large projects because it doesn’t demand large-scale system resources. We have created multiple large apps, and sites through PHP. But PHP is not for all types of projects. It might work for one but not for the other. Hence, you should always partner up with a professional web development company like WODWES to know what will work for the enterprise's unique needs.        ",
    },
    {
      question: "What Is The Estimated Time WODWES Will Take To complete My PHP Development?",
      answer:
        "WODWES respects its clients and doesn’t manipulate them with false promises as transparency and service are our core work ethics. Thus, we sit down with you to deeply discuss all the details of your project to finally estimate the time that will be needed to complete the project. We will report back to you with the time needed to complete your project        ",
    },
    {
      question: "What PHP-related Technologies Does WODWES Have Expertise In?",
      answer:
        "Being providing PHP website development services for years, our seasoned experts have nurtured expertise needed to work with multiple PHP frameworks. The notable PHP frameworks that we work with include Symfony, CakePHP, Laravel, Codelgniter, ZendFramework, and more. We further take pride in our providing CMS development, i.e. WordPress, HTML, JavaScript, eCommerce, and mobile application development.",
    },
    {
      question:" Why Choose WODWES For PHP Development?",
      answer:"We have nurtured expertise in providing web-based solutions to multiple clients who now flaunt renowned business domains. WODWES is an industry-leading provider of full-cycle PHP solutions that are designed to take your business forward and reap consistent growth for many years to come."

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
        <div className="relative w-[90%] mx-auto max-w-[1440px] text-white z-10">

        <div className='grid coxs:grid-cols-1 gap-6 lg:grid-cols-2 '>

        
          <div className="flex   coxs:flex-col  mb-5  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="text-4xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74]'>PHP</span> Website Development Services
              </h1>
              <p className="text-[#e8e6e6] mt-5 mb-5 text-lg leading-8 font-Inter max-w-[637px]">
              We deliver full-cycle, high-performing, and database-driven PHP development solutions.
               With extended knowledge of PHP and its framework, we have a proven track record of 
               completing numerous projects rendering 100% client satisfaction. Our specialized
                developers create unparalleled PHP solutions to deliver robust, feature-rich, 
                and user-oriented sites and apps. We aim to design
               future-proof solutions, setting your business up for success.
              </p>

              <Link
              to={"/"}
              className="text-white border-2 border-[#f72d74] w-44 px-7 py-3 hover:bg-[#f72d74] font-bold "
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
      <div className='flex  justify-between md:flex-row gap-10 3xl:gap-40 maxmd:flex-col'>
      <div className='lg:w-[50%] '>
        <h2 className='text-3xl mb-5 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span> For PHP Development?</h2>
        
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
      <p className='mb-7 leading-9 lg:text-lg'>We have nurtured expertise in providing web-based solutions to multiple clients 
        who now flaunt renowned business domains. WODWES is an industry-leading
         provider of full-cycle PHP solutions that are designed to take your business 
         forward and reap consistent growth for many years to come.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] bg-gray-200 box md:grid-cols-2 lg:grid-cols-3'>
    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Qualified PHP Specialists</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We house a team of seasoned experts 
    having specialized in multi-directional areas of PHP to deliver high-performing PHP services. 
    We have served numerous businesses including startups, growing, and developing businesses to launch their PHP web apps,
     CMS’s, etc with our customized PHP development services.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>Years of Successfull Service Experience</li>
  <li>Dedicated Team  For CMSs Development</li>
  <li>Certified PHP Web Development Experts</li>
  
</ul>
    </div>





    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Reliable PHP Partner</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We take pride in our full-cycle PHP web development 
    services to address all the relevant requirements of your business to achieve success. 
    We are a reliable service partner to multiple renowned companies giving them a competitive edge with our
     comprehensive industry knowledge and result-driven solutions.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>PHP Consultation Services</li>
  <li>PHP Applications Upgradation</li>
  <li>Fool-proof Transparent Service</li>
  
</ul>
    </div>





    <div className='coxs:border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-xl font-bold'>Cost-effective PHP Solutions</h3>

    </div>
    <p className='coxs:my-5  sm:my-7 text-sm leading-9'>We make hiring easy and help you hire us as you find suitable. 
    You can hire us on a project basis, hourly basis, or a full team for projects cost-effectively. 
    We closely discuss your estimated budget with you to provide lenient cost for PHP website development 
    services excluding extra expenses i.e. salary, training, office, etc.</p>
<ul className='flex coxs:flex-col gap-5 list-disc pl-5 '>
  <li>Budget-tailored Cost</li>
  <li>Zero Extra Expenses</li>
  <li>Lenient hiring Models</li>
  
</ul>
    </div>
      </div>
      </div>

      <div className='mx-auto w-[90%]  max-w-[1440px] pb-24 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-16 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl font-extrabold'>
     OUR PHP Website Development Services
     </h2>
     <p className='my-5 leading-8 text-sm'>Having successfully implemented thousands of projects, 
     we confidently claim to provide rich-featured apps and web-based solutions
      that live up to ever-evolving development needs</p>
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
<div className='  rounded-lg bg-[#f7f7f7] coxs:px-3 coxs:py-5   hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>PHP App Development</h2>
       <p className='leading-7 text-sm'>Our experts of multidimensional expertise in 
       PHP frameworks including CakePHP, Symphony, Laravel, etc collaborate with you to 
       develop high-performing, and dynamic apps tailored to yourbusiness size and needs. 
       We build integrated PHP web apps, 
       combining our expert tools handling with core PHP skills.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Seamless PHP Migration</h2>
       <p className='leading-7 text-sm'>WODWES strives to keep your data safe and secured, 
       and thus offers expert assistance to ensure seamless migration to PHP. Being an industry-leading PHP
        developmentservices provider, we transfer your existing tech data to PHP with a higher sense of responsibility, 
       efficiency, and transparency.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Social App Development</h2>
       <p className='leading-7 text-sm'>We develop social networking portals expertly leveraging the 
       latest PHP trends to build user-friendly, and highly engaging social websites that live up to our 
       client’ssatisfaction, and requirements. We ensure highly-functional, high-performing apps that are 
       integrated with rich user-engaging features.</p>
       

       </div>





</div>


<div className=' coxs:space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Web Portals Development</h2>
       <p className='leading-7 text-sm'>WODWES is an industry-leading web development 
       company that delivers cutting-edge results exactly up to your business's unique needs and requirements. 
       We provide expert PHP developmentservices to build PHP-based web portals for your business 
       i.e. B2B, B2C, Corporate, and Enterprise portals.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Expert API Integration</h2>
       <p className='leading-7 text-sm'>We understand the importance of API for your apps and sites. 
       Thus, we provide professional services to integrate your internal, private, or public API intoyour PHP system. 
       We also provide custom solutions to integrate third-party API into your PHP websites 
       leveraging multiple API-provided interfaces.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>PHP E-commerce Development</h2>
       <p className='leading-7 text-sm'>We know the competitiveness of eCommerce and 
       how seemingly small details like load speed, navigation, etc affect the customer experience. 
       Thus, we leverage cutting-edge e-commercesolutions creating highly-functional, custom-designed e-commerce 
       portals ensuring better user engagement and retention.</p>
       

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
   <h2 className='text-3xl max-w-[633px] leading-10 font-extrabold mb-7'>
   From Building Dynamic PHP Apps To Taking You To The Web, We Have You Covered For All The Phases Of Your Business’s Virtual Journey   </h2>
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
          <p className="text-sm pb-4 text-center">99.9% Customer Satisfaction Rate</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">End-to-End PHP Web Development</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Dedicated PHP Frameworks Experts
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Result-promised PHP Web Services</p>
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
            Industry-qualifies PHP Web Experts
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap  justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex  flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img
            src="/competitive.png"
            alt="awards"
            className="h-9 w-9 mx-auto"
          />
          <p className="text-sm pb-4 text-center">
            Cost-effective and Scaleable Services
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
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+6%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-3 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                  <img src="/php.png" alt="php" className="w-8 h-8" />
                  <img src="/wordpress.png" alt="php" className="w-8 h-8" />
                  <img src="/hubspot.png" alt="php" className="w-8 h-8" />


                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://www.base.ai/" className="w-full lg:w-[50%]">
              <img
                src="/base.jpg"
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
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-3 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                  <img src="/php.png" alt="Laravel" className="w-8 h-8" />
                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://ecomdevelopment.us" className="w-full lg:w-[50%]">
              <img
                src="/kapalya.jpg"
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
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+6.5%</h2>
                <p className="text-sm ml-2">Empowering Growth</p>
              </div>
              <div className="ml-3 p-2  border-l-2 border-[#f72d74]">
                <h2 className="ml-3 text-lg font-extrabold">+7%</h2>
                <p className="text-sm ml-2">User Satisfaction</p>
              </div>
              <div className="ml-3 border-l-2 border-[#f72d74]">
                <h2 className="ml-3 font-extrabold text-lg ">
                  Technology Used
                </h2>
                <div className="flex gap-3 ml-6 mt-3">
                  <img src="/php.png" alt="Laravel" className="w-8 h-8" />
                  <img src="/reactjs.png" alt="Laravel" className="w-8 h-8" />

                </div>
              </div>
            </div>
            {/* Right Image */}
            <a href="https://ecomdevelopment.us" className="w-full lg:w-[50%]">
              <img
                src="/leadpro.png"
                alt="kapalya"
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
          <img src="/kapalyaLogo.png" alt="logo" className="h-20 w-36" />
        </div>

        {/* Slide 2 */}
        <div className=" coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/baseai.webp" alt="Vodlix" className="h-20 w-44" />
        </div>

        {/* Slide 3 */}
        <div className="coxs:px-12 lg:px-24 py-8 border-t-2 border-gray-400 border-r-2">
          <img src="/servicelead.png" alt="Ecom" className="h-20 w-44" />
        </div>

        {/* Slide 4 */}
        <div className="  coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400 border-r-2  ">
          <img src="/baseai.webp" alt="Vodlix" className="h-20 w-44" />
        </div>

        {/* Slide 5 */}
        <div className="coxs:px-12 lg:px-24 py-8 border-t-2 border-gray-400 border-r-2 ">
          <img src="/kapalyaLogo.png" alt="Ecom" className="h-20 w-36" />
        </div>

        {/* Slide 6 */}
        <div className="coxs:px-2 lg:px-12 py-8 border-t-2 border-gray-400  border-r-2">
          <img src="/servicelead.png" alt="Vodlix" className="h-20 w-44" />
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
                  className={`h-6 w-6 flex items-center justify-center text-[#f72d74] font-bold border-2 p-2 border-[#f72d74] rounded-full`}
                >
                  {activeIndex === index ? "-" : "+"}
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

export default Php