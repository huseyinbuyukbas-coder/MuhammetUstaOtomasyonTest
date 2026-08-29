import React, { useState } from 'react';
import { 
   Phone, 
   MessageSquare, 
   MapPin, 
   Clock, 
   ShieldCheck, 
   Send, 
   CheckCircle2, 
   Calendar,
   AlertCircle
 } from 'lucide-react';
import { AppointmentFormState } from '../types';

interface ContactSectionProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService = '',
  onSuccessToast 
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phone: '',
    district: 'Kadıköy',
    serviceType: initialService || 'Klima Arıza ve Tamiri',
    brand: '',
    notes: '',
    preferredTime: 'En Kısa Sürede (Acil)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormError('Lütfen adınızı ve telefon numaranızı giriniz.');
      return;
    }

    setFormError('');
    setIsSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast('Servis randevu talebiniz başarıyla alındı! Ekibimiz 15 dakika içinde sizi arayacaktır.');
    }
  };

  const handleWhatsAppForward = () => {
    const text = `*Yeni Servis Randevu Talebi*\n\n` +
      `👤 *Müşteri:* ${formData.fullName}\n` +
      `📞 *Telefon:* ${formData.phone}\n` +
      `📍 *İlçe:* ${formData.district}\n` +
      `🔧 *Hizmet:* ${formData.serviceType}\n` +
      `🏷️ *Cihaz Markası:* ${formData.brand || 'Belirtilmedi'}\n` +
      `⏱️ *Tercih Edilen Zaman:* ${formData.preferredTime}\n` +
      `📝 *Açıklama / Arıza:* ${formData.notes || 'Yok'}`;

    window.open(`https://wa.me/905555555555?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="iletisim" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-800 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f27d26] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Hızlı İletişim & Randevu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Muhammet Usta ile İletişime Geçin
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            İstanbul ve çevresi için hemen randevu oluşturun veya bizi doğrudan arayarak anında servis desteği alın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Call, WhatsApp & Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Call Direct Card */}
            <a
              href="tel:05555555555"
              id="contact-call-box"
              className="block p-5 sm:p-6 rounded-2xl bg-[#f27d26] text-white shadow-sm hover:bg-[#d96a1f] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/15 text-white flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-100">
                    7/24 Kesintisiz Telefon Hattı
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    0555 555 55 55
                  </div>
                  <span className="text-xs font-semibold text-orange-100 mt-0.5 inline-block">
                    Hemen aramak için tıklayın &rarr;
                  </span>
                </div>
              </div>
            </a>

            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/905555555555?text=Merhaba%20Muhammet%20Usta,%20klima/kombi%20servis%20talebinde%20bulunmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-box"
              className="block p-5 sm:p-6 rounded-2xl bg-[#25d366] hover:bg-[#20b858] text-white shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/15 text-white flex items-center justify-center font-bold shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                    Hızlı WhatsApp Mesaj Hattı
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    0555 555 55 55
                  </div>
                  <span className="text-xs font-semibold text-emerald-100 mt-0.5 inline-block">
                    Mesaj yazmak için tıklayın &rarr;
                  </span>
                </div>
              </div>
            </a>

            {/* Service Specs Details */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f27d26] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Hizmet Bölgesi</h3>
                  <p className="text-xs text-slate-600 mt-0.5">İstanbul (Avrupa ve Anadolu Yakası tüm 39 ilçe ve çevre lokasyonlar)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f27d26] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Çalışma Saatleri</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Haftanın 7 Günü: 08:00 - 22:00 (Acil Arıza: 7/24 Kesintisiz)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Garanti & Fatura</h3>
                  <p className="text-xs text-slate-600 mt-0.5">1 Yıl Resmi Parça & İşçilik Garantisi, Resmi Kaşeli Servis Fişi</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Online Service Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm">
              
              <div className="border-b border-slate-100 pb-4 mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Online Servis Randevu Formu
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Bilgilerinizi bırakın, servis koordinatörümüz 15 dakika içinde sizi arasın.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-6 text-center space-y-3.5 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Talebiniz Başarıyla Alındı!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Sayın <strong>{formData.fullName}</strong>, servis talebiniz sisteme kaydedildi. Muhammet Usta ekibi <strong>{formData.phone}</strong> numaranızdan sizinle iletişime geçecektir.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp'tan da Gönder</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          district: 'Kadıköy',
                          serviceType: 'Klima Arıza ve Tamiri',
                          brand: '',
                          notes: '',
                          preferredTime: 'En Kısa Sürede (Acil)'
                        });
                      }}
                      className="inline-flex items-center justify-center text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-2"
                    >
                      Yeni Talep Oluştur
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {formError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Örn: Ahmet Yılmaz"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Örn: 05XX XXX XX XX"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                      />
                    </div>
                  </div>

                  {/* District & Service Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="district" className="block text-xs font-bold text-slate-700 mb-1">
                        İlçe (İstanbul)
                      </label>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
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
                        <option value="Kartal">Kartal</option>
                        <option value="Pendik">Pendik</option>
                        <option value="Bahçelievler">Bahçelievler</option>
                        <option value="Başakşehir">Başakşehir</option>
                        <option value="Fatih">Fatih</option>
                        <option value="Diğer İlçe">Diğer İstanbul İlçesi</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 mb-1">
                        İhtiyaç Duyulan Hizmet
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                      >
                        <option value="Klima Servisi">Klima Servisi</option>
                        <option value="Klima Bakımı">Klima Bakımı</option>
                        <option value="Klima Montajı">Klima Montajı</option>
                        <option value="Klima Arıza ve Tamiri">Klima Arıza ve Tamiri</option>
                        <option value="Kombi Servisi">Kombi Servisi</option>
                        <option value="Kombi Bakımı">Kombi Bakımı</option>
                        <option value="Kombi Arıza ve Tamiri">Kombi Arıza ve Tamiri</option>
                        <option value="Petek Temizliği">Petek Temizliği</option>
                        <option value="Kombi Montajı">Kombi Montajı</option>
                      </select>
                    </div>
                  </div>

                  {/* Brand & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="brand" className="block text-xs font-bold text-slate-700 mb-1">
                        Cihaz Markası (Varsa)
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Örn: Baymak, Daikin, Demirdöküm..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 mb-1">
                        Zaman Tercihi
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors"
                      >
                        <option value="En Kısa Sürede (Acil)">En Kısa Sürede (Acil)</option>
                        <option value="Bugün Öğleden Sonra">Bugün Öğleden Sonra</option>
                        <option value="Yarın Sabah (09:00 - 13:00)">Yarın Sabah (09:00 - 13:00)</option>
                        <option value="Yarın Öğleden Sonra (13:00 - 18:00)">Yarın Öğleden Sonra (13:00 - 18:00)</option>
                        <option value="Hafta Sonu">Hafta Sonu</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Fault description */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1">
                      Arıza Açıklaması veya Özel Notunuz
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Örn: Klimam soğuk hava üflemiyor / Kombi sıcak su vermiyor..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-1.5 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Servis Randevusu Oluştur</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp İle Gönder</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-500 pt-1">
                    Verileriniz gizlilik prensiplerimiz gereği yalnızca servis koordinasyonu amacıyla kullanılır.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

