import React, { useState } from 'react';

const Mainsection = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-[999] text-base h-32 w-full">
        <div className="container mx-auto my-0">
          <div className="header-content flex items-center justify-between px-7 w-full py-7">
            <a href="#">
              <img src="/wodweslogo.png" alt="" className="w-44" />
            </a>
            <nav className="flex items-center">
              <ul className="flex items-center gap-9 text-2xl">
                <li><a href="#">Home</a></li>
                <li onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu}>
                  <a href="#">Services</a>
                  {isMegaMenuOpen && (
                    <div className="megamenu">
                      <div className="megamenuitems">
                        <h3>E-commerce Development</h3>
                        <ul>
                          <li><a href="#">Laravel E-commerce Development</a></li>
                          <li><a href="#">PHP E-commerce Development</a></li>
                          <li><a href="#">WordPress E-commerce Development</a></li>
                          <li><a href="#">Shopify Development</a></li>
                        </ul>
                      </div>
                      <div className="megamenuitems">
                        <h3>Front-end Development</h3>
                        <ul>
                          <li><a href="#">React Development</a></li>
                          <li><a href="#">Vue.js Development</a></li>
                          <li><a href="#">Angular Development</a></li>
                        </ul>
                      </div>
                      <div className="megamenuitems">
                        <h3>Software Development</h3>
                        <ul>
                          <li><a href="#">PHP Software Development</a></li>
                          <li><a href="#">CodeIgniter Development</a></li>
                          <li><a href="#">Laravel Software Development</a></li>
                          <li><a href="#">MERN Software Development</a></li>
                          <li><a href="#">PHP Training</a></li>
                        </ul>
                      </div>
                      <div className="megamenuitems">
                        <h3>CMS Development</h3>
                        <ul>
                          <li><a href="#">WordPress Development</a></li>
                          <li><a href="#">Magento Development</a></li>
                          <li><a href="#">Drupal Development</a></li>
                          <li><a href="#">BigCommerce Development</a></li>
                          <li><a href="#">Joomla Development</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Portfolio</a></li>
                <li>
                  <div className="bg-pink-600 pt-5 pb-5 px-6 text-white">
                    <a href="#">Contact Us</a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className='bg-black h-[648px] w-full p-28 flex items-center'>
        <div className="p-12 font-black flex item-center justify-center flex-col text-center">
          <div className="slider text-white text-7xl pb-10">We’re a Full Service Design Development Agency</div>
          <p className="text-2xl text-pink-500 pb-10">Empowering Businesses with Cutting-Edge Web Technologies</p>
          <p className="px-64 text-2xl font-semibold text-white">A web design and development agency crafting seamless web and software apps for startups,
            businesses, and large enterprises to help them in building a strong online presence
            and thrive in the digital age.</p>
          <div className="bg-pink-600 px-16 py-4 text-white mt-8 mx-auto w-auto text-lg">
            <a href="#">Let's Talk</a>
          </div>
        </div>
      </section>


       <style jsx>{`
  .megamenu {
   margin: 0 auto; 
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0px 10px 2px 3px lightgray;
  display: flex;
  background-color: azure; /* Add background color for visibility */
  z-index: 1000; /* Ensure it's on top */
}

nav > ul > li:hover .megamenu {
  opacity: 1;
  visibility: visible;
}

.megamenuitems ul li {
  list-style: none;
  padding: 7px;
}

.megamenuitems ul li a {
  text-decoration: none;
  color: burlywood;
}

.megamenuitems h3 {
  padding: 10px;
  background-color: gray;
  margin-top: 30px;
}

       `}</style>
    </>
  );
};

export default Mainsection;
