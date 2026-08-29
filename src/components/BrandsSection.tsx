import React from 'react';
import { supportedBrands } from '../data/faqsData';
import { Shield } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Tüm Markalarda Yetkin ve Sertifikalı Servis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Orijinal yedek parça ve özel arıza kodlama cihazları ile garantili onarım
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs w-fit">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Tüm Modellerde Orijinal Parça Garantisi</span>
          </div>
        </div>

        {/* Brands Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
          {supportedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 hover:border-[#f27d26]/40 hover:bg-orange-50/20 rounded-xl p-3 sm:p-3.5 flex flex-col items-center justify-center text-center transition-all shadow-2xs"
            >
              <span className="font-extrabold text-xs sm:text-sm tracking-wider text-slate-900">
                {brand.logo}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 font-medium">
                Klima & Kombi
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

