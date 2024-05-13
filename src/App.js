import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import "animate.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (activeTab === "contact") {
      setShowParticles(true);
    } else {
      setShowParticles(false);
    }
  }, [activeTab]);

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainPage />
      <AboutMe />
      <Skills />
      <ContactMe showParticles={showParticles} />
      <Footer />
    </>
  );
}
