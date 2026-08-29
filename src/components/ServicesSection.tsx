import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Wind, 
  Sparkles, 
  Wrench, 
  ShieldAlert, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Settings, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Sparkles,
  Wrench,
  ShieldAlert,
  Flame,
  ShieldCheck,
  Zap,
  Droplets,
  Settings
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'klima' | 'kombi' | 'bakim'>('all');

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const text = `Merhaba Muhammet Usta, "${serviceTitle}" hizmeti hakkında bilgi ve servis randevusu almak istiyorum.`;
    window.open(`https://wa.me/905555555555?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hizmetler" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f27d26]"></span>
            <span>Profesyonel Teknik Servis Çözümleri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Klima ve Kombi Hizmetlerimiz
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            İstanbul genelinde tüm marka klima ve kombileriniz için alanında uzman teknisyenlerimizle yerinde ve garantili teknik servis sunuyoruz.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-7 mb-9">
          {[
            { key: 'all', label: 'Tüm Hizmetler (9)' },
            { key: 'klima', label: 'Klima Servisi' },
            { key: 'kombi', label: 'Kombi Servisi' },
            { key: 'bakim', label: 'Bakım & Temizlik' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-[#f27d26] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (All 9 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-[#f27d26]/40 hover:bg-orange-50/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#f27d26] flex items-center justify-center group-hover:bg-[#f27d26] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {service.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Popüler Hizmet
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#f27d26] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 py-3 border-y border-slate-100 mb-4">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-1 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(service.title)}
                    className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-[#25d366] hover:text-white text-slate-700 text-xs font-bold py-2 px-2.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      } else {
                        const el = document.getElementById('iletisim');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center justify-center gap-1.5 bg-orange-50 hover:bg-[#f27d26] text-[#f27d26] hover:text-white text-xs font-bold py-2 px-2.5 rounded-lg border border-orange-200 transition-all cursor-pointer"
                  >
                    <span>Servis İste</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Need custom help banner */}
        <div className="mt-10 bg-[#0f172a] rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Cihazınızdaki Arızayı Listede Bulamadınız mı?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Telefon veya WhatsApp üzerinden arıza belirtilerini anlatın, ustamız hemen teşhis ve fiyat bilgisi versin.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:05555555555"
              className="inline-flex items-center gap-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all shadow-md shadow-orange-950/20"
            >
              <Phone className="w-4 h-4" />
              <span>0555 555 55 55</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
