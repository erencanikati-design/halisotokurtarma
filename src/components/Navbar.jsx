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
    { name: 'Foto Galeri', href: '#galeri' },
    { name: 'Neden Biz?', href: '#neden-biz' },
    { name: 'Bölgeler', href: '#bolgeler' },
    { name: 'Fiyat & Teklif', href: '#hesapla' },
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
            <span>🚨 <strong>ANKARA 7/24 NÖBETÇİ OTO ÇEKİCİ</strong> — Sincan & Tüm Ankara Geneli</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
            <a href={COMPANY_INFO.emailLink} className="hover:underline flex items-center gap-1 text-white">
              ✉️ {COMPANY_INFO.email}
            </a>
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
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div className="relative shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Halis Oto Kurtarma Logo"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div style={{ display: 'none' }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 items-center justify-center text-slate-950 shadow-lg">
                  <span className="font-black text-lg">H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-white group-hover:text-brand-400 transition-colors whitespace-nowrap">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-brand-400 tracking-wider uppercase -mt-0.5 whitespace-nowrap">
                  Halis Kırtepe • 7/24 Acil Yol Yardım
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs 2xl:text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0 pl-3 xl:pl-4 xl:border-l xl:border-slate-800">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-black text-xs xl:text-sm shadow-md shadow-whatsapp/20 transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
                title="WhatsApp ile Konum Gönder"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp shrink-0" />
                <span>WhatsApp Konum</span>
              </a>

              <a
                href={COMPANY_INFO.telLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emergency-600 to-red-600 hover:from-emergency-500 hover:to-red-500 text-white font-black text-xs xl:text-sm shadow-lg shadow-emergency-600/30 transition-all hover:scale-105 active:scale-95 beacon-red shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap font-black tracking-wide">{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={COMPANY_INFO.telLink}
                className="md:hidden p-2.5 rounded-lg bg-emergency-600 text-white font-bold shadow-md shrink-0"
                aria-label="Hemen Ara"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white shrink-0"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
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

