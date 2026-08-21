export interface Student {
  id: string
  name: string
  email: string
  course: string
  year: string
  contact: string
  status: 'Active' | 'Inactive' | 'Pending'
  gender: 'Male' | 'Female' | 'Other'
  admissionDate: string
}

export const STUDENTS: Student[] = [
  { id: 'STU001', name: 'Rahul Sharma', email: 'rahul@gmail.com', course: 'B.Tech Computer Science', year: '2nd Year', contact: '9876543210', status: 'Active', gender: 'Male', admissionDate: '2023-07-15' },
  { id: 'STU002', name: 'Priya Verma', email: 'priya@gmail.com', course: 'BBA', year: '1st Year', contact: '9876543211', status: 'Active', gender: 'Female', admissionDate: '2024-01-10' },
  { id: 'STU003', name: 'Aman Kumar', email: 'aman@gmail.com', course: 'B.Tech Electrical', year: '3rd Year', contact: '9876543212', status: 'Active', gender: 'Male', admissionDate: '2022-08-22' },
  { id: 'STU004', name: 'Sneha Patel', email: 'sneha@gmail.com', course: 'BCA', year: '2nd Year', contact: '9876543213', status: 'Active', gender: 'Female', admissionDate: '2023-11-05' },
  { id: 'STU005', name: 'Vikram Singh', email: 'vikram@gmail.com', course: 'B.Tech Mechanical', year: '4th Year', contact: '9876543214', status: 'Inactive', gender: 'Male', admissionDate: '2021-06-18' },
]
