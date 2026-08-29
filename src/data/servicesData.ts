import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'klima-servisi',
    title: 'Klima Servisi',
    category: 'klima',
    shortDesc: 'Tüm marka ve modeller için yerinde kapsamlı teknik kontrol, teşhis ve profesyonel servis çözümleri.',
    fullDesc: 'İstanbul genelinde split, inverter, kaset tipi ve multi klima sistemlerinde periyodik kontrol, gaz ölçümü, performans optimizasyonu ve yerinde teknik servis desteği sunuyoruz.',
    highlights: ['Tüm Markalara Uyumlu', 'Aynı Gün Yerinde Servis', 'Detaylı Performans Testi', '1 Yıl Servis Güvencesi'],
    iconName: 'Wind',
    popular: true
  },
  {
    id: 'klima-bakimi',
    title: 'Klima Bakımı',
    category: 'bakim',
    shortDesc: 'Antibakteriyel detaylı temizlik, filtre dezenfeksiyonu ve gaz basınç kontrolü ile sağlıklı ve verimli serinlik.',
    fullDesc: 'Klimanızın iç ve dış ünitelerini özel kimyasallarla dezenfekte ediyor, mikrop ve koku oluşumunu engelliyor, %30\'a varan elektrik tasarrufu sağlıyoruz.',
    highlights: ['İlaçlı Serpantin Temizliği', 'Filtre Dezenfeksiyonu', 'R410A / R32 Gaz Kontrolü', 'Enerji Tasarrufu Sağlar'],
    iconName: 'Sparkles',
    popular: true
  },
  {
    id: 'klima-montaji',
    title: 'Klima Montajı',
    category: 'klima',
    shortDesc: 'Doğru keşif, estetik ve güvenli borulama, vakumleme ve kusursuz kurulum ile uzun ömürlü kullanım.',
    fullDesc: 'Uzman teknisyenlerimizle ev veya iş yerinizde doğru kapasite tespiti yapıyor, standartlara uygun bakır borulama, drenaj ve profesyonel vakumlama ile cihazınızı kuruyoruz.',
    highlights: ['Hatasız Vakumlama', 'Estetik Borulama & İzolasyon', 'Söküm & Nakil Hizmeti', 'Garanti Kapsamında Kurulum'],
    iconName: 'Wrench'
  },
  {
    id: 'klima-ariza-tamiri',
    title: 'Klima Arıza ve Tamiri',
    category: 'klima',
    shortDesc: 'Soğutmama, ısıtmama, su akıtma, ses veya kompresör arızalarına hızlı ve garantili parça değişimi.',
    fullDesc: 'Klimanızın arıza kodlarını dijital cihazlarla tespit ediyor; anakart, fan motoru, sensör, 4 yollu vana veya gaz kaçaklarını orijinal yedek parçalarla onarıyoruz.',
    highlights: ['Hızlı Arıza Tespiti', 'Orijinal Yedek Parça', 'Gaz Kaçağı & Kaynak Onarımı', '1 Yıl Parça Garantisi'],
    iconName: 'ShieldAlert',
    popular: true
  },
  {
    id: 'kombi-servisi',
    title: 'Kombi Servisi',
    category: 'kombi',
    shortDesc: 'Kışa hazır, güvenli ve yüksek verimli ısınma için uzman kombi genel teknik kontrol ve bakım servisi.',
    fullDesc: 'Hermetik ve yoğuşmalı tüm kombi markalarında yanma verimliliği kontrolü, emniyet ventili, genleşme tankı ve sirkülasyon pompası kontrollerini eksiksiz yapıyoruz.',
    highlights: ['7/24 Acil Müdahale', 'Doğalgaz Kaçak Kontrolü', 'Tüm Markalarda Uzmanlık', 'TSE Belgeli Ekipman'],
    iconName: 'Flame',
    popular: true
  },
  {
    id: 'kombi-bakimi',
    title: 'Kombi Bakımı',
    category: 'bakim',
    shortDesc: 'Yıllık periyodik kombi bakımı ile doğalgaz faturanız düşsün, güvenliğiniz ve kombinizin ömrü artsın.',
    fullDesc: 'Brülör temizliği, ateşleme ve iyonizasyon elektrot bakımı, fan motoru temizliği, genleşme tankı hava basımı ve su sızdırmazlık testleri titizlikle gerçekleştirilir.',
    highlights: ['%25\'e Varan Fatura Tasarrufu', 'Brülör & Yanma Odası Temizliği', 'Genleşme Tankı Basınç Ayarı', 'Emniyet Sistemleri Testi'],
    iconName: 'ShieldCheck',
    popular: true
  },
  {
    id: 'kombi-ariza-tamiri',
    title: 'Kombi Arıza ve Tamiri',
    category: 'kombi',
    shortDesc: 'Sıcak su gelmeme, peteklerin ısınmaması, basınç düşmesi veya sesli çalışma arızalarına kesin çözüm.',
    fullDesc: 'Elektronik kart tamiri, 3 yollu vana onarımı, eşanjör değişimi, ntc sensör yenileme ve su basma arızalarını aynı gün içinde yerinde çözüme kavuşturuyoruz.',
    highlights: ['Aynı Gün Yerinde Onarım', 'Elektronik Kart Tamiri', 'Orijinal Sıfır Parça', 'Yazılı Servis Fişi & Garanti'],
    iconName: 'Zap'
  },
  {
    id: 'petek-temizligi',
    title: 'Petek Temizliği',
    category: 'bakim',
    shortDesc: 'Özel çift yönlü makineli ve koruyucu kimyasallı petek temizliği ile eviniz eşit ve yüksek verimle ısınsın.',
    fullDesc: 'Radyatörlerin içinde biriken kireç, balçık ve tortuları petekleri sökmeden, etrafı kirletmeden profesyonel yıkama makineleri ve nötralize kimyasallarla tahliye ediyoruz.',
    highlights: ['Evi Kirletmeden İşlem', 'Çift Yönlü Darbeli Yıkama', 'Koruyucu Kimyasal Uygulaması', 'Eşit ve Yüksek Isınma'],
    iconName: 'Droplets'
  },
  {
    id: 'kombi-montaji',
    title: 'Kombi Montajı',
    category: 'kombi',
    shortDesc: 'İGDAŞ standartlarına ve gaz dağıtım kurallarına uygun, güvenli ve projeli kombi değişimi ve montajı.',
    fullDesc: 'Eski kombinizin sökümü, yeni yoğuşmalı kombinizin emniyetli montajı, baca eğimi ayarı, yoğuşma gider bağlantısı ve gaz sızdırmazlık testleri profesyonellikle yapılır.',
    highlights: ['İGDAŞ Şartnamesine Uygun', 'Eski Kombi Sökümü', 'Yoğuşma Gideri Çekimi', 'Doğalgaz Uygunluk Onayı'],
    iconName: 'Settings'
  }
];
