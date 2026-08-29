import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-800 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Klima ve kombi teknik servis süreçleri, garanti koşulları ve randevu hakkında en çok yöneltilen sorular.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-colors hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-bold text-xs sm:text-sm transition-colors ${isOpen ? 'text-[#f27d26]' : 'text-slate-900 hover:text-[#f27d26]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#f27d26] bg-orange-50' : ''}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 bg-[#0f172a] p-5 sm:p-7 rounded-2xl text-white text-center space-y-3 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-white">Başka bir sorunuz veya özel durumunuz mu var?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Muhammet Usta ile doğrudan iletişime geçerek anında teknik bilgi veya fiyat teklifi alabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20bir%20sorum%20olacaktı."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp'tan Sor</span>
            </a>
            <a
              href="tel:05555555555"
              className="inline-flex items-center gap-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors"
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

