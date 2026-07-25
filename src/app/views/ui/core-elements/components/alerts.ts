import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { NgIcon } from '@ng-icons/core'

type Alert = {
  id: number
  message: string
  type: string
}

@Component({
  selector: 'app-alerts',
  imports: [UiCard, NgbAlertModule, NgIcon],
  template: `
    <app-ui-card title="Alerts Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Default Alert</h5>

          @for (alert of alertData; track $index) {
            <ngb-alert [dismissible]="false" [type]="alert.type"
              >{{ alert.message }}
            </ngb-alert>
          }
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Dismissing Alert with Solid Colors</h5>

          @for (alert of alertData.slice(0, 2); track $index) {
            <ngb-alert
              (closed)="close(alert)"
              [type]="alert.type"
              class="text-bg-{{ alert.type }}"
              >{{ alert.message }}
            </ngb-alert>
          }

          <h5 class="mb-2 pb-1">Link Color</h5>

          @for (item of linkAlert; track $index) {
            <ngb-alert
              [type]="item.variant"
              [innerHtml]="item.content"
              role="alert"
            ></ngb-alert>
          }

          <h5 class="mb-2 pb-1">Additional Content</h5>
          <div class="alert alert-secondary p-3 d-flex mb-0" role="alert">
            <ng-icon name="tablerAlarmAverage" class="fs-1 me-2"></ng-icon>
            <div>
              <h4 class="alert-heading">Heads up!</h4>
              <p>
                This alert message gives additional information with a longer
                message to show content spacing within an alert.
              </p>
              <hr class="border-secondary border-opacity-25" />
              <p class="mb-0">
                Apply spacing classes wisely to maintain structure and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Alerts {
  alertCounter = 0

  showAlerts = {
    primary: true,
    secondary: true,
    dark: true,
    purple: true,
    danger: true,
    warning: true,
    info: true,
    light: true,
  }

  alerts: Alert[] = []

  alertData: Alert[] = [
    {
      id: 1,
      type: 'primary',
      message: 'Heads up! This is a primary alert with important information.',
    },
    {
      id: 2,
      type: 'secondary',
      message: 'Notice: This is a secondary alert with supporting details.',
    },
    {
      id: 3,
      type: 'success',
      message: 'Success! Your action was completed successfully.',
    },
    {
      id: 4,
      type: 'danger',
      message: 'Error! Something went wrong—please try again later.',
    },
    {
      id: 5,
      type: 'warning',
      message: 'Warning! Please review your input before proceeding.',
    },
    {
      id: 6,
      type: 'info',
      message: 'Info: Here’s something you might find helpful.',
    },
    {
      id: 7,
      type: 'light',
      message: 'Note: This is a light alert with a subtle message.',
    },
    {
      id: 8,
      type: 'dark',
      message: 'Notice: This dark alert is great for general messages.',
    },
  ]

  linkAlert = [
    {
      variant: 'primary',
      content: `Need more info? Check out <a href="javascript:void(0);" class="alert-link">this primary link</a>.`,
    },
    {
      variant: 'secondary',
      content: `This is a secondary alert with <a href="javascript:void(0);" class="alert-link">a helpful link</a>.`,
    },
  ]

  close(alert: Alert): void {
    const index = this.alertData.indexOf(alert)
    if (index > -1) this.alertData.splice(index, 1)
  }
}
