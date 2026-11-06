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
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'SSS', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <>
      {/* Top emergency ribbon */}
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 text-white text-xs md:text-sm font-semibold py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span>🚨 <strong>ANKARA 7/24 NÖBETÇİ OTO ÇEKİCİ</strong> — Sincan & Tüm Ankara Geneli</span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-xs font-medium">
            <a href={COMPANY_INFO.emailLink} className="hover:underline flex items-center gap-1.5 text-white/95">
              ✉️ {COMPANY_INFO.email}
            </a>
            <span className="flex items-center gap-1 text-white/95">
              <Clock className="w-3.5 h-3.5 text-amber-200" /> 7 Gün 24 Saat Açık
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/60'
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
                  className="h-11 sm:h-13 w-auto object-contain drop-shadow group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div style={{ display: 'none' }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 items-center justify-center text-white shadow-md">
                  <span className="font-black text-lg">H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors whitespace-nowrap">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] font-extrabold text-amber-700 tracking-wider uppercase -mt-0.5 whitespace-nowrap">
                  Halis Kırtepe • 7/24 Acil Yol Yardım
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] 2xl:text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50 px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0 pl-3 xl:pl-4 xl:border-l xl:border-slate-200">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs xl:text-sm shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
                title="WhatsApp ile İletişime Geç"
              >
                <MessageCircle className="w-4 h-4 fill-white text-whatsapp shrink-0" />
                <span>WhatsApp İle Ulaş</span>
              </a>

              <a
                href={COMPANY_INFO.telLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs xl:text-sm shadow-md shadow-red-600/20 transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap font-black tracking-wide">{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={COMPANY_INFO.telLink}
                className="md:hidden p-2.5 rounded-lg bg-red-600 text-white font-bold shadow-md shrink-0"
                aria-label="Hemen Ara"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 shrink-0"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Yetkili / İşletmeci</p>
                <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.owner}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                7/24 Aktif
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-semibold text-sm transition-colors"
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
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp
              </a>
              <a
                href={COMPANY_INFO.telLink}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md"
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
