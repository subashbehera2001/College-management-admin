import { Component } from '@angular/core'
import { AppLogo } from '@app/components/app-logo'
import { PageTitle } from '@app/components/page-title/page-title'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-invoice',
  imports: [PageTitle, NgIcon, AppLogo],
  templateUrl: './invoice.html',
  styles: ``,
})
export class Invoice {}
