
// src/components/ContactSection.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_b6l1qqd',     // Ganti dengan Service ID dari EmailJS
        'template_jj6xbya',    // Ganti dengan Template ID
        formRef.current,
        '9DjFI0nkYdzUPHo_j'      // ← Ganti dengan Public Key EmailJS
      )
      .then(() => {
        toast.success('✅ Pesan berhasil dikirim!', { position: 'bottom-right' });
        formRef.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error('❌ Gagal mengirim pesan. Silakan coba lagi.', { position: 'bottom-right' });
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text text-white">
        Let's Connect
      </h2>

      <p className="text-gray-300 text-lg mb-12">
        Saya selalu terbuka untuk berdiskusi tentang peluang baru dan proyek-proyek menarik. Mari ciptakan sesuatu yang luar biasa bersama!
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8"
      >
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nama Kamu"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Kamu"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            name="message"
            placeholder="Pesan Kamu"
            rows="5"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          />
        <button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-700 disabled:scale-100"
>
            {loading ? 'Mengirim...' : 'Mengirim Pesan'}
          </button>
        </div>
      </form>

      {/* Komponen Toast */}
      <ToastContainer />
    </div>
  );
};

export default ContactSection;
