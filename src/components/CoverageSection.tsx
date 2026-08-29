import React, { useState } from 'react';
import { istanbulDistricts } from '../data/faqsData';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';

export const CoverageSection: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const europeanSide = [
    'Bakırköy', 'Beşiktaş', 'Şişli', 'Sarıyer', 'Beylikdüzü', 
    'Bahçelievler', 'Zeytinburnu', 'Fatih', 'Eyüpsultan', 
    'Gaziosmanpaşa', 'Küçükçekmece', 'Avcılar', 'Başakşehir', 'Esenyurt'
  ];

  const asianSide = [
    'Kadıköy', 'Üsküdar', 'Ümraniye', 'Ataşehir', 'Maltepe', 
    'Kartal', 'Pendik', 'Tuzla', 'Sancaktepe', 'Çekmeköy', 'Beykoz'
  ];

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    const message = `Merhaba Muhammet Usta, ${district} ilçesinde klima/kombi servisi için müsait misiniz?`;
    window.open(`https://wa.me/905555555555?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="bolgeler" className="py-14 sm:py-16 bg-white text-slate-800 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>İstanbul & Çevresi Hizmet Ağı</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            İstanbul'un Tüm İlçelerinde Hizmetinizdeyiz
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Avrupa ve Anadolu yakasında konumlandırılmış mobil servis filomuzla arıza bildiriminizden hemen sonra adresinize en yakın ustamız hareket eder.
          </p>
        </div>

        {/* Two Columns for European & Asian Sides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Anadolu Yakası */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#f27d26] flex items-center justify-center font-black text-xs">
                  AY
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Anadolu Yakası</h3>
                  <p className="text-[11px] text-slate-500">11 İlçe • Mobil Servis Araçları</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Aynı Gün
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {asianSide.map((district) => (
                <button
                  key={district}
                  type="button"
                  onClick={() => handleDistrictClick(district)}
                  className="p-2 rounded-lg bg-white hover:bg-[#f27d26] hover:text-white text-slate-700 text-xs font-semibold text-left transition-all border border-slate-200 flex items-center justify-between group cursor-pointer shadow-2xs"
                >
                  <span className="truncate">{district}</span>
                  <Navigation className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Avrupa Yakası */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs">
                  EY
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Avrupa Yakası</h3>
                  <p className="text-[11px] text-slate-500">14 İlçe • Mobil Servis Araçları</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Aynı Gün
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {europeanSide.map((district) => (
                <button
                  key={district}
                  type="button"
                  onClick={() => handleDistrictClick(district)}
                  className="p-2 rounded-lg bg-white hover:bg-[#f27d26] hover:text-white text-slate-700 text-xs font-semibold text-left transition-all border border-slate-200 flex items-center justify-between group cursor-pointer shadow-2xs"
                >
                  <span className="truncate">{district}</span>
                  <Navigation className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Call Banner */}
        <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Listenizdeki ilçeye tıklayarak o bölge için doğrudan servis çağırabilirsiniz.</span>
        </div>

      </div>
    </section>
  );
};

