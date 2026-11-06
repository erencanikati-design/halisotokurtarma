import React from 'react';
import { PhoneCall, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

const STEPS = [
  {
    num: "01",
    title: "Arayın veya Konum Atın",
    desc: "0535 357 95 25 numaralı acil hattımızı arayın veya sitemizdeki yeşil butonla WhatsApp üzerinden tek tıkla konumunuzu iletin.",
    icon: PhoneCall,
    badge: "1. Adım • Hızlı İletişim"
  },
  {
    num: "02",
    title: "En Yakın Çekici Yola Çıksın",
    desc: "Ankara'da size en yakın nöbetçi çekici aracımız anında rotasını belirler ve en hızlı şekilde yanınıza ulaşır.",
    icon: Navigation,
    badge: "2. Adım • Seri İntikal"
  },
  {
    num: "03",
    title: "Güvenli ve Kaskolu Teslimat",
    desc: "Aracınız çekici platformumuza sıfır hasar prensibiyle titizlikle yüklenir ve dilediğiniz yetkili servise veya adrese güvenle teslim edilir.",
    icon: ShieldCheck,
    badge: "3. Adım • %100 Güven"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            Kolay Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            3 Kolay Adımda Yolda Kalmaktan Kurtulun
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Yolda kaldığınızda panik yapmanıza gerek yok. Halis Oto Kurtarma yanınızda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-2xl bg-white border border-slate-200/90 p-8 relative flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 group"
              >
                {/* Step big number */}
                <span className="text-6xl font-black text-slate-100 group-hover:text-amber-500/15 transition-colors absolute top-4 right-6 pointer-events-none">
                  {step.num}
                </span>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="inline-block text-xs font-extrabold text-amber-700 tracking-wider uppercase mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-950 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1 group-hover:text-amber-700 transition-colors">
                    Halis Kırtepe Güvencesiyle <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

