import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { BasicTimelineComponent } from '@/app/views/pages/timeline/components/basic-timeline.component'
import { IconTimelineComponent } from '@/app/views/pages/timeline/components/icon-timeline.component'
import { BorderTimelineComponent } from '@/app/views/pages/timeline/components/border-timeline.component'
import { UserTimelineComponent } from '@/app/views/pages/timeline/components/user-timeline.component'

@Component({
  selector: 'app-timeline',
  imports: [
    PageTitle,
    BasicTimelineComponent,
    IconTimelineComponent,
    BorderTimelineComponent,
    UserTimelineComponent,
  ],
  templateUrl: './timeline.html',
  styles: ``,
})
export class Timeline {}
