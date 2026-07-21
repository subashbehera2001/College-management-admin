import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { paginationIcons } from '@/app/views/tables/datatables/data'
import { DataTablesModule } from 'angular-datatables'
@Component({
  selector: 'app-ajax',
  imports: [PageTitle, UiCard, DataTablesModule, NgIcon],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Ajax DataTables"
        subTitle="Load table data asynchronously using Ajax with DataTables for faster performance and seamless server-side integration."
        [badge]="{ icon: 'lucideDatabase', text: 'Dynamic Loading' }"
      />
      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/examples/ajax/"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi  fs-lg"></ng-icon>
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="ajaxDtOptions"
                id="datatables-ajax"
                class="table table-striped dt-responsive align-middle mb-0"
              >
                <thead class="thead-sm text-uppercase fs-xxs">
                  <tr>
                    <th>Company</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                    <th>Rating</th>
                    <th>Status</th>
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
export class Ajax {
  ajaxDtOptions = {
    ajax: 'assets/data/datatables.json',
    processing: true,
    columns: [
      { data: 'company' },
      { data: 'symbol' },
      { data: 'price' },
      { data: 'change' },
      { data: 'volume' },
      { data: 'market_cap' },
      { data: 'rating' },
      {
        data: 'status',
        render: (data: string) => {
          const isBullish = data === 'Bullish'
          return `<span class="badge badge-label badge-soft-${isBullish ? 'success' : 'danger'}">${data}</span>`
        },
      },
    ],
    language: {
      paginate: paginationIcons,
      lengthMenu: '_MENU_ Companies per page',
      info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies',
    },
  }
}
