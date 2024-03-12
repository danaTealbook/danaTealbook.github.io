import React, { useState, useEffect } from "react";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('home');
    const [isHeaderSticky, setHeaderSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // set active tab
            const sections = document.querySelectorAll('section');

            let currentSection = 'home';
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id;
                }
            });

            setActiveTab(currentSection);

            // make header sticky
            const scrollY = window.scrollY;
            setHeaderSticky(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleTabClick = () => {
        if(menuIsOpen) {
            setMenuIsOpen(false)
        }
    }

    return (
        <header className={"header" + (isHeaderSticky ? " sticky" : "")}>
            <a href="#" className="logo">Dana<span className="animate"></span></a>

            <div className={"bx bx-menu" + (menuIsOpen ? " bx-x" : "")} id="menu-icon" onClick={handleMenuClick}><span className="animate"></span></div>
            
            <nav className={"navbar" + (menuIsOpen ? " active" : "")} >
                <a href="#home" className={activeTab === "home" ? "active" : ""} onClick={handleTabClick}>Home</a>
                <a href="#about" className={activeTab === "about" ? "active" : ""} onClick={handleTabClick}>About</a>
                <a href="#skills" className={activeTab === "skills" ? "active" : ""} onClick={handleTabClick}>Skills</a>
                {/* <a href="#portfolio">Portfolio</a> */}
                <a href="#contact" className={activeTab === "contact" ? "active" : ""} onClick={handleTabClick}>Contact</a>
                <span className="animate" style={{ "--i": 4 }}></span>
                <span className="animate"></span>
            </nav>
        </header>
    )
}