import React, { useState } from 'react';
import { MapPin, Search, Clock, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { ANKARA_DISTRICTS, COMPANY_INFO } from '../data/constants';

export default function CoverageAreas() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = ANKARA_DISTRICTS.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="bolgeler" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            Hizmet Ağımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Ankara'nın Tüm İlçelerinde Yanınızdayız
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Merkez üssümüz <strong className="text-slate-950 font-extrabold">Sincan</strong> başta olmak üzere, Ankara'nın 25 ilçesine, çevre yollarına ve otoyollara anında nöbetçi çekici yönlendiriyoruz.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="İlçenizi arayın (Örn: Sincan, Etimesgut, Batıkent...)"
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:bg-white focus:border-amber-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredDistricts.map((d) => (
            <div
              key={d.name}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                d.central
                  ? 'bg-white border-slate-200/90 hover:border-amber-400'
                  : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${d.central ? 'text-amber-600' : 'text-slate-500'}`} />
                    <h3 className="font-extrabold text-base text-slate-950">{d.name}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {d.status || 'Nöbetçi Bölge'}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 mb-4 leading-relaxed">{d.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/905353579525?text=${encodeURIComponent(`Merhaba Halis Bey çekiciye ihtiyacım var ve ${d.name} bölgesindeyim yardımcı olur musunuz?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>Mesaj Gönder</span>
                </a>

                <a
                  href={COMPANY_INFO.telLink}
                  className="text-xs font-bold text-slate-800 hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hemen Ara</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Not in list note */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-slate-700">
            Aradığınız bölgeyi göremediniz mi? Hiç sorun değil! Ankara çevre otoyolları ve tüm köyler dahil 
            <a href={COMPANY_INFO.telLink} className="text-amber-700 font-extrabold ml-1 hover:underline">
              0535 357 95 25
            </a> numaralı hattımızdan 7/24 çekici çağırabilirsiniz.
          </p>
        </div>

      </div>
    </section>
  );
}

