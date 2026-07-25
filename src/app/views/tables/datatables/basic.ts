import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { currency } from '@/app/constants'
import { DataTablesModule } from 'angular-datatables'

@Component({
  selector: 'app-basic',
  imports: [PageTitle, UiCard, DataTablesModule, NgIcon],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Basic DataTables"
        subTitle="Enhance your tables with sorting, searching, and pagination using the powerful jQuery DataTables plugin."
        [badge]="{ icon: 'lucideColumns3Cog', text: 'Dynamic Tables' }"
      />
      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Basic DataTable">
            <a
              helper-text
              href="https://datatables.net/examples/basic_init/zero_configuration.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                data-tables="basic"
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
                  @for (item of basicData; track $index) {
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

          <app-ui-card title="Complex Header">
            <a
              helper-text
              href="https://datatables.net/examples/basic_init/complex_header.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                class="table table-bordered dt-responsive align-middle mb-0"
              >
                <thead class="thead-sm text-uppercase fs-xxs">
                  <tr>
                    <th colspan="2">Company Info</th>
                    <th colspan="2">Rate</th>
                    <th colspan="2">More</th>
                    <th colspan="2">Other</th>
                  </tr>
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
                  @for (item of basicData; track $index) {
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
export class Basic {
  basicData = tableData
  currency = currency

  dtOptions = {
    language: {
      paginate: paginationIcons,
    },
  }
}
