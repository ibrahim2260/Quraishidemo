export type Testimonial = {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria T.',
    location: 'Sterling Heights',
    rating: 5,
    text: "I've been coming to Dr. Quraishi for three years and I can't imagine going anywhere else. She's thorough, gentle, and takes time to explain what she's doing at every step. My crown looks completely natural — my own family can't tell which tooth it is.",
    service: 'Dental Crown',
  },
  {
    id: '2',
    name: 'James W.',
    location: 'Warren',
    rating: 5,
    text: 'Got Invisalign after putting it off for years, thinking it would be complicated. The whole process was seamless — a clear timeline, regular check-ins, and I finished six months ahead of schedule. My confidence is a completely different thing now.',
    service: 'Invisalign',
  },
  {
    id: '3',
    name: 'Sarah K.',
    location: 'Shelby Township',
    rating: 5,
    text: 'Brought my 7-year-old who has serious dental anxiety — she was trembling in the car. Dr. Quraishi was absolutely incredible with her. She left laughing and asked when we could come back. First time ever. I almost cried in the parking lot.',
    service: 'Pediatric Visit',
  },
  {
    id: '4',
    name: 'Robert M.',
    location: 'Sterling Heights',
    rating: 5,
    text: "Emergency appointment on a Friday afternoon — cracked tooth, real pain — and they got me in within the hour. Handled same day, completely pain-free. These people are genuinely exceptional. If you need a dentist you can count on, this is the place.",
    service: 'Emergency Dentistry',
  },
  {
    id: '5',
    name: 'Linda P.',
    location: 'Utica',
    rating: 5,
    text: 'Had six veneers placed and the results genuinely exceeded my expectations. Dr. Quraishi spent real time on the shade matching and the shape design — we looked at photos together and she listened. My smile looks like a better version of me. Natural, not overdone.',
    service: 'Porcelain Veneers',
  },
  {
    id: '6',
    name: 'David H.',
    location: 'Sterling Heights',
    rating: 5,
    text: "Finally got the dental implant I'd been putting off for two years. The process was explained clearly at every stage, the team was honest about timing and costs, and the result is perfect. It's been eight months — I eat whatever I want again.",
    service: 'Dental Implant',
  },
]
