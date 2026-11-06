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
    <section className="relative pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean & Modern typography */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-5">
            
            {/* Minimal Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300/80 text-slate-800 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Ankara 7/24 Nöbetçi Çekici Hizmeti</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-[1.18]">
              Yolda kaldığınız her an, <br />
              <span className="text-amber-600">Halis Oto Kurtarma</span> yanınızda.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sincan merkezli ekibimizle Ankara genelinde binek, SUV ve ticari araçlarınız için kaskolu, güvenilir ve profesyonel çekici desteği sağlıyoruz.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Hemen Ara: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/905353579525?text=${encodeURIComponent("Merhaba Halis Bey, çekiciye ihtiyacım var yardımcı olur musunuz?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-whatsapp shrink-0" />
                <span>WhatsApp İle Ulaş</span>
              </a>
            </div>

            {/* Clean Trust Indicators */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                7/24 Kesintisiz
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                %100 Taşıma Kaskolu
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                Sincan & Tüm Ankara
              </span>
            </div>

          </div>

          {/* Right Column: Prominent Real Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Main Photo Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative aspect-[16/10] sm:aspect-[16/9] group">
                <img
                  src={HERO_IMAGES[activeImgIndex].src}
                  alt={HERO_IMAGES[activeImgIndex].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Soft bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Minimalist Info Caption on Bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold text-slate-100">{HERO_IMAGES[activeImgIndex].label}</span>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] text-slate-200 bg-slate-900/75 backdrop-blur-md px-2.5 py-1 rounded-md">
                    Halis Kırtepe Filosu
                  </span>
                </div>
              </div>

              {/* Thumbnail selector */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mt-3">
                {HERO_IMAGES.map((img, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all cursor-pointer bg-white ${
                      activeImgIndex === idx
                        ? 'border-amber-500 shadow-md ring-2 ring-amber-500/20 opacity-100'
                        : 'border-slate-200 opacity-60 hover:opacity-90 hover:border-slate-300'
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
