import React from 'react';
import { 
  ShieldCheck, 
  BadgePercent, 
  Clock, 
  Cpu, 
  UserCheck, 
  Headphones,
  CheckCircle2,
  Phone
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: '1 Yıl Resmi Servis Garantisi',
      desc: 'Yaptığımız tüm tamir işlemlerinde ve taktığımız orijinal sıfır parçalarda 1 yıl boyunca resmi servis kaşeli garanti veriyoruz.',
    },
    {
      icon: BadgePercent,
      title: 'Şeffaf ve Sabit Fiyat Politikası',
      desc: 'Arıza tespiti yerinde yapılır, onayınız olmadan tek bir vida dahi sıkılmaz. Sürpriz ek maliyetler veya gizli ücretler kesinlikle yoktur.',
    },
    {
      icon: Clock,
      title: 'İstanbul Geneli 30-45 Dk Hızlı Müdahale',
      desc: 'Avrupa ve Anadolu yakasında konumlandırılmış gezici mobil servis araçlarımız sayesinde en kısa sürede kapınızdayız.',
    },
    {
      icon: Cpu,
      title: '%100 Orijinal Yedek Parça',
      desc: 'Klima ve kombilerinizde asla yan sanayi veya revizyonlu parça kullanmıyoruz. Cihazınızın fabrika standartlarında çalışmasını sağlıyoruz.',
    },
    {
      icon: UserCheck,
      title: 'Sertifikalı ve Deneyimli Kadro',
      desc: 'Mesleki Yeterlilik Belgesine (MYK) ve Usta Öğretici sertifikasına sahip, 15+ yıllık tecrübeli ustalarımızla profesyonel işçilik sunuyoruz.',
    },
    {
      icon: Headphones,
      title: '7/24 Kesintisiz Teknik Destek',
      desc: 'Kışın soğuklarında kombisiz, yazın sıcaklarında klimasız kalmamanız için acil servis hattımız her an açık.',
    }
  ];

  return (
    <section id="neden-biz" className="py-14 sm:py-16 bg-white text-slate-800 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f27d26]"></span>
            <span>Güven & Kalite Standartlarımız</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Neden Muhammet Usta?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            İstanbul'da binlerce ev ve iş yerinin ilk tercihi olmamızı sağlayan dürüst, garantili ve profesyonel teknik servis ilkelerimiz.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#f27d26]/40 hover:bg-orange-50/20 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#f27d26] mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#f27d26]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f27d26] shrink-0" />
                  <span>Standart Hizmet Taahhüdümüz</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Card */}
        <div className="mt-10 p-5 sm:p-7 rounded-2xl bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#f27d26] flex items-center justify-center text-white font-black shrink-0 text-base shadow-md shadow-orange-950/20">
              1 YIL
            </div>
            <div>
              <h4 className="text-base font-bold text-white">İşçilik & Parça Garanti Güvencesi</h4>
              <p className="text-xs sm:text-sm text-slate-300">Yapılan her onarım resmi servis fişi ile belgelenir, 1 yıl boyunca aynı parçada oluşacak arızalar ücretsiz giderilir.</p>
            </div>
          </div>
          <a
            href="tel:05555555555"
            className="shrink-0 flex items-center gap-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Bilgi Al: 0555 555 55 55</span>
          </a>
        </div>

      </div>
    </section>
  );
};
