import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ANKARA_DISTRICTS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-28 md:pb-12 text-slate-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Halis Oto Kurtarma Logo"
                className="h-12 w-auto object-contain drop-shadow"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div>
                <span className="text-xl font-black text-slate-950 block">{COMPANY_INFO.name}</span>
                <span className="text-[11px] font-extrabold text-amber-700 block -mt-0.5">Yetkili: {COMPANY_INFO.owner}</span>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Sincan merkezli operasyonumuzla Ankara genelinde 7/24 kaskolu oto kurtarma, çekici, akü takviye ve acil yol yardım hizmetleri sunuyoruz.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-semibold">
              <span className="flex items-center gap-2 text-slate-800">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                {COMPANY_INFO.address}
              </span>
              <a href={COMPANY_INFO.emailLink} className="flex items-center gap-2 text-slate-800 hover:text-amber-700 transition-colors">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                {COMPANY_INFO.email}
              </a>
              <span className="flex items-center gap-2 text-slate-800">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                7 Gün 24 Saat Kesintisiz Nöbetçi
              </span>
              <a href={COMPANY_INFO.telLink} className="flex items-center gap-2 text-slate-900 font-bold hover:text-red-600 transition-colors">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick links & services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#hizmetler" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-600 font-bold">›</span> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular districts for SEO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Hizmet Noktaları</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
              {ANKARA_DISTRICTS.slice(0, 12).map((d) => (
                <span key={d.name} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 shadow-xs">
                  {d.name} Çekici
                </span>
              ))}
            </div>
          </div>

          {/* Emergency action (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider">Acil Durum</h4>
            <div className="space-y-2">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Hemen Ara
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-whatsapp" />
                WhatsApp
              </a>
            </div>
            <div className="text-[11px] font-semibold text-slate-600 text-center pt-2">
              7/24 Kesintisiz Nöbetçi Çekici Hizmeti
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-600 gap-4">
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

