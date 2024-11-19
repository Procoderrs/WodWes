import Nav from "./Nav";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    arrows: false,
  }; 


  

	return (
		<>
			<Nav />

     <section className="z-0 bg-banner-image bg-cover py-28">
  <div className="flex items-center justify-center ">
    <div className="mx-auto w-[90%] max-w-[950px] text-center lg:w-full">
      <h1 className="text-3xl font-black text-white md:text-4xl md:leading-[60px] lg:text-6xl ">
        We're a Full-Service
       
         <div className=" inline-block">
          <Slider {...settings}>
            {slides.map((text, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full"
              >
                <span className="text-3xl lg:text-6xl text-[#f72d74] font-black  md:text-4xl md:leading-[60px] ">
                  {text}
                </span>
              </div>
            ))}
          </Slider>
        </div> 
        <br />
        Development Agency
      </h1>
      <h2 className="py-6 text-xl font-medium text-[#f72d74] md:my-8">
        Empowering Businesses with Cutting-Edge Web Technologies
      </h2>
      <p className="mb-12 text-white">
        A web design and development agency crafting seamless web and software
        apps for startups,
        <br className="max-lg:hidden" />
        businesses, and large enterprises to help them in building a strong
        online presence
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
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Resource as a service</h3>
					<p className="mb-4 text-lg">
					Unlock unparalleled talent and expertise with our Resource-as-a-Service. Access top-notch designers and developers to enhance your projects and accelerate growth.                </p>
				</div>


				</div>
				<div className="w-full border-b  xl:border-r   border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Front-End Development</h3>
					<p className="mb-4 text-lg">
					Elevate user experiences with our Front-End Development expertise. Craft visually stunning, responsive, and intuitive interfaces that captivate and engage your audience.
                </p>
				</div>


				</div>
				<div className="w-full border-b sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Web Application Development</h3>
					<p className="mb-4 text-lg">
					Empower your business with our Web Application Development services. We turn ideas into robust, scalable, and user-friendly web solutions that drive success.                </p>
				</div>


				</div>
				<div className="w-full border-b  xl:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Full-Stack Development</h3>
					<p className="mb-4 text-lg">
					Experience end-to-end digital excellence with our Full-Stack Development services. We seamlessly blend front-end finesse with back-end robustness to bring your vision to life.                </p>
				</div>


				</div>
				<div className="w-full border-b sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">CMS Development</h3>
					<p className="mb-4 text-lg">
					Empower your online presence with our CMS Development. We build versatile and user-friendly content management systems tailored to streamline your digital content and operations.                </p>
				</div>


				</div>
				<div className="w-full border-b border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">DevOps</h3>
					<p className="mb-4 text-lg">
					Streamline development pipelines and enhance project efficiency with our DevOps solutions. Achieve seamless collaboration, rapid deployments, and optimal performance for your digital projects.                </p>
				</div>


				</div>
				<div className="w-full border-b sm:border-b-0  sm:border-r border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Software Development</h3>
					<p className="mb-4 text-lg">
					Transform ideas into powerful solutions. Our Software Development services harness innovation and precision to create robust, scalable, and tailored software solutions for your business.                </p>
				</div>


				</div>
				<div className="w-full border-b sm:border-b-0 border-[#d6d6d6] bottom-top hover:rounded-md">
				<div className="coxs:pt-5 coxs:pr-4 coxs:pb-12 coxs:pl-4">
					<img src="./img.png" alt="resource as a service" className="w-8 h-8  " />
					<h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Quality Assurance & Testing</h3>
					<p className="mb-4 text-lg">
					Ensure flawless performance and user satisfaction with our Quality Assurance & Testing services. We meticulously scrutinize every detail to deliver excellence.                </p>
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


			<div className="grid  gap-5 w-[90%] max-w-[1440px] mx-auto pb-20 pt-12  lg:grid-cols-2">
  {/* Left Column: Sticky Content */}
  <div className="h-full md:sticky  md:top-10  lg:max-w[500px] 2xl:w-[549px]  ">
    <h2 className="text-4xl font-bold text-[#282922]">
      What you get with <span className="text-[#f72d74]">WODWES</span> product and service design
    </h2>
    <p className="my-5 text-sm leading-8">
		With WODWES product and service design, you get a transformative experience that marries innovation, aesthetics, and functionality. We craft solutions that resonate with your audience, fuel growth, and elevate your brand. Expect meticulous attention to detail, seamless user experiences, and a creative spark that sets you apart in today's competitive landscape. We're your partners in turning ideas into tangible success stories    </p>
    <button className="border-[#f72d74] border-2 px-12 py-3 font-bold hover:bg-[#f72d74] hover:text-white">
      Get Started
    </button>
  </div>

  {/* Right Column: Grid Boxes */}
  <div className="grid coxs:grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
    {/* Box 1 */}
    <div className="space-y-4 sm:order-1">
      <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
        <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
        <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Product Design</h3>
        <p className="text-sm leading-6">
          Elevate your product's appeal and functionality with our design expertise. We create innovative and user-centric solutions that captivate and deliver results.
        </p>
      </div>
    </div>

    {/* Box 2 */}
    <div className="space-y-4 sm:order-3">
      <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
        <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
        <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Business Design</h3>
        <p className="text-sm leading-6">
          Transform your business with our expert design services. We craft captivating designs that drive success, leaving a lasting impact on your brand.
        </p>
      </div>
    </div>

    {/* Box 3 */}
    <div className="sm:mt-5 sm:order-2">
      <div className="coxs:space-y-4">
        <div className="coxs:p-5 rounded-lg hover:text-white hover:bg-[#272821] bg-[#f7f7f7]">
          <img src="./img.png" alt="resource as a service" className="w-8 h-8" />
          <h3 className="h-14 text-xl mt-3 flex items-center font-bold mb-4">Service Design</h3>
          <p className="text-sm leading-6">
            Elevate user experiences with our service design expertise. We blend creativity and strategy to craft seamless, user-centric solutions that drive success.
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
          Hire testers and QA experts to perform end-to-end testing of your existing product, website, or software solution.
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


		</>
	);
};

export default HomeSection;
