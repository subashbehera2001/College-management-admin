import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { Buttons } from '@/app/views/ui/core-elements/components/buttons'
import { Images } from '@/app/views/ui/core-elements/components/images'
import { Badges } from '@/app/views/ui/core-elements/components/badges'
import { Accordions } from '@/app/views/ui/core-elements/components/accordions'
import { Alerts } from '@/app/views/ui/core-elements/components/alerts'
import { Cards } from '@/app/views/ui/core-elements/components/cards'
import { Videos } from './components/videos'
import { Typography } from './components/typography'

@Component({
  selector: 'app-core-elements',
  imports: [
    PageTitle,
    Buttons,
    Images,
    Badges,
    Accordions,
    Alerts,
    Cards,
    Videos,
    Typography,
  ],
  templateUrl: './core-elements.html',
  styles: ``,
})
export class CoreElements {}
