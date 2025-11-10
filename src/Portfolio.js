// src/Portfolio.js

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, } from 'lucide-react';

// Import komponen yang telah dipisah
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import LabSection from './components/LabSection';
import ContactSection from './components/ContactSection';
import { NeonGlassNav}  from './components/BottomNavigation';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);

    // Handle scroll untuk mengubah active section dan show/hide bottom nav
    const handleScroll = () => {
      const sections = ['home', 'about', 'lab', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });

      // Check if original navbar is visible
      // Assuming navbar height is around 80px and it's at the top of home section
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const navbarHeight = 80; // Adjust this based on your actual navbar height
        const homeTop = homeSection.offsetTop;
        const scrollY = window.scrollY;
        
        // Show bottom nav when scrolled past the navbar
        if (scrollY > homeTop + navbarHeight) {
          setShowBottomNav(true);
        } else {
          setShowBottomNav(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  // Data tetap di komponen utama untuk di-pass sebagai props
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'lab', label: 'Lab' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* Deep Space Background with Black to Dark Purple Gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
           radial-gradient(ellipse at top, #222222 0%, #000000 50%, #222222 100%),
linear-gradient(135deg, #000000 0%, #222222 25%, #000000 50%, #222222 75%, #000000 100%)
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />



      {/* Subtle Light Effects */}
     <div className="fixed w-[600px] h-[600px] bg-gray-800 blur-[200px] rounded-full opacity-10 mix-blend-screen top-[10%] left-[20%] z-10 animate-pulse" style={{ animationDuration: '8s' }} />
<div className="fixed w-[400px] h-[400px] bg-gray-700 blur-[150px] rounded-full opacity-15 mix-blend-screen bottom-[20%] right-[15%] z-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
<div className="fixed w-[300px] h-[300px] bg-gray-900 blur-[120px] rounded-full opacity-20 mix-blend-screen top-[60%] left-[10%] z-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

      {/* Komponen Navbar yang sudah dipisah - tetap menggunakan navbar asli */}
      <Navbar 
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        isLoaded={isLoaded}
      />

      {/* Bottom Navigation - muncul saat navbar asli tidak terlihat */}
 <NeonGlassNav 
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        // Tampilkan HANYA jika showBottomNav=true DAN modal tidak tampil
        isVisible={showBottomNav && !selectedProject} 
      />

      {/* Main Content Container - Semua section dalam satu page */}
      <div className="relative z-20 w-full">
        
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col">
          <HomeSection isLoaded={isLoaded} setActiveSection={scrollToSection} />
        </section>
        
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <AboutSection />
        </section>
        
        {/* Lab Section */}
        <section id="lab" className="min-h-screen flex items-center justify-center px-4 py-20">
          <LabSection selectedProject={selectedProject}
            setSelectedProject={setSelectedProject} />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <ContactSection />
        </section>

      {/* Social Links */}
<div className={`
  flex justify-center space-x-4 sm:space-x-6 transition-all duration-1000 pb-8 sm:pb-12
  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
`} style={{ transitionDelay: '1300ms' }}>
  {[
    { Icon: Github, href: 'https://github.com/Daffaaditya2807', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/daffaadityarejasaruswanto/', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/daafaditya/', label: 'Instagram' },
    { Icon: Mail, href: 'mailto:daffaaditya2912@gmail.com', label: 'Email' } // Gunakan mailto untuk email
  ].map(({ Icon, href, label }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-blue-500/30 hover:scale-110 hover:rotate-12 hover:border-blue-400/50"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
    </a>
  ))}
</div>

      </div>

      {/* Floating Orbs untuk efek tambahan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-15">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-pulse"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
        background: `radial-gradient(circle, ${
  ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.12)', 'rgba(255, 255, 255, 0.09)'][Math.floor(Math.random() * 4)]
} 0%, transparent 70%)`,
              filter: `blur(${Math.random() * 20 + 10}px)`,
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 8 + 6) + 's'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;