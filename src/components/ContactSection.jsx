import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, User, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, ANKARA_DISTRICTS } from '../data/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Sincan',
    problem: 'Oto Çekici İhtiyacı',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Merhaba Halis Bey, web sitenizden form dolduruyorum.%0A*Ad:* ${formData.name}%0A*Telefon:* ${formData.phone}%0A*Konum/İlçe:* ${formData.district}%0A*Hizmet:* ${formData.problem}%0A*Not:* ${formData.note || 'Acil çekici rica ediyorum.'}%0AÇEKİCİYE İHTİYACIM VAR YARDIMCI OLUR MUSUNUZ?`;
    window.open(`https://wa.me/${COMPANY_INFO.rawPhone}?text=${msg}`, '_blank');
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase">
            7/24 İletişim & Konum
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Bize Ulaşın, Hemen Yola Çıkalım
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Sincan merkez üssümüzden Ankara'nın her noktasına bir telefon veya tek tıkla WhatsApp kadar yakınız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-7 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                  İşletme Sahibi
                </span>
                <div className="flex items-center gap-2 text-xl font-black text-white">
                  <User className="w-5 h-5 text-brand-400" />
                  <span>{COMPANY_INFO.owner}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Halis Oto Kurtarma & Yol Yardım Hizmetleri</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emergency-600/20 border border-emergency-500/40 flex items-center justify-center text-emergency-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">7/24 Acil Çağrı Telefonu</span>
                    <a
                      href={COMPANY_INFO.telLink}
                      className="text-lg font-black text-white hover:text-brand-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-whatsapp/20 border border-whatsapp/40 flex items-center justify-center text-whatsapp shrink-0">
                    <MessageCircle className="w-5 h-5 fill-whatsapp" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">WhatsApp Konum & Destek Hattı</span>
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-whatsapp hover:underline"
                    >
                      Konum Gönder (0535 357 95 25)
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Adres / Merkez Garaj</span>
                    <p className="text-sm font-semibold text-slate-200">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Çalışma Saatleri</span>
                    <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      7 Gün 24 Saat Kesintisiz Açık
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Direct CTA Button */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-black text-sm shadow-lg shadow-whatsapp/20 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Tek Tıkla WhatsApp Mesajı Gönder</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-64 relative bg-slate-950">
              <iframe
                title="Halis Oto Kurtarma Sincan Ankara Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12228.694665406734!2d32.5701889!3d39.9654167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33932824ff7ab%3A0xe54d89617255928b!2sP%C4%B1narba%C5%9F%C4%B1%2C%20Vatan%20Cd.%20No%3A106%2C%2006930%20Sincan%2FAnkara!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>

          </div>

          {/* Emergency Fast Request Form (Right: 7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-7 sm:p-10 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                  Hızlı Talep Formu
                </span>
                <h3 className="text-2xl font-black text-white">
                  Acil Çekici / Fiyat Talep Edin
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Bilgilerinizi girin, otomatik olarak WhatsApp hattımıza yönlendirilerek anında yardım alın.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Örn: 05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Bulunduğunuz İlçe / Bölge
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                    >
                      {ANKARA_DISTRICTS.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      İhtiyaç Türü
                    </label>
                    <select
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                    >
                      <option value="Oto Çekici İhtiyacı">Oto Çekici / Kurtarma</option>
                      <option value="Kaza Kurtarma">Kaza Yaptım / Kurtarma</option>
                      <option value="Akü Takviye">Akü Takviye (12V/24V)</option>
                      <option value="Lastik Patladı">Lastik Patladı / Yol Yardım</option>
                      <option value="Şehirler Arası Taşıma">Şehirler Arası Araç Taşıma</option>
                      <option value="Motosiklet Taşıma">Motosiklet Taşıma</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Araç Marka/Model ve Ekstra Açıklama
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Örn: 2018 model Focus, araç çalışmıyor, Eryaman kavşağındayım..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Bilgileriniz doğrudan <strong>Halis Kırtepe</strong> WhatsApp hattına iletilir. Kişisel verileriniz 3. şahıslarla asla paylaşılmaz.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-400 hover:to-amber-400 text-slate-950 font-black text-base shadow-xl shadow-brand-500/20 transition-all transform active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  <span>WhatsApp ile Gönder ve Çekici Çağır</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
