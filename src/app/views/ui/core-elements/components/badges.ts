import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-badges',
  imports: [UiCard],
  template: `
    <app-ui-card title="Badges Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Basic Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-default">Default</span>
            <span class="badge text-bg-primary">Primary</span>
            <span class="badge text-bg-secondary">Secondary</span>
            <span class="badge text-bg-success">Success</span>
            <span class="badge text-bg-danger">Danger</span>
            <span class="badge text-bg-warning">Warning</span>
            <span class="badge text-bg-info">Info</span>
            <span class="badge text-bg-light">Light</span>
            <span class="badge text-bg-dark">Dark</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Basic Pill Badges</h5>
          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-default rounded-pill">Default</span>
            <span class="badge text-bg-primary rounded-pill">Primary</span>
            <span class="badge text-bg-secondary rounded-pill">Secondary</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Outline Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-outline-primary">Primary</span>
            <span class="badge badge-outline-secondary">Secondary</span>
            <span class="badge badge-outline-success">Success</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Outline Pill Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-outline-primary rounded-pill"
              >Primary</span
            >
            <span class="badge badge-outline-secondary rounded-pill"
              >Secondary</span
            >
            <span class="badge badge-outline-success rounded-pill"
              >Success</span
            >
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Lighten Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-soft-primary">Primary</span>
            <span class="badge badge-soft-secondary">Secondary</span>
            <span class="badge badge-soft-success">Success</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Lighten Pill Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-soft-primary rounded-pill">Primary</span>
            <span class="badge badge-soft-secondary rounded-pill"
              >Secondary</span
            >
            <span class="badge badge-soft-success rounded-pill">Success</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Label Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-label badge-default">Default</span>
            <span class="badge badge-label text-bg-primary">Primary</span>
            <span class="badge badge-label text-bg-secondary">Secondary</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Square Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-square badge-default">0</span>
            <span class="badge badge-square text-bg-primary">1</span>
            <span class="badge badge-square text-bg-secondary">2</span>
            <span class="badge badge-square text-bg-success">3</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Circle Badges</h5>

          <div class="d-flex flex-wrap align-items-center gap-1">
            <span class="badge badge-circle badge-default">0</span>
            <span class="badge badge-circle text-bg-primary">1</span>
            <span class="badge badge-circle text-bg-secondary">2</span>
            <span class="badge badge-circle text-bg-success">3</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Positioned</h5>

          <div class="d-flex flex-wrap gap-3">
            <button type="button" class="btn btn-primary position-relative">
              Inbox
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            <button type="button" class="btn btn-primary position-relative">
              Profile
              <span
                class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>

            <button type="button" class="btn btn-primary">
              Notifications <span class="badge text-bg-light ms-1">4</span>
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Headings with Badges</h5>

          <h1>
            h1.Example heading <span class="badge text-bg-primary">New</span>
          </h1>
          <h2>
            h2.Example heading <span class="badge text-bg-primary">New</span>
          </h2>
          <h3>
            h3.Example heading <span class="badge text-bg-primary">New</span>
          </h3>
          <h4>
            h4.Example heading <span class="badge text-bg-primary">New</span>
          </h4>
          <h5>
            h5.Example heading <span class="badge text-bg-primary">New</span>
          </h5>
          <h6>
            h6.Example heading <span class="badge text-bg-primary">New</span>
          </h6>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Badges {}
