import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      label: "Home",
      href: "",
      dropdown: false,
      dropdownItems: [],
      isPink:true,
    },
    {
      label: "Services",
      href: "#",
      dropdown: true,
      dropdownItems: [
        { 
          logo:'./e-commerce.png',
          title: "E-commerce Development",
          items: [
            { label: "Laravel E-commerce development", href: "#" },
            { label: "PHP E-commerce development", href: "#" },
            { label: "WordPress E-commerce Development", href: "#" },
            { label: "Shopify Development", href: "#" },
          ],

          

        },

        {
          logo:'./front-end.png',
          title: "Front-end Development",
          items: [
            { label: "React Development", href: "#" },
            { label: "Vue.js Development", href: "#" },
            { label: "Angular Development", href: "#" },
          ],
        },

        {
          logo:'./software.png',
          title: "Software Development",
          items: [
            { label: "PHP Software Development", href: "#" },
            { label: "CodeIgniter Development", href: "#" },
            { label: "Laravel Software Development", href: "#" },
            { label: "MERN Software Development", href: "#" },
          ],
        },

        {
          logo:'cms.png',
          title: "CMS Development",
          items: [
            { label: "WordPress Development", href: "#" },
            { label: "Magento Development", href: "#" },
            { label: " Drupal  Software Development", href: "#" },
            { label: "BigCommerce Development", href: "#" },
            { label: "Joomla Development", href: "#" },

          ],
        },

        // ... Other categories for "Services"
      ],
    },
    {
      label: "Industries",
      href: "#",
      dropdown: true,
      dropdownItems: [
        {
          items: [
            
            {logo:'./healthlogo.png', label: "Healthcare", href: "#" },
           
            { logo:'./healthlogo.png'   ,label: "Travel", href: "#" },
            
            { logo:'healthlogo.png',label: "Insurance", href: "#" },
          ],
        },
        {
          items: [
            { logo:'./healthlogo.png',label: "Manufacturing" },
            { logo:'./healthlogo.png',label: "Transportation and Logistics" },
          ],
        },
        {
          items: [
            { logo:'healthlogo.png' , label: "EdTech" },
            { logo:'healthlogo.png',label: "Enterprise" },
          ],
        },
        {
          items: [
            { logo:'./healthlogo.png',label: "Media and Entertainment" },
            { logo:'./healthlogo.png',label: "Telecom" },
          ],
        },
      ],
    },

    // Other nav items (e.g., "Solutions" and "Support")


    {
      label: "Technologies",
      href: "#",
      dropdown: true,
      dropdownItems: [
        {
          items:[
        { logo:'healthlogo.png',label: "IOS Developers", href: "#" },
        { logo:'healthlogo.png',label: "Android Developers", href: "#" },
        { logo:'healthlogo.png',label: "Node Js Developers", href: "#" },
          ]
        },
        
        {
          items:[
        { logo:'healthlogo.png',label: "Blockchain Developers", href: "#" },
        { logo:'healthlogo.png',label: "TypeScript  Developers", href: "#" },
        { logo:'healthlogo.png',label: "MEAN Stack Developers", href: "#" },
          ]
        },

        {
          items:[
        {logo:'healthlogo.png', label: "MERN Stack Developers", href: "#" },
        {logo:'healthlogo.png', label: "Python Developers", href: "#" },
        {logo:'healthlogo.png', label: "Mobile Application Developers", href: "#" },
          ]
        },

        {
          items:[
        { logo:'healthlogo.png',label: "WordPress Developers", href: "#" },
        { logo:'healthlogo.png',label: "React Js Developers", href: "#" },
        { logo:'healthlogo.png',label: "Node Js Developers", href: "#" },
          ]
        },
      ],
    },
    {
      label: "Portfolio",
      href: "#",
      dropdown: false,
      
    },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>

<div className="lg:relative flex flex-wrap items-center justify-center gap-x-12 gap-y-2 bg-banner-image px-2 py-[8px] text-xl text-white sm:gap-y-3 sm:text-[13px] lg:z-[60] font-Inte">
        <div className="flex items-center justify-center gap-2">
         <p className="text-sm"> 
         <span>
         <a href="/" className="border-b-[1px] text-sm mr-2  ">
            Get a Quote
          </a> 
          </span>
          today to claim $200 free credit.</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-lg"/>
          <span>+ 92 306 1070 768</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faEnvelope}  className="text-xl"/>
          <span className="text-sm">sales@wodwes.com</span>
        </div>
      </div>

    
    <nav className="bg-white sticky  top-0 z-50 mx-auto ">
      {/* Desktop View */}
      <div className="hidden lg:flex px-8  justify-between items-center relative   border-2 border-gray-300">
        <div className="w-56 p-4">
          <img src="/wodweslogo.png" alt="" />
        </div>
        <ul className="flex lg:flex-row items-center space-x-4  pr-8 gap-4">
          {navItems.map((item, index) => (
            <li key={index} className="p-3">
              {item.dropdown ? (
                <>
                  <div
                    className="flex items-center justify-between cursor-pointer hover:text-pink-700 font-medium"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <a href={item.href} className={`hover:text-[#f72d74] ${item.isPink?'text-[#f72d74]':''}`}>{item.label}</a>
                    <FontAwesomeIcon icon={faChevronDown} className={`ml-2 text-xs text-[#808080] transition-transform ${openDropdown === item.label ? 'rotate-180': ''}`} />
                  </div>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-6 right-6 px-10 ml-10 mr-10 pb-10  rounded-b-lg shadow-lg grid grid-cols-4 gap-4 z-20 bg-white">
                      
                      {item.dropdownItems.map((category, idx) => (
                        <div key={idx} className="pt-20 mx-auto">


                        <div className="flex gap-2 items-center">
                        {category.logo &&(
                          <img src={category.logo} alt={category.title} className="w-8 h-6 mb-4 "  />
                        )}
                          {/* Only show title if it exists */}
                          {category.title && (
                            <h3 className="font-bold text-black mb-6 text-base">
                              {category.title}
                            </h3>
                          )}
                        </div>
                          {category.items.map((dropdownItem, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={dropdownItem.href}
                              className="block"
                            >
                              <div className="flex gap-2 items-center cursor-pointer">
                             {dropdownItem.logo &&(
                              <img src={dropdownItem.logo} alt={dropdownItem.label} className="w-3 h-4 mb-2"   />
                              )}
                              <p className="text-sm text-black mb-4 hover:text-[#f74d74]">{dropdownItem.label}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className={`hover:text-[#f74d74] font-medium  ${item.isPink? 'text-[#f74d74]':''}`}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
          {/* Contact Us Button */}
          <li>
            <button className="ml-4 px-5 py-3 bg-[#f72d74] text-white  font-bold hover:bg-[#f74d74]">
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden justify-between items-center px-8 py-4  h-full">
        <div className=" w-36">
          <img src="./wodweslogo.png" alt="" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-[#f72d74] text-white rounded hover:bg-[#f74d74]">
            Contact Us
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#2b3e4f] text-4xl"
          >
            <FontAwesomeIcon icon={faBars}  />
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col space-y-2 mt-4  p-4 rounded text-xl h-screen">
          {navItems.map((item, index) => (
            <li key={index} className="p-3 relative">
              {item.dropdown ? (
                <>
                  <div
                    className="flex items-center justify-between cursor-pointer hover:text-[#f74d74] "
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <a href={item.href} className={`hover:text-[#f74d74] ${item.isPink? 'text-[#f74d74]':''}`}>{item.label}</a>
                    <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${openDropdown === item.label ? 'rotate-180': ''}`}  />
                  </div>
                  {openDropdown === item.label && (
                    <div className="mt-2 p-4 bg-blue-50 w-full text-black space-y-4">
                      {item.dropdownItems.map((category, idx) => (
                        <div key={idx}>
                        <div className="flex gap-2">
                        {category.logo &&(
                          <img src={category.logo} alt={category.title} className="w-5 h-5 mb-2"   />
                        )}
                          {/* Only show title if it exists */}
                          {category.title && (
                            <h3 className="font-bold text-black mb-2">
                              {category.title}
                            </h3>
                          )}
                        </div>
                          {category.items.map((dropdownItem, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={dropdownItem.href}
                              className="block hover:text-[#f72d74]"
                            >
                              <div className="flex gap-2 items-center cursor-pointer">
                              {dropdownItem.logo && (
                                <img src={dropdownItem.logo} alt={dropdownItem.label} className="w-5 h-5 mb-2"  />
                              )}
                              <p className="mb-2 text-sm">{dropdownItem.label}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className={`hover:text-[#f72d74] ${item.isPink ?'text-[#f74d74]' :''}`}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
    </>
  );
};

export default Nav;
