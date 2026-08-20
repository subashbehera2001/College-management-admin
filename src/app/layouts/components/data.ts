import { MenuItemType } from '@/app/types/layout'

type UserDropdownItemType = {
  label?: string
  icon?: string
  url?: string
  isDivider?: boolean
  isHeader?: boolean
  class?: string
}

export const userDropdownItems: UserDropdownItemType[] = [
 
  {
    label: 'Profile',
    icon: 'tablerUserCircle',
    url: 'pages-profile.html',
  },
  {
    label: 'Log Out',
    icon: 'tablerLogout2',
    url: '#',
    class: 'fw-semibold',
  },
]

export const menuItems: MenuItemType[] = [
  
  {
    label: 'Dashboard',
    icon: 'tablerGauge',
    url: '/dashboard',
  },

  {
    isDivider: true,
  },

  {
  label: 'Students',
  children: [
    
    {
      label: 'Add Student',
      icon: 'tablerUserPlus',
      url: '/students/add',
    },
    {
      label: 'Student List',
      icon: 'tablerUsers',
      url: '/students',
    },
    
  ],
},
]
