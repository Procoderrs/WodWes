import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Marquee from 'react-fast-marquee'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';

const BigCommerce = () => {
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
      question: "Do you offer customized BigCommerce solutions?",
      answer:

  "Yes, we understand that every business has unique requirements, and we offer customized BigCommerce solutions tailored to meet your specific needs.   "
    },
    {
      question:
        "How long does it take to complete a BigCommerce project?",
      answer:
"The timeframe for completing a BigCommerce project depends on the scope and complexity of the project. We work closely with our clients to establish a realistic timeline and ensure that the project is completed on time." },
    {
      question: "Do you provide ongoing support and maintenance for BigCommerce website?",
      answer:
"Yes, we offer website maintenance and support services to ensure that your BigCommerce website stays up-to-date, secure, and fully functional. We also provide ongoing support to help you with any issues or questions you may have."  },
    {
      question: "How much do your BigCommerce services cost?",
      answer:
"The cost of our BigCommerce services depends on the scope and complexity of the project. We offer customized solutions tailored to your needs and provide you with a detailed proposal outlining the costs involved. "    },
    
  ];

  return (
    <>
<div className="relative w-full py-12 lg:py-20">
        <img
          src=" /product-img.png"
          className="absolute top-0 left-0 w-full h-full  z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1440px] text-white z-10">

        <div className='grid coxs:grid-cols-1 gap-6 lg:grid-cols-2 '>

        
          <div className="flex   coxs:flex-col  mb-5  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="lg:text-6xl coxs:text-3xl font-black font-Inter  sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74] font-black'>BigCommerce </span>  Services 
              </h1>
              <p className="text-[#e8e6e6] mt-5 mb-7 text-lg leading-8 font-Inter max-w-[637px]">
              We are pleased to welcome you to the BigCommerce WODWES Services page! Our team of 
              experts is here to provide you with top-notch services that will help you take your 
              online business to the next level. Whether you need help with web design, development,
               or optimization, we've got you covered. With our expertise in BigCommerce,
                we can help you maximize your store's potential and achieve your business goals. 
              Contact us today to learn how we can help you grow your online business.
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
        <h2 className='text-3xl mb-7 font-black'>Why Choose <span className='text-[#f72d74]'>WODWES</span>  for BigCommerce Services ?</h2>
        
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
      <p className='mb-7  leading-9 text-lg'>WODWES is a reliable and experienced BigCommerce
       development company.They offer a wide range of BigCommerce services, including customization,
        migration, and maintenance.Their team of experts can help you create a 
      successful online store that meets your unique business needs.</p>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3'>
    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>BigCommerce Dedicated Integrations</h3>
   
    
    </div>
    
    
   
<ul className='flex coxs:flex-col  text-sm  mt-7 gap-5 list-disc pl-5 '>
  <li>API Integration</li>
  <li>Theme Integration</li>
  <li>ERP Integration</li>
  <li>CRM Integration</li>
  <li>Plugin Integration</li>
  
  
  
</ul>
    </div>





    <div className='coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>BigCommerce Development & Customization</h3>

    </div>
    
   
<ul className='flex coxs:flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-7 '>
  <li>Custom Scripting</li>
  <li> API Development</li>
  <li>Template Development</li>
  <li>Plugin Development</li>
  <li>Store Redesign</li>
  
  
  
</ul>
    </div>


    <div className='coxs:border-b-[6px]  border-[#f72d74] p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>BigCommerce Maintenance & Add-On Services</h3>

    </div>
    
   
<ul className='flex coxs:flex-col text-sm gap-5 mt-7 list-disc pl-5 '>
  <li>BigCommerce Updates & Bug Fixes</li>
  <li>BigCommerce Site Performance</li>
  <li>BigCommerce Migration</li>
  <li>24/7 Support & Online Resources</li>
  
  
  
</ul>
    </div>
      </div>
      </div>


      <div className='mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex '>
     <div className=' lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]'>
     <h2 className='text-4xl max-w-[430px] font-extrabold'>
     Enjoy a Seamless Online Experience With Our BigCommerce Game Changing Services    </h2>
     
     <p className='mt-7 text-[16px] leading-9'>We specialize in creating stunning,
      responsive websites optimized for search engines and designed to convert visitors into 
      customers through our integrated Bigcommerce services. We also offer custom development 
      services to help you integrate your online store with the latest 
     technologies and third-party apps. Scroll down to learn more about our services.</p>
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

       <h2 className='text-xl mt-4 font-extrabold'>Mobile Optimization</h2>
       <p className='leading-7 mt-4 text-sm'>WODWES, the team of experts, aids you in
        optimizing websites for mobile devices, including smartphones and tablets, 
        providing that your website visitors have a seamlessbrowsing experience.
         We use the latest techniques and technologies to create responsive websites
          optimized for different screen sizes and resolutions, ensuring your website 
          looks great on any device. Our services include mobile design and development,
           speed optimization, and user experience optimization. We can also help you integrate
            mobile-specific features like click-to-call and location-based 
       services to improve your website's functionality and user engagement.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Marketing and SEO Services
</h2>
       <p className='leading-7 text-sm'>WODWES helps drive more traffic to your 
       website and improve your online visibility. You'll need a solid SEO and 
       marketing strategy to succeed. Our teamof experts specializes in creating 
       custom marketing and SEO solutions to help you reach your target audience
        and achieve your business goals. Our services include search engine optimization, 
        social media marketing, email marketing, content marketing, and pay-per-click advertising. 
        We use the latest tools and techniques to create customized strategies tailored to your 
        business needs and objectives. We can also provide detailed analytics and 
       reporting to help you track your progress and measure your ROI.</p>
       

       </div>

       <div className='  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white'>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl  mt-4 font-extrabold'>Website Maintenance and Support</h2>
       <p className='leading-7 text-sm'>WODWES offers innovative services to run an online store
        or website. Using our integrated services, you can create a reliable and responsive support 
        system, ensuringyour website operates smoothly, and any issues are resolved quickly.
         Our team of experts specializes in providing website maintenance and support services 
         to ensure your website stays up-to-date, secure, and fully functional. Our services 
         include website backups, software updates, security monitoring, performance 
         optimization, and bug fixes. We can also provide ongoing support to help
          you with any issues or questions. With our website maintenance and support
           services, you can be confident that your website is in good hands, 
       allowing you to focus on running your business.</p>
       

       </div>





</div>


<div className=' coxs:space-y-4 2xl:space-y-5 mt-5 '>



<div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Payment Gateway Integration</h2>
       <p className='leading-7 text-sm'>WODWES has a team of experts who
        integrate payment gateways into your website to ensure customers have a
         smooth and secure checkout experience. We workwith various payment gateway 
         providers and can help you choose the one that best suits your business needs. 
         Our services include payment gateway integration, customization, and optimization, 
         to ensure your payment process is streamlined and meets the latest security standards.
          We can also help you integrate features like recurring payments and multi-currency support to
        make the payment process even more convenient for your customers..</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Shipping and Tax Setup
</h2>
       <p className='leading-7 text-sm'>WODWES assists you in running an online business. 
       We ensure you have an efficient and accurate shipping and tax setup for a seamless customer 
       checkoutexperience. Our team of experts specializes in setting up and optimizing shipping and 
       tax configurations for your online store. We can help you choose the best shipping carriers and methods, 
       set up shipping rules and rates, and ensure that your tax settings comply with the latest regulations.
        We can also help you integrate with third-party shipping and tax services to streamline your shipping and tax
         processes further. With our expertise in shipping and tax setup, you can be confident that your customers will
          have a hassle-free checkout
        experience, ultimately leading to increased sales and customer loyalty.</p>
       

       </div>

       <div className='  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white '>
       <img src="/full-stack.png" alt="ful-stack-img" className='h-9 w-9' />

       <h2 className='text-xl mt-4 font-extrabold'>Analytics and Reporting
</h2>
       <p className='leading-7 text-sm'>WODWES has a team of experts who provide 
       customized analytics and reporting solutions to help you track your website's
        performance, understand your customer's behavior, andmeasure your ROI. We can 
        help you set up and configure analytics tools such as Google Analytics, 
        create custom dashboards and reports, and provide you with insights and recommendations 
        based on your data. Every business has unique goals and objectives, so we tailor our analytics and
         reporting services to meet your needs. Our team can also help you with A/B testing and conversion
          rate optimization to help you improve your website's performance and achieve your business goals. 
          We use the latest tools and techniques to analyze your 
       data and provide actionable insights to help you make informed decisions.</p>
       

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
   From Client Satisfaction To Functional Expertise, We Are Recognized For All 
   The Domains Of E-commerce Stores and Digital Growth with WODWES BigCommerce Services

</h2>
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
          <p className="text-sm pb-4 text-center">Top Project Management Methodologies</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">End-To-End Services</p>
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
          <p className="text-sm pb-4 text-center">Largest Talent Network</p>
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
          Cost-Effective Services
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

export default BigCommerce