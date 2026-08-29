import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, Wrench, Flame, Snowflake, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal?: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [quickService, setQuickService] = useState('Klima Arıza ve Tamiri');
  const [quickDistrict, setQuickDistrict] = useState('Kadıköy');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Muhammet Usta, ${quickDistrict} bölgesinden "${quickService}" için acil servis talebim var.`;
    window.open(`https://wa.me/905555555555?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative bg-[#f8fafc] text-slate-800 pt-5 pb-10 sm:py-8 lg:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High Density Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Hero Card (Navy #0f172a Box) */}
          <div className="lg:col-span-7 bg-[#0f172a] rounded-2xl p-6 sm:p-8 lg:p-9 text-white relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="relative z-10 space-y-4">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#f27d26] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  İstanbul Geneli Servis
                </span>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2.5 py-1 rounded font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#f27d26]" />
                  30-45 Dk Hızlı Müdahale
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.15] text-white tracking-tight">
                Konforunuzu Şansa Bırakmayın.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                İstanbul'un her noktasına hızlı servis imkanı. Klima ve kombi arızalarınızda <strong className="text-white font-semibold">1 yıl parça & işçilik garantili</strong>, şeffaf fiyatlı profesyonel çözüm.
              </p>

              {/* Micro Trust Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs">1 Yıl Garanti</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#f27d26] shrink-0" />
                  <span className="text-[11px] sm:text-xs">Orijinal Parça</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Yerinde Tamir</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <a
                  href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20klima/kombi%20arızası%20için%20hızlı%20servis%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="w-full bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-950/20 transition-all text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp'tan Ulaş</span>
                </a>

                <a
                  href="tel:05555555555"
                  id="hero-call-btn"
                  className="w-full bg-[#f27d26] hover:bg-[#d96a1f] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20 transition-all text-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Hemen Ara (0555 555 55 55)</span>
                </a>
              </div>

            </div>

            {/* Background watermark graphic */}
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-white">
              <svg width="220" height="220" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
          </div>

          {/* Right Column: High Density Fast Dispatch Form */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Quick Dispatch Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              
              <div>
                {/* Form Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 text-[#f27d26] flex items-center justify-center font-bold">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                        Hızlı Servis Talebi
                      </h2>
                      <p className="text-[11px] text-slate-500">İstanbul genelinde anında yönlendirme</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-emerald-700 border border-emerald-200">
                    Nöbetçi Ekip Aktif
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="quick-service" className="block text-xs font-bold text-slate-700 mb-1">
                      Hizmet Seçimi
                    </label>
                    <select
                      id="quick-service"
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                    >
                      <option value="Klima Arıza ve Tamiri">Klima Arıza ve Tamiri</option>
                      <option value="Klima Bakımı">Klima Bakımı</option>
                      <option value="Klima Montajı">Klima Montajı</option>
                      <option value="Kombi Arıza ve Tamiri">Kombi Arıza ve Tamiri</option>
                      <option value="Kombi Bakımı">Kombi Bakımı</option>
                      <option value="Petek Temizliği">Petek Temizliği</option>
                      <option value="Kombi Montajı">Kombi Montajı</option>
                      <option value="Genel Kontrol & Keşif">Genel Kontrol & Keşif</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quick-district" className="block text-xs font-bold text-slate-700 mb-1">
                      İstanbul İlçesi
                    </label>
                    <select
                      id="quick-district"
                      value={quickDistrict}
                      onChange={(e) => setQuickDistrict(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                    >
                      <option value="Kadıköy">Kadıköy</option>
                      <option value="Beşiktaş">Beşiktaş</option>
                      <option value="Bakırköy">Bakırköy</option>
                      <option value="Ümraniye">Ümraniye</option>
                      <option value="Ataşehir">Ataşehir</option>
                      <option value="Maltepe">Maltepe</option>
                      <option value="Şişli">Şişli</option>
                      <option value="Sarıyer">Sarıyer</option>
                      <option value="Üsküdar">Üsküdar</option>
                      <option value="Beylikdüzü">Beylikdüzü</option>
                      <option value="Pendik">Pendik</option>
                      <option value="Kartal">Kartal</option>
                      <option value="Bahçelievler">Bahçelievler</option>
                      <option value="Başakşehir">Başakşehir</option>
                      <option value="Diğer İstanbul İlçesi">Diğer İstanbul İlçesi</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="hero-quick-submit-btn"
                    className="w-full mt-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs py-2.5 px-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Servis Talebini Gönder (WhatsApp)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Şeffaf Fiyat Politikası</span>
                <button
                  type="button"
                  onClick={() => onOpenBookingModal && onOpenBookingModal(quickService)}
                  className="text-[#f27d26] font-bold hover:underline"
                >
                  Detaylı Randevu &rarr;
                </button>
              </div>

            </div>

            {/* High Density Mini Why Us Block */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm shrink-0">
              <h3 className="text-xs font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1 h-3.5 bg-[#f27d26] rounded-full"></span>
                Neden Muhammet Usta?
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-800">Hızlı Müdahale</p>
                  <p className="text-[10px] text-slate-500">30-45 Dk Kapınızdayız</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-800">Garantili İşçilik</p>
                  <p className="text-[10px] text-slate-500">1 Yıl Servis Garantisi</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-800">Orijinal Parça</p>
                  <p className="text-[10px] text-slate-500">Fabrika Onaylı Parçalar</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-bold text-slate-800">Uzman Kadro</p>
                  <p className="text-[10px] text-slate-500">Sertifikalı Teknisyenler</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
