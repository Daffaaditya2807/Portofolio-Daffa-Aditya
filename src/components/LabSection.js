import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, Smartphone, Users } from 'lucide-react';

const LabSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const getImage = (path) => require(`../assets/projects/${path}`);


  // Data project mobile apps - customize sesuai project Anda
  const mobileProjects = [
    {
      id: 1,
      title: "Titu Laundry",
      category: "ecommerce",
      description: "Titu Laundry adalah aplikasi berbasis mobile yang digunakan untuk pemesanan dan pemantauan laundry yang sedang dikerjakan oleh toko.",
      longDescription: "Titu Laundry merupakan aplikasi berbasis mobile yang dirancang untuk memberikan kemudahan dalam layanan laundry modern. Pengguna dapat memilih jenis layanan laundry yang diinginkan, melihat daftar produk atau paket laundry yang tersedia, serta melakukan pemesanan secara langsung dari aplikasi. Fitur pemantauan status memungkinkan pengguna untuk mengetahui tahap pengerjaan laundry secara real-time, mulai dari penjemputan, pencucian, hingga pengantaran kembali. Terdapat juga fitur profil untuk mengelola informasi pengguna, serta sistem pembayaran digital yang mempermudah transaksi tanpa uang tunai. Selain itu, aplikasi ini memberikan rincian biaya secara transparan, sehingga pengguna dapat memperkirakan total harga sebelum melakukan pemesanan. Dengan tampilan yang ramah pengguna dan teknologi backend yang solid menggunakan Java, MySQL, PHP, dan REST API, Titu Laundry telah digunakan oleh ribuan pengguna dan meraih rating tinggi di toko aplikasi.",
      image: getImage("app1/main.jpg"), // Screenshot utama
      screenshots: [
        getImage("app1/main.jpg"),
        getImage("app1/home.jpg"), 

      ],
      tech: ["Java", "MySQL", "PHP", "Rest API"],
      features: [
        "Product Laundry",
        "Pemantauan Status",
        "Profil",
        "Pembayaran",
        "Informasi Biaya",
      ],
      stats: {
        downloads: "",
        rating: 0.0,
        users: ""
      },
      links: {
        playstore: "",
        appstore: "",
        github: "https://github.com/Daffaaditya2807/Project-Laundry"
      },
      status: "published"
    },
    {
      id: 2,
      title: "eSidokare",
      category: "communication",
      description: "Aplikasi ini dirancang untuk menyampaikan aspirasi , keluhan , meminta informasi ( PPID ) oleh masyarakat kepada instansi desa dengan mudah hanya melalui aplikasi mobile",
      longDescription: "eSidokare merupakan aplikasi mobile berbasis Flutter yang dirancang untuk memperkuat komunikasi antara masyarakat dan pemerintah desa. Melalui platform ini, warga dapat dengan mudah menyampaikan aspirasi, keluhan, hingga permintaan informasi sesuai regulasi PPID (Pejabat Pengelola Informasi dan Dokumentasi) tanpa harus datang langsung ke kantor desa. Fitur utama seperti Pengajuan Surat memungkinkan pengguna untuk mengajukan permohonan berbagai jenis surat resmi dari desa secara online. Setelah pengajuan disetujui, surat tersebut dapat diunduh langsung melalui fitur Download Surat. Selain itu, eSidokare juga menyediakan informasi terkini melalui fitur Berita & Komen, yang memungkinkan warga untuk membaca berita desa dan memberikan komentar atau tanggapan. Fitur Informasi Warga menampilkan data dan pengumuman penting yang bersifat publik, sementara sistem Notifikasi aktif memberikan pemberitahuan secara real-time terkait proses surat, informasi baru, atau update penting lainnya. Dibangun dengan teknologi modern seperti Flutter, Dart, SQLite, dan REST API, aplikasi ini memberikan pengalaman pengguna yang ringan namun tetap fungsional dan komprehensif bagi kebutuhan komunikasi desa digital.",
      image: getImage("app2/main.png"),
      screenshots: [
        getImage("app2/main.png"),
        getImage("app2/home.png"),

      ],
      tech: ["Flutter", "Dart", "SQLite", "REST API"],
      features: [
        "Pengajuan Surat",
        "Download Surat",
        "Berita & Komen",
        "Informasi Warga",
        "Notifikasi",
     
      ],
      stats: {
        downloads: "",
        rating: 0.0,
        users: ""
      },
      links: {
        playstore: "",
        github: "https://github.com/Daffaaditya2807/sidokare_mobile_app"
      },
      status: "published"
    },
    {
      id: 3,
      title: "Antriqu",
      category: "productivity",
      description: "AntreQu Apps adalah aplikasi modern untuk pemesanan (booking) yang terintegrasi dengan Mobile App sebagai User Aplikasi ini dirancang untuk memberikan pengalaman pemesanan yang mudah, cepat, dan efisien!",
      longDescription: "Antriqu adalah aplikasi mobile berbasis Flutter yang dirancang untuk menyederhanakan proses pemesanan layanan secara digital. Dengan mengedepankan efisiensi dan kenyamanan, aplikasi ini memungkinkan pengguna untuk melakukan booking pesanan dengan cepat dan memantau prosesnya secara real-time.Fitur Real-time Status Pesanan memberikan visibilitas penuh terhadap proses pemesanan, dari awal hingga selesai. Untuk memastikan pengguna tidak ketinggalan informasi penting, tersedia pula notifikasi otomatis menggunakan Firebase Cloud Messaging yang akan memberi tahu setiap perubahan status pemesanan secara langsung. Aplikasi ini juga dilengkapi dengan Chart Kepadatan Booking, memungkinkan pengguna melihat waktu-waktu ramai dan merencanakan booking di waktu yang lebih ideal. Selain itu, fitur History Booking menyimpan riwayat pemesanan yang telah dilakukan, sehingga pengguna dapat dengan mudah melakukan re-booking jika dibutuhkan.Dikembangkan dengan teknologi modern seperti Flutter, Laravel, REST API, Firebase Cloud Messaging, MySQL, dan SQLite, Antriqu dirancang sebagai solusi produktivitas yang kuat dan adaptif untuk mendukung berbagai jenis layanan berbasis antrean.",
      image: getImage("app3/main.png"),
      screenshots: [
        getImage("app3/main.png"),
        getImage("app3/login.png"),
        getImage("app3/status.png"),
        getImage("app3/dashboard.png"),
       getImage("app3/booking.png"),
      ],
      tech: ["Flutter", "Dart", "Laravel", "Rest API", "Firebase Claude Messaging" ,  "MySQL" , "SQLite"],
      features: [
        "Real-time Status Pesanan",
        "Notifikasi Pemberitahuan Status Pesanan",
        "Booking Pesanan",
        "Chart Kepadatan Booking",
        "History Booking",
      ],
      stats: {
        downloads: "",
        rating: 0.0,
        users: ""
      },
      links: {
        playstore: "",
        appstore: "",
        github: "https://github.com/Daffaaditya2807/booking-apps-mobile"
      },
      status: "development"
    },
        {
      id: 4,
      title: "eBendungan",
      category: "communication",
      description: "Aplikasi yang dikembangkan untuk pengajuan surat, informasi, serta pengaduan aspirasi dan keluhan untuk Warga Desa Bendungan",
      longDescription: "eBendungan adalah aplikasi mobile berbasis Flutter yang dikembangkan khusus untuk mendukung keterbukaan informasi dan kemudahan layanan publik di Desa Bendungan. Aplikasi ini menjadi sarana digital warga dalam mengakses berbagai layanan seperti pengajuan surat, penyampaian aspirasi dan keluhan, serta mendapatkan informasi penting dari desa dengan cepat dan transparan.Dilengkapi dengan fitur Real-time Tracking, warga dapat memantau status pengajuan mereka langsung melalui aplikasi. Selain itu, integrasi Payment Gateway memungkinkan pembayaran administrasi dilakukan secara non-tunai. Sistem Rating juga disediakan agar warga dapat memberikan umpan balik terhadap layanan yang diterima.Untuk pengalaman komunikasi yang lebih responsif, tersedia fitur Live Chat Support yang terhubung langsung dengan admin atau perangkat desa. Riwayat pengajuan dan transaksi disimpan melalui fitur Order History, sehingga pengguna memiliki catatan digital lengkap atas aktivitasnya. Teknologi modern seperti Flutter, Laravel REST API, Firebase Cloud Messaging, serta integrasi Text Recognition Google ML Kit memberikan nilai tambah pada aplikasi, khususnya dalam hal pengolahan dokumen digital. eBendungan menjadi langkah konkret dalam transformasi digital desa, menjadikan pelayanan lebih mudah diakses oleh semua warga.",
      image: getImage("app4/splash.png"),
      screenshots: [
         getImage("app4/splash.png"),
       getImage("app4/login.png"),
       getImage("app4/dashboard.png"),
  getImage("app4/detail.png")
      ],
      tech: ["Flutter", "Dart" , "Rest API" , "Laravel" , "MySQL" , "Firebase" , "Text Recognition - Google ML kit" , "Firebase Claud Messaging"],
      features: [
        "Real-time Tracking",
        "Multiple Restaurants",
        "Payment Gateway",
        "Rating System",
        "Order History",
        "Live Chat Support"
      ],
      stats: {
        downloads: "",
        rating: 0.0,
        users: ""
      },
      links: {
        playstore: "",
        appstore: "",
        github: ""
      },
      status: "development"
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Proyek', icon: Smartphone },
    { id: 'communication', label: 'Komunikasi', icon: Star },
    { id: 'productivity', label: 'Produktivitas', icon: Users },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? mobileProjects 
    : mobileProjects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Status Badge */}
      {/* <div className="absolute top-4 left-4 z-20">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'published' 
            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
            : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
        }`}>
          {project.status === 'published' ? '🟢 Live' : '🟡 In Development'}
        </span>
      </div> */}

      {/* Phone Mockup */}
      <div className="relative h-80 flex items-center justify-center p-8">
        <div className="relative w-48 h-72 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl">
          {/* Phone notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
          
          {/* Screen */}
          <div className="absolute inset-3 bg-white rounded-[1.8rem] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                onClick={() => setSelectedProject(project)}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
              >
                <Play className="w-8 h-8 text-white" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            {/* <span className="flex items-center gap-1 text-gray-300">
              <Download className="w-4 h-4" />
              {project.stats.downloads}
            </span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4" fill="currentColor" />
              {project.stats.rating}
            </span> */}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.links.github && (
              <a href={project.links.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
            <button 
              onClick={() => setSelectedProject(project)}
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Mobile App Lab
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
         Project Aplikasi Mobile yang sudah saya kembangkan.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <Icon className="w-5 h-5" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-300">{selectedProject.longDescription}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <span className="text-white text-xl">✕</span>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Screenshots */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Screenshots</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="bg-gray-900 rounded-2xl border-2 border-gray-800 p-2">
                        <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full rounded-xl" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <span key={index} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Links */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Download & Links</h4>
                    <div className="flex gap-4">
                      {/* {selectedProject.links.playstore && (
                        <a href={selectedProject.links.playstore} className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
                          <Play className="w-5 h-5" />
                          Play Store
                        </a>
                      )}
                      {selectedProject.links.appstore && (
                        <a href={selectedProject.links.appstore} className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                          <Smartphone className="w-5 h-5" />
                          App Store
                        </a>
                      )} */}
                      {selectedProject.links.github && (
                        <a href={selectedProject.links.github} className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                          <Github className="w-5 h-5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabSection;