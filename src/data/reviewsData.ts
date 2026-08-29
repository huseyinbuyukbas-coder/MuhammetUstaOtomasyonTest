import { ReviewItem } from '../types';

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ahmet Yılmaz',
    location: 'Kadıköy, İstanbul',
    service: 'Klima Arıza ve Tamiri',
    quote: 'Klima arızamız için Muhammet Usta\'yı aradık. Çok hızlı geldiler ve sorunu kısa sürede çözdüler. İşçiliklerinden çok memnun kaldık.',
    rating: 5,
    date: '3 gün önce',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Zeynep Kara',
    location: 'Beşiktaş, İstanbul',
    service: 'Klima Bakımı',
    quote: 'Klimamızın bakımını yaptırdık. Çok ilgili ve temiz çalıştılar. Kesinlikle tavsiye ederim.',
    rating: 5,
    date: '1 hafta önce',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Mehmet Demir',
    location: 'Bakırköy, İstanbul',
    service: 'Kombi Arıza ve Servisi',
    quote: 'Kombi arızamız vardı. Telefonda yardımcı oldular ve aynı gün servis hizmeti verdiler. Teşekkür ederiz.',
    rating: 5,
    date: '2 hafta önce',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Serkan Öztürk',
    location: 'Ümraniye, İstanbul',
    service: 'Klima Montajı',
    quote: 'İşini bilen, düzgün ve güvenilir bir ekip. Klima montajımızı çok güzel yaptılar.',
    rating: 5,
    date: '3 hafta önce',
    verified: true
  }
];
