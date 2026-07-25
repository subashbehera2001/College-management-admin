import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { LayoutStoreService } from '@core/services/layout-store.service'

import { MegaMenu } from '@layouts/components/topbar/components/mega-menu/mega-menu'
import { LanguageDropdown } from '@layouts/components/topbar/components/language-dropdown/language-dropdown'
import { ThemeToggler } from '@layouts/components/topbar/components/theme-toggler/theme-toggler'
import { CustomizerToggler } from '@layouts/components/topbar/components/customizer-toggler/customizer-toggler'
import { UserProfile } from '@layouts/components/topbar/components/user-profile/user-profile'
import { NotificationDropdown } from '@layouts/components/topbar/components/notification-dropdown/notification-dropdown'
import { ThemeDropdown } from '@layouts/components/topbar/components/theme-dropdown/theme-dropdown'
import {
  NgbActiveOffcanvas,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-topbar',
  imports: [
    NgIcon,
    RouterLink,
    NgbDropdownModule,
    MegaMenu,
    LanguageDropdown,
    CustomizerToggler,
    ThemeToggler,
    UserProfile,
    NotificationDropdown,
    ThemeDropdown,
  ],
  templateUrl: './topbar.html',
})
export class Topbar {
  constructor(public layout: LayoutStoreService) {}

  toggleSidebar() {
    const html = document.documentElement
    const currentSize = html.getAttribute('data-sidenav-size')
    const savedSize = this.layout.sidenavSize

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
