import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomeSection from "./componenets/HomeSection.jsx";
import ContactUs from "./componenets/ContactUs.jsx";
import Laravel from "./componenets/Laravel.jsx";
import Healthcare from "./componenets/Healthcare.jsx";
import Wordpress from "./componenets/Wordpress.jsx";
import Php from  './componenets/Php.jsx'
import Shopify from "./componenets/Shopify.jsx";
import Button from "./componenets/Button.jsx";
import ReactJs from "./componenets/ReactJs.jsx";
import Vue from "./componenets/Vue.jsx";
import Angular from "./componenets/Angular.jsx";
import Codeigniter from "./componenets/codeigniter.jsx";
import Mern from "./componenets/Mern.jsx";
import WordpressDev from "./componenets/WordpressDev.jsx";
import Magento from "./componenets/Magento.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
  <Route path="/" element={<HomeSection />} />

  
  <Route path="services/laravel-ecommerce-development-services" element={<Laravel />} />
  <Route path="services/php-ecommerce-development-services" element={<Php/>}/>
  <Route path="services/wordpress-ecommerce-development-services" element={<Wordpress/>} />
  <Route path="services/shopify-development-services" element={<Shopify/>}/>
  <Route path="industries/healthcare" element={<Healthcare/>}/>
  <Route path="services/react-development" element={<ReactJs/>}/>
  <Route path="services/vuejs-development-services" element={<Vue/>}/>
  <Route path="services/angular-development-services" element={<Angular/>}/>
  <Route path="services/php-software-development-services" element={<Php/>}/>
  <Route path="services/codeIgniter-software-development-services" element={<Codeigniter/>}/>
  <Route path="services/laravel-software-development-services" element={<Laravel/>}/>
  <Route path="services/mern-software-development-services" element={<Mern/>}/>
  <Route path="services/wordpress-development-services" element={<WordpressDev/>}/>
 

<Route path="services/magento-development-services" element={<Magento/>}/>


  
 
  <Route path="contact" element={<ContactUs />} />
</Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
