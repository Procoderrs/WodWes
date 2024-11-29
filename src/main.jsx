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
import Services from "./componenets/Services.jsx";
import Laravel from "./componenets/Laravel.jsx";
import Healthcare from "./componenets/Healthcare.jsx";
import Php from "./componenets/PHP.jsx";
import Wordpress from "./componenets/Wordpress.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
  <Route path="/" element={<HomeSection />} />

  
  <Route path="services/laravel-ecommerce-development-services" element={<Laravel />} />
  <Route path="services/php-ecommerce-development-services" element={<Php/>} />
  <Route path="services/wordpress-ecommerce-development-services" element={<Wordpress/>} />


  <Route path="industries/healthcare" element={<Healthcare/>}/>
  


  <Route path="contact" element={<ContactUs />} />
</Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
