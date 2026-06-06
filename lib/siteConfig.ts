export const siteConfig = {
  name: 'Family & Cosmetic Dentistry',
  shortName: 'FCD Sterling Heights',
  tagline: 'Dentistry Worth Smiling About.',
  url: 'https://familyandcosmeticdentistry.com',
  phone: '(586) 800-8770',
  phoneHref: 'tel:+15868008770',
  email: 'info@familyandcosmeticdentistry.com',
  address: {
    street: '37184 Dequindre Rd',
    city: 'Sterling Heights',
    state: 'MI',
    zip: '48310',
    full: '37184 Dequindre Rd, Sterling Heights, MI 48310',
  },
  coordinates: {
    lat: 42.5653,
    lng: -83.0876,
  },
  hours: [
    { days: 'Monday & Wednesday', hours: '9:00 am – 6:00 pm', short: 'Mon & Wed' },
    { days: 'Tuesday & Thursday', hours: '8:30 am – 4:00 pm', short: 'Tue & Thu' },
    { days: 'Friday', hours: '8:30 am – 1:00 pm', short: 'Fri' },
    { days: 'Saturday', hours: '9:00 am – 1:00 pm', short: 'Sat' },
    { days: 'Sunday', hours: 'Closed', short: 'Sun' },
  ],
  social: {
    facebook: '#', // TODO: add real Facebook URL
    instagram: '#', // TODO: add real Instagram URL
    google: '#', // TODO: add real Google Business Profile URL
  },
  zipCodes: ['48310', '48312', '48313', '48314', '48317'],
  stats: [
    { value: '15+', label: 'Years Serving Sterling Heights' },
    { value: '3,000+', label: 'Smiles Transformed' },
    { value: '4.9★', label: 'Average Google Rating' },
    { value: '0%', label: 'Financing Available' },
  ],
}

export type SiteConfig = typeof siteConfig
