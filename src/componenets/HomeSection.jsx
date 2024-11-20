import Nav from "./Nav";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const HomeSection = () => {
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
  }

  // Handle button click
  const handleButtonClick = (category) => {
    setActiveDropdown(category);
  };
  return (
    <>
      <Nav />

      <section className="z-0 bg-banner-image bg-cover py-28">
        <div className="flex items-center justify-center ">
          <div className="mx-auto text-center w-full">
            <h1 className="text-3xl font-bold text-white md:text-4xl 	 lg:text-5xl xl:text-6xl lg:grid lg:grid-cols-2 items-center lg:mr-36 lg:my-4">
              <p className="lg:text-end mx-2">We re a Full</p>
              <div className=" grid grid-cols-[42%_58%]   3xl:grid-cols-[22%_78%] items-center justify-center w-full">
                <p className="text-end xl:text-center"> Service</p>
                <Slider {...settings} className=" relative w-52 lg:w-96 px-1">
                  {slides.map((text, index) => (
                    <div
                      key={index}
                      className="text-start text-3xl lg:text-6xl text-[#f72d74] font-black md:text-4xl whitespace-nowrap"
                    >
                      {text}
                    </div>
                  ))}
                </Slider>
              </div>
            </h1>
            <h1 className="text-3xl font-bold text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl mx-auto">
              Development Agency
            </h1>
            <h2 className="py-6 text-xl font-medium text-[#f72d74] md:my-8">
              Empowering Businesses with Cutting-Edge Web Technologies
            </h2>
            <p className="mb-12 text-white">
              A web design and development agency crafting seamless web and
              software apps for startups,
              <br className="max-lg:hidden" />
              businesses, and large enterprises to help them in building a
              strong online presence
              <br className="max-lg:hidden" />
              and thrive in the digital age.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#f72d74] border-2 border-transparent text-white px-14 font-bold py-3 hover:bg-[#282922] hover:border-2 hover:border-[#f72d74] transition-colors duration-300">
                <a href="#">Let's Talk</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:my-9 lg:mx-6 sm:my-0 sm:mx-0 lg:mx-18">
        <div className="grid lg:grid-cols-2 gap-6 p-4 lg:p-6">
          <div className="px-3 lg:pr-8 flex items-start justify-center lg:pb-10 xl:max-w-[690px] flex-col">
            <h2 className=" sm:text-4xl  coxs:text-[22px] font-extrabold">
              <span className="text-[#f72d74]">Empowering Digital Dreams:</span>{" "}
              Our Commitment to Crafting Exceptional Designs and Solutions for a
              Connected World.
            </h2>
            <p className="pb-10 mt-6 leading-9 text-lg font-normal">
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
            <button className="bg-white font-Inter px-14 py-3 text-black hover:bg-[#f72d74] hover:text-white border-2 border-[#f72d74] font-medium">
              <a href="#">Get Started</a>
            </button>
          </div>

          {/* Lower Grid */}
          <div className="grid comd:grid-cols-2  xs:grid-cols-1  sm:grid-cols-2 cosm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            {[
              { count: "60+", label: "Clients" },
              { count: "6", label: "Years Experience" },
              { count: "90+", label: "Completed Projects" },
              { count: "3", label: "Achievements" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center flex-col justify-center shadow font-Inter border rounded-md py-6 sm:py-8 xs:flex xs:flex-col "
              >
                <h3 className="text-[#f72d74] text-4xl font-extrabold sm:text-3xl md:text-4xl">
                  {stat.count}
                </h3>
                <p className="xl:text-lg font-medium text-[#282922] sm:text-base md:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
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

      <div className="relative w-full py-12 lg:py-20">
        <img
          src="./section-img.png"
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
          <a
            href="/"
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]  px-5 py-3 max-w-xs w-44 font-bold text-center "
          >
            Let's Talk
          </a>
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
          <div className="grid coxs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto mt-14 md-w-[90%]">
            <div className="w-full border-b sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Resource as a service
                </h3>
                <p className="mb-4 text-lg">
                  Unlock unparalleled talent and expertise with our
                  Resource-as-a-Service. Access top-notch designers and
                  developers to enhance your projects and accelerate growth.{" "}
                </p>
              </div>
            </div>
            <div className="w-full border-b  xl:border-r   border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
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
              </div>
            </div>
            <div className="w-full border-b sm:border-r border-[#d6d6d6]  xl:border-r-0  bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
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
              </div>
            </div>
            <div className="w-full border-b  xl:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Full-Stack Development
                </h3>
                <p className="mb-4 text-lg">
                  Experience end-to-end digital excellence with our Full-Stack
                  Development services. We seamlessly blend front-end finesse
                  with back-end robustness to bring your vision to life.{" "}
                </p>
              </div>
            </div>
            <div className="w-full border-b sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  CMS Development
                </h3>
                <p className="mb-4 text-lg">
                  Empower your online presence with our CMS Development. We
                  build versatile and user-friendly content management systems
                  tailored to streamline your digital content and operations.{" "}
                </p>
              </div>
            </div>
            <div className="w-full border-b border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  DevOps
                </h3>
                <p className="mb-4 text-lg">
                  Streamline development pipelines and enhance project
                  efficiency with our DevOps solutions. Achieve seamless
                  collaboration, rapid deployments, and optimal performance for
                  your digital projects.{" "}
                </p>
              </div>
            </div>
            <div className="w-full border-b sm:border-b-0  sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Software Development
                </h3>
                <p className="mb-4 text-lg">
                  Transform ideas into powerful solutions. Our Software
                  Development services harness innovation and precision to
                  create robust, scalable, and tailored software solutions for
                  your business.{" "}
                </p>
              </div>
            </div>
            <div className="w-full border-b sm:border-b-0 border-[#d6d6d6] bottom-top hover:rounded-md">
              <div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8  "
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                  Quality Assurance & Testing
                </h3>
                <p className="mb-4 text-lg">
                  Ensure flawless performance and user satisfaction with our
                  Quality Assurance & Testing services. We meticulously
                  scrutinize every detail to deliver excellence.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-12 lg:py-20">
        <img
          src="./section-img.png"
          className="absolute top-0 left-0 w-full h-full "
          alt=""
        />
        <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto font-Inter">
          {/* Content Container */}
          <div className=" w-full max-w-[1020px] ">
            <h1 className="text-4xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
              <span className="text-[#f72d74]">Hire Remote & Project</span>{" "}
              Based Developers for Wodwes
            </h1>
            <p className="text-white text-lg font-Inter">
              Power up your projects with WODWES remote developers. Boost
              productivity and achieve exceptional results. Get started today to
              unlock your project's full potential!{" "}
            </p>
          </div>
          {/* Button */}
          <a
            href="/"
            className="text-white border-2 border-[#f72d74] hover:bg-[#f72d74]  px-5 py-3 max-w-xs w-44 font-bold text-center "
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="grid gap-5 w-[90%] max-w-[1440px] mx-auto pb-20 pt-12 lg:flex lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full lg:sticky lg:top-10 lg:max-w-[500px] ">
          <h2 className="text-4xl font-bold text-[#282922]">
            What you get with <span className="text-[#f72d74]">WODWES</span>{" "}
            product and service design
          </h2>
          <p className="my-5 text-sm leading-8">
            With WODWES product and service design, you get a transformative
            experience that marries innovation, aesthetics, and functionality.
            We craft solutions that resonate with your audience, fuel growth,
            and elevate your brand. Expect meticulous attention to detail,
            seamless user experiences, and a creative spark that sets you apart
            in today's competitive landscape. We're your partners in turning
            ideas into tangible success stories.
          </p>
          <button className="border-[#f72d74] border-2 px-12 py-3 font-bold hover:bg-[#f72d74] hover:text-white">
            Get Started
          </button>
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="grid coxs:grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {/* Box 1 */}
          <div className="space-y-4 sm:order-1">
            <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
              <img
                src="./img.png"
                alt="resource as a service"
                className="w-8 h-8"
              />
              <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
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
          <div className="space-y-4 sm:order-3">
            <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
              <img
                src="./img.png"
                alt="resource as a service"
                className="w-8 h-8"
              />
              <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
                Business Design
              </h3>
              <p className="text-sm leading-6">
                Transform your business with our expert design services. We
                craft captivating designs that drive success, leaving a lasting
                impact on your brand.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="sm:mt-5 sm:order-2">
            <div className="coxs:space-y-4">
              <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
                <img
                  src="./img.png"
                  alt="resource as a service"
                  className="w-8 h-8"
                />
                <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">
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

      <div className="relative w-full py-12 lg:py-20">
        <img
          src="./product-img.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[1440px] text-white z-10">
          <div className="flex  coxs:flex-col md:flex-row  md:items-center justify-between gap-10 text-white">
            <div className="max-w-[540px] 3xl:max-w-[700px]">
              <h1 className="text-4xl coxs:text-3xl font-black font-Inter sm:text-4xl text-white mb-3">
                <span className="text-[#f72d74]">Product</span> We Develop
              </h1>
              <p className="text-white mt-5 text-lg font-Inter max-w-[572px]">
                Hire testers and QA experts to perform end-to-end testing of
                your existing product, website, or software solution.
              </p>
            </div>
            <a
              href="/"
              className="text-white border-2 border-[#f72d74] w-44 px-7 py-3 hover:bg-[#f72d74] font-bold "
            >
              Give it a Try?
            </a>
          </div>
          <div className="grid coxs:grid-cols-1 md:grid-cols-2  mt-8">
            <img src="cv-maker.png" alt="CV Maker" />
            <img src="cv-maker-2.png" alt="CV Maker 2" />
          </div>
        </div>
      </div>

      <div className="py-20 w-[90%] mx-auto max-w-[1440px]">
        <h2 className="text-3xl font-bold">
          <span className="text-[#f72d74]">Technologies</span> We Use
        </h2>
        <p className="mt-4 w-full max-w-[896px] text-lg  font-normal font-Inter text-[#272821]">
        We leverage cutting-edge technologies to create innovative solutions, ensuring your digital projects remain at the forefront of industry standards.
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
        
        <div className="mt-4 flex flex-wrap coxs:gap-10 md:gap-20 xl:gap-36  justify-center">
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


      <img src="./img-back.png" className="absolute top-0 z-0  h-full w-full  object-cover" alt="" />
      <div className=" relative z-10 flex  coxs:flex-col  gap-20  w-[90%] max-w-[1440px] mx-auto  lg:flex lg:flex-row">
     
        {/* Left Column: Sticky Content */}
        <div className="h-full flex-1  lg:sticky lg:top-32 lg:max-w-[505px] ">
          <h2 className="text-4xl font-black text-white">
          Why Choose <span className="text-[#f72d74]">WODWES</span> for Website Design and Development Services?
          </h2>
          <p className="my-5 text-[20px] leading-9 text-white">
          We’re not a typical development agency — We’re your technology partner striving to achieve your specific goals.
          </p>
          
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="grid coxs:grid-cols-1 gap-5 flex-1  lg:grid-cols-1 xl:grid-cols-1 space-y-10 lg:mt-24 lg:max-w-[699px] lg:space-y-20">
          {/* Box 1 */}
          <div className=" ">
            <div className=" ">
              <img
                src="./experience.png"
                alt="experience"
                className="w-9 h-9 object-contain"
              />
              <h3 className=" text-base my-2 font-bold  text-white lg:text-[28px]">
              Pool of Experience and Expertise
              </h3>
              <p className="text-base text-white  font-normal   leading-9">
              With a diverse team of professionals with expertise in various areas of web development, including front-end and back-end development, database design, user interface design, and e-commerce solutions, we can handle all aspects of your web development project efficiently and effectively.


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
              <p className="text-base text-white  font-normal   leading-9">
              We have an in-house rigorous quality assurance process in place to ensure that our development solutions are of the highest quality. We conduct thorough testing and debugging to identify and fix any issues before delivering the final product to you.



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
              <p className="text-base text-white  font-normal   leading-9">
              We have flexible hiring models for our partners. Whether you need to hire on an hourly basis, a project basis, or a dedicated team for a project, team WODWES got you covered with the flexibility and efficiency.

              </p>
            </div>
          </div>
        </div>
      </div>
</div>

<div className="flex coxs:flex-col  gap-10 w-[90%] max-w-[1440px] mx-auto pb-20 pt-12 lg:flex lg:flex-row">
        {/* Left Column: Sticky Content */}
        <div className="h-full flex-1 lg:sticky lg:top-10 lg:max-w-[500px] ">
          <img src="./team.png" className="rounded-lg" alt="" />
          
          
        </div>

        {/* Right Column: Grid Boxes */}
        <div className="flex flex-1 coxs:flex-col  gap-10 lg:flex-col ">
        <h2 className="text-3xl font-black">Your Development <span className="text-[#f72d74]">Partner!</span></h2>
        <p className="text-base font-Inter leading-9">
        We love hearing about how our work has helped businesses succeed and how WODWES became their go-to development team. Don't just take our word for it - read what our satisfied clients have to say!
        </p>
          {/* Box 1 */}
          <div className="space-y-4 ">
            <div className=" rounded-lg ">
              <img
                src="./coding.png"
                alt="resource as a service"
                className="w-9 h-9"
              />
              <h3 className=" text-xl mt-3 flex items-center font-bold mb-4">
              Developing feature-enriched web and software solutions for businesses
              </h3>
              <p className="text-lg leading-9">
              At WODWES, we understand that technology is constantly evolving, and we're committed to staying ahead of the curve. Whether you need a simple website or a complex web application, we have the expertise and experience to deliver innovative solutions that help you achieve your business goals.


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
              <h3 className=" text-xl mt-3 flex items-center font-bold mb-4">
              Tailored development solutions to meet your business needs!             
               </h3>
              <p className="text-lg leading-9 mb-5">
              Team WODWES believes that every business is unique, and that's why we offer tailored development solutions to meet your specific needs. We work closely with our clients to identify their unique business requirements and develop customized solutions that help them achieve their goals.
              </p>
              <button><a href="/"  className="border-2 font-semibold px-9 py-3 hover:bg-[#f72d74] hover:text-white  border-[#f72d74]">Get Started</a></button>
            </div>
          </div>

          
        </div>
      </div>
      
    </>
  );
};

export default HomeSection;
