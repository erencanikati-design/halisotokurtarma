import React from 'react';
import { 
  Truck, 
  Wrench, 
  AlertTriangle, 
  Navigation, 
  Bike, 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  MessageCircle
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/constants';

const ICON_MAP = {
  Truck,
  Wrench,
  AlertTriangle,
  Navigation,
  Bike,
  ShieldAlert
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            Profesyonel Çözümler
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Oto Kurtarma & Yol Yardım Hizmetlerimiz
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Ankara genelinde binek, SUV ve ticari araçlarınız için tam donanımlı kurtarıcı filomuz ve uzman ekibimizle 7/24 hizmetinizdeyiz.
          </p>
        </div>

        {/* Services Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Truck;
            return (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 group overflow-hidden"
              >
                {/* Real Photo Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Tag */}
                  <span className="absolute top-3 right-3 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-amber-900 shadow-sm border border-slate-200">
                    {srv.tag}
                  </span>

                  {/* Icon badge floating on edge */}
                  <div className="absolute -bottom-4 left-6 w-11 h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 pt-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Title & Desc */}
                    <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors mb-2.5">
                      {srv.title}
                    </h3>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={COMPANY_INFO.telLink}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-800 text-xs font-bold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Ara</span>
                    </a>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(`${srv.title} hizmeti hakkında bilgi ve çekici talep etmek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-whatsapp text-emerald-700 hover:text-white text-xs font-bold transition-all border border-emerald-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-slate-50 to-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Aracınızın Durumu Özel mi?</h4>
            <p className="text-slate-600 text-sm mt-1">Özel sabitleme ve koruyucu aparatlarımızla aracınıza en ufak zarar vermeden taşıyoruz.</p>
          </div>
          <a
            href={COMPANY_INFO.telLink}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-sm transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>0535 357 95 25 Danışın</span>
          </a>
        </div>

      </div>
    </section>
  );
}
