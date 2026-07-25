import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { NgIcon } from '@ng-icons/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-invoice',
  imports: [PageTitle, NgIcon, RouterLink],
  templateUrl: './invoice.html',
  styles: ``,
})
export class Invoice {}
