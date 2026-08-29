import React from 'react';
import { PhoneCall, CalendarCheck, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Talep & İletişim',
      desc: 'Telefon veya WhatsApp üzerinden bize ulaşın; cihazınızın markasını, arıza belirtilerini ve adresinizi bildirin.'
    },
    {
      step: '02',
      icon: CalendarCheck,
      title: 'Hızlı Randevu',
      desc: 'Acil durumunuza veya belirlediğiniz uygun saat aralığına göre en yakın mobil servis ekibimiz adresinize yönlendirilir.'
    },
    {
      step: '03',
      icon: Wrench,
      title: 'Şeffaf Fiyat & Onarım',
      desc: 'Uzman teknisyenimiz arızayı yerinde tespit eder, net maliyet bilgisi verir ve onayınız ile orijinal parçalarla tamir başlar.'
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Test & 1 Yıl Garanti',
      desc: 'Cihazınız tüm emniyet ve verimlilik testlerinden geçirilir; kaşeli servis fişi ve 1 yıllık garanti belgesi ile teslim edilir.'
    }
  ];

  return (
    <section id="surec" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f27d26]"></span>
            <span>Kolay, Hızlı ve Güvenilir</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Çalışma Sürecimiz
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Klima veya kombinizde problem yaşadığınızda, arızayı çözüme ulaştıran 4 adımlı profesyonel hizmet döngümüz.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#f27d26]/40 transition-colors"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#f27d26] flex items-center justify-center group-hover:bg-[#f27d26] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-slate-400">
                      ADIM {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-500">
                  <span>Adım {item.step} / 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20servis%20randevusu%20oluşturmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
          >
            <span>Hemen Servis Randevusu Oluşturun</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

