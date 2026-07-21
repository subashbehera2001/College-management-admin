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

  { label: 'Custom Pages', isTitle: true },
  {
    label: 'Pages',
    icon: 'lucideNotebookText',
    isCollapsed: true,
    children: [
      { label: 'Pricing', url: '/pages/pricing' },
      { label: 'Empty Page', url: '/pages/empty' },
      { label: 'Timeline', url: '/pages/timeline' },
      { label: 'Terms & Conditions', url: '/pages/terms-conditions' },
      { label: 'Invoice', url: '/pages/invoice' },
    ],
  },
  {
    label: 'Authentication',
    icon: 'lucideFingerprint',
    isCollapsed: true,
    children: [
      { label: 'Sign In', url: '/auth/sign-in' },
      { label: 'Sign Up', url: '/auth/sign-up' },
      { label: 'Reset Password', url: '/auth/reset-password' },
      { label: 'New Password', url: '/auth/new-password' },
      { label: 'Two Factor', url: '/auth/two-factor' },
      { label: 'Lock Screen', url: '/auth/lock-screen' },
      { label: '404 – Not Found', url: '/error/404' },
    ],
  },
  {
    label: 'UI Components',
    icon: 'lucidePencilRuler',
    isCollapsed: true,
    children: [
      {
        label: 'Core Elements',
        url: '/ui/core-elements',
      },
      {
        label: 'Interactive Features',
        url: '/ui/interactive-features',
      },
      {
        label: 'Menu & Links',
        url: '/ui/menu-links',
      },
      {
        label: 'Visual Feedback',
        url: '/ui/visual-feedback',
      },
      {
        label: 'Utilities',
        url: '/ui/utilities',
      },
    ],
  },
  {
    label: 'Charts',
    icon: 'lucideChartPie',
    url: '/charts',
  },
  {
    label: 'Forms',
    icon: 'lucideSquarePi',
    isCollapsed: true,
    children: [
      {
        label: 'Basic Elements',
        url: '/forms/basic',
      },
      {
        label: 'Plugins',
        url: '/forms/plugins',
      },
      {
        label: 'Validation',
        url: '/forms/validation',
      },
      {
        label: 'Wizard',
        url: '/forms/wizard',
      },
      {
        label: 'File Uploads',
        url: '/forms/file-uploads',
      },
      {
        label: 'Quilljs Editors',
        url: '/forms/editors',
      },
    ],
  },
  {
    label: 'Tables',
    icon: 'lucideTable2',
    isCollapsed: true,
    children: [
      {
        label: 'Static Tables',
        url: '/tables/static',
      },
      {
        label: 'DataTables',
        badge: { variant: 'success', text: '09' },
        isCollapsed: true,
        children: [
          { label: 'Basic', url: '/tables/data-tables/basic' },
          { label: 'Export Data', url: '/tables/data-tables/export-data' },
          { label: 'Select', url: '/tables/data-tables/select' },
          { label: 'Ajax', url: '/tables/data-tables/ajax' },
          {
            label: 'Javascript Source',
            url: '/tables/data-tables/javascript-source',
          },
          {
            label: 'Data Rendering',
            url: '/tables/data-tables/data-rendering',
          },
          { label: 'Show & Hide Column', url: '/tables/data-tables/columns' },
          { label: 'Child Rows', url: '/tables/data-tables/child-rows' },

          {
            label: 'Fixed Header',
            url: '/tables/data-tables/fixed-header',
          },
        ],
      },
    ],
  },
  {
    label: 'Icons',
    icon: 'lucideLayers2',
    isCollapsed: true,
    children: [
      {
        label: 'Tabler',
        url: '/icons/tabler',
      },
      {
        label: 'Lucide',
        url: '/icons/lucide',
      },
      {
        label: 'Flags',
        url: '/icons/flags',
      },
    ],
  },
  {
    label: 'Maps',
    icon: 'lucideMapPin',
    isCollapsed: true,
    children: [
      {
        label: 'Vector Maps',
        url: '/maps/vector',
      },
      {
        label: 'Leaflet Maps',
        url: '/maps/leaflet',
      },
    ],
  },
  { label: 'Menu Items', isTitle: true },
  {
    label: 'Menu Levels',
    icon: 'lucideCommand',
    isCollapsed: true,
    children: [
      {
        label: 'Second Level',
        children: [
          { label: 'Item 2.1', url: 'javascript: void(0);' },
          { label: 'Item 2.2', url: 'javascript: void(0);' },
        ],
      },
      {
        label: 'Third Level',
        isCollapsed: true,
        children: [
          { label: 'Item 1', url: 'javascript: void(0);' },
          {
            label: 'Item 2',
            children: [
              {
                label: 'Item 3.1',
                url: 'javascript: void(0);',
              },
              {
                label: 'Item 3.2',
                url: '',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Disabled Menu',
    icon: 'lucideShieldBan',
    url: '/',
    isDisabled: true,
  },
]
