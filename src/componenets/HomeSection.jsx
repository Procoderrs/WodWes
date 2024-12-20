import Nav from "./Nav";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeSection = () => {
/* useEffect(()=>{
  window.scrollTo(0,0)
},[]) */

  // Array of image paths
  const imageArray = [
    "./img-1.png",
    "./img-2.png",
    "./img-3.png",
    "./img-4.png",
    "./img-5.png",
    "./img-6.png",
  ];
  const slides = ["with ease", "Effeciency", "Design"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    arrows: false,
    
  };
  const [activeDropdown, setActiveDropdown] = useState("frontend");

  // Technology data for dropdowns
  const technologies = {
    frontend: [
      { name: "React.js", src: "./react.png" },
      { name: "Vue.js", src: "./vue.png" },
      { name: "Angular", src: "./angular.png" },
      { name: "Next", src: "./next.png" },
      { name: "Javascript", src: "./js.png" },
      { name: "WordPress", src: "./wordpress.png" },
      { name: "Shopify", src: "./shopify.png" },
    ],
    backend: [
      { name: "Node.js", src: "./node.png" },
      { name: "Laravel", src: "./laravel.png" },
      { name: "PHP", src: "./php.png" },
      { name: "MongoDB", src: "./mongodb.png" },
      { name: "Firebase", src: "./firebase.png" },
      { name: "Codeigniter", src: "./codeigniter.svg" },
      { name: "Angular", src: "./angular.png" },
    ],
    cms: [
      { name: "WordPress", src: "./wordpress.png" },
      { name: "Magento", src: "./magento.png" },
      { name: "Drupal", src: "./drupal.png" },
      { name: "B", src: "./b.png" },
      { name: "C", src: "./c.png" },
      { name: "Commerce", src: "./commerce-2.png" },
      { name: "shopify", src: "./shopify.png" },
    ],
  };

  // Handle button click
  const handleButtonClick = (category) => {
    setActiveDropdown(category);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Wodwes?",
      answer:
        "WODWES (Women-Driven Web Solutions) is a well-recognized US-based agency offering a wide range of services including website design and development, CMS development, ERP development, custom Ecommerce development, and UI/UX design. We house a professional team of designers, developers, consultants, and engineers, who are dedicatedly available to help businesses in achieving digital goals.",
    },
    {
      question:
        "How long does it keep to develop a website or web application?",
      answer:
        "The time it takes to develop a website or web application varies depending on the complexity of the project, the number of features and pages, and the level of customization required. We typically provide an estimated timeline during the discovery phase based on our assessment of the project requirements. To get a free quote, email us at sales@wodwes.com",
    },
    {
      question: "What programming languages and frameworks do you use?",
      answer:
        "We use a variety of programming languages and frameworks depending on the project requirements. Some of the languages and frameworks we commonly use include PHP, JavaScript, React, Angular, Vue, Node.js, Python, and Django.",
    },
    {
      question: "Do you provide website hosting and maintenance services?",
      answer:
        "Yes, we offer website hosting and maintenance services to ensure that our client's websites are secure, up-to-date, and performing optimally. Our hosting services include server maintenance, security updates, and backups. Our maintenance services include content updates, bug fixes, and feature enhancements.",
    },
    {
      question: "What is your web development process?",
      answer:
        "Our web development process typically involves the following steps: discovery, design, development, testing, and launch. During the discovery phase, we gather requirements, define the project scope, and create a project plan. The design phase involves creating wireframes, mockups, and visual designs. The development phase involves coding, integrating with third-party services, and setting up databases. The testing phase involves conducting functional testing, usability testing, and performance testing. Finally, we launch the website or application and provide ongoing support. To get started with our web development services, please email us at sales@wodwes.com.",
    },
  ];

  return (
    <>
    

    <section className="z-0 bg-banner-image   font-serif  bg-cover py-24">
      <div className="flex items-center lg:w-full mx-auto justify-center">
        <div className="mx-auto text-center w-full">
          {/* Heading and Slider */}
          <h1 className="font-bold  lg:w-[950px] mx-auto text-white text-3xl lg:leading-[60px]   md:text-4xl lg:text-5xl xl:text-6xl">
            <div className="flex flex-wrap  items-center justify-center">
              <p className="mx-2 px-3  text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                We’re a Full Service
              </p>
              <div className="inline-block  ">
                <Swiper
                  direction="vertical"
                  autoplay={{
                    delay: 3000, // 5-second delay
                    disableOnInteraction: false,
              
                  }}
                  
                  modules={[Pagination, Autoplay]} // Ensure Autoplay is added here
                  className="my-swiper h-[50px]  xl:ml-[-20px] xl:mt-[5px]  md:ml-[-10px]  md:mt-[12px]   md:h-[50px]  md:w-[180px] lg:w-[290px] lg:ml-[-40px] lg:mt-4 lg:h-[70px] 2xl:ml-[-40px]    2xl:w-[350px] 2xl:h-[70px]"
                >
                  <SwiperSlide>
                    <div className="font-bold text-[#f72d74] text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                      with ease
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="font-bold text-[#f72d74] text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                      efficiency
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="font-bold sm:ml[-30px] md:ml-[-65px] text-[#f72d74] text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                      design
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            
            Development Agency
         
          </h1>

          {/* Subheading */}
          

          {/* Description */}
          <h2 className="py-6 text-lg  px-5 font-medium text-[#f72d74] md:my-8">
            Empowering Businesses with Cutting-Edge Web Technologies
          </h2>

          <p className="mb-12 text-white text-base leading-7 px-3  md:text-base ">
            A web design and development agency crafting seamless web and
            software apps for startups, <br className="max-lg:hidden" />
            businesses, and large enterprises to help them build a strong online
            presence <br className="max-lg:hidden" />
            and thrive in the digital age.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <button className="bg-[#f72d74] border-2 border-transparent w-[200px] text-white px-5 font-semibold py-3 hover:bg-transparent hover:border-2 hover:border-[#f72d74] transition-colors duration-300">
              <a href="/contact">Let's Talk</a>
            </button>
          </div>
        </div>
      </div>
    </section>






      <div className=" w-[90%]  max-w-[1440px] my-12 mx-auto">
        <div className="grid lg:grid-cols-2  ">
          <div className=" lg:pr-8  flex items-start justify-center   flex-col">
            <h2 className=" text-xl lg:max-w-[500px]  md:text-3xl font-bold">
              <span className="text-[#f72d74]">Empowering Digital Dreams:</span>{" "}
              Our Commitment to Crafting Exceptional Designs and Solutions for a
              Connected World.
            </h2>
            <p className=" mb-9 mt-[22px] leading-9 text-[#272821] text-base font-normal">
              At our design and development agency, we are dedicated to
              empowering your digital dreams. Our mission is to create
              exceptional designs and innovative solutions that resonate with
              your audience, drive growth, and leave a lasting impact. We blend
              creativity and technology to build digital experiences that bridge
              the gap between vision and reality. We believe in collaboration,
              quality, and exceeding expectations. With us, you'll find a
              partner committed to transforming your ideas into digital success
              stories and helping you thrive in today's interconnected world.
            </p>
            <button className="bg-white font-Inter px-5 w-[200px] py-3 font-semibold text-black hover:bg-[#f72d74] hover:text-white border-2 border-[#f72d74] ">
              <Link to={"/contact"}>Get Started</Link>
            </button>
          </div>

          {/* Lower Grid */}
          <div className="grid comd:grid-cols-2    xs:grid-cols-1  sm:grid-cols-2 cosm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            {[
              { count: "60+", label: "Clients" },
              { count: "6", label: "Years Experience" },
              { count: "90+", label: "Completed Projects" },
              { count: "3", label: "Achievements" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center flex-col border hover:cursor-default border-[#e7e5e5] justify-center shadow font-Inter py-6  rounded-md   xs:flex xs:flex-col "
              >
                <h3 className="text-[#f72d74]  text-[45px] leading-[67px] font-bold ">
                  {stat.count}
                </h3>
                <p className="sm:text-lg font-medium leading-7 text-[#272821] xs:text-base ">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12  z-10  overflow-hidden w-[90%] mx-auto max-w-[1440px]">
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

      <div className="relative w-full py-12 lg:py-20">
        <img
          src="./section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10 max-w-[1440px]  w-[90%] mx-auto ">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h2 className="text-3xl font-semibold font-Inter text-white mb-3">
              Let's Build Your Dream Website{" "}
              <span className="text-[#f72d74]">Together!</span>
            </h2>
            <p className="text-white leading-7 max-w-[850px] ">
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
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]  px-5 py-3  w-[200px] text-center font-bold  "
          >
            Let's Talk
          </Link>
        </div>
      </div>

      <div className="py-12 lg:py-20">
  <div className="w-[90%] max-w-[1440px] mx-auto">
    <div className="max-w-[890px]">
      <h2 className="mb-3 text-3xl font-bold">
        Web Design and Development{" "}
        <span className="text-[#f72d74]">Outsourcing Company</span>
      </h2>
      <p className="text-lg max-w-[900px] leading-9">
        Your Reliable Partner for Digital Excellence - Delivering Outstanding
        Web Solutions with Precision and Expertise, On Time, Every Time.
      </p>
    </div>

    {/* Adjust grid spacing */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto mt-14 md:w-[90%] ">
      <div className="w-full  shadow pt-5 pb-[53px]  pl-4 pr-14   border-b  sm:border-r border-[#d5d5d5]  ">
        <div className="">
          <img
            src="./img.png"
            alt="resource as a service"
            className="w-8 h-8"
          />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            Resource as a service
          </h3>
          <p className="text-[16px]  font-Inter leading-[30px] max-w-[280px]">
            Unlock unparalleled talent and expertise with our
            Resource-as-a-Service. Access top-notch designers and developers to
            enhance your projects and accelerate growth.
          </p>
        </div>
      </div>

      {/* Similar adjustments for all other grid items */}
      <div className="w-full  shadow pt-5 pb-[53px]  pl-4 pr-14 border-b xl:border-r border-[#d5d5d5]  ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            Front-End Development
          </h3>
          <p className="text-[16px]font-Inter leading-[30px] max-w-[280px]">
            Elevate user experiences with our Front-End Development expertise.
            Craft visually stunning, responsive, and intuitive interfaces that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Repeat similar updates for other items */}

      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14  border-b  border-[#d5d5d5] ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            Web Application Development
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          Empower your business with our Web Application Development services. We turn ideas into 
          robust, scalable, and user-friendly web solutions that drive success.
          </p>
        </div>
      </div>

      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14  border-b xl:border-r border-[#d5d5d5]  ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            Full-Stack  Development
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end 
          finesse with back-end robustness to bring your vision to life.
          </p>
        </div>
      </div>

      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14  border-b xl:border-r border-[#d5d5d5]  ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            CMS Development
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems
           tailored to streamline your digital content and operations.
          </p>
        </div>
      </div>

      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14  border-b  border-[#d5d5d5]  ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            DevOps
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          EStreamline development pipelines and enhance project efficiency with our DevOps solutions. Achieve seamless collaboration, rapid deployments,
           and optimal performance for your digital projects.
          </p>
        </div>
      </div>
      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14  border-b xl:border-r border-[#d5d5d5] ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
            Software Development
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, 
          scalable, and tailored software solutions for your business.
          </p>
        </div>
      </div>

      <div className="w-full shadow pt-5 pb-[53px]  pl-4 pr-14 border-b  border-[#d5d5d5]  ">
        <div>
          <img src="./img.png" alt="Front-End Development" className="w-8 h-8" />
          <h3 className="h-14 text-xl xs:text-2xl md:text-xl mt-3 flex items-center font-bold mb-4">
           Quality Assurance & Testing
          </h3>
          <p className="text-[16px] font-Inter leading-[30px] max-w-[280px]">
          Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, 
          scalable, and tailored software solutions for your business.
          </p>
        </div>
      </div>






    </div>
  </div>
</div>


     
        
       <div className="relative font-Inter w-full py-12 lg:py-20">
        <img
          src="./section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10 max-w-[1440px]  w-[90%] mx-auto font-Inter">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h2 className="text-3xl font-semibold  text-white mb-3">
              
              <span className="text-[#f72d74]">Hire Remote & Project {''}</span>
              Based Developers for Wodwes
            </h2>
            <p className="text-white max-w-[850px] text-base leading-7">
            Power up your projects with WODWES remote developers. Boost productivity and achieve 
            exceptional results. Get started today to unlock your project's full potential!
            </p>
          </div>
          {/* Button */}
          <Link
            to={"/contact"}
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]   px-5 py-3  w-[200px] font-bold text-center "
          >
            Let's Talk
          </Link>
        </div>
      </div>

      

      <div className="  gap:10 justify-between  w-[90%] max-w-[1440px] mx-auto pb-20 mt-20 flex flex-col lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full lg:sticky lg:top-32 lg:max-w-[500px] lg:w-[50%] ">
          <h2 className="text-4xl font-black max-w-[400px] text-[#272821]">
            What you get with <span className="text-[#f72d74]">WODWES</span>{" "}
            product and service design
          </h2>
          <p className="my-5 text-base leading-8">
            With WODWES product and service design, you get a transformative
            experience that marries innovation, aesthetics, and functionality.
            We craft solutions that resonate with your audience, fuel growth,
            and elevate your brand. Expect meticulous attention to detail,
            seamless user experiences, and a creative spark that sets you apart
            in today's competitive landscape. We're your partners in turning
            ideas into tangible success stories.
          </p>
          <button className="border-[#f72d74] border-2 px-5 py-3  w-[200px] font-bold hover:bg-[#f72d74] hover:text-white">
            <Link to={"/contact"}>Get Started</Link>
          </button>
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1     xl:grid-cols-2 lg:w-[50%]">
          <div>
          
          {/* Box 1 */}
          <div className="space-y-4  sm:order-1">
            <div className="p-4 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
              <img
                src="./img.png"
                alt="resource as a service"
                className="w-9 h-9"
              />
              <h3 className=" text-lg mt-3 flex items-center font-bold mb-2">
                Product Design
              </h3>
              <p className="text-sm leading-6">
                Elevate your product's appeal and functionality with our design
                expertise. We create innovative and user-centric solutions that
                captivate and deliver results.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="space-y-4 mt-5 sm:order-3">
            <div className="p-4 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
              <img
                src="./img.png"
                alt="resource as a service"
                className="w-9 h-9"
              />
              <h3 className=" text-lg mt-3 flex items-center font-bold mb-2">
                Business Design
              </h3>
              <p className="text-sm leading-6">
                Transform your business with our expert design services. We
                craft captivating designs that drive success, leaving a lasting
                impact on your brand.
              </p>
            </div>
          </div>
          </div>

          {/* Box 3 */}
          <div className="sm:mt-5 sm:order-2">
            <div className="space-y-4">
              <div className="p-4 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-9 h-9"
                />
                <h3 className=" text-lg mt-3 flex items-center font-bold mb-2">
                  Service Design
                </h3>
                <p className="text-sm leading-6">
                  Elevate user experiences with our service design expertise. We
                  blend creativity and strategy to craft seamless, user-centric
                  solutions that drive success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-20 lg:py-20">
        <img
          src="./product-img.png"
          className="absolute top-0 left-0 w-full h-full  z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1440px] text-white z-10">


          <div className="flex flex-col md:flex-row  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="text-3xl font-bold font-Inter  text-white ">
                <span className="text-[#f72d74] text-3xl font-bold" >Product</span> We Develop
              </h1>
              <p className="text-white mt-5  max-w-[572px]">
                Hire testers and QA experts to perform end-to-end testing of
                your existing product, website, or software solution.
              </p>
            </div>
            <Link
              to={"/"}
              className="text-white border-2 border-[#f72d74] w-[200px] px-5 py-3 text-center hover:bg-[#f72d74] font-bold "
            >
              Give it a Try?
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  mt-10">
            <img src="cv-maker-2.png" alt="CV Maker2" />
            <img src="cv-maker.png" alt="CV Maker " />
          </div>
        </div>
      </div>

      <div className="py-20 w-[90%] mx-auto max-w-[1440px]">
        <h2 className="text-3xl font-bold">
          <span className="text-[#f72d74]">Technologies</span> We Use
        </h2>
        <p className="mt-4  max-w-[750px] text-lg  leading-7  text-[#272821]">
          We leverage cutting-edge technologies to create innovative solutions,
          ensuring your digital projects remain at the forefront of industry
          standards.
        </p>
        <div className="mx-auto max-w-[950px]">
          {/* Buttons for selecting dropdown */}
          <div className="my-14 gap-4 flex items-center justify-between">
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
            <div className="flex flex-wrap gap-10 md:gap-x-32 md:gap-y-20 lg:max-w-[854px] max-w-[700px]  mx-auto   justify-center">
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

      <div className="relative py-20">
        <img
          src="./img-back.png"
          className="absolute top-0 z-0  h-full w-full  "
          alt=""
        />
        <div className=" relative  flex  flex-col    gap-10  w-[90%] max-w-[1440px] mx-auto lg:flex-row">
          {/* Left Column: Sticky Content */}
          <div className="h-full flex-1    lg:sticky lg:top-32 lg:max-w-[505px] ">
            <h2 className="text-4xl font-bold text-white">
              Why Choose <span className="text-[#f72d74]">WODWES</span> for
              Website Design and Development Services?
            </h2>
            <p className="my-5 text-[20px] max-w-[460px] leading-7 text-white">
              We’re not a typical development agency — We’re your technology
              partner striving to achieve your specific goals.
            </p>
          </div>

          {/* Right Column: Grid Boxes */}
          <div className="grid grid-cols-1 mt-4 gap-5 flex-1  lg:grid-cols-1 xl:grid-cols-1 space-y-10 lg:mt-24 lg:max-w-[699px] lg:space-y-20">
            {/* Box 1 */}
            <div className=" space-y-2 ">
              <div className=" ">
                <img
                  src="./experience.png"
                  alt="experience"
                  className="w-9 h-9 object-contain"
                />
                <h3 className=" text-base my-2  leading-[42px]  font-bold  text-white lg:text-[28px]">
                  Pool of Experience and Expertise
                </h3>
                <p className="text-[18px] text-white  font-normal   leading-9">
                  With a diverse team of professionals with expertise in various
                  areas of web development, including front-end and back-end
                  development, database design, user interface design, and
                  e-commerce solutions, we can handle all aspects of your web
                  development project efficiently and effectively.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className=" ">
              <div className=" ">
                <img
                  src="./transparency.png"
                  alt="transparency"
                  className="w-9 h-9 object-contain"
                />
                <h3 className=" text-base my-2 font-bold  text-white lg:text-[28px]">
                  Transparency and Quality
                </h3>
                <p className="text-[18px] text-white  font-normal   leading-9">
                  We have an in-house rigorous quality assurance process in
                  place to ensure that our development solutions are of the
                  highest quality. We conduct thorough testing and debugging to
                  identify and fix any issues before delivering the final
                  product to you.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className=" ">
              <div className=" ">
                <img
                  src="./flexible.png"
                  alt="flexible"
                  className="w-9 h-9 object-contain"
                />
                <h3 className=" text-base my-2 font-bold  text-white lg:text-[28px]">
                  Flexible Hiring Models
                </h3>
                <p className="text-[18px] text-white  font-normal   leading-9">
                  We have flexible hiring models for our partners. Whether you
                  need to hire on an hourly basis, a project basis, or a
                  dedicated team for a project, team WODWES got you covered with
                  the flexibility and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10  2xl:gap-36 w-[90%] max-w-[1440px] mx-auto my-16  lg:flex lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full flex-1  lg:sticky lg:top-32  ">
          <img src="./team.png" className="rounded-lg" alt="" />
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="flex flex-1 flex-col   gap-4 lg:flex-col ">
          <h2 className="text-3xl font-bold">
            Your Development <span className="text-[#f72d74]">Partner!</span>
          </h2>
          <p className="text-[16px] font-Inter leading-9">
            We love hearing about how our work has helped businesses succeed and
            how WODWES became their go-to development team. Don't just take our
            word for it - read what our satisfied clients have to say!
          </p>
          {/* Box 1 */}
          <div className="space-y-4 ">
            <div className=" rounded-lg ">
              <img
                src="./coding.png"
                alt="resource as a service"
                className="w-9 h-9"
              />
              <h3 className=" text-xl mt-3 flex items-center font-semibold ">
                Developing feature-enriched web and software solutions for
                businesses
              </h3>
              <p className="text-base mt-1 leading-9">
                At WODWES, we understand that technology is constantly evolving,
                and we're committed to staying ahead of the curve. Whether you
                need a simple website or a complex web application, we have the
                expertise and experience to deliver innovative solutions that
                help you achieve your business goals.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="space-y-4 ">
            <div className=" rounded-lg">
              <img
                src="./coding.png"
                alt="resource as a service"
                className="w-9 h-9"
              />
              <h3 className=" text-xl  mt-3 flex items-center font-semibold ">
                Tailored development solutions to meet your business needs!
              </h3>
              <p className="text-base leading-9 mb-7">
                Team WODWES believes that every business is unique, and that's
                why we offer tailored development solutions to meet your
                specific needs. We work closely with our clients to identify
                their unique business requirements and develop customized
                solutions that help them achieve their goals.
              </p>
              <button className="mb-5  ">
                <Link
                  to={"/contact"}
                  className="border-2 font-semibold px-9 py-3   hover:bg-[#f72d74] hover:text-white  border-[#f72d74]"
                >
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="  mx-auto maxlg:max-w-[90%] max:w-[90%] max:max-w-[1690px] ">
        <div className="flex flex-col items-center    h-full w-full lg:flex-row  gap-10">
          {/* Left Div */}
          <div className="h-full w-full lg:top-32    max-w-md lg:sticky  lg:mt-[-10%]  lg:ml-[10%]">
            <h2 className="mb-5 text-3xl  font-extrabold md:text-4xl xl:text-5xl">
              Get in Touch
            </h2>
            <p className="text-lg font-normal">
              We love hearing about how our work has helped businesses succeed
              and how WODWES became their go-to development team.
            </p>
          </div>

          {/* Right Div */}
          <div className="rounded-lg  w-full   p-9 bg-[#272821] 2xl:p-28">
            <form action="">
              <div className="grid max-w-2xl xs:grid-cols-2 gap-10">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="col-span-2 w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none  placeholder:text-[#9c9c9c] required:"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="maxcosm:col-span-2 w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none  placeholder:text-[#9c9c9c] required:"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="maxcosm:col-span-2 w-full border-b border-[#9c9c9c] bg-transparent pb-1 text-[#9c9c9c] outline-none  placeholder:text-[#9c9c9c] required:"
                />
                <textarea
                  rows={10}
                  placeholder="Your message here..."
                  className="col-span-2 w-full  rounded-[10px] border border-[#9c9c9c] bg-transparent p-2 text-[#9c9c9c] outline-none placeholder:text-[#9c9c9c] required:"
                ></textarea>
                <button className="mb-5 ml-[-10px]">
                  <Link
                    to={"/contact"}
                    className="border-2 font-semibold px-9 py-3 text-white   hover:bg-[#f72d74] hover:text-white  border-[#f72d74]"
                  >
                    Get Started
                  </Link>
                </button>
              </div>
            </form>
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
                     <span className="text-left text-base font-semibold text-[#272821] md:text-lg">
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
  );
};

export default HomeSection;
