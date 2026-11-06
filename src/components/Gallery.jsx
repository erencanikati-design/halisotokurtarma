import React, { useState } from 'react';
import { Camera, X, ZoomIn, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES, COMPANY_INFO } from '../data/constants';

const CATEGORIES = ["Tümü", "Oto Çekici", "Kurtarma", "Taşıma", "7/24 Acil", "Filo"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredPhotos = selectedCategory === "Tümü"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="galeri" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5" /> Gerçek Operasyonlarımız
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Araç Filomuz & Sahadaki Çalışmalarımız
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Halis Oto Kurtarma olarak Ankara genelinde binek, SUV ve ticari araçlar için gerçekleştirdiğimiz kurtarma ve nakliye operasyonlarından kareler.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 hover:border-brand-500/50 cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-brand-400 text-[11px] font-bold border border-brand-500/30">
                  {photo.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-300 transition-colors leading-tight">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Aracınızın taşınması için profesyonel çekici mi arıyorsunuz?
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href={COMPANY_INFO.telLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-lg transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Çekici Çağır: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-brand-500 hover:text-slate-950 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-brand-500 hover:text-slate-950 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Full Image */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activePhoto.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activePhoto.desc}</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={COMPANY_INFO.telLink}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hemen Ara</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(`Merhaba Halis Bey, fotoğraftaki ${activePhoto.title} operasyonunuza benzer bir çekici hizmetine ihtiyacım var.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp text-slate-950 font-bold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
