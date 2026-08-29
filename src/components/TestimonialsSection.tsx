import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, CheckCircle2, Quote, ThumbsUp, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="yorumlar" className="py-14 sm:py-16 bg-white text-slate-800 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f27d26]"></span>
              <span>%100 Gerçek Müşteri Deneyimleri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Müşterilerimizin Yorumları
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              İstanbul'da hizmet verdiğimiz yüzlerce mutlu müşterimizin Muhammet Usta hakkındaki samimi ve tarafsız görüşleri.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-slate-200 pr-4">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">4.9</div>
              <div className="flex text-[#f27d26] text-xs">
                {'★★★★★'}
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <span>Google Değerlendirmeleri</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                350+ Doğrulanmış Müşteri Yorumu
              </p>
            </div>
          </div>
        </div>

        {/* 4 Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:border-[#f27d26]/40 hover:bg-orange-50/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top User Info & Rating */}
                <div className="flex items-start justify-between gap-4 mb-3.5">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials */}
                    <div className="w-10 h-10 rounded-full bg-[#f27d26] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                          {review.author}
                        </h3>
                        {review.verified && (
                          <span title="Doğrulanmış Servis Müşterisi" className="text-emerald-600">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {review.location}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex text-[#f27d26] text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f27d26]" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="mb-2.5">
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    Hizmet: {review.service}
                  </span>
                </div>

                {/* Quote Text (The exact requested texts) */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Bottom Date & Verification Tag */}
              <div className="pt-3 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Doğrulanmış Müşteri
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Invitation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Siz de hizmetimiz sonrasında deneyiminizi paylaşarak diğer komşularınıza yol gösterebilirsiniz.
          </p>
        </div>

      </div>
    </section>
  );
};

