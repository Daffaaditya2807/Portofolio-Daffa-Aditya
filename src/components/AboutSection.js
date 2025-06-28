// src/components/AboutSection.js

import React from 'react';
// import { Code, Palette, Smartphone, Globe, Settings, Users, MessageCircle, Target } from 'lucide-react';
import memojiImage from '../assets/userpng.png';

// const skills = [
//       { name: 'Mobile Development', icon: Smartphone, level: 85 },
//   { name: 'Frontend Development', icon: Code, level: 80 },
//   { name: 'Web Development', icon: Globe, level: 70 },
//     { name: 'UI/UX Design', icon: Palette, level: 65 },
// ];

// const hardSkills = [
//   'Flutter Framework',
//   'Java',
//   'Python',
//   'Dart',
//   'Laravel Framework',
//   'PHP',
//   'MySQL',
//   'Firebase',
//   'Figma',
//   'Corel Draw',
//   'Adobe Photoshop',
//   'Google Speedsheet, Docs, dan Slide',
//   'Trello',
//   'Git',
//   'GitHub'
// ];

// const softSkills = [
//   { name: 'Komunikasi', icon: MessageCircle },
//   { name: 'Kerja sama Tim', icon: Users },
//   { name: 'Analisa', icon: Settings },
//   { name: 'Berorientasi', icon: Target }
// ];

// const languages = [
//   { name: 'Bahasa Indonesia', level: 'Mahir' },
//   { name: 'Bahasa Inggris', level: 'Menengah' }
// ];

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Tentang Saya</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
                <p className="text-gray-300 text-lg leading-relaxed text-justify mb-6">Nama saya Daffa Aditya Rejasa Ruswanto, lahir di Jombang pada tanggal 28 Juli 2002. Saat ini saya berusia 22 tahun dan sedang menempuh pendidikan di Politeknik Negeri Jember, Program Studi Teknik Informatika. Minat saya terhadap dunia teknologi dan pengembangan perangkat lunak telah tumbuh sejak awal kuliah, mendorong saya untuk terus belajar dan mengasah keterampilan di bidang ini.</p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify mb-6">Saya mulai serius menekuni dunia pemrograman sejak semester 3, dengan fokus utama pada pengembangan aplikasi mobile. Ketertarikan ini saya kembangkan hingga menjadi topik utama dalam Tugas Akhir saya. Selama masa perkuliahan, saya aktif mengerjakan berbagai proyek mobile yang tidak hanya menantang secara teknis tetapi juga memberi saya pengalaman nyata dalam membangun aplikasi yang responsif dan user-friendly.</p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify mb-6">Untuk memperdalam kemampuan saya, saya mengikuti berbagai pelatihan dan program bersertifikasi, di antaranya adalah kelas Mobile Development dari Dicoding serta program Studi Independen Mobile yang diselenggarakan oleh MIKTI. Selain itu, saya juga pernah mengikuti program magang pada CV Hexa Integra Mandiri, Sidoarjo di bidang mobile development yang memberikan wawasan praktis dan pengalaman kerja langsung dalam lingkungan profesional.</p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">Selain mobile development, saya juga memiliki ketertarikan pada pengembangan web, khususnya menggunakan Laravel dan React JS. Saya menikmati bekerja dalam tim yang kolaboratif, terbuka untuk ide, dan saling mendukung satu sama lain demi menghasilkan produk yang berkualitas. Saya percaya bahwa kerja sama yang baik dan semangat untuk terus belajar merupakan kunci untuk berkembang dalam dunia teknologi yang terus berubah ini.</p>
            </div>
            
            {/* Liquid Glass Image Container */}
            <div className="flex justify-center">
                <div className="relative group">
                    {/* Liquid Glass Effect Container */}
                    <div className="relative w-80 h-100 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10 rounded-3xl"></div>
                        
                        {/* Highlight effects */}
                        <div className="absolute top-2 left-2 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-400/30 rounded-full blur-lg"></div>
                        
                        {/* Image container */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                          <img 
                            src={memojiImage} 
                            alt="" 
                            aria-hidden="true"
                            className="w-full h-full object-contain drop-shadow-2xl hover:drop-shadow-purple-500/50 transition-all duration-300 group-hover:scale-110"
                        />
                        </div>
                        
                        {/* Animated border light */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/50 via-blue-400/50 to-purple-400/50 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-full h-full rounded-3xl bg-transparent"></div>
                        </div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-12 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
};

export default AboutSection;