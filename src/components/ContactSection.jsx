import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, User, Send, ShieldCheck, Mail } from 'lucide-react';
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
    <section id="iletisim" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold tracking-wider uppercase">
            7/24 İletişim & Konum
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Bize Ulaşın, Hemen Yola Çıkalım
          </h2>
          <p className="text-slate-700 font-medium text-base sm:text-lg mt-3">
            Sincan merkez üssümüzden Ankara'nın her noktasına bir telefon veya tek tıkla WhatsApp kadar yakınız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-50/80 border border-slate-200/90 p-7 space-y-6 shadow-md">
              <div>
                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block mb-1">
                  İşletme Sahibi
                </span>
                <div className="flex items-center gap-2 text-xl font-black text-slate-950">
                  <User className="w-5 h-5 text-amber-600" />
                  <span>{COMPANY_INFO.owner}</span>
                </div>
                <p className="text-xs font-semibold text-slate-600 mt-1">Halis Oto Kurtarma & Yol Yardım Hizmetleri</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-200">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">7/24 Acil Çağrı Telefonu</span>
                    <a
                      href={COMPANY_INFO.telLink}
                      className="text-lg font-black text-slate-950 hover:text-red-600 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle className="w-5 h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">WhatsApp Konum & Destek Hattı</span>
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-emerald-700 hover:underline"
                    >
                      Konum Gönder (0535 357 95 25)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">E-Posta Adresi</span>
                    <a
                      href={COMPANY_INFO.emailLink}
                      className="text-sm font-extrabold text-slate-900 hover:text-amber-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">Adres / Merkez Garaj</span>
                    <p className="text-sm font-bold text-slate-800">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block">Çalışma Saatleri</span>
                    <p className="text-sm font-extrabold text-emerald-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm shadow-md shadow-whatsapp/20 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-whatsapp" />
                  <span>Tek Tıkla WhatsApp Mesajı Gönder</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 relative bg-slate-100">
              <iframe
                title="Halis Oto Kurtarma Sincan Ankara Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12228.694665406734!2d32.5701889!3d39.9654167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33932824ff7ab%3A0xe54d89617255928b!2sP%C4%B1narba%C5%9F%C4%B1%2C%20Vatan%20Cd.%20No%3A106%2C%2006930%20Sincan%2FAnkara!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>

          {/* Emergency Fast Request Form (Right: 7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block mb-1">
                  Hızlı Talep Formu
                </span>
                <h3 className="text-2xl font-black text-slate-950">
                  Acil Çekici / Fiyat Talep Edin
                </h3>
                <p className="text-slate-700 font-medium text-sm mt-1">
                  Bilgilerinizi girin, otomatik olarak WhatsApp hattımıza yönlendirilerek anında yardım alın.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Örn: 05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                      Bulunduğunuz İlçe / Bölge
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
                    >
                      {ANKARA_DISTRICTS.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                      İhtiyaç Türü
                    </label>
                    <select
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
                    >
                      <option value="Oto Çekici İhtiyacı">Oto Çekici / Kurtarma</option>
                      <option value="Kaza Kurtarma">Kaza Yaptım / Kurtarma</option>
                      <option value="Lüks Araç Taşıma">Lüks & Alçak Şasi Araç</option>
                      <option value="Akü Takviye">Akü Takviye (12V/24V)</option>
                      <option value="Lastik Patladı">Lastik Patladı / Yol Yardım</option>
                      <option value="Motosiklet Taşıma">Motosiklet Taşıma</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Araç Marka/Model ve Ekstra Açıklama
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Örn: 2018 model Focus, araç çalışmıyor, Eryaman kavşağındayım..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs font-medium text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    Bilgileriniz doğrudan <strong className="text-slate-950 font-extrabold">Halis Kırtepe</strong> WhatsApp hattına iletilir. Kişisel verileriniz 3. şahıslarla asla paylaşılmaz.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 transition-all transform active:scale-95 cursor-pointer"
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

