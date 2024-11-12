import React from "react";
import Nav from "./Nav";

const HomeSection = () => {
	return (
		<div>
			<Nav />
			<section className=" bg-banner-image bg-cover bg-center h-screen flex items-center justify-center">
				<div className="mx-auto w-[90%] max-w-[950px] text-center lg:w-full">
					<h1 className="text-3xl font-bold text-white md:text-4xl md:leading-[60px] lg:text-5xl xl:text-6xl">
						We're a full Service Efficiency Development Agency
					</h1>
					<h2 className="py-6 text-lg font-medium text-primary md:my-8 text-[#f72d74]">
						Empowering Businesses with Cutting-Edge Web Technologies
					</h2>
					<p className="mb-12 text-white">
						A web design and development agency crafting seamless web and
						software apps for startups,
						<br className="max-lg:hidden" />
						businesses, and large enterprises to help them in building a strong
						online presence
						<br className="max-lg:hidden" />
						and thrive in the digital age.
					</p>
					<button className="bg-[#f72d74] text-white px-14 font-bold py-3">
						Let's Talk
					</button>
				</div>
			</section>

      <div>
        <h2>Helooooooooooooooooooooooo</h2>
      </div>
		</div>
	);
};

export default HomeSection;
