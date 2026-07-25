import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { BasicWizard } from '@/app/views/forms/wizard/components/basic-wizard'
import { WizardWithProgress } from '@/app/views/forms/wizard/components/wizard-with-progress'
import { VerticalWizard } from '@/app/views/forms/wizard/components/vertical-wizard'

@Component({
  selector: 'app-wizard',
  imports: [PageTitle, BasicWizard, WizardWithProgress, VerticalWizard],
  templateUrl: './wizard.html',
  styles: ``,
})
export class Wizard {}
