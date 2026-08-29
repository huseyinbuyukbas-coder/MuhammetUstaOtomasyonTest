import React from 'react';
import { Award, Users, MapPin, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Yıllık Usta Tecrübesi',
      desc: 'Sertifikalı uzman ekip'
    },
    {
      icon: Users,
      value: '10.000+',
      label: 'Tamamlanan Servis',
      desc: 'İstanbul genelinde memnun müşteri'
    },
    {
      icon: Clock,
      value: '45 Dk',
      label: 'Ortalama Müdahale',
      desc: 'Acil gezici servis ağı'
    },
    {
      icon: ShieldCheck,
      value: '1 YIL',
      label: 'Garantili İşçilik & Parça',
      desc: 'Resmi onaylı servis fişi'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 lg:py-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100/80 text-[#f27d26] flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
