// src/components/Navbar.js

import React from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const iconMap = {
  Home,
  About: User,
  Lab: Briefcase,
  Contact: Mail
};

const Navbar = ({ navItems, activeSection, setActiveSection, isLoaded }) => {
  return (
    <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
      <div className={`text-3xl font-bold transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          ⚡
        </span>
      </div>
      
      <div className="flex space-x-8">
        {navItems.map((item, index) => {
          const Icon = iconMap[item.label];
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                relative transition-all duration-500 hover:text-purple-300 group
                ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="hidden md:inline">{item.label}</span>
              {Icon && <Icon className="md:hidden w-5 h-5" />}
              <div className={`
                absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300
                ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
              `} />
            </button>
          )
        })}
      </div>
    </nav>
  );
};

export default Navbar;