import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import "animate.css";

export default function App() {
  return (
    <>
      <Header />
      <MainPage />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}
