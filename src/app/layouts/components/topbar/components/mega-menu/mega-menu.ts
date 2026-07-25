import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'

type MegaMenuType = {
  title: string
  links: {
    label: string
    url: string
  }[]
}

@Component({
  selector: 'app-mega-menu',
  imports: [
    RouterLink,
    NgIcon,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
  ],
  templateUrl: './mega-menu.html',
})
export class MegaMenu {
  megaMenuItems: MegaMenuType[] = [
    {
      title: 'Workspace Tools',
      links: [
        { label: 'My Dashboard', url: '#;' },
        { label: 'Recent Activity', url: '#;' },
        { label: 'Notification Center', url: '#;' },
        { label: 'File Manager', url: '#;' },
        { label: 'Calendar View', url: '#;' },
      ],
    },
    {
      title: 'Team Operations',
      links: [
        { label: 'Team Overview', url: '#;' },
        { label: 'Meeting  Schedule', url: '#;' },
        { label: 'Time Sheets', url: '#;' },
        { label: 'Feedback Hub', url: '#;' },
        { label: 'Resource Allocation', url: '#;' },
      ],
    },
    {
      title: 'Account Settings',
      links: [
        { label: 'Profile Settings', url: '#;' },
        { label: 'Billing & Plans', url: '#;' },
        { label: 'Integrations', url: '#;' },
        { label: 'Privacy &Security', url: '#;' },
        { label: 'Support Center', url: '#;' },
      ],
    },
  ]
}
