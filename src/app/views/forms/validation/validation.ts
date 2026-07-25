import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { CustomStyles } from '@/app/views/forms/validation/components/custom-styles'
import { TooltipsValidation } from '@/app/views/forms/validation/components/tooltips-validation'
import { ServerSide } from '@/app/views/forms/validation/components/server-side'
import { SupportedElements } from '@/app/views/forms/validation/components/supported-elements'
import { BrowserDefaults } from '@/app/views/forms/validation/components/browser-defaults'

@Component({
  selector: 'app-validation',
  imports: [
    PageTitle,
    CustomStyles,
    TooltipsValidation,
    ServerSide,
    SupportedElements,
    BrowserDefaults,
  ],
  templateUrl: './validation.html',
  styles: ``,
})
export class Validation {}
