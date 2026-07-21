import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { DataTableDirective, DataTablesModule } from 'angular-datatables'
import { Subject } from 'rxjs'
import { currency } from '@/app/constants'
import { Api } from 'datatables.net'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { PageTitle } from '@app/components/page-title/page-title'

@Component({
  selector: 'app-show-hide',
  imports: [
    UiCard,
    NgIcon,
    DataTablesModule,
    NgbDropdownModule,
    FormsModule,
    PageTitle,
  ],
  template: `
    <div class="container-fluid">
      <app-page-title
        title="Toggle Table Columns"
        subTitle="Easily show or hide table columns dynamically using DataTables column visibility features and control buttons."
        [badge]="{ icon: 'lucideColumns2', text: 'Column Visibility' }"
      />
      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <app-ui-card title="Example">
            <a
              helper-text
              href="https://datatables.net/examples/api/show_hide.html"
              target="_blank"
              class="icon-link icon-link-hover link-primary fw-semibold"
              >View Docs
              <ng-icon name="tablerArrowRight" class="bi fs-lg" />
            </a>
            <div card-body>
              <div class="mb-3">
                <div ngbDropdown autoClose="outside" class="d-inline-flex">
                  <button
                    class="btn btn-sm btn-primary drop-arrow-none"
                    type="button"
                    ngbDropdownToggle
                  >
                    Show/Hide Columns
                  </button>
                  <ul ngbDropdownMenu>
                    @for (col of columnLabels; track i; let i = $index) {
                      <li ngbDropdownItem>
                        <div class="form-check">
                          <input
                            class="form-check-input form-check-input-light fs-14 mt-0"
                            type="checkbox"
                            [id]="'colToggle' + i"
                            [(ngModel)]="columnVisibility[i]"
                            (change)="toggleColumn(i, columnVisibility[i])"
                          />
                          <label
                            class="form-check-label fw-medium"
                            [for]="'colToggle' + i"
                          >
                            {{ col }}
                          </label>
                        </div>
                      </li>
                    }
                  </ul>
                </div>
              </div>

              <table
                datatable
                [dtOptions]="columnsOptions"
                id="show-hide-column"
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
export class ShowHide implements AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective
  dtTrigger: Subject<any> = new Subject()
  tableData = tableData
  currency = currency

  columnLabels = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Volume',
    'Market Cap',
    'Rating',
    'Status',
  ]
  columnVisibility = [true, true, true, true, true, true, true, true]
  columnsOptions = {
    responsive: true,
    language: {
      paginate: paginationIcons,
    },
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next({})
  }

  toggleColumn(colIdx: number, visible: boolean) {
    this.columnVisibility[colIdx] = visible

    this.dtElement.dtInstance.then((dtInstance: Api) => {
      dtInstance.column(colIdx).visible(visible)
    })
  }
}
