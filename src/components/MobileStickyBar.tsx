import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Call to Action */}
        <a
          href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20klima/kombi%20servis%20talebinde%20bulunmak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp"
          className="flex items-center justify-center gap-2 bg-[#25d366] active:bg-[#20b858] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-lg shadow-sm transition-transform active:scale-95"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call Call to Action */}
        <a
          href="tel:05555555555"
          id="mobile-sticky-call"
          className="flex items-center justify-center gap-2 bg-[#f27d26] active:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-lg shadow-sm transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">Hemen Ara</span>
        </a>

      </div>
    </div>
  );
};

