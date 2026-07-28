import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { LayoutStoreService } from '@core/services/layout-store.service'

import { AppLogo } from '@app/components/app-logo'
import { LanguageDropdown } from '@layouts/components/topbar/components/language-dropdown/language-dropdown'
import { ThemeToggler } from '@layouts/components/topbar/components/theme-toggler/theme-toggler'
import { CustomizerToggler } from '@layouts/components/topbar/components/customizer-toggler/customizer-toggler'
import { UserProfile } from '@layouts/components/topbar/components/user-profile/user-profile'
import { ThemeDropdown } from '@layouts/components/topbar/components/theme-dropdown/theme-dropdown'

@Component({
  selector: 'app-topbar',
  imports: [
    NgIcon,
    RouterLink,
    AppLogo,
    LanguageDropdown,
    CustomizerToggler,
    ThemeToggler,
    UserProfile,
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
