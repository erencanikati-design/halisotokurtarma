import React, { useState } from 'react';
import { BadgePercent, Car, Truck, Bike, ShieldCheck, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, ANKARA_DISTRICTS } from '../data/constants';

const VEHICLE_TYPES = [
  { id: 'binek', name: 'Binek Otomobil', icon: Car },
  { id: 'suv', name: 'SUV / Crossover', icon: Car },
  { id: 'ticari', name: 'Hafif Ticari / Minibüs', icon: Truck },
  { id: 'motor', name: 'Motosiklet', icon: Bike },
];

export default function Calculator() {
  const [vehicle, setVehicle] = useState('binek');
  const [fromDistrict, setFromDistrict] = useState('Sincan');
  const [toDistrict, setToDistrict] = useState('Etimesgut');
  const [wheelLocked, setWheelLocked] = useState(false);
  const [isAccident, setIsAccident] = useState(false);

  const selectedVehicleName = VEHICLE_TYPES.find(v => v.id === vehicle)?.name || 'Araç';

  const generatedWhatsAppMessage = `Merhaba Halis Bey, ${fromDistrict} bölgesinden ${toDistrict} bölgesine ${selectedVehicleName} aracım için net fiyat teklifi almak istiyorum. Tekerlek durumu: ${wheelLocked ? 'Kilitli/Yürümüyor' : 'Dönüyor'}${isAccident ? ' (Hasarlı/Kaza)' : ''}. Yardımcı olur musunuz?`;

  return (
    <section id="hesapla" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            <BadgePercent className="w-3.5 h-3.5" /> Şeffaf Fiyat Garantisi
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Hızlı Fiyat & Çekici Teklifi Alın
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Aracınızın türünü ve güzergahınızı belirleyin; hiçbir sürpriz masraf olmadan en uygun net fiyatı hemen öğrenin.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Inputs (Left: 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Vehicle Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. Araç Tipini Seçin
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {VEHICLE_TYPES.map((v) => {
                    const Icon = v.icon;
                    const active = vehicle === v.id;
                    return (
                      <button
                        type="button"
                        key={v.id}
                        onClick={() => setVehicle(v.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                          active
                            ? 'bg-brand-500/15 border-brand-500 text-white shadow-sm'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${active ? 'bg-brand-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{v.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* District Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Nereden? (Bulunduğunuz İlçe)
                  </label>
                  <select
                    value={fromDistrict}
                    onChange={(e) => setFromDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    {ANKARA_DISTRICTS.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name} {d.central ? '(Merkez)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Nereye? (Gidilecek İlçe / Servis)
                  </label>
                  <select
                    value={toDistrict}
                    onChange={(e) => setToDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    {ANKARA_DISTRICTS.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name} {d.central ? '(Merkez)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Conditions */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  Özel Durumlar (Varsa İşaretleyin)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={wheelLocked}
                      onChange={(e) => setWheelLocked(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-500 focus:ring-brand-400 bg-slate-800 border-slate-700"
                    />
                    <span className="text-xs sm:text-sm text-slate-200">
                      Tekerlek kilitli / Araç yürümüyor (Özel aparat gerekir)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={isAccident}
                      onChange={(e) => setIsAccident(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-500 focus:ring-brand-400 bg-slate-800 border-slate-700"
                    />
                    <span className="text-xs sm:text-sm text-slate-200">
                      Araç şarampolde, çukurda veya hasarlı
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Quote Action Box (Right: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teklif Özeti</span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    Sürpriz Masraf Yok
                  </span>
                </div>

                {/* Selected Details */}
                <div className="py-5 space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Güzergah:</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      {fromDistrict} <ArrowRight className="w-3 h-3 text-brand-400" /> {toDistrict}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Araç Tipi:</span>
                    <span className="font-bold text-white">{selectedVehicleName}</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Özel Durum:</span>
                    <span className="font-semibold text-amber-300">
                      {wheelLocked || isAccident ? 'Özel Ekipman Gerekli' : 'Standart Taşıma'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-slate-400">Sigorta Güvencesi:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> %100 Kaskolu
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/20 mb-6 text-xs text-brand-300 leading-relaxed">
                  💡 Telefonda veya WhatsApp'ta ne fiyat konuşulduysa o geçerlidir. Ekstra gizli ücret talep edilmez.
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-2 pt-2">
                <a
                  href={COMPANY_INFO.telLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-lg shadow-emergency-600/30 transition-transform active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Net Fiyat İçin Hemen Ara</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(generatedWhatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp" />
                  <span>WhatsApp'tan Net Fiyat İste</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
