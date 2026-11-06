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
    <section id="bolgeler" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            Hizmet Ağımız
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Ankara'nın Tüm İlçelerinde Yanınızdayız
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Merkez üssümüz <strong>Sincan</strong> başta olmak üzere, Ankara'nın 25 ilçesine, çevre yollarına ve otoyollara anında nöbetçi çekici yönlendiriyoruz.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="İlçenizi arayın (Örn: Sincan, Etimesgut, Batıkent...)"
              className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 shadow-inner"
            />
          </div>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredDistricts.map((d) => (
            <div
              key={d.name}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                d.central
                  ? 'bg-slate-900/90 border-slate-800 hover:border-brand-500/50'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${d.central ? 'text-brand-400' : 'text-slate-500'}`} />
                    <h3 className="font-bold text-base text-white">{d.name}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <Clock className="w-3 h-3" />
                    {d.time}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{d.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(`Merhaba Halis Bey, ${d.name} bölgesindeyim. Çekiciye ihtiyacım var yardımcı olur musunuz?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-whatsapp hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-whatsapp" />
                  Konum At
                </a>

                <a
                  href={COMPANY_INFO.telLink}
                  className="text-xs font-semibold text-slate-300 hover:text-brand-400 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Hemen Ara
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Not in list note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Aradığınız bölgeyi göremediniz mi? Hiç sorun değil! Ankara çevre otoyolları ve tüm köyler dahil 
            <a href={COMPANY_INFO.telLink} className="text-brand-400 font-bold ml-1 hover:underline">
              0535 357 95 25
            </a> numaralı hattımızdan 7/24 çekici çağırabilirsiniz.
          </p>
        </div>

      </div>
    </section>
  );
}
