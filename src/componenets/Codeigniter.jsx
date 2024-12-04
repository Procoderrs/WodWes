import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Marquee from "react-fast-marquee";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
const Codeigniter = () => {
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
				},
			},
			{
				breakpoint: 576, // Screens smaller than 600px
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 990, // Screens smaller than 900px
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1800, // Screens smaller than 900px
				settings: {
					slidesToShow: 3,
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
			question: "What CodeIgniter Web Development Services does WODWES Provides?",
			answer:
				"WODWES takes pride in being the full-service gateway to provide all the Codelgniter-based services. This includes Portal development, Website development, Codelgniter updation and migration, customized app development, CI module, API integration, Codelgniter maintenance, and more.           ",
		},
		{
			question: "How Much WODWES Costs for CodeIgniter Wev Development Services?",
			answer:
				"Our services don’t come with a fixed price tag. As we provide custom services designed just for your business, we analyze your business needs and goals to finally decide a cost that sympathizes with your budget as well. Some factors that influence our service cost include the time required for building the site, features, developers' expertise, and business size.                     ",
		},
		{
			question: "How Much Time do You Take To Develop CodeIgniter App or Website?",
			answer:
				"Our services don’t come with a fixed price tag. As we provide custom services designed just for your business, we analyze your business needs and goals to finally decide a cost that sympathizes with your budget as well. Some factors that influence our service cost include the time required for building the site, features, developers' expertise, and business size.                       ",
		},
		{
			question: "Will I Get Ownership Of the Product After The Development Is Complete?",
			answer:
				"Yes, We have no authority or right over the product once it is completed and goes live. We fully transfer the rights to the concerned clien               ",
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
					<div className="grid coxs:grid-cols-1 gap-6 lg:grid-cols-2 ">
						<div className="flex   coxs:flex-col  mb-5  md:items-center justify-between gap-10 text-white">
							<div className="max-w-[540px] 3xl:max-w-[700px]">
								<h1 className="lg:text-6xl coxs:text-3xl font-black font-Inter  sm:text-4xl text-white mb-3">
									<span className="text-[#f72d74] font-black">Codelgniter</span>{" "}
									Development Services
								</h1>
								<p className="text-[#e8e6e6] mt-5 mb-7 text-lg leading-8 font-Inter max-w-[637px]">
									WODWES is a top-leading provider of Codelgniter services,
									delivering adaptable, secure, and scalable web applications.
									Our industry-specialized Codelgniter developers have a knack
									for creating custom-specific, database-driven, and
									feature-rich apps for businesses of all sorts. We offer
									full-cycle web solutions leveraging our deep-rooted
									understanding of MVC architecture and robust frameworks.
									Whether it's Codelgniter site development or module
									development, our end-to-end web solutions yield maximum client
									satisfaction.
								</p>

								<Link
									to={"/"}
									className="text-white border-2 border-[#f72d74] w-44 px-9 py-3 hover:bg-[#f72d74] font-bold "
								>
									Get Started
								</Link>
							</div>
						</div>

						<div className="relative ml-auto max-w-[687px] rounded-xl bg-[#53544e] px-4 py-12  sm:px-8 xl:py-[60px]">
							<h3 className="text-2xl font-semibold text-white xl:text-3xl">
								Let's discuss your project
							</h3>
							<p className="text-black mb-5 mt-3 text-base">
								Submit a request and we‘ll get in touch within a day
							</p>
							<form>
								<div className="space-y-5">
									<input
										type="text"
										placeholder="Enter your name"
										className=" bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3"
										required
									/>
									<input
										type="email"
										placeholder="Enter your email"
										className=" bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3"
										required
									/>
									<input
										type="number"
										placeholder="Enter your phone number"
										className=" bg-[#a4a6a6] rounded-lg placeholder:text-[#6d6e6e] w-full px-4 py-3"
										required
									/>
									<select className=" bg-[#a4a6a6] rounded-lg text-[#6d6e6e] w-full px-4 py-3">
										<option value="">About project</option>
										<option value="Web Design">Web Design</option>
										<option value="Web Design UI/UX">Web Design UI/UX</option>
									</select>
									<button
										type="submit"
										className="flex items-center justify-center gap-4 w-full p-4 text-sm font-semibold bg-[#f72d74]  text-white"
									>
										<Link to="/"> Get a Quote</Link>{" "}
										<span>
											<FontAwesomeIcon
												icon={faPaperPlane}
												className="h-6 w-6"
											/>
										</span>
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

			<div className="py-12 w-[90%] max-w-[1440px] mx-auto ">
				<div className="flex  justify-between md:flex-row gap-10 3xl:gap-40 maxmd:flex-col">
					<div className="lg:w-[50%] max-w-[480px] ">
						<h2 className="text-3xl mb-7 font-black">
							Why Choose <span className="text-[#f72d74]">WODWES</span> For
							CodeIgniter Development Services ?
						</h2>

						<div className="pb-8">
							<Link
								to={"/"}
								className="text-black border-2 border-[#f72d74] w-44 px-12 py-3  hover:bg-[#f72d74] font-bold "
							>
								Get Started
							</Link>
						</div>
					</div>

					<div className=" lg:w-[50%]">
						<p className="mb-7  leading-9 text-lg">
							WODWES is a woman-driven team of web developers and technical
							professionals providing dynamic, and supreme web solutions. We
							offer a wide range of Codelgniter services including development,
							implementation, migration, customization, and more.
						</p>
					</div>
				</div>

				<div className="mx-auto mt-8 grid w-[90%]  rounded-lg border-[#f72d74] box-shadow md:grid-cols-2 lg:grid-cols-3">
					<div className="coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] md:border-r p-5">
						<div className="flex items-center py-4  gap-5">
							<img src="/grid-img.png" alt="grid-img" className="h-9 w-9" />
							<h3 className="text-2xl font-extrabold">
								Customer-driven Service
							</h3>
						</div>
						<p className="leading-7 text-sm">
							Our clients top the list of our priorities and respecting their
							time, and money is our core work ethic. Our experts collaborate
							with you to deeply discuss your goals and budgets to customize web
							solutions that work for you.
						</p>

						<ul className="flex coxs:flex-col  text-sm  mt-7 gap-5 list-disc pl-5 ">
							<li>Cost-friendly Service</li>
							<li>Timely Project Deliveries</li>
							<li>Business-tailored Solution</li>
						</ul>
					</div>

					<div className="coxs:border-b border-gray-400 md:border-b-[6px]  md:border-b-[#f72d74] lg:border-r p-5">
						<div className="flex  py-4  items-center gap-5">
							<img src="/grid-img.png" alt="grid-img" className="h-9 w-9" />
							<h3 className="text-2xl font-extrabold">
								Transparent Communication
							</h3>
						</div>
						<p className="text-sm leading-7">
							We ensure a transparent and honest communication environment where
							service providers and clients are on the same page. We don’t make
							false promises or low-quality results but tirelessly strive to
							deliver what was promised.
						</p>

						<ul className="flex coxs:flex-col gap-5 text-sm  mt-7 list-disc pl-5 pb-12 ">
							<li>Consistent Reporting</li>
							<li>24/7 Customer Support</li>
							<li>One-on-one Consultancy</li>
						</ul>
					</div>

					<div className="coxs:border-b-[6px]  border-[#f72d74] p-5">
						<div className="flex items-center gap-5 py-5">
							<img src="/grid-img.png" alt="grid-img" className="h-9 w-9" />
							<h3 className="text-2xl font-extrabold">
								Full service development
							</h3>
						</div>
						<p className="text-sm leading-7">
							We strive to be your all-in-one Codelgniter service provider to
							have you meet all your relevant needs in one place. Thus, from
							module development to site development, and all that comes in
							between, we have you fully covered.
						</p>
						<ul className="flex coxs:flex-col text-sm gap-5 mt-7 list-disc pl-5 ">
							<li>End-to-end implementation</li>
							<li>dedicated Team For Each Project</li>
							<li>One-stop All CodeIgniter Solutions</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mx-auto w-[90%]  max-w-[1440px] justify-between py-8 gap-10 lg:flex ">
				<div className=" lg:sticky lg:top-32 h-full mb-12 lg:max-w-[500px]  2xl-w-[543px]">
					<h2 className="text-4xl max-w-[400px] font-extrabold">
						Our CodeIgniter Web development Services
					</h2>
					<p className="mt-7 leading-9 text-sm">
						We are a certified Codelgniter website development company offering
						full-stack Codelgniter services. Our years of service implementing
						numerous successful projects make us the go-to provider to multiple
						renowned businesses.
					</p>

					<div className="mt-7">
						<Link
							to={"/"}
							className="text-black border-2 border-[#f72d74] w-44 px-12 py-3 hover:text-white hover:bg-[#f72d74] font-bold "
						>
							Get Started
						</Link>
					</div>
				</div>

				<div className=" grid coxs:grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:w-1/2">
					<div className="coxs:space-y-4 2xl:space-y-5 ">
						<div className="  rounded-lg bg-[#f7f7f7] coxs:px-3 coxs:py-5   hover:bg-[#2b2a2a] hover:text-white">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl mt-4 font-extrabold">
								Codelgniter App Development
							</h2>
							<p className="leading-7 mt-4 text-sm">
								Our dedicated experts design custom-based web applications that
								meet your business’s unique requirements. We have successfully
								served multiple industries, including eCommerce, Forex, Gaming,
								Travel, etc.,and helped them achieve long-run goals.
							</p>
						</div>

						<div className="  rounded-lg bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white ">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl mt-4 font-extrabold">
								Codelgniter E-commerce Development
							</h2>
							<p className="leading-7 text-sm">
								We deliver expert E-commerce solutions that live up to the
								competitiveness and evolving trends of the marketplace. Our
								experts create advanced-featured solutions including Stock
								management,Courier APIs, Multi-warehouse, multi-vendor, etc.
							</p>
						</div>

						<div className="  rounded-lg bg-[#f7f7f7] px-3 py-5  hover:bg-[#2b2a2a] hover:text-white">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl  mt-4 font-extrabold">
              Codelgniter Third-party Integration
							</h2>
							<p className="leading-7 text-sm">
              Our experts are well-versed in successfully integrating third-party APIs.
               We have provided Codelgniter integration solutions to operational management, Payment gateways, 
              ERPs, Social authentications, analytics, andmultiple other renowned businesses.
							</p>
						</div>
					</div>

					<div className=" coxs:space-y-4 2xl:space-y-5 mt-5 ">
						<div className="  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white ">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl mt-4 font-extrabold">
              Codelgniter Extension Development
							</h2>
							<p className="leading-7 text-sm">
              We have advanced capabilities to develop Codelgniter extensions anew or 
              upgrade the old ones. Our experts are well-versed in developing Codelgniter modules to advance thefeatures 
              in your current Codelgniter app to update it to the advanced needs.
							</p>
						</div>

						<div className="  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white ">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl mt-4 font-extrabold">
              Codelgniter API Development
							</h2>
							<p className="leading-7 text-sm">
              We at WODWES provide expert resources to develop Codelgniter-based
               configuration APIs that are effortless and lightweight. Our in-house experts carefully build
               your API to helpensure the seamless transfer of data between the server and mobile apps.
							</p>
						</div>

						<div className="  rounded-lg mt-5 bg-[#f7f7f7] px-3 py-5 hover:bg-[#2b2a2a] hover:text-white ">
							<img
								src="/full-stack.png"
								alt="ful-stack-img"
								className="h-9 w-9"
							/>

							<h2 className="text-xl mt-4 font-extrabold">
              Codelgniter Application Migration
							</h2>
							<p className="leading-7 text-sm">
              Being the expert provider of Codelgniter web development services, 
              WODWES help you seamlessly transfer application from the old server to the new one. We migrateyour
               existing application and deploy a new application as per your server needs.
							</p>
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
   WODWES Is Your Go-to Solution Developing Fast-paced Websites And Apps. We Aim To Get The 
   Potential Audience Reach And Recognize Your Services</h2>
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
          <p className="text-sm pb-4 text-center">Budget-friendly Web Solutions</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/versatile.png" alt="backend" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">99.9% Effecient Apps And Sites</p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/secure.png" alt="laravel" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">
            Future-proof CodeIgniter Apps
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-6 flex-row flex-wrap justify-center">
      <div className="px-2">
        <div className="px-4 py-4 bg-black flex flex-col gap-4 text-white rounded-xl min-h-[180px]">
          <img src="/transport.png" alt="mvc" className="h-9 w-9 mx-auto" />
          <p className="text-sm pb-4 text-center">Years Of Legit Industry Service</p>
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
            98% Guaranteed Virtual Growth
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
            Qualified CodeIgniter Developers
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
	);
};

export default Codeigniter;
