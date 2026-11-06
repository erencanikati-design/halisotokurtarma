import React, { useState } from 'react';
import { AlertCircle, BatteryCharging, Disc, Fuel, Car, ShieldAlert, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

const SITUATIONS = [
  {
    id: "ariza",
    title: "Aracım Arızalandı",
    subtitle: "Motor, şanzıman veya mekanik arıza nedeniyle araç yolda kaldı.",
    icon: Car,
    color: "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30",
    actionNote: "En yakın nöbetçi çekici ekibimizi hemen yönlendirelim.",
    msg: "Merhaba Halis Bey, aracım arızalandı ve yolda kaldım. Çekiciye ihtiyacım var yardımcı olur musunuz?"
  },
  {
    id: "kaza",
    title: "Kaza Yaptım",
    subtitle: "Maddi hasarlı veya yürümeyen kaza yapmış araç kurtarma.",
    icon: ShieldAlert,
    color: "from-red-500/20 to-red-600/10 text-red-400 border-red-500/30",
    actionNote: "Kaskolu çekici ve gerekiyorsa vinç desteğiyle güvenli kurtarma.",
    msg: "Merhaba Halis Bey, kaza yaptık, çekiciye ihtiyacımız var yardımcı olur musunuz?"
  },
  {
    id: "aku",
    title: "Akü Bitti / Marş Basmıyor",
    subtitle: "Farlar açık kaldı veya akü ömrü bitti, araç marş almıyor.",
    icon: BatteryCharging,
    color: "from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30",
    actionNote: "12V / 24V profesyonel akü takviye cihazı ile yerinde çözüm.",
    msg: "Merhaba Halis Bey, aküm bitti, marş basmıyor. Yol yardım desteği rica ediyorum."
  },
  {
    id: "lastik",
    title: "Lastik Patladı / Stepne Yok",
    subtitle: "Lastik yarıldı veya patladı, bijon açılmıyor ya da stepne bulunmuyor.",
    icon: Disc,
    color: "from-orange-500/20 to-orange-600/10 text-orange-400 border-orange-500/30",
    actionNote: "Yerinde lastik değişimi veya en yakın oto lastikçiye güvenli nakil.",
    msg: "Merhaba Halis Bey, lastiğim patladı yolda kaldım, çekiciye ihtiyacım var."
  },
  {
    id: "yakit",
    title: "Yakıtım Bitti",
    subtitle: "Gösterge yanıltıcı oldu, benzin veya mazot tükendi.",
    icon: Fuel,
    color: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30",
    actionNote: "Aracınıza uygun sertifikalı bidonla acil yakıt ulaştırma.",
    msg: "Merhaba Halis Bey, yakıtım bitti ve yolda kaldım. Yol yardımı rica ediyorum."
  },
  {
    id: "luks",
    title: "Lüks & Alçak Şasi Araç",
    subtitle: "Spor otomobil, alçak şasili veya özel araç taşıma.",
    icon: Car,
    color: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30",
    actionNote: "Sıfır eğim platform ve özel sabitleme aparatları ile hasarsız nakliye.",
    msg: "Merhaba Halis Bey, alçak şasili / özel aracım için çekici desteği almak istiyorum."
  }
];

export default function QuickNeeds() {
  const [selected, setSelected] = useState(SITUATIONS[0]);

  return (
    <section className="py-12 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-brand-400 text-xs font-bold tracking-wide uppercase mb-3">
            Hızlı Çözüm Merkezi
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Şu Anki Durumunuz Nedir?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Aşağıdan yaşadığınız arıza veya ihtiyacı seçin, size en uygun müdahale ekibini hemen yönlendirelim.
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
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-800 border-brand-500 shadow-lg shadow-brand-500/10 -translate-y-1'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 border ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                  <span className={`text-[11px] font-medium block mt-1 ${isCurrent ? 'text-brand-400' : 'text-slate-400'}`}>
                    {isCurrent ? 'Seçildi ✓' : 'Detay gör →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Situation Action Box */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-brand-500/30 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                {selected.title} İçin Özel Çözüm
              </div>
              <p className="text-lg font-bold text-white">
                {selected.subtitle}
              </p>
              <p className="text-sm text-slate-300">
                {selected.actionNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={COMPANY_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-lg transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(selected.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm shadow-md transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-whatsapp" />
                <span>WhatsApp İle Bildir</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

