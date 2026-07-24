import { Component } from '@angular/core'
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { tablerX } from '@ng-icons/tabler-icons'
import { LayoutStoreService } from '@core/services/layout-store.service'
import {
  LayoutPositionType,
  LayoutThemeType,
  SideNavType,
  TopBarType,
} from '@/app/types/layout'

@Component({
  selector: 'app-customizer',
  imports: [SimplebarAngularModule, NgIcon],
  templateUrl: './customizer.html',
  viewProviders: [provideIcons({ tablerX })],
})
export class Customizer {
  constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    public layout: LayoutStoreService
  ) {}

  close(): void {
    this.activeOffcanvas.close()
  }

  themeOptions: LayoutThemeType[] = ['light', 'dark']

  topBarColorOptions: TopBarType['color'][] = ['light', 'dark']

  sidenavColorOptions: SideNavType['color'][] = ['light', 'dark']

  sidenavSizeOptions: { size: SideNavType['size']; label: string }[] = [
    { size: 'default', label: 'Default' },
    { size: 'collapse', label: 'Collapse' },
  ]

  layoutPositionOptions: LayoutPositionType[] = ['fixed', 'scrollable']
}
