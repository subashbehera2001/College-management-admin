import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { Breadcrumbs } from '@/app/views/ui/menu-and-links/components/breadcrumbs'
import { Dropdowns } from '@/app/views/ui/menu-and-links/components/dropdowns'
import { Links } from '@/app/views/ui/menu-and-links/components/links'
import { ListGroups } from '@/app/views/ui/menu-and-links/components/list-groups'
import { Pagination } from '@/app/views/ui/menu-and-links/components/pagination'
import { Scrollspy } from '@/app/views/ui/menu-and-links/components/scrollspy'

@Component({
  selector: 'app-menu-and-links',
  imports: [
    PageTitle,
    Breadcrumbs,
    Dropdowns,
    Links,
    ListGroups,
    Pagination,
    Scrollspy,
  ],
  templateUrl: './menu-and-links.html',
  styles: ``,
})
export class MenuAndLinks {}
