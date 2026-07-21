import { Component } from '@angular/core'
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { tablerX } from '@ng-icons/tabler-icons'
import { LayoutStoreService } from '@core/services/layout-store.service'
import {
  LayoutPositionType,
  LayoutSkinType,
  LayoutThemeType,
  SideNavType,
  TopBarType,
} from '@/app/types/layout'
import { toPascalCase } from '@/app/utils/string-utils'

const light = 'assets/images/layouts/light.svg'
const dark = 'assets/images/layouts/dark.svg'

const lightTopBarImg = 'assets/images/layouts/topbar-light.svg'
const darkTopBarImg = 'assets/images/layouts/topbar-dark.svg'

const lightSideNavImg = 'assets/images/layouts/light.svg'
const darkSideNavImg = 'assets/images/layouts/sidenav-dark.svg'

const compactSideNavImg = 'assets/images/layouts/sidebar-compact.svg'
const smallSideNavImg = 'assets/images/layouts/sidebar-condensed.svg'

type SkinOptionType = {
  skin: LayoutSkinType
  image: string
  disabled?: boolean
}

type ThemeOptionType = {
  theme: LayoutThemeType
  image: string
}

type TopBarColorOptionType = {
  color: TopBarType['color']
  image: string
}

type SideNavColorOptionType = {
  color: SideNavType['color']
  image: string
}

type SideNavSizeOptionType = {
  label: string
  size: SideNavType['size']
  image: string
}

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

  themeOptions: ThemeOptionType[] = [
    { theme: 'light', image: light },
    { theme: 'dark', image: dark },
  ]

  topBarColorOptions: TopBarColorOptionType[] = [
    { color: 'light', image: lightTopBarImg },
    { color: 'dark', image: darkTopBarImg },
  ]

  sidenavColorOptions: SideNavColorOptionType[] = [
    { color: 'light', image: lightSideNavImg },
    { color: 'dark', image: darkSideNavImg },
  ]

  sidenavSizeOptions: SideNavSizeOptionType[] = [
    { size: 'default', image: lightSideNavImg, label: 'Default' },
    { size: 'collapse', image: smallSideNavImg, label: 'collapse' },
  ]

  layoutPositionOptions: { position: LayoutPositionType }[] = [
    { position: 'fixed' },
    { position: 'scrollable' },
  ]
  protected readonly toPascalCase = toPascalCase
}
