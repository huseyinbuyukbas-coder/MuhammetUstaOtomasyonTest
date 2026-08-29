export interface ServiceItem {
  id: string;
  title: string;
  category: 'klima' | 'kombi' | 'bakim';
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  iconName: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'genel' | 'klima' | 'kombi' | 'garanti';
}

export interface AppointmentFormState {
  fullName: string;
  phone: string;
  district: string;
  serviceType: string;
  brand: string;
  notes: string;
  preferredTime: string;
}
