import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { InputFields } from '@/app/views/forms/basic-elements/components/input-fields'
import { InputTypes } from '@/app/views/forms/basic-elements/components/input-types'
import { InputGroups } from '@/app/views/forms/basic-elements/components/input-groups'
import { FloatingLabels } from '@/app/views/forms/basic-elements/components/floating-labels'
import { InputSizes } from '@/app/views/forms/basic-elements/components/input-sizes'
import { CheckboxesAndRadios } from '@/app/views/forms/basic-elements/components/checkboxes-and-radios'

@Component({
  selector: 'app-basic-elements',
  imports: [
    PageTitle,
    InputFields,
    InputTypes,
    InputGroups,
    FloatingLabels,
    InputSizes,
    CheckboxesAndRadios,
  ],
  templateUrl: './basic-elements.html',
  styles: ``,
})
export class BasicElements {}
