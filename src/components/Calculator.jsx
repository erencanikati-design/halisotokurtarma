import React, { useState } from 'react';
import { Calculator as CalcIcon, Car, Truck, Bike, ShieldCheck, Phone, MessageCircle, Info } from 'lucide-react';
import { COMPANY_INFO, ANKARA_DISTRICTS } from '../data/constants';

const VEHICLE_TYPES = [
  { id: 'binek', name: 'Binek Otomobil', icon: Car, basePrice: 800 },
  { id: 'suv', name: 'SUV / Crossover', icon: Car, basePrice: 950 },
  { id: 'ticari', name: 'Hafif Ticari / Minibüs', icon: Truck, basePrice: 1200 },
  { id: 'motor', name: 'Motosiklet', icon: Bike, basePrice: 700 },
];

export default function Calculator() {
  const [vehicle, setVehicle] = useState('binek');
  const [fromDistrict, setFromDistrict] = useState('Sincan');
  const [toDistrict, setToDistrict] = useState('Etimesgut');
  const [wheelLocked, setWheelLocked] = useState(false);
  const [isAccident, setIsAccident] = useState(false);

  // Simple realistic estimation logic
  const calculateEstimate = () => {
    const selectedVeh = VEHICLE_TYPES.find(v => v.id === vehicle);
    let base = selectedVeh ? selectedVeh.basePrice : 800;
    
    // distance factor approximation based on same vs different district
    let distanceCharge = 0;
    if (fromDistrict === toDistrict) {
      distanceCharge = 150;
    } else {
      distanceCharge = 450;
    }

    if (wheelLocked) distanceCharge += 250;
    if (isAccident) distanceCharge += 300;

    const min = base + distanceCharge;
    const max = min + 250;

    return { min, max };
  };

  const estimate = calculateEstimate();

  const generatedWhatsAppMessage = `Merhaba Halis Bey, ${fromDistrict} ilçesinden ${toDistrict} ilçesine ${
    VEHICLE_TYPES.find(v => v.id === vehicle)?.name
  } aracım için çekici fiyatı almak istiyorum. Tekerlek durumu: ${wheelLocked ? 'Kilitli' : 'Dönüyor'}. Yardımcı olur musunuz?`;

  return (
    <section id="hesapla" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            <CalcIcon className="w-3.5 h-3.5" /> Şeffaf Fiyat Politikası
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Tahmini Çekici Ücreti Hesapla
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Aracınızın türünü ve güzergahınızı seçerek yaklaşık ücret aralığını görebilir, net fiyat için bizi hemen arayabilirsiniz.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Inputs (Left) */}
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
                      Araç şarampolde, çukurda veya ağır hasarlı
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Estimate Result Box (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tahmini Hesaplama</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    Şeffaf Tarife
                  </span>
                </div>

                <div className="py-6 text-center">
                  <span className="text-xs text-slate-400 block mb-1">Ortalama Fiyat Aralığı</span>
                  <div className="text-3xl sm:text-4xl font-black text-brand-400">
                    ₺{estimate.min.toLocaleString('tr-TR')} - ₺{estimate.max.toLocaleString('tr-TR')}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-2">
                    *Mesafe ve yol durumuna göre değişebilir.
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Güzergah:</span>
                    <span className="font-semibold text-white">{fromDistrict} → {toDistrict}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Araç:</span>
                    <span className="font-semibold text-white">{VEHICLE_TYPES.find(v => v.id === vehicle)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sigorta Güvencesi:</span>
                    <span className="font-semibold text-emerald-400">%100 Kaskolu</span>
                  </div>
                </div>
              </div>

              {/* Direct Action for this quote */}
              <div className="space-y-2 pt-2">
                <a
                  href={COMPANY_INFO.telLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-lg shadow-emergency-600/30 transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Net Fiyat İçin Hemen Ara</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(generatedWhatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm shadow-md transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp" />
                  <span>WhatsApp'tan Teklif Al</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
