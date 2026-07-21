import { Component } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { TitleCasePipe } from '@angular/common'
import { UiCard } from '@app/components/ui-card'
import { colorVariants } from '@/app/constants'

@Component({
  selector: 'app-buttons',
  imports: [NgIcon, TitleCasePipe, UiCard],
  template: `
    <app-ui-card title="Buttons" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Default Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-default">Default</button>
            @for (color of colorsVariants; track $index) {
              <button type="button" class="btn btn-{{ color }}">
                {{ color | titlecase }}
              </button>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Rounded Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            @for (color of colorsVariants.slice(0, 3); track $index) {
              <button type="button" class="btn btn-{{ color }} rounded-pill">
                {{ color | titlecase }}
              </button>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Outline Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-outline-primary">Primary</button>
            <button class="btn btn-outline-success">Success</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Soft Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-soft-primary">Primary</button>
            <button class="btn btn-soft-warning">Warning</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Ghost Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-ghost-danger">Danger</button>
            <button class="btn btn-ghost-info">Info</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Button Sizes</h5>
          <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
            <button class="btn btn-primary btn-sm">Small</button>
            <button class="btn btn-primary">Default</button>
            <button class="btn btn-primary btn-lg">Large</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Disabled Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-dark" disabled>Disabled</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Block Buttons</h5>
          <div class="d-grid gap-2 mb-2">
            <button class="btn btn-primary btn-lg">Block Button</button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Toggle Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-primary" data-bs-toggle="button">
              Toggle
            </button>
            <button
              class="btn btn-primary active"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Active
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Button Tags</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <a class="btn btn-primary" href="javascript: void(0);">Link</a>
            <button class="btn btn-primary">Button</button>
            <input class="btn btn-primary" type="submit" value="Submit" />
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Icon Buttons</h5>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button class="btn btn-icon btn-primary">
              <ng-icon name="tablerStar" />
            </button>
            <button class="btn btn-icon btn-outline-info">
              <ng-icon name="tablerCreditCard" />
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Button Groups</h5>
          <div class="btn-group">
            <button class="btn btn-light">Left</button>
            <button class="btn btn-light">Middle</button>
            <button class="btn btn-light">Right</button>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Buttons {
  protected readonly colorsVariants = colorVariants
}
