import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { toTitleCase } from '@/app/utils/string-utils'

@Component({
  selector: 'app-popovers',
  imports: [UiCard, NgbPopoverModule],
  template: `
    <app-ui-card title="Popovers Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Simple Popover</h5>

          <button
            type="button"
            class="btn btn-primary"
            placement="right"
            popoverTitle="Need Help?"
            ngbPopover="Click here to get support from our team. We're here 24/7 to assist you."
          >
            Get Support Info
          </button>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Dismiss on Next Click</h5>

          <button
            type="button"
            tabindex="0"
            autoClose="inside"
            triggers="focus"
            class="btn btn-primary"
            placement="right"
            ngbPopover="Get quick tips and tricks to improve your workflow instantly."
            popoverTitle="Quick Tips"
          >
            Show Tips
          </button>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Hover</h5>

          <button
            type="button"
            tabindex="0"
            class="btn btn-dark"
            placement="right"
            triggers="hover"
            ngbPopover="Discover features you didn’t know existed. Hover to explore more!"
            popoverTitle="Exciting Features!"
          >
            Please Hover Me
          </button>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Four Directions</h5>

          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              placement="top"
              popoverTitle="Top Popover"
              ngbPopover="This popover appears above the button. Great for tips or info."
            >
              Popover on top
            </button>

            <button
              type="button"
              class="btn btn-primary"
              placement="bottom"
              popoverTitle="Bottom Popover"
              ngbPopover="This popover shows below. Perfect for additional details."
            >
              Popover on bottom
            </button>

            <button
              type="button"
              class="btn btn-primary"
              placement="right"
              popoverTitle="Right Popover"
              ngbPopover="Slide in from the right to provide quick insights."
            >
              Popover on right
            </button>

            <button
              type="button"
              class="btn btn-primary"
              placement="left"
              popoverTitle="Left Popover"
              ngbPopover="Appears on the left side. Great for tooltips or notes."
            >
              Popover on left
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Custom Popovers</h5>

          <div class="d-flex flex-wrap gap-2">
            @for (variant of popoverVariants; track $index) {
              <button
                type="button"
                class="btn btn-{{ variant }}"
                placement="right"
                autoClose="inside"
                popoverClass="popover-{{ variant }}"
                popoverTitle="{{ toTitleCase(variant) }} Popover"
                ngbPopover="This is a {{
                  variant
                }}-themed popover styled using CSS variables."
              >
                {{ toTitleCase(variant) }} Popover
              </button>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Disabled Elements</h5>

          <span
            class="d-inline-block"
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-content="This button is disabled, but the popover still works."
          >
            <button
              class="btn btn-primary"
              type="button"
              disabled
              style="pointer-events: none;"
            >
              Disabled Button
            </button>
          </span>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Popovers {
  popoverVariants = [
    'primary',
    'success',
    'danger',
    'info',
    'dark',
    'secondary',
  ]
  protected readonly toTitleCase = toTitleCase
}
