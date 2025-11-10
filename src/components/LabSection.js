import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Star, Smartphone, Users, Computer, Globe } from 'lucide-react';


const LabSection = ({ selectedProject, setSelectedProject }) => {
const [activeFilter, setActiveFilter] = useState('all');
  const getImage = (path) => require(`../assets/projects/${path}`);

  // --- ⬇️ GANTI DENGAN LOGIKA BARU INI ⬇️ ---
  useEffect(() => {
    // Dapatkan referensi ke <html> dan <body>
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (selectedProject) {
      // Kunci scroll pada kedua elemen
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
    } else {
      // Kembalikan scroll pada kedua elemen
      htmlElement.style.overflow = 'auto';
      bodyElement.style.overflow = 'auto';
    }

    // Fungsi cleanup: Selalu pastikan scroll kembali normal
    return () => {
      htmlElement.style.overflow = 'auto';
      bodyElement.style.overflow = 'auto';
    };
  }, [selectedProject]); // <-- Tetap memantau 'selectedProject'
  // --- ⬆️ AKHIR DARI BLOK PENGGANTI ⬆️ ---



  const allProjects = [
   {
    id: 1,
    type: "mobile",
    title: "Titu Laundry",
    category: "ecommerce",
    description:
      "Titu Laundry adalah aplikasi berbasis mobile yang digunakan untuk pemesanan dan pemantauan laundry yang sedang dikerjakan oleh toko.",
    longDescription:
      "Titu Laundry merupakan aplikasi berbasis mobile yang dirancang untuk memberikan kemudahan dalam layanan laundry modern. Pengguna dapat memilih jenis layanan laundry yang diinginkan, melihat daftar produk atau paket laundry yang tersedia, serta melakukan pemesanan secara langsung dari aplikasi. Fitur pemantauan status memungkinkan pengguna untuk mengetahui tahap pengerjaan laundry secara real-time, mulai dari penjemputan, pencucian, hingga pengantaran kembali. Terdapat juga fitur profil untuk mengelola informasi pengguna, serta sistem pembayaran digital yang mempermudah transaksi tanpa uang tunai. Selain itu, aplikasi ini memberikan rincian biaya secara transparan, sehingga pengguna dapat memperkirakan total harga sebelum melakukan pemesanan. Dengan tampilan yang ramah pengguna dan teknologi backend yang solid menggunakan Java, MySQL, PHP, dan REST API, Titu Laundry telah digunakan oleh ribuan pengguna dan meraih rating tinggi di toko aplikasi.",
    image: getImage("app1/main.jpg"),
    screenshots: [getImage("app1/main.jpg"), getImage("app1/home.jpg")],
    tech: ["Java", "MySQL", "PHP", "REST API"],
    features: [
      "Product Laundry",
      "Pemantauan Status",
      "Profil",
      "Pembayaran",
      "Informasi Biaya"
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
        type: "mobile",
    title: "eSidokare",
    category: "communication",
    description:
      "Aplikasi ini dirancang untuk menyampaikan aspirasi , keluhan , meminta informasi ( PPID ) oleh masyarakat kepada instansi desa dengan mudah hanya melalui aplikasi mobile",
    longDescription:
      "eSidokare merupakan aplikasi mobile berbasis Flutter yang dirancang untuk memperkuat komunikasi antara masyarakat dan pemerintah desa. Melalui platform ini, warga dapat dengan mudah menyampaikan aspirasi, keluhan, hingga permintaan informasi sesuai regulasi PPID (Pejabat Pengelola Informasi dan Dokumentasi) tanpa harus datang langsung ke kantor desa. Fitur utama seperti Pengajuan Surat memungkinkan pengguna untuk mengajukan permohonan berbagai jenis surat resmi dari desa secara online. Setelah pengajuan disetujui, surat tersebut dapat diunduh langsung melalui fitur Download Surat. Selain itu, eSidokare juga menyediakan informasi terkini melalui fitur Berita & Komen, yang memungkinkan warga untuk membaca berita desa dan memberikan komentar atau tanggapan. Fitur Informasi Warga menampilkan data dan pengumuman penting yang bersifat publik, sementara sistem Notifikasi aktif memberikan pemberitahuan secara real-time terkait proses surat, informasi baru, atau update penting lainnya. Dibangun dengan teknologi modern seperti Flutter, Dart, SQLite, dan REST API, aplikasi ini memberikan pengalaman pengguna yang ringan namun tetap fungsional dan komprehensif bagi kebutuhan komunikasi desa digital.",
    image: getImage("app2/main.png"),
    screenshots: [getImage("app2/main.png"), getImage("app2/home.png")],
    tech: ["Flutter", "Dart", "SQLite", "REST API"],
    features: [
      "Pengajuan Surat",
      "Download Surat",
      "Berita & Komen",
      "Informasi Warga",
      "Notifikasi"
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
        type: "mobile",
    title: "Antriqu",
    category: "productivity",
    description:
      "AntreQu Apps adalah aplikasi modern untuk pemesanan (booking) yang terintegrasi dengan Mobile App sebagai User Aplikasi ini dirancang untuk memberikan pengalaman pemesanan yang mudah, cepat, dan efisien!",
    longDescription:
      "Antriqu adalah aplikasi mobile berbasis Flutter yang dirancang untuk menyederhanakan proses pemesanan layanan secara digital. Dengan mengedepankan efisiensi dan kenyamanan, aplikasi ini memungkinkan pengguna untuk melakukan booking pesanan dengan cepat dan memantau prosesnya secara real-time.Fitur Real-time Status Pesanan memberikan visibilitas penuh terhadap proses pemesanan, dari awal hingga selesai. Untuk memastikan pengguna tidak ketinggalan informasi penting, tersedia pula notifikasi otomatis menggunakan Firebase Cloud Messaging yang akan memberi tahu setiap perubahan status pemesanan secara langsung. Aplikasi ini juga dilengkapi dengan Chart Kepadatan Booking, memungkinkan pengguna melihat waktu-waktu ramai dan merencanakan booking di waktu yang lebih ideal. Selain itu, fitur History Booking menyimpan riwayat pemesanan yang telah dilakukan, sehingga pengguna dapat dengan mudah melakukan re-booking jika dibutuhkan.Dikembangkan dengan teknologi modern seperti Flutter, Laravel, REST API, Firebase Cloud Messaging, MySQL, dan SQLite, Antriqu dirancang sebagai solusi produktivitas yang kuat dan adaptif untuk mendukung berbagai jenis layanan berbasis antrean.",
    image: getImage("app3/main.png"),
    screenshots: [
      getImage("app3/main.png"),
      getImage("app3/login.png"),
      getImage("app3/status.png"),
      getImage("app3/dashboard.png"),
      getImage("app3/booking.png")
    ],
    tech: [
      "Flutter",
      "Dart",
      "Laravel",
      "REST API",
      "Firebase Cloud Messaging",
      "MySQL",
      "SQLite"
    ],
    features: [
      "Real-time Status Pesanan",
      "Notifikasi Pemberitahuan Status Pesanan",
      "Booking Pesanan",
      "Chart Kepadatan Booking",
      "History Booking"
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
    type: "mobile",
    title: "eBendungan",
    category: "communication",
    description:
      "Aplikasi yang dikembangkan untuk pengajuan surat, informasi, serta pengaduan aspirasi dan keluhan untuk Warga Desa Bendungan",
    longDescription:
      "eBendungan adalah aplikasi mobile berbasis Flutter yang dikembangkan khusus untuk mendukung keterbukaan informasi dan kemudahan layanan publik di Desa Bendungan. Aplikasi ini menjadi sarana digital warga dalam mengakses berbagai layanan seperti pengajuan surat, penyampaian aspirasi dan keluhan, serta mendapatkan informasi penting dari desa dengan cepat dan transparan.Dilengkapi dengan fitur Real-time Tracking, warga dapat memantau status pengajuan mereka langsung melalui aplikasi. Selain itu, integrasi Payment Gateway memungkinkan pembayaran administrasi dilakukan secara non-tunai. Sistem Rating juga disediakan agar warga dapat memberikan umpan balik terhadap layanan yang diterima.Untuk pengalaman komunikasi yang lebih responsif, tersedia fitur Live Chat Support yang terhubung langsung dengan admin atau perangkat desa. Riwayat pengajuan dan transaksi disimpan melalui fitur Order History, sehingga pengguna memiliki catatan digital lengkap atas aktivitasnya. Teknologi modern seperti Flutter, Laravel REST API, Firebase Cloud Messaging, serta integrasi Text Recognition Google ML Kit memberikan nilai tambah pada aplikasi, khususnya dalam hal pengolahan dokumen digital. eBendungan menjadi langkah konkret dalam transformasi digital desa, menjadikan pelayanan lebih mudah diakses oleh semua warga.",
    image: getImage("app4/splash.png"),
    screenshots: [
      getImage("app4/splash.png"),
      getImage("app4/login.png"),
      getImage("app4/dashboard.png"),
      getImage("app4/detail.png")
    ],
    tech: [
      "Flutter",
      "Dart",
      "REST API",
      "Laravel",
      "MySQL",
      "Firebase",
      "Text Recognition - Google ML Kit",
      "Firebase Cloud Messaging"
    ],
    features: [
      "Real-time Tracking",
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
  },
    {
      id: 5,
      type: "web",
      title: "Lumintu Energi Persada",
      category: "business",
      description: "Website company profile modern untuk agensi digital dengan sistem manajemen konten.",
      longDescription: "Website ini dikembangkan sebagai company profile modern untuk agensi digital Lumintu Energi Persada. Situs ini menampilkan portofolio, layanan utama, serta informasi kontak perusahaan secara profesional. Dilengkapi dengan Content Management System (CMS) untuk memudahkan pengelolaan dan pembaruan konten tanpa perlu pengetahuan teknis mendalam. Selain itu, website ini juga memiliki modul laporan, pencatatan, serta administrasi surat jalan & tugas yang mendukung operasional perusahaan. Dengan teknologi Laravel dan Bootstrap CSS, tampilan website menjadi responsif, cepat, dan mudah.",
      image: getImage("app5/main.png"),
      screenshots: [getImage("app5/main.png"), getImage("app5/login.png"), getImage("app5/dashboard.png") , getImage("app5/laporan.png") , getImage("app5/produk.png")],
      tech: ["Laravel", "Bootstrap", "MySQL",],
      features: ["Company Profile", "Manajemen Sistem (CMS)", "Laporan", "Pencatatan" , "Administrasi Surat Jalan & Tugas"],
      stats: {},
      links: { website: "https://lumintuenergipersada.my.id/" },
      status: "published"
    },
       {
      id: 6,
      type: "web",
      title: "Piscis Ai",
      category: "productivity",
      description: "Aplikasi web untuk mendeteksi jenis ikan menggunakan teknologi AI (Artificial Intelligence).",
     longDescription: "Piscis AI adalah aplikasi web berbasis kecerdasan buatan (AI) yang dirancang untuk mendeteksi jenis ikan secara otomatis melalui gambar. Model AI pada aplikasi ini dilatih menggunakan platform Techtable Machine, sehingga mampu mengenali ciri visual dari berbagai jenis ikan dengan tingkat akurasi yang baik. Saat ini, sistem dapat mengidentifikasi beberapa jenis ikan yang telah dilatih dalam model, yaitu: Bandeng, Belanak, Bulan-Bulan, Ikan Mas India, Ikan Mas Koki, Ikan Mas Perak, Ikan Mas Rumput, Kakap, Ketang Laut, Nila, Patin, Senangin, dan Wader Bintik Hitam. Dengan antarmuka yang sederhana dan responsif, Piscis AI mempermudah pengguna dalam mengenali jenis ikan secara cepat tanpa memerlukan analisis manual.",
      image: getImage("app6/main.png"),
      screenshots: [getImage("app6/main.png"), getImage("app6/fitur.png"), getImage("app6/ai.png") ],
      tech: ["Vue3", "Typescript", "Tailwind CSS", "Techtable Machine",],
      features: ["Deteksi jenis Ikan dengan AI",],
      stats: {},
      links: { website: "https://piscis-ai.vercel.app/" , github: "https://github.com/Daffaaditya2807/piscisAI"},
      status: "published"
    },
           {
      id: 7,
      type: "desktop",
      title: "Primadona Apps - Background Remover",
      category: "productivity",
      description: "Aplikasi desktop untuk menghapus latar belakang gambar secara otomatis menggunakan teknologi AI.",
longDescription: "Primadona Apps Background Remover adalah aplikasi desktop yang dirancang khusus untuk kebutuhan percetakan foto formal, bukan untuk keperluan desain grafis atau editing kreatif lainnya. Aplikasi ini dikembangkan menggunakan Python dengan dukungan library 'rembg' untuk menghapus latar belakang gambar secara otomatis menggunakan teknologi AI. Selain menghapus latar belakang, pengguna juga dapat mengganti warna background foto sesuai kebutuhan, seperti warna merah, biru, atau putih yang umum digunakan untuk foto resmi. Primadona Apps Background Remover juga menyediakan fitur pemotongan (crop) otomatis dalam ukuran standar foto formal yaitu 2x3, 3x4, dan 4x6. Hasil akhir foto dapat disimpan dalam format PNG dengan kualitas tinggi, menjadikannya solusi praktis dan efisien bagi usaha percetakan foto formal.",

      image: getImage("app7/main.png"),
      screenshots: [getImage("app7/main.png"), getImage("app7/bgremover.png"), getImage("app7/colorbg.png") , getImage("app7/crop.png") ],
      tech: ["Python", "rembg", "pyQT5", "PyInstaller",],
      features: ["Hapus latar belakang gambar dengan AI", "Ubah warna background", "Simpan dalam format PNG/JPG" , "Ubah Ukuran Gambar dengan rasio 3x4,4x6 dan 2x3"],
      stats: {},
      links: {  github: "https://github.com/Daffaaditya2807/Primadona-Apps-Remove-Background---Desktop"},
      status: "published"
    },

  ];

  // --- 2. Perbarui Kategori Filter ---
  // Menambahkan filter untuk membedakan antara proyek 'Mobile', 'Web', dan lainnya.
  const categories = [
    { id: 'all', label: 'Semua Proyek', icon: Star },
    { id: 'mobile', label: 'Aplikasi Mobile', icon: Smartphone },
    { id: 'web', label: 'Aplikasi Web', icon: Globe },
    {id: 'desktop', label: 'Aplikasi Desktop', icon: Computer },
    { id: 'ecommerce', label: 'E-Commerce', icon: Users },
    { id: 'communication', label: 'Komunikasi', icon: Users },
  ];

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.type === activeFilter || project.category === activeFilter);

  // --- 3. Buat Komponen Card yang Dinamis ---
  // ProjectCard sekarang dapat menampilkan mockup yang berbeda berdasarkan 'type' proyek.
  const ProjectCard = ({ project }) => (
    <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
      
      {/* Tampilan Mockup Dinamis */}
      <div className="relative h-80 flex items-center justify-center p-8">
        {project.type === 'mobile' ? (
          // Mockup Handphone
          <div className="relative w-48 h-72 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
            <div className="absolute inset-3 bg-white rounded-[1.8rem] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button onClick={() => setSelectedProject(project)} className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Eye className="w-8 h-8 text-white"  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Mockup Web (Browser)
          <div className="relative w-full h-full bg-gray-900 rounded-xl border-2 border-gray-800 shadow-2xl p-2">
             <div className="flex items-center gap-1.5 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-white rounded-md overflow-hidden h-[calc(100%-1.25rem)]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
               <div className="absolute inset-0 bg-gray-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button onClick={() => setSelectedProject(project)} className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Eye className="w-8 h-8 text-white"  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Konten Card */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-600/80 text-white text-xs rounded-full border border-gray-500/30">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-4"></div>
          <div className="flex gap-2">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
             {/* Menambahkan link ke website jika ada */}
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            )}
            <button onClick={() => setSelectedProject(project)} className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors">
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none hide-scrollbar">
        <div className="p-8">
          {/* Header Modal */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-justify">{project.longDescription}</p>
            </div>
            {/* Gunakan onClose di sini */}
            <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="text-white text-xl">✕</span>
            </button>
          </div>

          {/* Konten Modal */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Kolom Kiri: Screenshots */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Screenshots</h4>
              
              {project.type === 'web' || project.type === 'desktop' ? (
                // Tampilan Web
                <div className="space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative w-full bg-gray-900 rounded-lg border-2 border-gray-800 shadow-lg p-2">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-white rounded-md overflow-hidden flex justify-center items-center">
                        <img src={screenshot} alt={`Screenshot ${index + 1}`} className="max-h-[300px] w-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Tampilan Mobile
                <div className="grid grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="bg-gray-900 rounded-2xl border-2 border-gray-800 p-2">
                      <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full rounded-xl" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Kolom Kanan: Detail Proyek */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Fitur Utama</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Teknologi yang Digunakan</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-600/80 text-white rounded-full border border-gray-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Tautan</h4>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                  {project.links.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors">
                      <Globe className="w-5 h-5" />
                      Kunjungi Situs
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    // --- 4. Perbarui Teks dan Judul ---
    // Mengganti judul dan deskripsi menjadi lebih umum.
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white bg-clip-text text-transparent mb-6">
          Portofolio Proyek
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Berikut adalah beberapa proyek aplikasi mobile dan web yang telah saya kembangkan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gray-600 border-gray-600 text-white shadow-lg border-white shadow-gray-600/25'
                  : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <Icon className="w-5 h-5" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

{selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default LabSection;