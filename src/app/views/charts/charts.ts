import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { BasicCharts } from '@/app/views/charts/components/basic-charts/basic-charts'
import { BarCharts } from '@/app/views/charts/components/bar-charts/bar-charts'
import { LineCharts } from '@/app/views/charts/components/line-charts/line-charts'
import { OtherCharts } from '@/app/views/charts/components/other-charts/other-charts'

@Component({
  selector: 'app-charts',
  imports: [PageTitle, BasicCharts, BarCharts, LineCharts, OtherCharts],
  templateUrl: './charts.html',
  styles: ``,
})
export class Charts {}
