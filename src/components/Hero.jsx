import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Loader2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';
import { sendWhatsAppWithLocation } from '../utils/whatsapp';

const HERO_IMAGES = [
  { src: '/images/arac-1.jpeg', label: 'Kurtarıcı Araç Filomuz' },
  { src: '/images/arac-2.jpeg', label: 'Özel Araç Taşıma' },
  { src: '/images/arac-3.jpeg', label: 'Kaza & Vinçli Kurtarma' },
  { src: '/images/arac-5.jpeg', label: '7/24 Nöbetçi Çekici' },
];

export default function Hero() {
  const [locLoading, setLocLoading] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleHeroWhatsApp = (e) => {
    e.preventDefault();
    setLocLoading(true);
    sendWhatsAppWithLocation(COMPANY_INFO.whatsappMessage, () => {
      setLocLoading(false);
    });
  };

  return (
    <section className="relative pt-6 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-800/60">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean, understated typography (5 cols on lg) */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-5">
            
            {/* Minimal Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Ankara 7/24 Nöbetçi Çekici Hizmeti</span>
            </div>

            {/* Headline - Clean & Modern, not overwhelming */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Yolda kaldığınız her an, <br />
              <span className="text-brand-400">Halis Oto Kurtarma</span> yanınızda.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sincan merkezli operasyonumuzla Ankara genelinde binek, SUV ve ticari araçlarınız için kaskolu, güvenilir ve profesyonel çekici desteği sağlıyoruz.
            </p>

            {/* Direct Action Buttons - Clean & Single-line */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-md transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Hemen Ara: {COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleHeroWhatsApp}
                disabled={locLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm shadow-md transition-colors disabled:opacity-75 whitespace-nowrap cursor-pointer"
              >
                {locLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                ) : (
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp shrink-0" />
                )}
                <span>{locLoading ? 'Konum Alınıyor...' : 'WhatsApp ile Konum At'}</span>
              </button>
            </div>

            {/* Clean Trust Indicators */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                7/24 Kesintisiz
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                %100 Taşıma Kaskolu
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Sincan & Tüm Ankara
              </span>
            </div>

          </div>

          {/* Right Column: Prominent Real Image Showcase (7 cols on lg - IMAGE IS IN THE FOREGROUND) */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Main Prominent Real Photo Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative aspect-[16/10] sm:aspect-[16/9] group">
                <img
                  src={HERO_IMAGES[activeImgIndex].src}
                  alt={HERO_IMAGES[activeImgIndex].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Subtle, soft vignette on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Minimalist Info Caption on Bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold text-slate-200">{HERO_IMAGES[activeImgIndex].label}</span>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] text-slate-400 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md">
                    Halis Kırtepe Filosu
                  </span>
                </div>
              </div>

              {/* Minimal, elegant thumbnail selector strip */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mt-3">
                {HERO_IMAGES.map((img, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/10] border transition-all cursor-pointer ${
                      activeImgIndex === idx
                        ? 'border-brand-500 ring-2 ring-brand-500/30 opacity-100'
                        : 'border-slate-800/80 opacity-60 hover:opacity-90 hover:border-slate-700'
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
