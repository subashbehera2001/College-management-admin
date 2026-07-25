import {
  AfterViewInit,
  Component,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { DataTableDirective, DataTablesModule } from 'angular-datatables'
import { paginationIcons } from '@/app/views/tables/datatables/data'
import { Api } from 'datatables.net'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { PageTitle } from '@app/components/page-title/page-title'
@Component({
  selector: 'app-child-rows',
  imports: [UiCard, NgIcon, DataTablesModule, PageTitle],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Child Rows"
        subTitle="Display additional row details with expandable child rows in DataTables for a cleaner and more informative layout."
        [badge]="{ icon: 'lucideLayoutList', text: 'Expandable Rows' }"
      />

      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/examples/api/row_details.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi align-middle fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="childRowOptions"
                id="child-rows-data"
                class="table table-striped dt-responsive align-middle mb-0"
              >
                <thead class="thead-sm text-uppercase fs-xxs">
                  <tr>
                    <th></th>
                    <th>Company</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
              </table>
            </div>
          </app-ui-card>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ChildRows implements AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective
  constructor(private renderer: Renderer2) {}
  private unlistenTableClick?: () => void

  childRowOptions = {
    ajax: 'assets/data/datatables.json',
    columns: [
      {
        className: 'dt-control dt-child-rows-btn',
        orderable: false,
        data: null,
        defaultContent:
          '<span class="ti-square-rounded-plus-filled text-primary align-middle fs-22"></span>',
      },
      { data: 'company' },
      { data: 'symbol' },
      { data: 'price' },
      { data: 'change' },
      { data: 'volume' },
      { data: 'market_cap' },
    ],
    language: {
      paginate: paginationIcons,
    },
  }

  ngAfterViewInit(): void {
    this.dtElement.dtInstance.then((dtInstance: Api) => {
      const table = document.getElementById('child-rows-data')
      if (!table) return
      this.unlistenTableClick = this.renderer.listen(table, 'click', (e) => {
        const tr = (e.target as HTMLElement).closest('tr')
        if (!tr) return
        const row = dtInstance.row(tr)
        if (!row || !row.data()) return
        if (row.child.isShown()) {
          row.child.hide()
        } else {
          row.child(this.formatDetails(row.data())).show()
        }
      })
    })
  }

  ngOnDestroy(): void {
    if (this.unlistenTableClick) {
      this.unlistenTableClick()
    }
  }
  formatDetails(d: any) {
    if (!d) return ''
    return `
          <div class="row align-items-center">
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Rating:</h5>
        <div>${d.rating}</div>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Status:</h5>
        <span class="badge badge-label ${d.status === 'Bullish' ? 'badge-soft-success' : 'badge-soft-danger'}">${d.status}</span>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Extra info:</h5>
        <div>And any further details here (images etc)...</div>
      </div>
    </div>
        `
  }
}
