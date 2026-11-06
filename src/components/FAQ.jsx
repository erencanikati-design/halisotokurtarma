import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/constants';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="sss" className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" /> Merak Edilenler
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Oto kurtarma, çekici ve yol yardım hizmetlerimiz hakkında en çok sorulan soruların yanıtları.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-950 font-extrabold text-base sm:text-lg hover:text-amber-600 transition-colors gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-slate-700 font-medium text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <p className="text-slate-700 font-semibold text-sm">
            Başka bir sorunuz veya acil bir durumunuz mu var?
          </p>
          <a
            href={COMPANY_INFO.telLink}
            className="inline-flex items-center gap-2 text-amber-700 font-extrabold text-sm mt-2 hover:underline"
          >
            <Phone className="w-4 h-4" />
            Hemen Halis Bey ile Görüşün: {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}

