import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { AppointmentFormState } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phone: '',
    district: 'Kadıköy',
    serviceType: selectedService || 'Klima Arıza ve Tamiri',
    brand: '',
    notes: '',
    preferredTime: 'En Kısa Sürede (Acil)'
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Hızlı Servis Randevusu*\n\n` +
      `👤 *Müşteri:* ${formData.fullName}\n` +
      `📞 *Telefon:* ${formData.phone}\n` +
      `📍 *İlçe:* ${formData.district}\n` +
      `🔧 *Hizmet:* ${formData.serviceType}\n` +
      `🏷️ *Cihaz Markası:* ${formData.brand || 'Belirtilmedi'}\n` +
      `⏱️ *Zaman Tercihi:* ${formData.preferredTime}\n` +
      `📝 *Açıklama:* ${formData.notes || 'Yok'}`;

    window.open(`https://wa.me/905555555555?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xl text-slate-800 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Talebiniz Alındı!</h3>
            <p className="text-xs text-slate-600">
              Sayın <strong>{formData.fullName}</strong>, <strong>{formData.serviceType}</strong> talebiniz için ekibimiz en kısa sürede sizi arayacaktır.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer shadow-sm text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp İle de İlet</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[10px] font-bold text-[#f27d26] uppercase tracking-wider">
                Muhammet Usta Teknik Servis
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                Servis Randevusu Oluşturun
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Aynı gün yerinde garantili arıza onarımı ve bakım hizmeti.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Mehmet Öz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    İlçe (İstanbul)
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26]"
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
                    <option value="Diğer İlçe">Diğer İstanbul İlçesi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hizmet Seçimi
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26]"
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Arıza Belirtisi / Not
                </label>
                <textarea
                  rows={2}
                  placeholder="Kısaca arızayı tarif ediniz..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#f27d26] focus:ring-1 focus:ring-[#f27d26] resize-none"
                ></textarea>
              </div>

              <div className="pt-1.5 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full bg-[#f27d26] hover:bg-[#d96a1f] text-white font-bold text-xs py-2.5 px-4 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Randevuyu Onayla
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp'tan Hızlı Gönder</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

