import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Marquee from 'react-fast-marquee'
import { useState ,useEffect } from 'react'
const Technologies = () => {

useEffect(()=>{
  window.scrollTo(0,0)
},[])

  const technologies = {
    frontend: [
      { name: "React.js", src: "/react.png" },
      { name: "Vue.js", src: "/vue.png" },
      { name: "Angular", src: "/angular.png" },
      { name: "Next", src: "/next.png" },
      { name: "Javascript", src: "/js.png" },
      { name: "WordPress", src: "/wordpress.png" },
      { name: "Shopify", src: "/shopify.png" },
    ],
    backend: [
      { name: "Node.js", src: "/node.png" },
      { name: "Laravel", src: "/laravel.png" },
      { name: "PHP", src: "/php.png" },
      { name: "MongoDB", src: "/mongodb.png" },
      { name: "Firebase", src: "/firebase.png" },
      { name: "Codeigniter", src: "/codeigniter.svg" },
      { name: "Angular", src: "/angular.png" },
    ],
    cms: [
      { name: "WordPress", src: "/wordpress.png" },
      { name: "Magento", src: "/magento.png" },
      { name: "Drupal", src: "/drupal.png" },
      { name: "B", src: "/b.png" },
      { name: "C", src: "/c.png" },
      { name: "Commerce", src: "/commerce-2.png" },
      { name: "shopify", src: "/shopify.png" },
    ],
  };

  const [activeDropdown, setActiveDropdown] = useState("frontend");

  const handleButtonClick = (category) => {
    setActiveDropdown(category);
  };

  const imageArray = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Wodwes?",
      answer:
"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."        ,
    },
    {
      question:
        "How long does it keep to develop a website or web application?",
      answer:
"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."        ,
    },
    {
      question: "What programming languages and frameworks do you use?",
      answer:
"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."        ,
    },
    {
      question: "Do you provide website hosting and maintenance services?",
      answer:
"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."        ,
    },
    {
      question: "What is your web development process?",
      answer:
"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."        ,
    },
  ];


  return (
    <>
    <div className="relative w-full py-12 lg:py-24">
        <img
          src=" /product-img.png"
          className="absolute top-0 left-0 w-full h-full  z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1690px] text-white z-10">

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 '>

        
          <div className="flex flex-col  mb-5  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="lg:text-6xl coxs:text-3xl font-black font-Inter  sm:text-4xl text-white mb-3">
              <span className='text-[#f72d74] font-black'>Lorem </span>  Ipsum Dollar Sit Amet
              </h1>
              <p className="text-[#e8e6e6] mt-7 mb-7 text-lg leading-8 font-Inter max-w-[637px]">
              As a leading React development company, our specialized React developers 
              build scalable and robust user interfaces, delivering an unparalleled user experience. 
              We develop Dev solutions of As a leading React development company,.


              </p>
               <div className='flex gap-10 mt-7 py-7'>
               <div>
                <h2 className='text-[#f72d74] text-5xl font-bold'>1.67x </h2>
                <p>Impressive Performance</p>
               </div>
               <div>
                <h2 className='text-[#f72d74] text-5xl font-bold'>29% </h2>
                <p>Customer Retention</p>
               </div>
               </div>
              <p className='mt-7'>
              <Link
              to={"/"}
              className="text-white border-2 border-[#f72d74] w-44 px-9 py-3 hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
              </p>
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

      <div className="my-16  max-w-[1440px] mx-autow-[90%] z-10  overflow-hidden">
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
      <div className=' max-w-[680px] '>
        <h2 className='text-3xl mb-7 font-black'>Driving Innovation In <span className='text-[#f72d74]'>Healthcare</span>Industry </h2>
        <p className='text-lg leading-7 mt-7'>
        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.
        </p>
        <div className='pb-8'>
        
        </div>
      </div>
      <div className=' '>
      <Link
              to={"/"}
              className="text-black border-2 border-[#f72d74] w-44 px-12 py-3  hover:bg-[#f72d74] font-bold "
            >
              Get Started
            </Link>
      </div>

      </div>

      <div className='mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74]  md:grid-cols-2 lg:grid-cols-3'>
    <div className=' border-[#d6d6d6]  shadow-2   md:border-r p-5'>
    <div className='flex items-center py-4  gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Lorem Ipsum Dollar</h3>
   
    
    </div>
    <p className='text-sm mt-7 leading-7 px-8'>Our free plan gives you unlimited
     team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets
     you bring in your team faster. See our pricing plans for more features.
</p>
    
   

    </div>


    <div className=' border-[#d6d6d6] shadow-2  lg:border-r p-5'>
    <div className='flex  py-4  items-center gap-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Lorem Ipsum Dollar</h3>

    </div>
    <p className='text-sm mt-7 px-8 leading-7'>
    Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made
     templates. Signing up with your work email lets
     you bring in your team faster. See our pricing plans for more features.</p>
    
  
    </div>


    <div className=' shadow-2 p-5'>
    <div className='flex items-center gap-5 py-5'>
    <img src="/grid-img.png" alt="grid-img" className='h-9 w-9' />
    <h3 className='text-2xl font-extrabold'>Lorem Ipsum Dollar</h3>

    </div>
    
    <p className='text-sm mt-7 leading-7 px-8'>
    Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. 
    Signing up with your work email lets you
     bring in your team faster. See our pricing plans for more features.
    </p>
   
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

      <div className="py-12 lg:py-20">
        <div className="w-[90%] max-w-[1440px] mx-auto">
          <div className="max-w-[890px] ">
            <h2 className="mb-3 text-3xl font-extrabold ">
              Web Design and Development{" "}
              <span className="text-[#f72d74]">Outsourcing Company</span>
            </h2>
            <p className=" text-lg leading-9">
              Your Reliable Partner for Digital Excellence - Delivering
              Outstanding Web Solutions with Precision and Expertise, On Time,
              Every Time.
            </p>
          </div>

          {/* 3 columns grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto mt-14 w-[90%] bg-white">
            <div className="w-full border-b sm:border-r border-[#d6d6d6] shadow hover:rounded-md bg-white">



              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Resource as a service
                </h3>
                <p className="mb-4 text-lg">
                Hire front-end developers to get top-rated front-end development services for your business.
                 We design visually appealing and engaging website experiences.
                </p>

                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>



            <div className="w-full border-b  xl:border-r   border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Front-End Development
                </h3>
                <p className="mb-4 text-lg">
                  Elevate user experiences with our Front-End Development
                  expertise. Craft visually stunning, responsive, and intuitive
                  interfaces that captivate and engage your audience.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>
            <div className="w-full border-b sm:border-r border-[#d6d6d6]  xl:border-r-0  shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Web Application Development
                </h3>
                <p className="mb-4 text-lg">
                  Empower your business with our Web Application Development
                  services. We turn ideas into robust, scalable, and
                  user-friendly web solutions that drive success.{" "}
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>






            <div className="w-full border-b  xl:border-r border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Resource as a service
                </h3>
                <p className="mb-4 text-lg">
                Hire front-end developers to get top-rated front-end development services for your business.
                 We design visually appealing and engaging website experiences.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>


            <div className="w-full border-b sm:border-r border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Front-End Development
                </h3>
                <p className="mb-4 text-lg">
                Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and
                 intuitive interfaces that captivate and engage your audience.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>



            <div className="w-full border-b border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                 Web Application Development
                </h3>
                <p className="mb-4 text-lg">
                Empower your business with our Web Application Development services.
                 We turn ideas into robust, scalable, and user-friendly web solutions that drive success.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>




            <div className="w-full border-b sm:border-b-0  sm:border-r border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Resource as a service
                </h3>
                <p className="mb-4 text-lg">
                Hire front-end developers to get top-rated front-end development services for your business. 
                We design visually appealing and engaging website experiences.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>


            <div className="w-full border-b sm:border-b-0 border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Front-End Development
                </h3>
                <p className="mb-4 text-lg">
                Elevate user experiences with our Front-End Development expertise. 
                Craft visually stunning, responsive, 
                and intuitive interfaces that captivate and engage your audience.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>



            <div className="w-full border-b sm:border-b-0 border-[#d6d6d6] shadow  hover:rounded-md">
              <div className="pt-5 pr-4 pb-12 pl-4">
                <img
                  src="/img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Web Application Development
                </h3>
                <p className="mb-4 text-lg">
                Empower your business with our Web Application Development services. 
                We turn ideas into robust, scalable, and user-friendly web solutions that drive success.
                </p>
                <div className='flex gap-2  text-[#f72d74]'>
                  <p className='font-bold'>Learn More</p>
                  <a href="/"><img src="/right-arrow-svgrepo-com.png" alt=""  className='h-6 w-8'/></a>
                </div>
              </div>
            </div>






          </div>
        </div>
      </div>

      <div className="py-20 w-[90%] mx-auto max-w-[1440px]">
        <h2 className="text-3xl font-bold">
          <span className="text-[#f72d74]">Technologies</span> We Use
        </h2>
        <p className="mt-4 w-full max-w-[896px] text-lg  font-normal font-Inter text-[#272821]">
          We leverage cutting-edge technologies to create innovative solutions,
          ensuring your digital projects remain at the forefront of industry
          standards.
        </p>
        <div className="mx-auto max-w-[950px]">
          {/* Buttons for selecting dropdown */}
          <div className="my-10 gap-4 flex items-center justify-between">
            <button
              onClick={() => handleButtonClick("frontend")}
              className={`border-b-2 ${
                activeDropdown === "frontend"
                  ? "border-[#f72d74] text-[#f72d74]"
                  : "border-transparent text-black"
              } text-sm font-semibold sm-text-lg hover:text-[#f72d74] lg:text-xl`}
            >
              Frontend Technologies
            </button>
            <button
              onClick={() => handleButtonClick("backend")}
              className={`border-b-2 ${
                activeDropdown === "backend"
                  ? "border-[#f72d74] text-[#f72d74]"
                  : "border-transparent text-black"
              } text-sm font-semibold sm-text-lg hover:text-[#f72d74] lg:text-xl`}
            >
              Backend Technologies
            </button>
            <button
              onClick={() => handleButtonClick("cms")}
              className={`border-b-2 ${
                activeDropdown === "cms"
                  ? "border-[#f72d74] text-[#f72d74]"
                  : "border-transparent text-black"
              } text-sm font-semibold sm-text-lg hover:text-[#f72d74] lg:text-xl`}
            >
              CMS Technologies
            </button>
          </div>

          {/* Dropdown content */}
          <div className="mt-6   rounded-lg">
            <div className="mt-4 flex flex-wrap gap-10 md:gap-20 xl:gap-36  justify-center">
              {technologies[activeDropdown].map((tech, index) => (
                <div
                  key={index}
                  className="w-20 h-20 flex  items-center justify-center  rounded-full  box "
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=' py-14 lg:py-20 bg-[#272821]'>
<div className='w-[90%] mx-auto max-w-[1440px]'>
<div className='flex flex-col md:flex-row md:justify-between gap-9'>
<div className='max-w-[700px] w-full text-white'>
<h3 className=' text-4xl font-extrabold'>Why <span className='text-[#f72d74]'>Choose</span> Dollar Sit, Lorem Ipsum Dollar Sit</h3>
<p className='mt-7 mb-7 text-lg'>Hire testers and QA experts to perform end-to-end testing of your existing product, website, or software solution Hire testers and QA experts to perform end-to-end testing of your existing product, website, or software solution</p>
</div>

<div className='flex md:items-center md:justify-center'>
<p className='  font-bold cursor-pointer px-7 py-2 text-white hover:bg-[#f72d74] hover:text-white border-2 border-[#f72d74] w-44 h-12  '><Link to="/">
  Get Started
</Link></p>
</div>

</div>


<div className='grid grid-cols-1 mt-7 md:grid-cols-2 w-[90%] mx-auto  lg:grid-cols-3 text-white gap-10'>
<div className='space-y-4  bg-[#585954] pl-5 pr-10 rounded-lg py-7'>
  <h3 className='font-black text-2xl '>Transparent and Quality</h3>
  <p className='text-lg leading-7'>We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.</p>
</div>


<div className='space-y-4 bg-[#585954] pl-5 pr-10 rounded-lg py-7 lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-auto'>
  <h3 className='font-black text-2xl'>Transparent and Quality</h3>
  <p className='text-lg leading-9'>We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.
  We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.
  </p>
</div>

<div className='space-y-4  bg-[#585954] pl-5 pr-10 rounded-lg py-7'>
  <h3 className='font-black text-2xl'>Transparent and Quality</h3>
  <p className='text-lg leading-7'>We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.</p>
</div>

<div className='space-y-4  bg-[#585954] pl-5 pr-10 rounded-lg py-7'>
  <h3 className='font-black text-2xl'>Transparent and Quality</h3>
  <p className='text-lg leading-7'>We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.</p>
</div>

<div className='space-y-4  bg-[#585954] pl-5 pr-10 rounded-lg py-7'>
  <h3 className='font-black text-2xl'>Transparent and Quality</h3>
  <p className='text-lg leading-7'>We have an in-house rigorous quality assurance process in place to 
  ensure that our development solutions are of the highest quality.</p>
</div>

</div>
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
                <span className="text-left text-base font-bold text-[#272821] md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`h-10 w-10 flex items-center justify-center text-[#f72d74] font-bold  p-2  rounded-full`}
                >
               <img src=  {activeIndex === index ? "/minusicon.png" : "/plusicon.png"}
                alt={activeIndex === index ? "Collapse" : "Expand"} />
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

export default Technologies