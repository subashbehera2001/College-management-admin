import { Component } from '@angular/core'
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular'
import { NgIcon } from '@ng-icons/core'

const user3 = 'assets/images/users/user-3.jpg'
const user4 = 'assets/images/users/user-4.jpg'

type NotificationType = {
  id: string
  type: 'notification' | 'message'
  avatar?: string
  icon?: string
  title?: string
  description?: string
  time: string
  isActive?: boolean
}

@Component({
  selector: 'app-notification-dropdown',
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    SimplebarAngularModule,
    NgbDropdownMenu,
    NgIcon,
  ],
  templateUrl: './notification-dropdown.html',
})
export class NotificationDropdown {
  notifications: NotificationType[] = [
    {
      id: 'notification-1',
      type: 'notification',
      icon: 'lucideCloudCog',
      title: 'Backup completed successfully',
      time: 'Just now',
    },
    {
      id: 'notification-2',
      type: 'notification',
      icon: 'lucideBug',
      title: 'New bug reported in Payment Module',
      time: '8 minutes ago',
    },
    {
      id: 'message-1',
      type: 'message',
      avatar: user3,
      title: 'Olivia Bennett',
      description: 'shared a new report in Weekly Planning',
      time: '2 minutes ago',
      isActive: true,
    },
    {
      id: 'message-2',
      type: 'message',
      avatar: user4,
      title: 'Lucas Gray',
      description: 'mentioned you in Sprint Standup',
      time: '14 minutes ago',
    },
    {
      id: 'message-3',
      type: 'notification',
      icon: 'lucideFileWarning',
      description: 'Security policy update required for your account',
      time: '22 minutes ago',
    },
    {
      id: 'notification-6',
      type: 'notification',
      icon: 'lucideMail',
      title: "You've received a new support ticket",
      time: '18 minutes ago',
    },
    {
      id: 'notification-7',
      type: 'notification',
      icon: 'lucideCalendarClock',
      title: 'System maintenance starts at 12 AM',
      time: '1 hour ago',
    },
  ]
}
