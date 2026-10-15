import { Component } from '@angular/core'
import { UserProfileComponent } from '@layouts/components/sidenav/components/user-profile/user-profile.component'
import { AppMenuComponent } from '@layouts/components/sidenav/components/app-menu/app-menu.component'
import { SimplebarAngularModule } from 'simplebar-angular'
import { LayoutStoreService } from '@core/services/layout-store.service'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-sidenav',
  imports: [
    UserProfileComponent,
    AppMenuComponent,
    SimplebarAngularModule,
    NgIcon,
  ],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  constructor(public layout: LayoutStoreService) {}

  toggleCollapseMenu() {
    const html = document.documentElement
    const currentSize =
      html.getAttribute('data-sidenav-size') || this.layout.sidenavSize
    const newSize = currentSize === 'collapse' ? 'default' : 'collapse'
    this.layout.setSidenavSize(newSize)
  }
}
