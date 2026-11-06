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
    <section id="neden-biz" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            Güven & Kalite
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Neden Halis Oto Kurtarma?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Sürücülerin en zor anında yanında olan, güvenilir, hızlı ve kurumsal yol yardım partneriniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-brand-500/40 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Assurance Stat Bar */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700/60">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-brand-400">10+ Yıl</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Sektörel Tecrübe</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-white">15-30 Dk</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Ortalama İntikal Süresi</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">%100</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Kaskolu Güvenli Taşıma</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">7 / 24</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Kesintisiz Nöbetçi Destek</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
