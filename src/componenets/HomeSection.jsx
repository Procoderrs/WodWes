import Nav from "./Nav";
import Marquee from "react-fast-marquee";

const HomeSection = () => {
  // Array of image paths
  const imageArray = [
    "./img-1.png",
    "./img-2.png",
    "./img-3.png",
    "./img-4.png",
    "./img-5.png",
    "./img-6.png"
  ];


  

  

  return (
    <>
      <Nav />

      <section className="z-0 bg-banner-image bg-cover py-28">
  <div className="flex items-center justify-center">
    <div className="mx-auto w-[90%] max-w-[950px] text-center lg:w-full">
      <h1 className="text-3xl font-black text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl">
        We're a Full-Service 
        {/* <div className="inline-block ">
        
        <div className="overflow-hidden flex flex-col items-center justify-center w-44 h-8  bg-pink-300 text-center whitespace-nowrap animate-marquee">
      <p className="text-2xl px-10 py-4 mx-4 text-center">Design</p>
      <p className="text-xl mx-4">Effeciency</p>
      <p className="text-xl mx-4">Effort</p>
      <p className="text-xl mx-4">Design</p>
    </div>
        </div> */}

        <br className="" />
        
        
           {/* <span className="inline overflow-hidden ">
            <Marquee gradient={false} direction="up" speed={50} className="text-pink-500 text-xl p-4 ">
             <div className=" w-[400px] p-4" >
             <span className="">Design</span>
              <span className="">with ease</span>
              <span className="mr-4">Efficiency</span>
             </div>
            </Marquee>
          </span>  */}
        
        Development Agency
      </h1>
      <h2 className="py-6 text-xl font-medium text-[#f72d74] md:my-8">
        Empowering Businesses with Cutting-Edge Web Technologies
      </h2>
      <p className="mb-12 text-white">
        A web design and development agency crafting seamless web and software apps for startups,
        <br className="max-lg:hidden" />
        businesses, and large enterprises to help them in building a strong online presence
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


<div className="my-9 mx-6 lg:mx-18">
  <div className="grid lg:grid-cols-2 gap-6 p-4 lg:p-6">
    <div className="px-3 lg:pr-8 flex items-start justify-center lg:pb-10 xl:max-w-[690px] flex-col">
      <h2 className="xl:text-3xl text-4xl font-extrabold">
        <span className="text-[#f72d74]">Empowering Digital Dreams:</span> Our Commitment to Crafting Exceptional Designs and Solutions for a Connected World.
      </h2>
      <p className="pb-10 mt-6 leading-9 text-lg font-normal">
        At our design and development agency, we are dedicated to empowering your digital dreams. Our mission is to create exceptional designs and innovative solutions that resonate with your audience, drive growth, and leave a lasting impact. We blend creativity and technology to build digital experiences that bridge the gap between vision and reality. We believe in collaboration, quality, and exceeding expectations. With us, you'll find a partner committed to transforming your ideas into digital success stories and helping you thrive in today's interconnected world.
      </p>
      <button className="bg-white font-Inter px-14 py-3 text-black hover:bg-[#f72d74] hover:text-white border-2 border-[#f72d74] font-medium">
        <a href="#">Get Started</a>
      </button>
    </div>

    {/* Lower Grid */}
    <div className="grid comd:grid-cols-2  xs:grid-cols-1  sm:grid-cols-2 cosm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
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
          <h3 className="text-[#f72d74] text-4xl font-extrabold sm:text-3xl md:text-4xl">{stat.count}</h3>
          <p className="xl:text-lg font-medium text-[#282922] sm:text-base md:text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>



            <div className="my-16 mx-16  z-10  overflow-hidden">
        <Marquee speed={150} gradient={false}>
        {imageArray.map((src, index) => (
            <div key={index} className=" mx-28 flex items-center justify-center">
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
  <img src="./section-img.png"
    className="absolute top-0 left-0 w-full h-full "
    alt=""/>
    <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto font-Inter">
    {/* Content Container */}
      <div className=" w-full max-w-[1020px] ">
        <h1 className="text-4xl text-white mb-3">
        Let's Build Your Dream Website <span className="text-[#f72d74]">Together!</span>
        </h1>
        <p className="text-white text-lg font-Inter">
        Whether you need a website redesign, development from scratch, or any other web-related services, team WODWES got you covered. Our experienced team of designers and developers will work closely with you to create a website that truly represents your vision and engages your target audience.
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
    <h2 className="mb-3 text-3xl font-bold ">
    Web Design and Development <span className="text-[#f72d74]">Outsourcing Company</span></h2>
    <p className=" text-lg leading-9">Your Reliable Partner for Digital Excellence - Delivering Outstanding Web Solutions with Precision   and Expertise, On Time, Every Time.</p>
     </div>
       

  {/* 3 columns grid */}
  <div className="grid xl:grid-cols-3 coxl:grid-cols-2 lg:grid-cols-2 colg:grid-cols-2 md:grid-cols-2 comd:grid-cols-2 sm:grid-cols-2 cosm:grid-cols-1 xs:grid-cols-1  mx-auto  mt-14  md:w-[90%]">
  <div className="w-full border-b border-r border-[#d5d5d5]  ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    Resource as a service
    </h3>
<p className="mb-4 text-lg">  
Unlock unparalleled talent and expertise with our Resource-as-a-Service. Access top-notch designers and developers to enhance your projects and accelerate growth.
</p>
    </div>
  </div>



  <div className="w-full border-b border-r border-[#d5d5d5]  ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    Front-End Development
    </h3>
<p className="mb-4 text-lg">  
Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and intuitive interfaces that captivate and engage your audience.</p>
    </div>
  </div>




  <div className="w-full lg:border-b  lg:border-[#d5d5d5]   ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold" >
    Web Application Development
    </h3>
<p className="mb-4 text-lg">  
Empower your business with our Web Application Development services. We turn ideas into robust, scalable, and user-friendly web solutions that drive success.</p>
    </div>
  </div>




  <div className="w-full border-b border-r border-[#d5d5d5] ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    Full-Stack Development
    </h3>
<p className="mb-4 text-lg">  
Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end finesse with back-end robustness to bring your vision to life.</p>
    </div>
  </div>



  <div className="w-full border-b border-r border-[#d5d5d5] ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    CMS Development
    </h3>
<p className="mb-4 text-lg">  
Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations.</p>
    </div>
  </div>



  <div className="w-full border-b  border-[#d5d5d5] ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    DevOps
    </h3>
<p className="mb-4 text-lg">  
Streamline development pipelines and enhance project efficiency with our DevOps solutions. Achieve seamless collaboration, rapid deployments, and optimal performance for your digital projects.</p>
    </div>
  </div>




  <div className="w-full  border-r border-[#d5d5d5] ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    Software Development
    </h3>
<p className="mb-4 text-lg">  
Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, scalable, and tailored software solutions for your business.</p>
    </div>
  </div>



  <div className="w-full  border-[#d5d5d5] ">
    <div className="lg:pr-14 pt-5 pr-4 pb-12 pl-4">
    <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
    <h3 className="h-14 mb-4 mt-3 flex items-center text-lg md:text-xl font-bold">
    Quality Assurance & Testing
    </h3>
<p className="mb-4 text-lg">  
Ensure flawless performance and user satisfaction with our Quality Assurance & Testing services. We meticulously scrutinize every detail to deliver excellence.</p>
    </div>
  </div>

  </div>


  </div>
</div>


<div className="relative w-full py-12 lg:py-20">
  <img src="./section-img.png"
    className="absolute top-0 left-0 w-full h-full "
    alt=""/>
    <div className="relative flex flex-col items-start lg:flex-row lg:items-center   lg:justify-between gap-10  w-[90%] mx-auto font-Inter">
    {/* Content Container */}
      <div className=" w-full max-w-[1020px] ">
        <h1 className="text-4xl text-white mb-3">
        <span className="text-[#f72d74]">Hire Remote & Project</span> Based Developers for Wodwes 
        </h1>
        <p className="text-white text-lg font-Inter">
        Power up your projects with WODWES remote developers. Boost productivity and achieve exceptional results. Get started today to unlock your project's full potential!        </p>
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

    

        

            

        

      

            
            


            


           








    
       
    </>
  );
};

export default HomeSection;


