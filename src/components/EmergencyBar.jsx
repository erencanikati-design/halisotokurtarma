import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

export default function EmergencyBar() {
  return (
    <aside 
      aria-label="Acil İletişim ve Konum Butonları"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
    >
      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {/* WhatsApp Konum Gönder */}
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover active:scale-95 text-slate-950 font-black text-sm shadow-lg shadow-whatsapp/30 transition-all"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <Navigation className="w-2.5 h-2.5 absolute -top-1 -right-1 text-slate-950" />
          </div>
          <span className="leading-tight text-center">
            WhatsApp<br />
            <span className="text-[10px] uppercase font-bold opacity-80">Konum At</span>
          </span>
        </a>

        {/* Hemen Ara 7/24 */}
        <a
          href={COMPANY_INFO.telLink}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-emergency-600 via-red-600 to-rose-600 hover:from-emergency-500 hover:to-rose-500 active:scale-95 text-white font-black text-sm shadow-lg shadow-emergency-600/40 transition-all beacon-red"
        >
          <Phone className="w-5 h-5 animate-bounce-subtle" />
          <span className="leading-tight text-center">
            HEMEN ARA<br />
            <span className="text-[10px] uppercase font-semibold text-amber-200">7/24 Çekici</span>
          </span>
        </a>
      </div>
    </aside>
  );
}
