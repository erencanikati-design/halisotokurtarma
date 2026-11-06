import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, Zap, Star, Navigation, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';
import { sendWhatsAppWithLocation } from '../utils/whatsapp';

export default function Hero() {
  const [locLoading, setLocLoading] = useState(false);

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
              Sincan merkezli ekibimizle <strong className="text-white font-semibold">Ankara’nın tüm ilçelerine</strong> en hızlı, kaskolu ve sigortalı oto çekici ve acil yol yardım hizmeti sunuyoruz. Güvenli taşıma, uygun ve şeffaf fiyat garantisi.
            </p>

            {/* Key Emergency Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emergency-600 via-red-600 to-rose-600 hover:from-emergency-500 hover:to-rose-500 text-white font-black text-lg shadow-xl shadow-emergency-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 beacon-red group"
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

          {/* Right Column: Hero Visual & Live Emergency Dispatch Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Glassmorphism */}
              <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Status Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <h2 className="text-sm font-bold text-white uppercase tracking-wider">Canlı Operasyon Durumu</h2>
                      <p className="text-xs text-slate-400">Ankara Geneli Çekiciler Göreve Hazır</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-brand-500/20 text-brand-400 text-xs font-bold border border-brand-500/30">
                    7/24 NÖBETÇİ
                  </span>
                </div>

                {/* Key Dispatch Highlights */}
                <div className="py-5 space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 mt-0.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Anında Koordinasyon & Yönlendirme</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Konumunuzu aldığımız an size en yakın mesafedeki kayar kasa çekicimiz hemen hareket eder.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Halis Kırtepe Güvencesi</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Pınarbaşı Mah. Sincan merkezimizden 10 yılı aşkın oto kurtarma tecrübesiyle hasarsız nakliye.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Star className="w-5 h-5 fill-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">4.9 / 5 Müşteri Memnuniyeti</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Güler yüzlü hizmet, şeffaf fiyat ve hızlı destekle binlerce kurtarılmış sürücü.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Emergency Call Bar inside card */}
                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.telLink}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] text-slate-400">Çağrı Merkezi / Cep</div>
                        <div className="text-sm font-bold text-white">{COMPANY_INFO.phone}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-400 group-hover:translate-x-1 transition-transform">
                      Hemen Bağlan →
                    </span>
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

