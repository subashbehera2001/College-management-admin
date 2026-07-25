import { Component, inject } from '@angular/core'
import { Sidebar } from '@/app/views/ton-ai/components/sidebar'
import { NgbOffcanvas, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { NgIcon } from '@ng-icons/core'

type FeatureType = {
  icon: string
  title: string
}

@Component({
  selector: 'app-ton-ai',
  imports: [Sidebar, NgIcon, NgbTooltipModule],
  templateUrl: './ton-ai.html',
  styles: ``,
})
export class TonAi {
  private offcanvasService = inject(NgbOffcanvas)

  open(content: any) {
    this.offcanvasService.open(content, {
      position: 'start',
      panelClass: 'outlook-left-menu rounded-start-4',
    })
  }

  features: FeatureType[] = [
    {
      icon: 'tablerBrain',
      title: 'Generate AI-powered insights from customer reviews',
    },
    {
      icon: 'tablerRobot',
      title: 'Create chatbot responses for common support questions',
    },
    {
      icon: 'tablerTextRecognition',
      title: 'Summarize lengthy documents using AI',
    },
  ]
}
