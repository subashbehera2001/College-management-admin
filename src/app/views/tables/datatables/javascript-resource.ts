import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { DataTablesModule } from 'angular-datatables'
import {
  javascriptSourceData,
  paginationIcons,
} from '@/app/views/tables/datatables/data'

@Component({
  selector: 'app-javascript-resource',
  imports: [PageTitle, UiCard, NgIcon, DataTablesModule],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="JavaScript DataTables"
        subTitle="Populate DataTables directly from JavaScript arrays or objects for full client-side control and flexibility."
        [badge]="{ icon: 'lucideCode', text: 'Client-Side Data' }"
      />
      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/examples/data_sources/js_array.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg"></ng-icon>
            </a>

            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                id="datatables-javascript-source"
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
export class JavascriptResource {
  dtOptions = {
    columns: [
      { title: 'company' },
      { title: 'symbol' },
      { title: 'price' },
      { title: 'change' },
      { title: 'volume' },
      { title: 'market_cap' },
      { title: 'rating' },
      {
        title: 'status',
        render: function (data: string) {
          const badgeClass =
            data === 'Bullish' ? 'badge-soft-success' : 'badge-soft-danger'
          return `<span class="badge badge-label ${badgeClass}">${data}</span>`
        },
      },
    ],
    data: javascriptSourceData,
    language: {
      paginate: paginationIcons,
      lengthMenu: '_MENU_ Companies per page',
      info: 'Showing <span class="fw-semibold">_START_ </span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies', // Customize the "Showing" text
    },
  }
}
