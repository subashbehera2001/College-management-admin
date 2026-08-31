export interface Student {
  id: string
  name: string
  email: string
  course: string
  year: string
  status: 'Active' | 'Inactive' | 'Pending'
}

export const STUDENTS: Student[] = [
  { id: 'STU001', name: 'Rahul Sharma', email: 'rahul@gmail.com', course: 'B.Tech Computer Science', year: '2nd Year', status: 'Active' },
  { id: 'STU002', name: 'Priya Verma', email: 'priya@gmail.com', course: 'BBA', year: '1st Year', status: 'Active' },
  { id: 'STU003', name: 'Aman Kumar', email: 'aman@gmail.com', course: 'B.Tech Electrical', year: '3rd Year', status: 'Active' },
  { id: 'STU004', name: 'Sneha Patel', email: 'sneha@gmail.com', course: 'BCA', year: '2nd Year', status: 'Active' },
  { id: 'STU005', name: 'Vikram Singh', email: 'vikram@gmail.com', course: 'B.Tech Mechanical', year: '4th Year', status: 'Inactive' },
]
