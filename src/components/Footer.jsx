import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ANKARA_DISTRICTS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-28 md:pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2a2 2 0 0 0 4 0h6a2 2 0 0 0 4 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14M7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white block">{COMPANY_INFO.name}</span>
                <span className="text-[11px] font-semibold text-brand-400 block -mt-0.5">Yetkili: {COMPANY_INFO.owner}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Sincan merkezli operasyonumuzla Ankara genelinde 7/24 kaskolu oto kurtarma, çekici, akü takviye ve acil yol yardım hizmetleri sunuyoruz. 15-30 dakikada yanınızdayız.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                {COMPANY_INFO.address}
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                7 Gün 24 Saat Kesintisiz Nöbetçi
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                0535 357 95 25
              </span>
            </div>
          </div>

          {/* Quick links & services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#hizmetler" className="hover:text-brand-400 transition-colors flex items-center gap-1.5">
                    <span className="text-brand-500">›</span> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular districts for SEO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hizmet Noktaları</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {ANKARA_DISTRICTS.slice(0, 12).map((d) => (
                <span key={d.name} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {d.name} Çekici
                </span>
              ))}
            </div>
          </div>

          {/* Emergency action (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Acil Durum</h4>
            <div className="space-y-2">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-xs shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                Hemen Ara
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-xs shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                WhatsApp
              </a>
            </div>
            <div className="text-[11px] text-slate-500 text-center pt-2">
              Ortalama varış süresi 15-30 dakikadır.
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.owner}). Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-4">
            <span>Sincan / Ankara</span>
            <span>•</span>
            <span>7/24 Acil Yol Yardım & Çekici</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
