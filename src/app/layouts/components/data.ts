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
    label: 'Welcome back!',
    isHeader: true,
  },
  {
    label: 'Profile',
    icon: 'tablerUserCircle',
    url: 'pages-profile.html',
  },
  {
    label: 'Notifications',
    icon: 'tablerBellRinging',
    url: '#',
  },
  {
    label: 'Balance: $985.25',
    icon: 'tablerCreditCard',
    url: '#',
  },
  {
    label: 'Account Settings',
    icon: 'tablerSettings2',
    url: '#',
  },
  {
    label: 'Support Center',
    icon: 'tablerHeadset',
    url: '#',
  },
  {
    isDivider: true,
  },
  {
    label: 'Lock Screen',
    icon: 'tablerLock',
    url: 'auth-lock-screen.html',
  },
  {
    label: 'Log Out',
    icon: 'tablerLogout2',
    url: '#',
    class: 'fw-semibold',
  },
]

export const menuItems: MenuItemType[] = [
  { label: 'Dashboard', icon: 'lucideCircleGauge', url: '/dashboard' },
  {
    label: 'Ton AI',
    icon: 'lucideSparkles',
    url: '/ton-ai',
    badge: { text: 'Hot', variant: 'primary' },
  },
  { label: 'Calendar', icon: 'lucideCalendar', url: '/calendar' },
  { label: 'Directory', icon: 'lucideBookUser', url: '/directory' },
]
