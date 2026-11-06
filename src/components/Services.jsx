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
  MessageCircle,
  ArrowRight
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
    <section id="hizmetler" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            Profesyonel Çözümler
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Oto Kurtarma & Yol Yardım Hizmetlerimiz
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Ankara genelinde her türlü araç segmenti için son model kayar kasa platformlarımız ve uzman ekibimizle 7/24 hizmetinizdeyiz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Truck;
            return (
              <div
                key={srv.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Tag and Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <a
                    href={COMPANY_INFO.telLink}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-emergency-600 hover:text-white text-slate-200 text-xs font-bold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Ara</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(`${srv.title} hizmeti hakkında bilgi ve çekici talep etmek istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-whatsapp/15 hover:bg-whatsapp text-whatsapp hover:text-slate-950 text-xs font-bold transition-all border border-whatsapp/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-600/15 via-slate-900 to-brand-600/15 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Aracınızın Durumu Özel mi? (Alçak Şasi, Elektrikli vb.)</h4>
            <p className="text-slate-400 text-sm mt-1">Özel donanımlı platform ve koruyucu aparatlarımızla aracınıza en ufak zarar vermeden taşıyoruz.</p>
          </div>
          <a
            href={COMPANY_INFO.telLink}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-sm shadow-lg shadow-brand-500/20 transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>0535 357 95 25 Danışın</span>
          </a>
        </div>

      </div>
    </section>
  );
}
