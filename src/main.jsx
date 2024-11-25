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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
  <Route path="/" element={<HomeSection />} />

  
  <Route path="services/laravel" element={<Laravel />} />
  


  <Route path="contact" element={<ContactUs />} />
</Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
