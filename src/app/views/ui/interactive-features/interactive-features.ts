import { Component } from '@angular/core'
import { PageTitle } from '../../../components/page-title/page-title'
import { Collapse } from './components/collapse'
import { Modals } from './components/modals'
import { Notifications } from './components/notifications'
import { Offcanvas } from './components/offcanvas'
import { Popovers } from './components/popovers'
import { Tabs } from './components/tabs'
import { Tooltips } from './components/tooltips'

@Component({
  selector: 'app-interactive-features',
  imports: [
    PageTitle,
    Collapse,
    Modals,
    Notifications,
    Offcanvas,
    Popovers,
    Tabs,
    Tooltips,
  ],
  templateUrl: './interactive-features.html',
  styles: ``,
})
export class InteractiveFeatures {}
