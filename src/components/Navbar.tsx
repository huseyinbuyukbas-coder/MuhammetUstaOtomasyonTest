import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, Clock, Flame, Snowflake } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal?: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Neden Biz?', href: '#neden-biz' },
    { label: 'Çalışma Süreci', href: '#surec' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'S.S.S.', href: '#sss' },
    { label: 'Hizmet Bölgeleri', href: '#bolgeler' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0b1120] text-slate-300 text-xs py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#f27d26] font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f27d26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f27d26]"></span>
              </span>
              İstanbul Geneli 7/24 Acil Teknik Servis
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              08:00 - 22:00 (Haftanın 7 Günü)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              1 Yıl Parça & İşçilik Garantisi
            </span>
            <a 
              href="tel:05555555555" 
              className="font-bold text-white hover:text-[#f27d26] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#f27d26]" />
              0555 555 55 55
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-md py-2.5 border-b border-white/10' 
          : 'bg-[#0f172a] py-3 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f27d26] rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl text-white shadow-md shadow-orange-900/20 transition-transform group-hover:scale-105 shrink-0">
                <div className="relative flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#0f172a] absolute -translate-x-1 -translate-y-0.5" />
                  <Snowflake className="w-4 h-4 text-white absolute translate-x-1 translate-y-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold leading-tight text-white group-hover:text-[#f27d26] transition-colors">
                  Muhammet Usta
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">
                  Klima & Kombi Teknik Servisi
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-[#f27d26] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Action Buttons & 7/24 Call Header */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right hidden xl:block pr-1">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">7/24 Destek Hattı</p>
                <p className="text-sm font-bold text-[#f27d26]">0555 555 55 55</p>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20klima/kombi%20servis%20talebinde%20bulunmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20b858] text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg shadow-sm transition-all shadow-green-950/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href="tel:05555555555"
                id="header-call-btn"
                className="inline-flex items-center gap-1.5 bg-[#f27d26] hover:bg-[#d96a1f] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg shadow-md shadow-orange-950/20 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hemen Ara</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:05555555555"
                className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-[#f27d26] text-white font-bold"
                aria-label="Telefonla Ara"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Menüyü Aç/Kapat"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0f172a] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href="tel:05555555555"
                className="flex items-center justify-center gap-2 bg-[#f27d26] text-white font-bold text-sm py-2.5 px-3 rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20klima/kombi%20servis%20talebinde%20bulunmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25d366] text-white font-semibold text-sm py-2.5 px-3 rounded-lg shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <div className="divide-y divide-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-medium text-slate-200 hover:text-[#f27d26] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                }}
                className="w-full text-center py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                Online Servis Randevusu Al
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
