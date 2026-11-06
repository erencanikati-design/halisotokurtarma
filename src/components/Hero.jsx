import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, Zap, Star, Navigation, Loader2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';
import { sendWhatsAppWithLocation } from '../utils/whatsapp';

const HERO_IMAGES = [
  { src: '/images/arac-1.jpeg', tag: 'Sincan Nöbetçi Çekici' },
  { src: '/images/arac-2.jpeg', tag: 'Şehirler Arası Taşıma' },
  { src: '/images/arac-3.jpeg', tag: 'Kaza & Vinçli Kurtarma' },
  { src: '/images/arac-5.jpeg', tag: 'Gece 7/24 Yol Yardım' },
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
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative road stripes pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Ankara Geneli Nöbetçi Çekici Araçlarımız Hazır</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-300 hidden sm:inline">15-30 Dk Varış</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Yolda mı Kaldınız? <br />
              <span className="bg-gradient-to-r from-brand-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Halis Oto Kurtarma
              </span>{' '}
              <br className="hidden sm:inline" />
              7/24 Yanınızda!
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sincan merkezli ekibimiz ve kendi özel kurtarma filomuzla <strong className="text-white font-semibold">Ankara’nın tüm ilçelerine</strong> en hızlı, %100 kaskolu ve sigortalı oto çekici ve yol yardım hizmeti veriyoruz.
            </p>

            {/* Key Emergency Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emergency-600 via-red-600 to-rose-600 hover:from-emergency-500 hover:to-rose-500 text-white font-black text-lg shadow-xl shadow-emergency-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 beacon-red group cursor-pointer"
              >
                <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-amber-200 uppercase tracking-wider">Acil Çekici Çağır</div>
                  <div className="text-xl font-black leading-none">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <button
                type="button"
                onClick={handleHeroWhatsApp}
                disabled={locLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-black text-base shadow-xl shadow-whatsapp/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer disabled:opacity-75"
              >
                <div className="p-2 bg-slate-950/15 rounded-lg group-hover:scale-110 transition-transform relative">
                  {locLoading ? (
                    <Loader2 className="w-6 h-6 text-slate-950 animate-spin" />
                  ) : (
                    <>
                      <MessageCircle className="w-6 h-6 fill-slate-950 text-whatsapp" />
                      <Navigation className="w-3 h-3 absolute -top-1 -right-1 text-slate-950 animate-pulse" />
                    </>
                  )}
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-slate-900/80 uppercase">
                    {locLoading ? 'Konum Alınıyor...' : 'Tek Tıkla'}
                  </div>
                  <div className="text-base font-black">
                    {locLoading ? 'WhatsApp Açılıyor...' : 'WhatsApp Konum At'}
                  </div>
                </div>
              </button>
            </div>

            {/* Fast Feature Bullets */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Ortalama 15-30 Dk</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>%100 Taşıma Kaskolu</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tüm Ankara İlçeleri</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Fleet Showcase & Live Dispatch Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Real Recovery Vehicle Photo */}
              <div className="rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950 border border-slate-800 p-4 sm:p-5 shadow-2xl relative overflow-hidden">
                
                {/* Photo Header Showcase */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 group">
                  <img
                    src={HERO_IMAGES[activeImgIndex].src}
                    alt={HERO_IMAGES[activeImgIndex].tag}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Status Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      Canlı Görevde
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-brand-500 text-slate-950 text-xs font-black shadow-md">
                      7/24 AKTİF
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider block">
                        Gerçek Filomuzdan
                      </span>
                      <h3 className="text-base font-black text-white drop-shadow">
                        {HERO_IMAGES[activeImgIndex].tag}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Thumbnails to switch hero vehicle */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {HERO_IMAGES.map((img, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-[4/3] border transition-all ${
                        activeImgIndex === idx
                          ? 'border-brand-500 ring-2 ring-brand-500/40 scale-105'
                          : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                      }`}
                    >
                      <img src={img.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Live Dispatch Info */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                      <img
                        src={COMPANY_INFO.logoUrl}
                        alt="Logo"
                        className="w-8 h-8 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Halis Kırtepe</p>
                      <p className="text-[11px] text-slate-400">Pınarbaşı Mah. Sincan</p>
                    </div>
                  </div>

                  <a
                    href={COMPANY_INFO.telLink}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hemen Bağlan</span>
                  </a>
                </div>

              </div>

              {/* Floating review chip */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-slate-900/95 border border-slate-800 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white">1000+ Başarılı</span>
                  <span className="text-slate-400 block text-[10px]">Oto Kurtarma Görevi</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
