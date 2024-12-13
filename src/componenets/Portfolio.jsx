import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqData = [
    {
      question: "What is Wodwes?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How long does it take to develop a website or web application?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What programming languages and frameworks do you use?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Do you provide website hosting and maintenance services?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your web development process?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];
  
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [highlightAll, setHighlightAll] = useState(false);
  
  const navigate = useNavigate();
  
  const items = [
    {
      id: "wix1",
      label: "Wix",
      images: [
      { src: '/wixOneCrop.png', links: 'https://www.thriveguide.co/',text_1:'ThriveGuide',text_2:'Wix',text_3:'Wix' },

      { src: '/wix2Crop.png', links: 'https://www.filozofiadobra.sk/' ,text_1:'Filozofia Dobra',text_2:'Wix',text_3:'Wix'},
      
    ],
    },
    {
      id: "webflow",
      label: "Webflow",
     images: [
      { src: '/webflow1Crop.png', links: 'https://www.elicohenagency.com/',text_1:'Eli Cohen',text_2:'Webflow',text_3:'Webflow' },

      { src: '/webflow2Crop.png', links: 'https://alittle-bird.com/' ,text_1:'A little Bird',text_2:'Webflow',text_3:'Webflow'},
      
    ],
  },
    {
      id: "reactjs",
      label: "ReactJs",
      images: [
      { src: '/react-1Crop.png', links: 'https://www.servicelead.pro/',text_1:'Service Lead Pro',text_2:'React Js',text_3:'React Js' },
      { src: '/react2Crop.png', links: 'https://lumyri.com/' ,text_1:'Lumyri',text_2:'Next Js',text_3:'React Js'},
      { src:' /react3Crop.png', links: 'https://hyt.ai/' ,text_1:'Help You Tour',text_2:'React Js',text_3:'React Js'},
      { src: '/react4Crop.png', links: 'https://keffecttraining.com/' ,text_1:'Keffect Training',text_2:'React Js',text_3:'React Js'},
      { src: '/react5Crop.png', links: 'https://ng1citycleaners.co.uk/' ,text_1:'NGI CITY CLEANERS',text_2:'React Js',text_3:'React Js'},
      { src: '/react6Crop.png', links: 'https://www.crossport-ix.com/' ,text_1:'CROSSPORT IX',text_2:'React Js',text_3:'React Js'},

    ],
   },
    {
      id: "joomla",
      label: "Joomla",
      images: [
      { src: '/beauty-beans.png', links: 'https://www.beautybins.com/',text_1:'Beauty Bins',text_2:'Joomla',text_3:'Joomla' },
      
    ], },
    {
      id: "shopify",
      label: "Shopify",
      images: [
      { src: '/shopify1Crop.png', links: 'https://cpapsupplyllc.com/',text_1:'Cpap Supply LLC',text_2:'Shopify',text_3:'Shopify' },
      { src: '/shopify2Crop.png', links: 'https://www.maddenmining.com.au/' ,text_1:'Madden Mining',text_2:'Shopify',text_3:'Shopify'},
      { src:' /shopify3Crop.png', links: 'https://leoshine.com/' ,text_1:'Leoshine',text_2:'Shopify',text_3:'Shopify'},
      { src: '/shopify4Crop.png', links: 'https://heol.world/' ,text_1:'Heol World',text_2:'Shopify',text_3:'Shopify'},
      { src: '/shopify5Crop.png', links: 'https://www.vivitar.com/' ,text_1:'VIVITAR',text_2:'Shopify',text_3:'Shopify'},

    ], },
    {
      id: "Laravel",
      label: "laravel",
      images: [
      { src: '/laravel1Crop.png', links: 'https://ecomdevelopment.us/',text_1:'Ecom Development',text_2:'Laravel',text_3:'Laravel' },
      { src: '/laravel2Crop.png', links: 'https://vodlix.com/' ,text_1:'Vodlix',text_2:'Statamic',text_3:'Laravel'},
      { src:' /laravel3Crop.png', links: 'https://ettvi.com/' ,text_1:'Ettvi',text_2:'Laravel',text_3:'Laravel'},
      { src: '/laravel4Crop.png', links: 'https://shophtmlpro.com/' ,text_1:'Shop Html Pro',text_2:'Laravel',text_3:'Laravel'},

    ],
  },
    
    {
      id: "php",
      label: "Php",
      images: [
      { src: '/react-1Crop.png', links: 'https://www.servicelead.pro/',text_1:'Service Lead Pro',text_2:'PHP',text_3:'PHP' },
      { src: '/php2Crop.png', links: 'https://www.base.ai/' ,text_1:'Base AI',text_2:'WordPress',text_3:'PHP'},
      { src:' /php3Crop.png', links: 'https://storysaver.io/' ,text_1:'Story Saver',text_2:'Laravel',text_3:'PHP'},
      { src: '/php4Crop.png', links: 'https://convertjpg.io/' ,text_1:'Convert JPG',text_2:'PHP',text_3:'PHP'},
      { src: '/php5Crop.png', links: 'https://kapalya.com/' ,text_1:'Kapalya',text_2:'Php',text_3:'PHP'},
      { src: '/php6Crop.png', links: 'https://buildresume.io/' ,text_1:'Build Resume',text_2:'Laravel',text_3:'PHP'},
      { src: '/php7Crop.png', links: 'https://swissmaid.ca/' ,text_1:'Swiss Maid',text_2:'Php',text_3:'PHP'},

    ], },
    {
      id: "squarespace",
      label: "Squarespace",
      images: [
       { src: '/squarespace.png', links: 'https://www.manifoldre.com/' ,text_1:'MANIFOLD',text_2:'squarespace',text_3:'squarespace'},

    ],},
    {
      id: "Divi",
      label: "Divi",
      images: [
       { src: '/divi1Crop.png', links: 'https://www.improvisationalleaders.com/' ,text_1:'IMPROVISATIONAL LEADERS',text_2:'Wordpress',text_3:'Divi'},

    ], },
    {
      id: "wpbakery",
      label: "WP Bakery",
      images: [
       { src: '/wbbakeryCrop.png', links: 'https://ce.tfmdebug.com/?v=d71bdd22c8bb' ,text_1:'Cantre Eanvie',text_2:'Wordpress',text_3:'WP Bakery'},

    ], },
    {
      id: "uiux",
      label: "UI/UX",
      images: [
       { src: '/uxCrop.png', links: 'https://www.smartinsider.com/' ,text_1:'Smart Insider',text_2:'WordPress',text_3:'UI/UX'},
       { src: '/react2Crop.png', links: 'https://lumyri.com/' ,text_1:'Lumyri',text_2:'Next Js',text_3:'UI/UX'},
       { src: '/ux-2Crop.png', links: 'https://zeadomain.com/' ,text_1:'ZEADOMAIN',text_2:'WordPress',text_3:'UI/UX'},
       { src: '/us-3Crop.png', links: '',text_1:'Code Four',text_2:'WordPress',text_3:'UI/UX' },
       { src: '/uxCrop.png', links: 'https://www.smartinsider.com/' ,text_1:'Smart Insider',text_2:'WordPress',text_3:'UI/UX'},
       { src: '/ux-10Crop.png', links: 'https://cvmakerhub.com/' ,text_1:'CV Maker Hub',text_2:'WordPress',text_3:'UI/UX'},

       { src: '/ux4Crop.png', links: 'https://zoo-guide.com/' ,text_1:'Zoo Guide',text_2:'WOOCommerce',text_3:'UI/UX'},
       { src: '/react-1Crop.png', links: 'https://www.servicelead.pro/',text_1:'Service Lead Pro',text_2:'React Js',text_3:'UI/UX' },
       { src: '/ux-6Crop.png', links: 'https://leoshine.com/' ,text_1:'Leoshine',text_2:'Shopify',text_3:'UI/UX'},
       { src: '/ux-7Crop.png', links: '' ,text_1:'Epic Press',text_2:'UI/UX',text_3:'UI/UX'},
       { src: '/ux-9Crop.png', links: '' ,text_1:'Wodwes',text_2:'Vue Js',text_3:'UI/UX'},
    ], },
    {
      id: "Vuejs",
      label: "Vue Js",
      images: [
       { src: '/ux-10Crop.png', links: 'https://cvmakerhub.com/' ,text_1:'CV Maker Hub',text_2:'Firebase',text_3:'Vue JS'},

       ], },

    // ... Other items
  ];
  
  // Handle "All Projects" button click
  const handleAllProjects = () => {
    setShowAll(true); // Show all images
    setSelectedItems([]); // Clear individual selections
    setHighlightAll(true); // Highlight "All Projects" button
    navigate("?filter=All"); // Clear the filter in the URL
  };
  
  // Handle individual project button click
  const handleIndividualClick = (id) => {
    setShowAll(false);
    setHighlightAll(false);
  
    setSelectedItems((prevSelected) => {
      const newSelected = prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id];
  
      const queryParams =
        newSelected.length > 0 ? `?filter=${newSelected.join(":")}` : "?filter=";
      navigate(queryParams);
      return newSelected;
    });
  };
  
  const displayedProjects = showAll
    ? items
    : items.filter((item) => selectedItems.includes(item.id));
  
  return (
    <>
      <section className="z-0 bg-banner-image  py-24">
        <div className="flex items-center pb-12 justify-center">
          <div className="mx-auto text-center w-full">
            <h1 className="font-bold mb-7 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Featured <span className="text-[#f72d74]">Projects</span>
            </h1>
            <p className="mb-7 mt-7 text-[#e8e6e6] text-[20px] !leading-9 max-w-[800px] mx-auto">
              As a leading React development company, our specialized React developers build scalable and robust user interfaces, delivering an unparalleled user experience.
            </p>
            <div className="flex justify-center">
              <button className="hover:bg-[#f72d74] text-white px-10 md:px-14 font-bold py-3 bg-transparent border-2 border-[#f72d74] transition-colors duration-300">
                <a href="/contact">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-col w-[90%] py-12 max-w-[1440px] mx-auto justify-between">
        <div className="flex coxs:flex-col md:flex-row gap-6 justify-between mb-16 py-4 bg-green-200">
          <div className="max-w-[600px]">
            <h2 className="text-3xl font-black">
              Why Choose <span className="text-[#f72d74]">WODWES</span> for Website Design and Development Services?
            </h2>
            <p className="max-w-[500px] mt-2">
              We’re not a typical development agency — We’re your technology partner striving to achieve your specific goals.
            </p>
          </div>
          <p className="border-2 border-[#f72d74] font-bold w-[200px] h-12 px-4 text-center py-2 hover:bg-[#f72d74] hover:text-white">
            <a href="/contact">Get Started</a>
          </p>
        </div>

        <div className='grid coxs:grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
<div className='bg-pink-200 py-2 px-4'>
<h2 className='text-3xl text-[#f72d74] font-bold'>1.67x</h2>
<p>It is a long established fact that a reader will be
 distracted by the readable content of a page</p>
</div>  

<div className='bg-pink-200 py-2 px-4'>
<h2 className='text-3xl text-[#f72d74] font-bold'>1.67x</h2>
<p>It is a long established fact that a reader will be
 distracted by the readable content of a page</p>
</div>  

<div className='bg-pink-200 py-2 px-4'>
<h2 className='text-3xl text-[#f72d74] font-bold'>1.67x</h2>
<p>It is a long established fact that a reader will be
 distracted by the readable content of a page</p>
</div>  

<div className='bg-pink-200 py-2 px-4'>
<h2 className='text-3xl text-[#f72d74] font-bold'>1.67x</h2>
<p>It is a long established fact that a reader will be
 distracted by the readable content of a page</p>
</div>  

</div>
      </div>

      <div className='w-[90%] max-w-[1440px] mx-auto'>
      <div className="flex coxs:flex-col md:flex-row gap-6 justify-between mb-7 py-4 bg-green-200">
          <div className="max-w-[600px]">
            <h2 className="text-3xl font-black">
              Featured<span className="text-[#f72d74]">Projects</span> 
            </h2>
            <p className="max-w-[500px] mt-2">
              We’re not a typical development agency — We’re your technology partner striving to achieve your specific goals.
            </p>
          </div>
          <p className="border-2 border-[#f72d74] font-bold w-[200px] h-12 px-4 text-center py-2 hover:bg-[#f72d74] hover:text-white">
            <a href="/contact">Get Started</a>
          </p>
        </div>


        <div className="container mx-auto  ">
        <div className="flex flex-wrap items-center justify-center gap-12  mb-6">
          {/* "All Projects" Button */}
          <button
            onClick={handleAllProjects}
            className={`px-12 py-3 rounded-3xl border border-black  ${highlightAll ? 'bg-black text-white ' : 'bg-white hover:bg-black hover:text-white '}`}
          >
            All Projects
          </button>

          {/* Individual Project Buttons */}
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleIndividualClick(item.id)}
              className={`px-16 py-3 rounded-3xl  border border-black ${selectedItems.includes(item.id) ? 'bg-black  text-white' : 'bg-white hover:bg-black hover:text-white '}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Image Display Section */}
        <div className="grid grid-cols-2  gap-10">
          {displayedProjects.map((item) =>
            item.images.map((image, index) => (
              <div key={`${item.id}-${index}`} className="relative">
                <a href={image.links} target='_blank'>
                <img src={image.src} alt={`Project ${item.label}- Image ${index+1}`}
                className='w-full h- rounded-2xl object cover' />
                </a>
                {/* <span className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 text-sm">
                  {item.label} - {index + 1}
                </span> */}
         
               <div className='flex justify-between mt-5  gap-6 items-center'>
                 <p>{image.text_1}</p>
                 <div className=' h-[1px] '></div>
                 <div className='flex items-center gap-3 '>
                 <p>{image.text_2}</p>
                 <p>{image.text_3}</p>
                 </div>
               </div>
               <p className='px-4 mt-5 py-2 border-2 border-[#f72d74] w-44'> <a href={image.links}>View Project</a></p>
              </div>
            ))
          )}
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
  );
};

export default Portfolio;






 