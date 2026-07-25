import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { currency } from '@/app/constants'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { DataTablesModule } from 'angular-datatables'

@Component({
  selector: 'app-fixed-header',
  imports: [PageTitle, UiCard, NgIcon, DataTablesModule],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Fixed Header"
        subTitle="Display a fixed header on the top of the table."
        [badge]="{ icon: 'lucideTable', text: 'Fixed Header' }"
      />
      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/extensions/fixedheader/examples/styling/bootstrap5.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="fixedColumnDtOptions"
                id="fixed-header-data"
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
                <tbody>
                  @for (item of tableData; track $index) {
                    <tr>
                      <td>{{ item.company }}</td>
                      <td>{{ item.symbol }}</td>
                      <td>{{ currency }}{{ item.price }}</td>
                      <td>{{ item.change }}%</td>
                      <td>{{ item.volume }}</td>
                      <td>{{ currency }}{{ item.marketCap }}</td>
                      <td>{{ item.rating }} ★</td>
                      <td>
                        <span
                          class="badge badge-label  {{
                            item.status === 'Bullish'
                              ? 'badge-soft-success'
                              : 'badge-soft-danger'
                          }} "
                          >{{ item.status }}</span
                        >
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </app-ui-card>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FixedHeader {
  currency = currency
  tableData = tableData

  fixedColumnDtOptions = {
    fixedHeader: {
      header: true,
      headerOffset: 65,
    },
    pageLength: 25,
    language: {
      paginate: paginationIcons,
    },
  }
}
