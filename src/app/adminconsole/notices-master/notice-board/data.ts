export interface CollegeNotice {
  id: string;
  title: string;
  category: 'Academic' | 'Examinations' | 'Events' | 'Holiday' | 'Administrative';
  targetAudience: 'All' | 'Students' | 'Faculty';
  publishDate: string;
  expiryDate: string;
  description: string;
  attachmentName?: string;
  status: 'Published' | 'Draft' | 'Archived';
}

export const NOTICES_DATA: CollegeNotice[] = [
  {
    id: 'NTC-2026-01',
    title: 'Commencement of Mid-Semester Examinations 2026',
    category: 'Examinations',
    targetAudience: 'Students',
    publishDate: '2026-03-01',
    expiryDate: '2026-03-25',
    description: 'All students are hereby informed that mid-semester assessments will commence from March 15th, 2026. Detailed time tables are posted on notice board.',
    attachmentName: 'MidTerm_Schedule_2026.pdf',
    status: 'Published',
  },
  {
    id: 'NTC-2026-02',
    title: 'Annual Tech Fest "INNOVISION 2026" Registrations Open',
    category: 'Events',
    targetAudience: 'All',
    publishDate: '2026-02-25',
    expiryDate: '2026-03-30',
    description: 'Registrations are open for hackathons, robotics challenges, and paper presentations at Innovision 2026. Register via student portal.',
    attachmentName: 'Innovision_Brochure.pdf',
    status: 'Published',
  },
  {
    id: 'NTC-2026-03',
    title: 'Campus Placement Drive: TCS & Infosys Scheduled',
    category: 'Academic',
    targetAudience: 'Students',
    publishDate: '2026-02-20',
    expiryDate: '2026-03-10',
    description: 'Final year B.Tech and BCA students eligible for TCS Ninja and Infosys campus drives must complete profile verification in the placement cell.',
    attachmentName: 'Placement_Guidelines.pdf',
    status: 'Published',
  },
  {
    id: 'NTC-2026-04',
    title: 'Faculty Development Program on Generative AI',
    category: 'Administrative',
    targetAudience: 'Faculty',
    publishDate: '2026-02-18',
    expiryDate: '2026-03-05',
    description: 'A 5-day AICTE sponsored FDP on Generative AI & Machine Learning applications will be held at Seminar Hall A.',
    attachmentName: 'FDP_Agenda.pdf',
    status: 'Published',
  },
  {
    id: 'NTC-2026-05',
    title: 'Public Holiday Notification: Holi Festival',
    category: 'Holiday',
    targetAudience: 'All',
    publishDate: '2026-03-02',
    expiryDate: '2026-03-08',
    description: 'The college campus, classrooms and administrative offices will remain closed on the auspicious occasion of Holi.',
    status: 'Published',
  },
];
