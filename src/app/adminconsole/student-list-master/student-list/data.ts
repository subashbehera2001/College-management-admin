export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  year: string;
  status?: string;
}

export const STUDENTS: Student[] = [
  { id: 'STU001', name: 'Rahul Sharma', email: 'rahul@gmail.com', course: 'B.Tech Computer Science', year: '2nd Year' },
  { id: 'STU002', name: 'Priya Verma', email: 'priya@gmail.com', course: 'BBA', year: '1st Year' },
  { id: 'STU003', name: 'Aman Kumar', email: 'aman@gmail.com', course: 'B.Tech Electrical', year: '3rd Year' },
  { id: 'STU004', name: 'Sneha Patel', email: 'sneha@gmail.com', course: 'BCA', year: '2nd Year' },
  { id: 'STU005', name: 'Vikram Singh', email: 'vikram@gmail.com', course: 'B.Tech Mechanical', year: '4th Year' },
  { id: 'STU006', name: 'Ananya Gupta', email: 'ananya@gmail.com', course: 'B.Tech Information Technology', year: '1st Year' },
];
