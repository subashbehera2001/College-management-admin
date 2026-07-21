import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-progress',
  imports: [UiCard, NgbProgressbarModule],
  template: `
    <app-ui-card title="Progress Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Examples</h5>

          <ngb-progressbar type="primary" [value]="0" class="mb-2" />
          <ngb-progressbar type="primary" [value]="25" class="mb-2" />
          <ngb-progressbar type="primary" [value]="50" class="mb-2" />
          <ngb-progressbar type="primary" [value]="75" class="mb-2" />
          <ngb-progressbar type="primary" [value]="100" />
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Height</h5>

          <ngb-progressbar
            type="danger"
            [value]="25"
            class="mb-2"
            style="height: 1px;"
          />
          <ngb-progressbar
            type="primary"
            [value]="25"
            class="mb-2"
            style="height: 3px;"
          />
          <ngb-progressbar
            type="success"
            [value]="25"
            class="mb-2 progress-sm"
          />
          <ngb-progressbar type="info" [value]="50" class="mb-2 progress-md" />
          <ngb-progressbar
            type="warning"
            [value]="75"
            class="mb-2 progress-lg"
          />
          <ngb-progressbar type="success" [value]="38" class="progress-xl" />
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Multiple Bars</h5>

          <ngb-progressbar-stacked>
            <ngb-progressbar [value]="15" type="primary" />
            <ngb-progressbar [value]="30" type="success" />
            <ngb-progressbar [value]="20" type="info" />
          </ngb-progressbar-stacked>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Animated Stripes</h5>

          <ngb-progressbar
            type="primary"
            [value]="75"
            [striped]="true"
            [animated]="true"
          />
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Labels</h5>

          <ngb-progressbar class="mb-3" type="primary" [value]="25"
            >25%</ngb-progressbar
          >
          <ngb-progressbar type="primary" textType="primary" [value]="10">
            <div class="overflow-visible text-dark">
              Long label text for the progress bar, set to a dark color
            </div>
          </ngb-progressbar>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Backgrounds</h5>

          <ngb-progressbar
            type="success"
            textType="success"
            [value]="25"
            class="mb-2"
          />
          <ngb-progressbar
            type="info"
            textType="info"
            [value]="50"
            class="mb-2"
          />
          <ngb-progressbar
            type="warning"
            textType="warning"
            [value]="75"
            class="mb-2"
          />
          <ngb-progressbar
            type="danger"
            textType="danger"
            [value]="100"
            class="mb-2"
          />
          <ngb-progressbar
            type="dark"
            textType="dark"
            [value]="65"
            class="mb-2"
          />
          <ngb-progressbar type="secondary" textType="secondary" [value]="50" />
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Striped</h5>

          <ngb-progressbar
            type="primary"
            [value]="10"
            class="mb-2"
            [striped]="true"
          />
          <ngb-progressbar
            type="success"
            [value]="25"
            class="mb-2"
            [striped]="true"
          />
          <ngb-progressbar
            type="info"
            [value]="50"
            class="mb-2"
            [striped]="true"
          />
          <ngb-progressbar
            type="warning"
            [value]="75"
            class="mb-2"
            [striped]="true"
          />
          <ngb-progressbar type="danger" [value]="100" [striped]="true" />
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Steps</h5>

          <div class="position-relative m-4">
            <ngb-progressbar type="primary" [value]="50" style="height: 2px;" />

            <button
              type="button"
              class="position-absolute top-0 start-0 translate-middle btn btn-icon btn-primary rounded-pill"
            >
              1
            </button>
            <button
              type="button"
              class="position-absolute top-0 start-50 translate-middle btn btn-icon btn-primary rounded-pill"
            >
              2
            </button>
            <button
              type="button"
              class="position-absolute top-0 start-100 translate-middle btn btn-icon btn-light rounded-pill"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Progress {}
