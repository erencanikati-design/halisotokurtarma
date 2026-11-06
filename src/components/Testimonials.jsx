import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Sürücüler Bizim İçin Ne Diyor?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Ankara genelinde zor anında yanlarında olduğumuz mutlu müşterilerimizin gerçek yorumları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-brand-500/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-xs text-brand-400 font-medium">{item.district}</div>
                <div className="text-[11px] text-slate-500 mt-1 flex justify-between items-center">
                  <span>{item.car}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 shadow-md">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span className="text-amber-400 text-base">★</span> 4.9 / 5.0
            </span>
            <span className="text-slate-600">|</span>
            <span>Google ve Yerel Müşteri Değerlendirmeleri Ortalaması</span>
          </div>
        </div>

      </div>
    </section>
  );
}
