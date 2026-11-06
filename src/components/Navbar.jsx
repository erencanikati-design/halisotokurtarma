import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldAlert, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Neden Biz?', href: '#neden-biz' },
    { name: 'Hizmet Bölgeleri', href: '#bolgeler' },
    { name: 'Fiyat Hesapla', href: '#hesapla' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'SSS', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <>
      {/* Top emergency ribbon */}
      <div className="bg-gradient-to-r from-red-600 via-brand-600 to-amber-600 text-white text-xs md:text-sm font-semibold py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span>🚨 <strong>ANKARA 7/24 NÖBETÇİ OTO ÇEKİCİ</strong> — Ortalama 15-30 Dk İntikal</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-white/90" /> Sincan & Tüm Ankara
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-white/90" /> 7 Gün 24 Saat Açık
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2a2 2 0 0 0 4 0h6a2 2 0 0 0 4 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14M7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] font-semibold text-brand-400 tracking-wider uppercase -mt-0.5">
                  Halis Kırtepe • 7/24 Acil Yol Yardım
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm shadow-md shadow-whatsapp/20 transition-all hover:scale-105 active:scale-95"
                title="WhatsApp ile Konum Gönder"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp" />
                <span className="hidden xl:inline">WhatsApp</span> Konum
              </a>

              <a
                href={COMPANY_INFO.telLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emergency-600 to-red-600 hover:from-emergency-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-emergency-600/30 transition-all hover:scale-105 active:scale-95 beacon-red"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={COMPANY_INFO.telLink}
                className="p-2.5 rounded-lg bg-emergency-600 text-white font-bold shadow-md"
                aria-label="Hemen Ara"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Yetkili / İşletmeci</p>
                <p className="text-sm font-bold text-white">{COMPANY_INFO.owner}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                7/24 Aktif
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-brand-400 font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp text-slate-950 font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                WhatsApp
              </a>
              <a
                href={COMPANY_INFO.telLink}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emergency-600 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

