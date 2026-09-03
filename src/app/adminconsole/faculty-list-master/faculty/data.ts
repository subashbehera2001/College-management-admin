export interface Faculty {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  experience: string;
  joiningDate: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export const FACULTY_DATA: Faculty[] = [
  {
    id: 'FAC001',
    name: 'Dr. Ramesh Chandra',
    email: 'ramesh.chandra@college.edu',
    phone: '+91 98450 12345',
    department: 'Computer Science',
    designation: 'Professor & HOD',
    qualification: 'Ph.D in AI & Robotics',
    experience: '15 Years',
    joiningDate: '2012-08-10',
    status: 'Active',
  },
  {
    id: 'FAC002',
    name: 'Dr. Anita Roy',
    email: 'anita.roy@college.edu',
    phone: '+91 98450 23456',
    department: 'Electronics & Comm.',
    designation: 'Associate Professor',
    qualification: 'Ph.D in VLSI Design',
    experience: '11 Years',
    joiningDate: '2015-01-15',
    status: 'Active',
  },
  {
    id: 'FAC003',
    name: 'Prof. Rajesh Mishra',
    email: 'rajesh.mishra@college.edu',
    phone: '+91 98450 34567',
    department: 'Mechanical Eng.',
    designation: 'Assistant Professor',
    qualification: 'M.Tech in Thermodynamics',
    experience: '6 Years',
    joiningDate: '2018-07-20',
    status: 'Active',
  },
  {
    id: 'FAC004',
    name: 'Dr. Sunita Pattnaik',
    email: 'sunita.p@college.edu',
    phone: '+91 98450 45678',
    department: 'Business Administration',
    designation: 'Associate Professor',
    qualification: 'Ph.D in Finance & Marketing',
    experience: '10 Years',
    joiningDate: '2016-09-01',
    status: 'On Leave',
  },
  {
    id: 'FAC005',
    name: 'Prof. Alok Dash',
    email: 'alok.dash@college.edu',
    phone: '+91 98450 56789',
    department: 'Civil Engineering',
    designation: 'Assistant Professor',
    qualification: 'M.Tech in Structural Eng.',
    experience: '4 Years',
    joiningDate: '2020-02-12',
    status: 'Active',
  },
  {
    id: 'FAC006',
    name: 'Dr. Meenakshi Sahoo',
    email: 'meenakshi.s@college.edu',
    phone: '+91 98450 67890',
    department: 'Computer Science',
    designation: 'Assistant Professor',
    qualification: 'Ph.D in Cloud Computing',
    experience: '7 Years',
    joiningDate: '2019-11-05',
    status: 'Inactive',
  },
];
