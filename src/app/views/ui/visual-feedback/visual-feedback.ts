import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { Progress } from '@/app/views/ui/visual-feedback/components/progress'
import { Spinners } from '@/app/views/ui/visual-feedback/components/spinners'
import { Carousels } from '@/app/views/ui/visual-feedback/components/carousels'
import { Placeholders } from '@/app/views/ui/visual-feedback/components/placeholders'

@Component({
  selector: 'app-visual-feedback',
  imports: [PageTitle, Progress, Spinners, Carousels, Placeholders],
  templateUrl: './visual-feedback.html',
  styles: ``,
})
export class VisualFeedback {}
