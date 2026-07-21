import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { LayoutStoreService } from '@core/services/layout-store.service'

import { LanguageDropdown } from '@layouts/components/topbar/components/language-dropdown/language-dropdown'
import { ThemeToggler } from '@layouts/components/topbar/components/theme-toggler/theme-toggler'
import { UserProfile } from '@layouts/components/topbar/components/user-profile/user-profile'
import { NotificationDropdown } from '@layouts/components/topbar/components/notification-dropdown/notification-dropdown'

@Component({
  selector: 'app-topbar',
  imports: [
    NgIcon,
    RouterLink,
    ThemeToggler,
    LanguageDropdown,
    UserProfile,
    NotificationDropdown,
  ],
  templateUrl: './topbar.html',
})
export class Topbar {
  constructor(public layout: LayoutStoreService) {}

  toggleSidebar() {
    const html = document.documentElement
    const currentSize = html.getAttribute('data-sidenav-size')

    if (currentSize === 'offcanvas') {
      html.classList.toggle('sidebar-enable')
      this.layout.showBackdrop()
    } else {
      this.layout.setSidenavSize(
        currentSize === 'collapse' ? 'default' : 'collapse'
      )
    }
  }
}
