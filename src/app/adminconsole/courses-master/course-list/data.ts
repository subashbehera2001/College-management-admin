export interface Course {
  code: string;
  name: string;
  department: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Diploma';
  duration: string;
  totalSemesters: number;
  totalCredits: number;
  intake: number;
  status: 'Active' | 'Inactive';
}

export const COURSES_DATA: Course[] = [
  {
    code: 'BTECH-CSE',
    name: 'B.Tech in Computer Science & Engineering',
    department: 'Computer Science',
    level: 'Undergraduate',
    duration: '4 Years',
    totalSemesters: 8,
    totalCredits: 160,
    intake: 120,
    status: 'Active',
  },
  {
    code: 'BTECH-ECE',
    name: 'B.Tech in Electronics & Communication',
    department: 'Electronics & Comm.',
    level: 'Undergraduate',
    duration: '4 Years',
    totalSemesters: 8,
    totalCredits: 160,
    intake: 90,
    status: 'Active',
  },
  {
    code: 'BTECH-MECH',
    name: 'B.Tech in Mechanical Engineering',
    department: 'Mechanical Eng.',
    level: 'Undergraduate',
    duration: '4 Years',
    totalSemesters: 8,
    totalCredits: 160,
    intake: 60,
    status: 'Active',
  },
  {
    code: 'BCA',
    name: 'Bachelor of Computer Applications',
    department: 'Computer Science',
    level: 'Undergraduate',
    duration: '3 Years',
    totalSemesters: 6,
    totalCredits: 120,
    intake: 80,
    status: 'Active',
  },
  {
    code: 'BBA',
    name: 'Bachelor of Business Administration',
    department: 'Business Administration',
    level: 'Undergraduate',
    duration: '3 Years',
    totalSemesters: 6,
    totalCredits: 120,
    intake: 60,
    status: 'Active',
  },
  {
    code: 'MTECH-AI',
    name: 'M.Tech in Artificial Intelligence',
    department: 'Computer Science',
    level: 'Postgraduate',
    duration: '2 Years',
    totalSemesters: 4,
    totalCredits: 80,
    intake: 30,
    status: 'Active',
  },
  {
    code: 'DIP-AUTO',
    name: 'Diploma in Automobile Engineering',
    department: 'Mechanical Eng.',
    level: 'Diploma',
    duration: '3 Years',
    totalSemesters: 6,
    totalCredits: 100,
    intake: 45,
    status: 'Inactive',
  },
];
