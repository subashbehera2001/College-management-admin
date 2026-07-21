import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { currency } from '@/app/constants'
import { DataTablesModule } from 'angular-datatables'
import { PageTitle } from '@app/components/page-title/page-title'


@Component({
  selector: 'app-export-data',
  imports: [UiCard, NgIcon, DataTablesModule, PageTitle],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Exportable DataTables"
        subTitle="Enable export options like CSV, Excel, PDF, and print using DataTables extensions for seamless data sharing."
        [badge]="{ icon: 'lucideDownload', text: 'Data Export' }"
      />
      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Export Data with Buttons">
            <a
              helper-text
              href="https://datatables.net/reference/button/"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                class="table table-striped align-middle mt-2 mb-0"
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

          <app-ui-card title="Export Data with Dropdowns">
            <a
              helper-text
              href="https://datatables.net/reference/button/"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions2"
                class="table table-striped align-middle mb-0"
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
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ExportData {
  basicData = tableData
  currency = currency
  dtOptions = {
    responsive: true,
    dom:
      "<'d-md-flex justify-content-between align-items-center mt-2 mb-3'<'columnToggleWrapper'B>f>" +
      'rt' +
      "<'d-md-flex justify-content-between align-items-center mt-2'lp>",
    buttons: [
      { extend: 'copy', className: 'btn btn-sm btn-secondary' },
      { extend: 'csv', className: 'btn btn-sm btn-secondary active' },
      { extend: 'excel', className: 'btn btn-sm btn-secondary' },
      { extend: 'print', className: 'btn btn-sm btn-secondary active' },
      { extend: 'pdf', className: 'btn btn-sm btn-secondary' },
    ],
    language: {
      paginate: paginationIcons,
    },
  }
  dtOptions2 = {
    responsive: true,
    dom:
      "<'d-md-flex justify-content-between align-items-center mt-2 mb-3'<'columnToggleWrapper'B>f>" +
      'rt' +
      "<'d-md-flex justify-content-between align-items-center mt-2'lp>",
    buttons: [
      {
        extend: 'collection',
        className: 'btn btn-sm btn-secondary dropdown-toggle',
        autoClose: true,
        buttons: [
          {
            extend: 'copy',
            text: '<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg> Copy',
            className: 'dropdown-item',
          },
          {
            extend: 'csv',
            text: '<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-csv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M16 15l2 6l2 -6" /></svg> CSV',
            className: 'dropdown-item',
          },
          {
            extend: 'excel',
            text: '<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-spreadsheet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M8 11h8v7h-8z" /><path d="M8 15h8" /><path d="M11 11v7" /></svg> Excel',
            className: 'dropdown-item',
          },
          {
            extend: 'print',
            text: '<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-printer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg> Print',
            className: 'dropdown-item',
          },
          {
            extend: 'pdf',
            text: '<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg> PDF',
            className: 'dropdown-item',
          },
        ],
      },
    ],
    language: {
      paginate: paginationIcons,
    },
  }
}
