import { MenuItemType } from '@/app/types/layout';

type UserDropdownItemType = {
  label?: string;
  icon?: string;
  url?: string;
  isDivider?: boolean;
  isHeader?: boolean;
  class?: string;
};

export const userDropdownItems: UserDropdownItemType[] = [
  {
    label: 'Profile',
    icon: 'tablerUserCircle',
    url: '/settings/profile',
  },
  {
    label: 'Change Password',
    icon: 'tablerLock',
    url: '/settings/change-password',
  },
  {
    isDivider: true,
  },
  {
    label: 'Log Out',
    icon: 'tablerLogout2',
    url: '/logout',
    class: 'fw-semibold text-danger',
  },
];

export const menuItems: MenuItemType[] = [
  {
    label: 'Dashboard',
    icon: 'tablerGauge',
    url: '/dashboard',
  },
  {
    label: 'Student List',
    icon: 'tablerUsers',
    url: '/student-list',
  },
  {
    label: 'Faculty List',
    icon: 'tablerUserCheck',
    url: '/faculty',
  },
  {
    label: 'Course List',
    icon: 'tablerBook',
    url: '/courses',
  },
  {
    label: 'Subject List',
    icon: 'tablerBook2',
    url: '/subjects',
  },
  {
    label: 'Attendance',
    icon: 'tablerCalendarCheck',
    children: [
      {
        label: 'Student Attendance',
        url: '/attendance/student-attendance',
      },
      {
        label: 'Attendance Report',
        url: '/attendance/attendance-report',
      },
    ],
  },
  {
    label: 'Examinations',
    icon: 'tablerClipboardCheck',
    children: [
      {
        label: 'Exam List',
        url: '/examinations/exam-list',
      },
      {
        label: 'Marks Entry',
        url: '/examinations/marks-entry',
      },
      {
        label: 'Results',
        url: '/examinations/results',
      },
    ],
  },
  {
    label: 'Fees',
    icon: 'tablerWallet',
    children: [
      {
        label: 'Fee Collection',
        url: '/fees/fee-collection',
      },
      {
        label: 'Payment History',
        url: '/fees/payment-history',
      },
    ],
  },
  {
    label: 'Notice Board',
    icon: 'tablerSpeakerphone',
    url: '/notices',
  },
  {
    label: 'Reports',
    icon: 'tablerChartBar',
    children: [
      {
        label: 'Student Report',
        url: '/reports/student-report',
      },
      {
        label: 'Attendance Report',
        url: '/reports/attendance-report',
      },
      {
        label: 'Fee Report',
        url: '/reports/fee-report',
      },
      {
        label: 'Result Report',
        url: '/reports/result-report',
      },
    ],
  },
  {
    label: 'Settings',
    icon: 'tablerSettings',
    children: [
      {
        label: 'Profile',
        url: '/settings/profile',
      },
      {
        label: 'Change Password',
        url: '/settings/change-password',
      },
    ],
  },
  {
    label: 'Logout',
    icon: 'tablerLogout',
    url: '/logout',
  },
];
