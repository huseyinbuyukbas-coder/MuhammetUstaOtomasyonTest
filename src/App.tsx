import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandsSection } from './components/BrandsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CoverageSection } from './components/CoverageSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';
import { Toast } from './components/Toast';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    // Scroll smoothly to contact section with selected service
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-[#f27d26] selection:text-white pb-16 md:pb-0 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />

      {/* 1. Üst Menü */}
      <Navbar onOpenBookingModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Bölümü */}
        <Hero onOpenBookingModal={handleOpenModal} />

        {/* Güven & Sayılar Şeridi */}
        <StatsBar />

        {/* 3. Hizmetler (Tüm 9 Hizmet) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Neden Muhammet Usta? */}
        <WhyUsSection />

        {/* 5. Çalışma Süreci */}
        <ProcessSection />

        {/* Markalar & Uyumluluk */}
        <BrandsSection />

        {/* 6. Müşteri Yorumları (4 Gerçek Yorum) */}
        <TestimonialsSection />

        {/* 7. Sık Sorulan Sorular */}
        <FaqSection />

        {/* İstanbul İlçe Hizmet Ağı (Local SEO) */}
        <CoverageSection />

        {/* 8. İletişim & Servis Randevu Formu */}
        <ContactSection 
          initialService={selectedService} 
          onSuccessToast={(msg) => setToastMessage(msg)}
        />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobil Cihazlar İçin Kolay Arama & WhatsApp Sabit Butonları */}
      <MobileStickyBar />
    </div>
  );
}
