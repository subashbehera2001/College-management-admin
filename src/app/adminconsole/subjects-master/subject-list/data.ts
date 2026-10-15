export interface Subject {
  code: string;
  name: string;
  course: string;
  semester: string;
  type: 'Theory' | 'Practical' | 'Elective';
  credits: number;
  faculty: string;
  status?: 'Active' | 'Inactive';
}

export const SUBJECTS_DATA: Subject[] = [
  {
    code: 'CS301',
    name: 'Data Structures & Algorithms',
    course: 'B.Tech Computer Science',
    semester: 'Semester 3',
    type: 'Theory',
    credits: 4,
    faculty: 'Dr. Ramesh Chandra',
  },
  {
    code: 'CS302',
    name: 'Data Structures Lab',
    course: 'B.Tech Computer Science',
    semester: 'Semester 3',
    type: 'Practical',
    credits: 2,
    faculty: 'Dr. Ramesh Chandra',
  },
  {
    code: 'CS401',
    name: 'Operating Systems & Architecture',
    course: 'B.Tech Computer Science',
    semester: 'Semester 4',
    type: 'Theory',
    credits: 4,
    faculty: 'Dr. Meenakshi Sahoo',
  },
  {
    code: 'EC301',
    name: 'Digital Signal Processing',
    course: 'B.Tech Electronics',
    semester: 'Semester 3',
    type: 'Theory',
    credits: 3,
    faculty: 'Dr. Anita Roy',
  },
  {
    code: 'ME402',
    name: 'Thermodynamics & Heat Transfer',
    course: 'B.Tech Mechanical',
    semester: 'Semester 4',
    type: 'Theory',
    credits: 4,
    faculty: 'Prof. Rajesh Mishra',
  },
  {
    code: 'BCA201',
    name: 'Web Technologies & PHP',
    course: 'BCA',
    semester: 'Semester 2',
    type: 'Practical',
    credits: 3,
    faculty: 'Prof. Alok Dash',
  },
  {
    code: 'CS505',
    name: 'Machine Learning Fundamentals',
    course: 'B.Tech Computer Science',
    semester: 'Semester 5',
    type: 'Elective',
    credits: 3,
    faculty: 'Dr. Ramesh Chandra',
  },
];
