import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { currency } from '@/app/constants'
import { NgIcon } from '@ng-icons/core'
import { UiCard } from '@app/components/ui-card'
import { DataTablesModule } from 'angular-datatables'

@Component({
  selector: 'app-select',
  imports: [PageTitle, NgIcon, UiCard, DataTablesModule],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Selectable DataTables"
        subTitle="Add row selection features to your tables using DataTables Select extension — perfect for bulk actions and item management."
        [badge]="{ icon: 'lucideSquareCheckBig', text: 'Row Selection' }"
      />
      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Single Item Select">
            <a
              helper-text
              href="https://datatables.net/reference/option/select"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                id="multi-select"
                class="table dt-responsive align-middle mb-0"
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
                  @for (item of basicData.slice(0, 16); track $index) {
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
          <app-ui-card title="Multi Item Select">
            <a
              helper-text
              href="https://datatables.net/reference/option/select"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="multiDtOptions"
                class="table dt-responsive align-middle mb-0"
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
                  @for (item of basicData.slice(0, 16); track $index) {
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
          <app-ui-card title="Cell Selection">
            <a
              helper-text
              href="https://datatables.net/reference/option/select"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="cellDtOptions"
                class="table dt-responsive align-middle mb-0"
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
                  @for (item of basicData.slice(0, 16); track $index) {
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
export class Select {
  basicData = tableData
  currency = currency

  dtOptions = {
    pageLength: 7,
    lengthMenu: [7, 10, 25, 50, -1],
    select: { style: 'single' },
    language: {
      paginate: paginationIcons,
      lengthMenu: '_MENU_ Companies per page',
    },
  }

  multiDtOptions = {
    pageLength: 7,
    lengthMenu: [7, 10, 25, 50, -1],
    select: { style: 'multi' },
    language: {
      paginate: paginationIcons,
      lengthMenu: '_MENU_ Companies per page',
    },
  }

  cellDtOptions = {
    pageLength: 7,
    lengthMenu: [7, 10, 25, 50, -1],
    select: { style: 'os', items: 'cell' },
    language: {
      paginate: paginationIcons,
      lengthMenu: '_MENU_ Companies per page',
    },
  }
}
