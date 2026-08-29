import { FaqItem } from '../types';

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'genel',
    question: 'Servis kaydı oluşturduktan sonra ne kadar sürede geliyorsunuz?',
    answer: 'İstanbul içi acil arıza çağrılarında bölgenizdeki en yakın mobil servis aracımızı yönlendirerek ortalama 45 - 90 dakika içerisinde adresinize ulaşıyoruz. Yoğun saatlerde veya randevulu işlemlerde sizin belirleyeceğiniz saat diliminde tam vaktinde hizmet veriyoruz.'
  },
  {
    id: 'faq-2',
    category: 'garanti',
    question: 'Yapılan tamir ve değiştirilen parçalar garantili midir?',
    answer: 'Evet. Muhammet Usta Teknik Servisi olarak gerçekleştirdiğimiz tüm tamir işlemleri, montaj işçiliği ve kullandığımız orijinal sıfır yedek parçalar 1 Yıl resmi servis garantisi altındadır. İşlem sonrasında tarafınıza kaşeli servis fişi ve garanti belgesi takdim edilir.'
  },
  {
    id: 'faq-3',
    category: 'klima',
    question: 'Klima bakımı ne sıklıkla yapılmalıdır?',
    answer: 'Klimalar hem yaz hem kış kullanılıyorsa yılda 2 kez (yaz ve kış başlangıcında), sadece yazın soğutma amacıyla kullanılıyorsa yılda en az 1 kez periyodik antibakteriyel bakım yapılmalıdır. Bu işlem filtrelerdeki lejyoner bakterisi ve tozları yok eder, solunum sağlığınızı korur ve %30 elektrik tasarrufu sağlar.'
  },
  {
    id: 'faq-4',
    category: 'kombi',
    question: 'Kombi bakımı ve petek temizliği ne zaman yaptırılmalıdır?',
    answer: 'Kombi bakımı her sonbahar döneminde kışa girmeden önce yaptırılmalıdır. Petek temizliği ise 2-3 yılda bir radyatör içerisinde biriken balçık ve kireci arındırmak için önerilir. Böylece peteklerin altı da üstü gibi eşit ısınır ve faturada %25\'e varan tasarruf sağlanır.'
  },
  {
    id: 'faq-5',
    category: 'genel',
    question: 'Servis ücreti ve fiyatlandırma nasıl belirlenir?',
    answer: 'Servisimizde şeffaf fiyat politikası esastır. Teknisyenimiz arıza tespitini yaptıktan sonra işlem yapmadan önce net maliyeti size bildirir. Onayınız olmadan kesinlikle ekstra işlem yapılmaz ve sürpriz ücret çıkarılmaz.'
  },
  {
    id: 'faq-6',
    category: 'kombi',
    question: 'Hangi marka kombi ve klimalara servis veriyorsunuz?',
    answer: 'Demirdöküm, Baymak, Vaillant, E.C.A., Bosch, Daikin, Mitsubishi Electric, Buderus, Viessmann, Arçelik, Beko, Vestel, Airfel, Alarko dahil piyasadaki tüm yerli ve yabancı kombi ve klima markalarına uzman ekibimizle servis hizmeti sunuyoruz.'
  }
];

export const istanbulDistricts = [
  'Kadıköy', 'Beşiktaş', 'Bakırköy', 'Ümraniye', 'Ataşehir', 
  'Maltepe', 'Şişli', 'Sarıyer', 'Üsküdar', 'Beylikdüzü', 
  'Kartal', 'Pendik', 'Tuzla', 'Bahçelievler', 'Zeytinburnu', 
  'Fatih', 'Eyüpsultan', 'Gaziosmanpaşa', 'Küçükçekmece', 
  'Avcılar', 'Başakşehir', 'Esenyurt', 'Sancaktepe', 'Çekmeköy'
];

export const supportedBrands = [
  { name: 'Baymak', logo: 'BAYMAK' },
  { name: 'DemirDöküm', logo: 'DEMİRDÖKÜM' },
  { name: 'Vaillant', logo: 'VAILLANT' },
  { name: 'Bosch', logo: 'BOSCH' },
  { name: 'E.C.A.', logo: 'E.C.A.' },
  { name: 'Daikin', logo: 'DAIKIN' },
  { name: 'Mitsubishi', logo: 'MITSUBISHI' },
  { name: 'Buderus', logo: 'BUDERUS' },
  { name: 'Viessmann', logo: 'VIESSMANN' },
  { name: 'Arçelik', logo: 'ARÇELİK' },
  { name: 'Airfel', logo: 'AIRFEL' },
  { name: 'Alarko', logo: 'ALARKO' }
];
