import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideIcons } from '@ng-icons/core'
import * as tablerIcons from '@ng-icons/tabler-icons'
import * as tablerIconsFill from '@ng-icons/tabler-icons/fill'
import * as lucideIcons from '@ng-icons/lucide'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideIcons({ ...tablerIcons, ...tablerIconsFill, ...lucideIcons }),
  ],
}
