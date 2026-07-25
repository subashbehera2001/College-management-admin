import { Routes } from '@angular/router'
import { CoreElements } from '@/app/views/ui/core-elements/core-elements'
import { InteractiveFeatures } from '@/app/views/ui/interactive-features/interactive-features'
import { MenuAndLinks } from '@/app/views/ui/menu-and-links/menu-and-links'
import { VisualFeedback } from '@/app/views/ui/visual-feedback/visual-feedback'
import { Utilities } from '@/app/views/ui/utilities/utilities'

export const UI_PAGES_ROUTES: Routes = [
  {
    path: 'ui/core-elements',
    component: CoreElements,
    data: { title: 'Core UI Elements' },
  },
  {
    path: 'ui/interactive-features',
    component: InteractiveFeatures,
    data: { title: 'Interactive Features' },
  },
  {
    path: 'ui/menu-links',
    component: MenuAndLinks,
    data: { title: 'Menu & Links' },
  },
  {
    path: 'ui/visual-feedback',
    component: VisualFeedback,
    data: { title: 'Visual Feedback' },
  },
  {
    path: 'ui/utilities',
    component: Utilities,
    data: { title: 'Utilities' },
  },
]
