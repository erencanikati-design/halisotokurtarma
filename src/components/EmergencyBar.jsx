import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export default function EmergencyBar() {
  const whatsappUrl = `https://wa.me/905353579525?text=${encodeURIComponent("Merhaba Halis Bey, çekiciye ihtiyacım var yardımcı olur musunuz?")}`;

  return (
    <aside 
      aria-label="Acil İletişim Butonları"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-8px_30px_rgba(15,23,42,0.12)]"
    >
      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {/* WhatsApp İle Yaz */}
        <a
          href={whatsappUrl}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover active:scale-95 text-white font-black text-sm shadow-md shadow-whatsapp/25 transition-all cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white text-whatsapp" />
          <span className="leading-tight text-center">
            WhatsApp<br />
            <span className="text-[10px] uppercase font-bold opacity-95">Mesaj Gönder</span>
          </span>
        </a>

        {/* Hemen Ara 7/24 */}
        <a
          href={COMPANY_INFO.telLink}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-emergency-600 via-red-600 to-rose-600 hover:from-emergency-500 hover:to-rose-500 active:scale-95 text-white font-black text-sm shadow-md shadow-emergency-600/30 transition-all beacon-red"
        >
          <Phone className="w-5 h-5 animate-bounce-subtle" />
          <span className="leading-tight text-center">
            HEMEN ARA<br />
            <span className="text-[10px] uppercase font-bold text-amber-100">7/24 Çekici</span>
          </span>
        </a>
      </div>
    </aside>
  );
}
