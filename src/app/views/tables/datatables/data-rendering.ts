import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { paginationIcons } from '@/app/views/tables/datatables/data'
import { DataTablesModule } from 'angular-datatables'

@Component({
  selector: 'app-data-rendering',
  imports: [PageTitle, UiCard, NgIcon, DataTablesModule],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Data Rendering"
        subTitle="Customize how data is displayed in tables using render functions, templates, and conditional formatting with DataTables."
        [badge]="{ icon: 'lucideLayoutTemplate', text: 'Custom Output' }"
      />
      <div class="row justify-content-center">
        <div class="col-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/examples/basic_init/data_rendering.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg"></ng-icon>
            </a>

            <div card-body>
              <table
                datatable
                [dtOptions]="dtOptions"
                id="datatable-rendering"
                class="table table-striped dt-responsive align-middle mb-0"
              >
                <thead class="thead-sm text-uppercase fs-xxs">
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Progress</th>
                    <th>Start date</th>
                    <th>Salary</th>
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
export class DataRendering {
  dtOptions = {
    ajax: 'assets/data/datatables-rendering.json',
    language: {
      paginate: paginationIcons,
    },
    columns: [
      {
        data: 'name',
      },
      {
        data: 'position',
        render: (data: string, type: string) => {
          if (type === 'display') {
            let link = 'https://datatables.net'

            if (data[0] < 'H') {
              link = 'https://cloudtables.com'
            } else if (data[0] < 'S') {
              link = 'https://editor.datatables.net'
            }

            return `<a href="${link}">${data}</a>`
          }

          return data
        },
      },
      {
        data: 'office',
        className: 'f32',
        render: (data: string, type: string) => {
          if (type === 'display') {
            const flagMap: { [key: string]: string } = {
              Argentina: 'ar',
              Gujarat: 'in',
              Germany: 'de',
              London: 'gb',
              'New York': 'us',
              'San Francisco': 'us',
              Sydney: 'au',
              Tokyo: 'jp',
            }

            const countryCode = flagMap[data] || ''
            return `<span class="flag ${countryCode}">
                        <img class="avatar-xs rounded me-2" src="assets/images/flags/${countryCode}.svg" alt="${data}" />
                      </span> ${data}`
          }

          return data
        },
      },
      {
        data: 'extn',
        render: (data: number, type: string) => {
          return type === 'display'
            ? `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${data}" aria-valuemin="0" aria-valuemax="9999" style="height:8px">
                    <div class="progress-bar" style="width: ${(data / 9999) * 100}%"></div>
                 </div>`
            : data
        },
      },
      {
        data: 'start_date',
      },
      {
        data: 'salary',
        render: (data: number, type: string) => {
          const number = (window as any).DataTable.render
            .number(',', '.', 2, '$')
            .display(data)

          if (type === 'display') {
            let color = 'green'
            if (data < 250000) {
              color = 'red'
            } else if (data < 500000) {
              color = 'orange'
            }

            return `<span style="color:${color}">${number}</span>`
          }

          return number
        },
      },
    ],
  }
}
