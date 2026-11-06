import React, { useState } from 'react';
import { AlertCircle, BatteryCharging, Disc, Fuel, Car, ShieldAlert, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

const SITUATIONS = [
  {
    id: "ariza",
    title: "Aracım Arızalandı",
    subtitle: "Motor, şanzıman veya mekanik arıza nedeniyle araç yolda kaldı.",
    icon: Car,
    color: "bg-amber-50 text-amber-600 border-amber-200",
    actionNote: "En yakın nöbetçi çekici ekibimizi hemen yönlendirelim.",
    msg: "Merhaba Halis Bey, aracım arızalandı ve yolda kaldım. Çekiciye ihtiyacım var yardımcı olur musunuz?"
  },
  {
    id: "kaza",
    title: "Kaza Yaptım",
    subtitle: "Maddi hasarlı veya yürümeyen kaza yapmış araç kurtarma.",
    icon: ShieldAlert,
    color: "bg-red-50 text-red-600 border-red-200",
    actionNote: "Kaskolu çekici ve gerekiyorsa vinç desteğiyle güvenli kurtarma.",
    msg: "Merhaba Halis Bey, kaza yaptık, çekiciye ihtiyacımız var yardımcı olur musunuz?"
  },
  {
    id: "aku",
    title: "Akü Bitti / Marş Basmıyor",
    subtitle: "Farlar açık kaldı veya akü ömrü bitti, araç marş almıyor.",
    icon: BatteryCharging,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    actionNote: "12V / 24V profesyonel akü takviye cihazı ile yerinde çözüm.",
    msg: "Merhaba Halis Bey, aküm bitti, marş basmıyor. Yol yardım desteği rica ediyorum."
  },
  {
    id: "lastik",
    title: "Lastik Patladı / Stepne Yok",
    subtitle: "Lastik yarıldı veya patladı, bijon açılmıyor ya da stepne bulunmuyor.",
    icon: Disc,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    actionNote: "Yerinde lastik değişimi veya en yakın oto lastikçiye güvenli nakil.",
    msg: "Merhaba Halis Bey, lastiğim patladı yolda kaldım, çekiciye ihtiyacım var."
  },
  {
    id: "yakit",
    title: "Yakıtım Bitti",
    subtitle: "Gösterge yanıltıcı oldu, benzin veya mazot tükendi.",
    icon: Fuel,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    actionNote: "Aracınıza uygun sertifikalı bidonla acil yakıt ulaştırma.",
    msg: "Merhaba Halis Bey, yakıtım bitti ve yolda kaldım. Yol yardımı rica ediyorum."
  },
  {
    id: "luks",
    title: "Hasarsız Araç Taşıma",
    subtitle: "Binek, SUV veya özel araç taşıma.",
    icon: Car,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    actionNote: "Özel çeki ve sabitleme aparatları ile hasarsız nakliye.",
    msg: "Merhaba Halis Bey, aracım için çekici desteği almak istiyorum."
  }
];

export default function QuickNeeds() {
  const [selected, setSelected] = useState(SITUATIONS[0]);

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wide uppercase mb-2">
            Hızlı Çözüm Merkezi
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Şu Anki Durumunuz Nedir?
          </h2>
          <p className="text-slate-700 font-medium text-sm sm:text-base mt-2">
            Aşağıdan yaşadığınız ihtiyacı seçin, size en uygun müdahale ekibini hemen yönlendirelim.
          </p>
        </div>

        {/* Situation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SITUATIONS.map((item) => {
            const Icon = item.icon;
            const isCurrent = selected.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-amber-500 shadow-md shadow-amber-500/10 -translate-y-0.5 ring-2 ring-amber-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950 leading-snug">{item.title}</h3>
                  <span className={`text-xs font-bold block mt-1.5 ${isCurrent ? 'text-amber-700' : 'text-slate-600'}`}>
                    {isCurrent ? 'Seçildi ✓' : 'Detay gör →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Situation Action Box */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-amber-200/80 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-700 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {selected.title} İçin Özel Çözüm
              </div>
              <p className="text-base sm:text-lg font-extrabold text-slate-950">
                {selected.subtitle}
              </p>
              <p className="text-sm font-medium text-slate-700">
                {selected.actionNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(selected.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-whatsapp" />
                <span>WhatsApp İle Bildir</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
