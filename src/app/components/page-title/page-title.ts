import { Component, Input } from '@angular/core'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-page-title',
  imports: [NgIcon],
  templateUrl: './page-title.html',
  styles: ``,
})
export class PageTitle {
  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() badge: {
    text: string
    icon: string
  } = {
    text: '',
    icon: '',
  }
}
