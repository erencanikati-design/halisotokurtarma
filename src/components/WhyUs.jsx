import React from 'react';
import { Clock, ShieldCheck, BadgePercent, Truck, PhoneCall, Award } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/constants';

const ICON_MAP = {
  Clock,
  ShieldCheck,
  BadgePercent,
  Truck,
  PhoneCall,
  Award,
};

export default function WhyUs() {
  return (
    <section id="neden-biz" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            Güven & Kalite
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Neden Halis Oto Kurtarma?
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Sürücülerin en zor anında yanında olan, güvenilir, hızlı ve kurumsal yol yardım partneriniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Assurance Stat Bar */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-50/90 via-white to-amber-50/90 border border-amber-200/90 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-600">10+ Yıl</div>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-bold">Sektörel Tecrübe</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-950">Ankara</div>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-bold">Tüm İlçeler & Otoyollar</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">%100</div>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-bold">Kaskolu Güvenli Taşıma</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-600">7 / 24</div>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-bold">Kesintisiz Nöbetçi Destek</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

