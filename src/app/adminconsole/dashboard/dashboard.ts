import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { ChartConfiguration } from 'chart.js'
import { Chartjs } from '@app/components/chartjs'
import { getColor } from '@/app/utils/color-utils'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIcon, Chartjs],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
  stats = [
    {
      title: 'Total Students',
      value: '1,245',
      icon: 'tablerUsers',
      bgColor: '#e0e7ff',
      iconColor: '#4338ca',
    },
    {
      title: 'Total Teachers',
      value: '85',
      icon: 'tablerAward',
      bgColor: '#a7f3d0',
      iconColor: '#065f46',
    },
    {
      title: 'Total Courses',
      value: '42',
      icon: 'tablerCertificate',
      bgColor: '#fed7aa',
      iconColor: '#c2410c',
    },
    {
      title: 'Total Departments',
      value: '12',
      icon: 'tablerBuilding',
      bgColor: '#fecdd3',
      iconColor: '#9d174d',
    },
  ]

  studentOverview = {
    total: 1245,
    male: 683,
    female: 542,
    others: 20,
  }

  attendance = {
    average: '78.6%',
    present: 2890,
    absent: 786,
  }

  feeCollection = {
    total: 'Rs. 24,500.00',
    collected: 'Rs. 18,620.00',
    pending: 'Rs. 5,880.00',
    percent: 76,
  }

  notices = [
    { title: 'College Annual Day Celebration', date: '16 Aug 2025', icon: 'tablerCalendar' },
    { title: 'Mid Term Examination Schedule', date: '14 Aug 2025', icon: 'tablerCalendar' },
    { title: 'Holiday on 19th August', date: '12 Aug 2025', icon: 'tablerCalendar' },
    { title: 'Sports Event Registration', date: '10 Aug 2025', icon: 'tablerCalendar' },
  ]

  events = [
    { day: '20', month: 'AUG', title: 'Department Meeting', time: '10:00 AM', location: 'Conference Hall', color: '#a855f7' },
    { day: '25', month: 'AUG', title: 'Parent-Teacher Meeting', time: '11:00 AM', location: 'Seminar Hall', color: '#22c55e' },
    { day: '30', month: 'AUG', title: 'Annual Sports Day', time: '09:00 AM', location: 'College Ground', color: '#f59e0b' },
  ]

  recentStudents = [
    { id: 'STU001', name: 'Rahul Sharma', course: 'B.Tech Computer Science', year: '2nd Year', email: 'rahul@gmail.com', contact: '9876543210', status: 'Active' },
    { id: 'STU002', name: 'Priya Verma', course: 'BBA', year: '1st Year', email: 'priya@gmail.com', contact: '9876543211', status: 'Active' },
    { id: 'STU003', name: 'Aman Kumar', course: 'B.Tech Electrical', year: '3rd Year', email: 'aman@gmail.com', contact: '9876543212', status: 'Active' },
    { id: 'STU004', name: 'Sneha Patel', course: 'BCA', year: '2nd Year', email: 'sneha@gmail.com', contact: '9876543213', status: 'Active' },
    { id: 'STU005', name: 'Adarsh Pradhan', course: 'MCA', year: '1st Year', email: 'aradsh@gmail.com', contact: '7895546676', status: 'Active' },
    { id: 'STU006', name: 'Nandini Satpathy', course: 'BBA', year: '2nd Year', email: 'nandini@gmail.com', contact: '9876543214', status: 'Active' },
  ]

  studentChartOptions = (): ChartConfiguration<'doughnut'> => ({
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [this.studentOverview.male, this.studentOverview.female, this.studentOverview.others],
          backgroundColor: ['#3b82f6', '#ec4899', '#f97316'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '75%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
    plugins: [
      {
        id: 'centerText',
        beforeDraw: (chart: any) => {
          const { ctx, chartArea } = chart
          const { width, height, top, left } = chartArea
          ctx.save()
          ctx.font = 'bold 20px Geist, sans-serif'
          ctx.fillStyle = getColor('body-color')
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(this.studentOverview.total.toString(), left + width / 2, top + height / 2 - 6)
          ctx.font = '11px Geist, sans-serif'
          ctx.fillStyle = getColor('secondary-color')
          ctx.fillText('Total Students', left + width / 2, top + height / 2 + 12)
          ctx.restore()
        },
      },
    ],
  })

  attendanceChartOptions = (): ChartConfiguration<'line'> => ({
    type: 'line',
    data: {
      labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug', '18 Aug'],
      datasets: [
        {
          label: 'Attendance',
          data: [82, 79, 85, 78, 81, 76, 80, 77, 83, 79, 82, 75, 80, 78, 84, 81, 77, 80],
          borderColor: '#1e40af',
          backgroundColor: 'rgba(30,64,175,0.12)',
          fill: true,
          tension: 0.42,
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
          borderWidth: 4,
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25,
            callback: (value: string | number) => `${value}%`,
            color: getColor('secondary-color'),
          },
          grid: {
            color: getColor('border-color'),
          },
        },
        x: {
          grid: { display: false },
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            color: getColor('secondary-color'),
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: getColor('body-bg'),
          titleColor: getColor('body-color'),
          bodyColor: getColor('body-color'),
          borderColor: getColor('border-color'),
          borderWidth: 1,
          callbacks: {
            label: (context: any) => context.parsed.y + '%',
          },
        },
      },
      elements: {
        point: { radius: 0 },
        line: { borderJoinStyle: 'round', borderCapStyle: 'round' },
      },
    },
  })
}
