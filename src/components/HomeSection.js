import React, { useState, useEffect, useCallback, useMemo } from 'react';
import memojiImage from '../assets/memoji.png';
import cv from '../assets/cv.pdf';

const HomeSection = ({ isLoaded, setActiveSection }) => {
  // State untuk typing effect
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Array teks yang akan ditampilkan secara bergantian - useMemo untuk mencegah re-render
  const texts = useMemo(() => [
    'Software Engineer',
    'Frontend Developer', 
    'Mobile Developer',
    'Flutter Enthusiast',
    'Problem Solver',
    'Creative Coder'
  ], []);

  // Kecepatan mengetik yang bervariasi untuk efek yang lebih natural - useCallback untuk stabilitas
  const getTypingSpeed = useCallback(() => {
    if (isPaused) return 2000; // Pause 2 detik setelah selesai mengetik
    if (isDeleting) return 50 + Math.random() * 50; // Menghapus lebih cepat
    return 100 + Math.random() * 100; // Mengetik dengan kecepatan bervariasi
  }, [isPaused, isDeleting]);

  // Effect untuk typing animation
  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        // Pause setelah selesai mengetik sebelum mulai menghapus
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        // Sedang mengetik
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Selesai mengetik, pause sebentar
          setIsPaused(true);
        }
      } else {
        // Sedang menghapus
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Selesai menghapus, pindah ke teks berikutnya
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, getTypingSpeed());

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, getTypingSpeed, texts]);

    // Handler untuk download CV
  const handleDownloadCV = () => {
    // Ganti dengan path file CV Anda
    const cvUrl = cv;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV - Daffa Aditya R R.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between  xl:gap-2">

          {/* Kolom Gambar - Tetap Center */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
           
            {/* Gambar + Efek Glow */}
            <div className="relative w-40 sm:w-44 md:w-52 lg:w-60 xl:w-64 h-40 sm:h-44 md:h-52 lg:h-60 xl:h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-2xl scale-150 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/15 to-pink-400/15 blur-xl scale-125"></div>
              <div className="absolute inset-0 rounded-full bg-white/8 blur-lg"></div>

              <img
                src={memojiImage}
                alt="Daffa Aditya Rejasa Ruswanto Memoji"
                className="relative z-10 w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
                }}
              />
            </div>
          </div>

          {/* Kolom Teks */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Greeting mobile */}
            <div className="block lg:hidden mb-4">
         
            </div>

            <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-white mb-2 lg:mb-3 xl:mb-4">
              <span className=" decoration-2 underline-offset-4">
               Daffa Aditya - ( A Mobile Developer )
              </span>
            </h2>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl font-bold text-white leading-tight lg:leading-none mb-4 sm:mb-6 lg:mb-8">
              <div className="break-words">
                Teruslah Semangat<br />
                Pantang{' '}
                <span className="relative inline-block pt-3">
                  <span className="relative z-10 text-purple-300 p-3">
                    Menyerah
                  </span>
                  <span
                    className="absolute inset-0 border-2 border-purple-400 rounded-full"
                    style={{
                      top: '12px',
                      left: '0px',
                      right: '-8px',
                      bottom: '-12px',
                      transform: 'rotate(0deg) scaleX(1.05)',
                    }}
                  ></span>
                </span>
                <br />
                <span className="text-white">...</span>
              </div>
            </h1>

            <p className="text-gray-200 mt-4 sm:mt-6 lg:mt-8 text-sm lg:text-base max-w-md mx-auto lg:mx-0 pb-4">
              Get Dreams Hopes and Dreams for a Beautiful Future  🔥
            </p>
                    {/* Button Download CV */}
            <div className="mt-3 lg:mt-2">
              <button
                onClick={handleDownloadCV}
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm lg:text-base rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95"
              >
                {/* Icon Download */}
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download CV Daffa Aditya
                {/* Shine Effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-6 md:px-12 py-10 max-w-4xl mx-auto text-lg text-white space-y-6 mt-12 shadow-lg">
  {/* Bagian Atas */}
 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            I'm a{' '}
            <span className="text-purple-300 relative">
              {displayText}
              <span className="absolute -right-1 top-0 animate-pulse text-purple-300">|</span>
            </span>
          </h2>

  <p className="text-lg">
    Currently, I am a studying mobile developer at Jember State Polytechnic and have just graduated.
    <a href="https://facebook.com" className="text-blue-400 ml-1 inline-flex items-center gap-1">
      {/* svg facebook */}
    </a>
  </p>

  <p className='text-justify text-left'>
    Seorang Flutter enthusiast yang baru saja lulus, siap terjun ke dunia kerja dan berkomitmen penuh untuk membangun aplikasi mobile modern dengan Flutter.  Selain mobile developer, saya juga paham mengenai website seperti stack Laravel,Bootstrap,Rest API namun tidak mendalam.<br />
  </p>

  {/* List */} 
  <div className="pt-6">
    <h2 className="text-2xl font-semibold text-purple-300 mb-2">Hal lain yang saya suka:</h2>
    <ul className="list-disc list-inside space-y-2 text-base text-gray-200">
      <li>Mempelajari lebih dalam website (Reacts Js,Laravel)</li>
      <li>Mempelajari pembuatan model AI dengan python</li>
      <li>Fotograpy dan Edit Foto</li>
    </ul>
  </div>
</div>


      </div>
    </div>
  );
};

export default HomeSection;