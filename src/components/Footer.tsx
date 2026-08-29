import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Flame, Snowflake, Heart } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      
      {/* Top Banner / Call to Action in Footer */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Acil Klima veya Kombi Servisine mi İhtiyacınız Var?
              </h3>
              <p className="text-xs text-slate-300">
                İstanbul genelinde mobil ekiplerimiz haftanın 7 günü hizmetinizdedir.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href="tel:05555555555"
                className="inline-flex items-center gap-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>0555 555 55 55</span>
              </a>
              <a
                href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20acil%20servis%20talebinde%20bulunmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp İletişim</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#f27d26] flex items-center justify-center text-white font-bold shadow-xs">
                <div className="relative flex items-center justify-center">
                  <Flame className="w-4 h-4 text-white absolute -translate-x-1 -translate-y-0.5" />
                  <Snowflake className="w-3.5 h-3.5 text-orange-200 absolute translate-x-1 translate-y-1" />
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight block">
                  MUHAMMET USTA
                </span>
                <span className="text-[10px] font-semibold text-[#f27d26] uppercase tracking-wider">
                  Klima ve Kombi Teknik Servisi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              İstanbul ve çevresinde klima ve kombi arıza onarımı, periyodik bakım, petek temizliği ve montaj hizmetlerinde 15+ yıllık tecrübe, 1 yıl resmi garanti ve şeffaf fiyat politikasıyla güvenilir teknik servis sağlayıcınız.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#f27d26] shrink-0" />
                <span>İstanbul / Türkiye (Tüm İlçeler ve Çevresi)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#f27d26] shrink-0" />
                <span>Haftanın 7 Günü: 08:00 - 22:00 (Acil: 7/24)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1 Yıl İşçilik ve Parça Garantisi</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-1.5 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#hizmetler"
                    className="hover:text-[#f27d26] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-[#f27d26]">•</span>
                    <span>{svc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hızlı Menü
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hizmetler" className="hover:text-white transition-colors text-slate-300">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#neden-biz" className="hover:text-white transition-colors text-slate-300">Neden Muhammet Usta?</a>
              </li>
              <li>
                <a href="#surec" className="hover:text-white transition-colors text-slate-300">Çalışma Sürecimiz</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-white transition-colors text-slate-300">Müşteri Yorumları</a>
              </li>
              <li>
                <a href="#sss" className="hover:text-white transition-colors text-slate-300">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="#bolgeler" className="hover:text-white transition-colors text-slate-300">Hizmet Bölgeleri</a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-white transition-colors text-slate-300">İletişim & Randevu</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Guarantees */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Doğrudan İletişim
            </h4>
            <div className="space-y-2">
              <a
                href="tel:05555555555"
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-[#f27d26]/50 transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-orange-500/10 text-[#f27d26] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Telefon Hattı</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#f27d26]">0555 555 55 55</span>
                </div>
              </a>

              <a
                href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">WhatsApp Hattı</span>
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400">0555 555 55 55</span>
                </div>
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[10px] text-slate-400">
              <strong className="text-slate-200 block mb-0.5">İstanbul & Çevresi Teknik Servis</strong>
              Tüm işlemlerimiz resmi kaşeli servis formu ve garanti belgesi ile güvence altına alınmaktadır.
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Local SEO Tagline */}
      <div className="border-t border-slate-800/80 py-4 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>Muhammet Usta Klima ve Kombi Teknik Servisi</strong>. Tüm Hakları Saklıdır.
          </p>
          <p className="text-[11px] text-slate-500">
            İstanbul Klima Servisi • Kombi Bakımı • Petek Temizliği • Garantili Teknik Servis
          </p>
        </div>
      </div>

    </footer>
  );
};

