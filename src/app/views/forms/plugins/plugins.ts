import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { Flatpickr } from '@/app/views/forms/plugins/components/flatpickr'
import { Choicesjs } from '@/app/views/forms/plugins/components/choicesjs'
import { Typeaheds } from '@/app/views/forms/plugins/components/typeaheds'
import { InputTouchspin } from '@/app/views/forms/plugins/components/input-touchspin'

@Component({
  selector: 'app-plugins',
  imports: [PageTitle, Flatpickr, Choicesjs, Typeaheds, InputTouchspin],
  templateUrl: './plugins.html',
  styles: ``,
})
export class Plugins {}
