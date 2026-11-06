import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/constants';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="sss" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" /> Merak Edilenler
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Oto kurtarma, çekici ve yol yardım hizmetlerimiz hakkında en çok sorulan soruların yanıtları.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-base sm:text-lg hover:text-brand-300 transition-colors gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-400' : 'text-slate-500'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-slate-300 text-sm">
            Başka bir sorunuz veya acil bir durumunuz mu var?
          </p>
          <a
            href={COMPANY_INFO.telLink}
            className="inline-flex items-center gap-2 text-brand-400 font-bold text-sm mt-2 hover:underline"
          >
            <Phone className="w-4 h-4" />
            Hemen Halis Bey ile Görüşün: {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}

