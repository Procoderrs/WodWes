import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faBars,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      label: "Home",
      to: "/",
      dropdown: false,
      dropdownItems: [],
      // isPink: true,
    },
    {
      label: "Services",
      to: "/services",
      dropdown: true,
      dropdownItems: [
        {
          logo: "./e-commerce.png",
          title: "E-commerce Development",
          items: [
            { label: "Laravel E-commerce development", to: "services/laravel-ecommerce-development-services" },
            { label: "PHP E-commerce development", to: "services/php-ecommerce-development-services" },
            { label: "WordPress E-commerce Development", to: "services/wordpress-ecommerce-development-services" },
            { label: "Shopify Development", to: "services/shopify-development-services" },
          ],
        },

        {
          logo: "./front-end.png",
          title: "Front-end Development",
          items: [
            { label: "React Development", to: "services/react-development" },
            { label: "Vue.js Development", to: "services/vuejs-development-services" },
            { label: "Angular Development", to: "services/angular-development-services" },
          ],
        },

        {
          logo: "./software.png",
          title: "Software Development",
          items: [
            { label: "PHP Software Development", to: "services/php-software-development-services" },
            { label: "CodeIgniter Development", to: "services/codeIgniter-software-development-services" },
            { label: "Laravel Software Development", to: "services/laravel-software-development-services" },
            { label: "MERN Software Development", to: "services/mern-software-development-services" },
          ],
        },

        {
          logo: "cms.png",
          title: "CMS Development",
          items: [
            { label: "WordPress Development", to: "services/wordpress-development-services" },
            { label: "Magento Development", to: "services/magento-development-services" },
            { label: " Drupal  Software Development", to: "services/drupal-development-services" },
            { label: "BigCommerce Development", to: "services/big-commerce-development-services" },
            { label: "Joomla Development", to: "services/joomla-development-services" },
          ],
        },

        // ... Other categories for "Services"
      ],
    },
    {
      label: "Industries",
      to: "/industries",
      dropdown: true,
      dropdownItems: [
        {
          items: [
            { logo: "./healthlogo.png", label: "Healthcare", to: "industries/healthcare" },

            { logo: "./healthlogo.png", label: "Travel", to: "/" },

            { logo: "healthlogo.png", label: "Insurance", to: "/" },
          ],
        },
        {
          items: [
            { logo: "./healthlogo.png", label: "Manufacturing", to: "/" },
            {
              logo: "./healthlogo.png",
              label: "Transportation and Logistics",
              to: "/",
            },
          ],
        },
        {
          items: [
            { logo: "healthlogo.png", label: "EdTech", to: "/" },
            { logo: "healthlogo.png", label: "Enterprise", to: "/" },
          ],
        },
        {
          items: [
            {
              logo: "./healthlogo.png",
              label: "Media and Entertainment",
              to: "/",
            },
            { logo: "./healthlogo.png", label: "Telecom", to: "/" },
          ],
        },
      ],
    },

    // Other nav items (e.g., "Solutions" and "Support")

    {
      label: "Technologies",
      to: "/technologies",
      dropdown: true,
      dropdownItems: [
        {
          items: [
            {
              logo: "healthlogo.png",
              label: "IOS Developers",
              to: "/ios-developers",
            },
            { logo: "healthlogo.png", label: "Android Developers", to: "/" },
            { logo: "healthlogo.png", label: "Node Js Developers", to: "/" },
          ],
        },

        {
          items: [
            { logo: "healthlogo.png", label: "Blockchain Developers", to: "/" },
            {
              logo: "healthlogo.png",
              label: "TypeScript  Developers",
              to: "/",
            },
            { logo: "healthlogo.png", label: "MEAN Stack Developers", to: "/" },
          ],
        },

        {
          items: [
            { logo: "healthlogo.png", label: "MERN Stack Developers", to: "/" },
            { logo: "healthlogo.png", label: "Python Developers", to: "/" },
            {
              logo: "healthlogo.png",
              label: "Mobile Application Developers",
              to: "/",
            },
          ],
        },

        {
          items: [
            { logo: "healthlogo.png", label: "WordPress Developers", to: "/" },
            { logo: "healthlogo.png", label: "React Js Developers", to: "/" },
            { logo: "healthlogo.png", label: "Node Js Developers", to: "/" },
          ],
        },
      ],
    },
    {
      label: "Portfolio",
      to: "/Portfolio",
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
              <Link to="/contact" className="border-b-[1px] text-sm mr-2  ">
                Get a Quote
              </Link>
            </span>
            <span>today to claim $200 free credit.</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-sm" />
          <span className="text-sm">+ 92 306 1070 768</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          <span className="text-sm">sales@wodwes.com</span>
        </div>
      </div>

      <nav className="bg-white sticky  top-0 z-[100]  shadow-xl mx-auto ">
        {/* Desktop View */}
        <div className="hidden lg:flex px-8   justify-between items-center relative">
          <div className="w-52 p-4">
            <img src="/wodweslogo.png" alt="" />
          </div>
          <ul className="flex lg:flex-row items-center py-2  space-x-4   pr-8 gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="p-3">
                {item.dropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer hover:text-pink-700 font-medium"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `${isActive ? "text-[#f72d74]" : ""}`
                        }
                      >
                        {item.label}
                      </NavLink>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 text-xs text-[#808080] transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openDropdown === item.label && (
                      <div className="absolute top-20 bg-white left-6 right-6 px-10 ml-10 mr-10 pb-16    rounded-b-lg shadow-lg grid grid-cols-4 gap-6 z-[10] ">
                        {item.dropdownItems.map((category, idx) => (
                          <div key={idx} className="pt-16 mx-auto">
                            <div className="flex gap-2 items-center">
                              {category.logo && (
                                <img
                                  src={`/${category.logo}`}
                                  alt={category.title}
                                  className="w-8 h-6 mb-4 "
                                />
                              )}
                              {/* Only show title if it exists */}
                              {category.title && (
                                <h3 className="font-bold text-black mb-6 text-base">
                                  {category.title}
                                </h3>
                              )}
                            </div>
                            {category.items.map((dropdownItem, itemIdx) => (
                              <NavLink
                                key={itemIdx}
                                to={dropdownItem.to}
                                className={({ isActive }) =>
                                  `${isActive ? "text-[#f72d74]" : ""} block`
                                }
                                onClick={()=>setOpenDropdown(null)}
                              >
                                <div className="flex gap-2 items-center cursor-pointer">
                                  {dropdownItem.logo && (
                                    <img
                                      src={`/${dropdownItem.logo}`}
                                      alt={dropdownItem.label}
                                      className="w-3 h-4 mb-2"
                                    />
                                  )}
                                  <p className="text-sm text-black mb-4 hover:text-[#f74d74]">
                                    {dropdownItem.label}
                                  </p>
                                </div>
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#f72d74] font-medium" : "font-medium"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
            {/* Contact Us Button */}
            <li className="flex items-center justify-center">
              <Link
                to={"/contact"}
                className="ml-4 px-3 py-2  bg-[#f72d74] text-white  font-bold hover:bg-[#f74d74]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden justify-between items-center px-8 py-4 ">
          <div className=" coxs:w-24 sm:w-32    w-36">
            <img src="/wodweslogo.png" alt="" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#f72d74] text-white  hover:bg-[#f74d74]">
              <Link to={'/contact'}>
                Contact Us
              </Link>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2b3e4f] text-2xl"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden flex flex-col space-y-2 mt-4  text-sm  p-4 rounded  h-screen overflow-y-auto bg-green-400 ">
            {navItems.map((item, index) => (
              <li key={index} className="p-3 relative">
                {item.dropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer hover:text-[#f74d74] "
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <Link
                        to={item.to}
                        className={`hover:text-[#f74d74] ${
                          item.isPink ? "text-[#f74d74]" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={` text-xs ml-2 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openDropdown === item.label && (
                      <div className="mt-2 p-4 bg-blue-50 w-full text-black space-y-4">
                        {item.dropdownItems.map((category, idx) => (
                          <div key={idx}>
                            <div className="flex gap-2">
                              {category.logo && (
                                <img
                                  src={category.logo}
                                  alt={category.title}
                                  className="w-5 h-5 mb-2"
                                />
                              )}
                              {/* Only show title if it exists */}
                              {category.title && (
                                <h3 className="font-bold text-black mb-2">
                                  {category.title}
                                </h3>
                              )}
                            </div>
                            {category.items.map((dropdownItem, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={dropdownItem.to}
                                className="block hover:text-[#f72d74]"
                              >
                                <div className="flex gap-2 items-center cursor-pointer">
                                  {dropdownItem.logo && (
                                    <img
                                      src={dropdownItem.logo}
                                      alt={dropdownItem.label}
                                      className="w-5 h-5 mb-2"
                                    />
                                  )}
                                  <p className="mb-2 text-sm">
                                    {dropdownItem.label}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={`hover:text-[#f72d74] ${
                      item.isPink ? "text-[#f74d74]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
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
