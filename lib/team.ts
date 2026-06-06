export type TeamMember = {
  id: string
  name: string
  title: string
  bio: string[]
  credentials: string[]
  imageUrl: string
}

export const drQuraishi: TeamMember = {
  id: 'dr-quraishi',
  name: 'Dr. Karen Quraishi',
  title: 'DDS — Lead Dentist & Practice Owner',
  bio: [
    'Dr. Karen Quraishi has been caring for patients in the Sterling Heights community for over 15 years. Her approach to dentistry is built on a simple belief: every person who sits in that chair deserves to feel genuinely heard, respected, and well cared for — from the moment they walk in to the moment they leave.',
    'She earned her Doctor of Dental Surgery degree with distinction and has dedicated herself to continuous learning ever since — completing advanced training in cosmetic dentistry, implant restoration, and TMJ therapy. She believes that exceptional technical skill and genuine human warmth are not mutually exclusive — and her patients agree.',
    '"The best part of my work has nothing to do with teeth. It is watching someone who came in covering their smile walk out standing a little taller. That never gets old."',
  ],
  credentials: [
    'Doctor of Dental Surgery (DDS)',
    'American Dental Association — Member',
    'Michigan Dental Association — Member',
    'Invisalign Certified Provider',
    'Advanced Cosmetic Dentistry Training',
    'Ongoing CE — 40+ hours annually',
  ],
  imageUrl:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&h=1125&fit=crop&crop=faces&q=85', // TODO: replace with Dr. Quraishi's professional headshot
}

export const teamMembers: TeamMember[] = [drQuraishi]
