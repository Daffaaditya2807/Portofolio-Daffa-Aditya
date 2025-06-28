// src/components/BottomNavigation.js

import React, { useState } from 'react';
import { Home, User, Beaker, Mail  } from 'lucide-react';

const BottomNavigation = ({ navItems, activeSection, setActiveSection, isVisible }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const getIcon = (id) => {
    switch(id) {
      case 'home': return <Home className="w-5 h-5" />;
      case 'about': return <User className="w-5 h-5" />;
      case 'lab': return <Beaker className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  const getActiveIndex = () => navItems.findIndex(item => item.id === activeSection);

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}
    `}>
      {/* Glow effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80 backdrop-blur-xl" />
        
        {/* Navigation Container */}
        <div className="relative">
          <div className="flex items-center justify-around max-w-md mx-auto px-4">
            {/* Sliding Background Indicator */}
            <div 
              className="absolute bottom-0 h-full w-1/4 transition-all duration-500 ease-out"
              style={{ 
                left: `${getActiveIndex() * 25}%`,
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm" />
            </div>
            
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`
                  relative flex flex-col items-center gap-1.5 py-3 px-4 w-full
                  transition-all duration-300 group
                `}
              >
                {/* Icon Container */}
                <div className="relative">
                  {/* Glow effect for active item */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 scale-150 animate-pulse" />
                  )}
                  
                  {/* Icon */}
                  <div className={`
                    relative transition-all duration-300 transform
                    ${activeSection === item.id 
                      ? 'text-white scale-110 -translate-y-1' 
                      : hoveredItem === item.id
                        ? 'text-gray-200 scale-105'
                        : 'text-gray-400'
                    }
                  `}>
                    {getIcon(item.id)}
                  </div>
                  
                  {/* Active dot indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  text-xs font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-white opacity-100' 
                    : hoveredItem === item.id
                      ? 'text-gray-200 opacity-90'
                      : 'text-gray-500 opacity-70'
                  }
                `}>
                  {item.label}
                </span>
                
                {/* Hover/Active background effect */}
                <div className={`
                  absolute inset-0 rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-white/5' 
                    : hoveredItem === item.id
                      ? 'bg-white/5'
                      : ''
                  }
                `} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;

// Alternative Design: Floating Pills Bottom Navigation
export const FloatingPillsBottomNav = ({ navItems, activeSection, setActiveSection, isVisible }) => {
  const getIcon = (id) => {
    switch(id) {
      case 'home': return <Home className="w-5 h-5" />;
      case 'about': return <User className="w-5 h-5" />;
      case 'lab': return <Beaker className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className={`
      fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}
    `}>
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-2xl" />
        
        {/* Navigation Pills */}
        <div className="relative flex items-center gap-2 px-2 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                relative px-5 py-3 rounded-full font-medium
                transition-all duration-300 ease-out group
                ${activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
                }
              `}
            >
              {/* Active Background */}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
              )}
              
              {/* Hover Background */}
              <div className={`
                absolute inset-0 rounded-full transition-all duration-300
                ${activeSection !== item.id ? 'group-hover:bg-white/10' : ''}
              `} />
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                {getIcon(item.id)}
                <span className="hidden sm:inline">{item.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NeonGlassNav = ({ navItems, activeSection, setActiveSection, isVisible }) => {
  const getIcon = (id) => {
    switch(id) {
      case 'home': return <Home className="w-5 h-5" />;
      case 'about': return <User className="w-5 h-5" />;
      case 'lab': return <Beaker className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className={`
      fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}
    `}>
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
        
        <div className="relative flex items-center gap-1 p-1 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                relative flex flex-col items-center gap-1 px-5 py-3 rounded-xl
                transition-all duration-300 group
                ${activeSection === item.id 
                  ? 'bg-white/10 shadow-lg' 
                  : 'hover:bg-white/5'
                }
              `}
            >
              <div className={`
                transition-all duration-300
                ${activeSection === item.id 
                  ? 'text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                  : 'text-gray-400 group-hover:text-white'
                }
              `}>
                {getIcon(item.id)}
              </div>
              
              <span className={`
                text-xs font-medium transition-all duration-300
                ${activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-400 group-hover:text-white'
                }
              `}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Alternative Design: Minimal Glass Bar
export const MinimalGlassBottomNav = ({ navItems, activeSection, setActiveSection, isVisible }) => {
  const getIcon = (id) => {
    switch(id) {
      case 'home': return <Home className="w-5 h-5" />;
      case 'about': return <User className="w-5 h-5" />;
      case 'lab': return <Beaker className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className={`
      fixed bottom-0 inset-x-0 z-50
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}
    `}>
      <div className="mx-auto max-w-screen-sm px-4 pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
          
          <div className="relative flex items-center justify-around">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="relative flex flex-col items-center gap-1 py-4 px-6 w-full group"
              >
                {/* Icon */}
                <div className={`
                  transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-blue-400 scale-110' 
                    : 'text-gray-400 group-hover:text-gray-200 group-hover:scale-105'
                  }
                `}>
                  {getIcon(item.id)}
                </div>
                
                {/* Label */}
                <span className={`
                  text-xs font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-gray-500 group-hover:text-gray-300'
                  }
                `}>
                  {item.label}
                </span>
                
                {/* Active Line Indicator */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  h-0.5 bg-gradient-to-r from-blue-400 to-purple-400
                  transition-all duration-300
                  ${activeSection === item.id ? 'w-12' : 'w-0'}
                `} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};