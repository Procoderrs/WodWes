import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    {
      name: "Services",
      submenu: true,
      sublinks: [
        {
          Head: "E-commerce Development",
          sublink: [
            { name: "Laravel E-commerce Development", link: "/" },
            { name: "PHP E-commerce development", link: "/" },
            { name: "WordPress E-commerce Development", link: "/" },
            { name: "Shopify Development", link: "/" },
          ],
        },
        {
          Head: "Front-end Development",
          sublink: [
            { name: "React Development", link: "/" },
            { name: "Vue.js Development", link: "/" },
            { name: "Angular development", link: "/" },
          ],
        },
        {
          Head: "Software Development",
          sublink: [
            { name: "PHP software Development", link: "/" },
            { name: "CodeIgniter Development", link: "/" },
            { name: "Laravel Software Development", link: "/" },
            { name: "MERN Software Development", link: "/" },
          ],
        },
        {
          Head: "CMS Development",
          sublink: [
            { name: "WordPress Development", link: "/" },
            { name: "Magento Development", link: "/" },
            { name: "Drupal Development", link: "/" },
            { name: "BigEcommerce Development", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Industries",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Healthcare", link: "/" },
            { name: "Travel", link: "/" },
            { name: "Insurance", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "Manufacturing", link: "/" },
            { name: "Transportation and Logistics", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "EdTech", link: "/" },
            { name: "Enterprise", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "Media and Entertainment", link: "/" },
            { name: "Telecom", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Technologies",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "IOS Developers", link: "/" },
            { name: "Android Developers", link: "/" },
            { name: "Node Js developers", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "Blockchain Developers", link: "/" },
            { name: "TypeScript Developers", link: "/" },
            { name: "MEAN Stack Developers", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "MERN Stack Developers", link: "/" },
            { name: "Python Developers", link: "/" },
            { name: "Mobile Application Developers", link: "/" },
          ],
        },
        {
          sublink: [
            { name: "WordPress Developers", link: "/" },
            { name: "React JS Developers", link: "/" },
            { name: "Angular Developers", link: "/" },
          ],
        },
      ],
    },
    { name: "Portfolio" },
  ];

  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="relative group">
          <div className='px-3 text-left md:cursor-pointer'>
            <h1 className='py-7 text-2xl hover:text-pink-600'>{link.name}</h1>
            {link.submenu && (
              <div className='hidden md:block'>
                {/* Desktop Dropdown */}
                <div 
                  className='absolute top-16 left-0 hidden group-hover:flex transition-all duration-300 ease-in-out w-full z-50' 
                  style={{ backgroundColor: 'white', padding: '1rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className='bg-white flex justify-around items-start w-full max-w-screen-lg mx-auto gap-4'>
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className='flex-1'>
                        <h1 className='text-xl font-bold mb-3'>{mysublinks.Head}</h1>
                        <ul className='flex flex-col gap-2'>
                          {mysublinks.sublink.map((slink) => (
                            <li key={slink.name} className='text-lg text-gray-700'>
                              <Link to={slink.link} className='hover:text-pink-300'>
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <div className='md:hidden'>
            {link.sublinks &&
              link.sublinks.map((slinks) => (
                <div key={slinks.Head}>
                  <h1 className='py-4 pl-7 font-semibold'>{slinks.Head}</h1>
                  <ul className='pl-10'>
                    {slinks.sublink.map(slink => (
                      <li key={slink.name} className='py-2'>
                        <Link to={slink.link} className='text-lg text-gray-700'>
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
