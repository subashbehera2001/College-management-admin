import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { toTitleCase } from '@/app/utils/string-utils'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-tooltips',
  imports: [UiCard, NgbTooltipModule],
  template: `
    <app-ui-card title="Tooltips Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Basic</h5>

          <p class="mb-0">
            Powerful admin features like
            <a
              href="javascript:void(0);"
              class="fw-medium"
              ngbTooltip="Manage your dashboard easily"
              >custom dashboards</a
            >
            and UI components help you build scalable web applications
            efficiently. This template includes pre-built pages, clean layouts,
            and reusable code blocks to boost your development workflow. From
            user management to analytics and settings, everything is modular and
            developer-friendly. Create modern admin panels with
            <a
              href="javascript:void(0);"
              class="fw-medium"
              ngbTooltip="Built with Bootstrap 5"
              >responsive design</a
            >
            and seamless UX. Get started quickly with a professional-grade
            <a
              href="javascript:void(0);"
              class="fw-medium"
              ngbTooltip="Tailored for developers"
              >UI toolkit</a
            >
            and supercharge your app with
            <a
              href="javascript:void(0);"
              class="fw-medium"
              ngbTooltip="Includes charts, tables, forms and more"
              >powerful components</a
            >
            and flexible layouts.
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Disabled Elements</h5>

          <span
            class="d-inline-block"
            tabindex="0"
            ngbTooltip="Disabled tooltip"
          >
            <button class="btn btn-primary pe-none" type="button" disabled>
              Disabled Button
            </button>
          </span>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Hover Elements</h5>

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="tooltip"
            triggers="hover"
            ngbTooltip="Tooltip appears on hover only"
          >
            Hover to See Info
          </button>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Four Directions</h5>

          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              placement="top"
              ngbTooltip="Tooltip on top"
            >
              Tooltip ontop
            </button>
            <button
              type="button"
              class="btn btn-primary"
              placement="bottom"
              ngbTooltip="Tooltip on bottom"
            >
              Tooltip on bottom
            </button>
            <button
              type="button"
              class="btn btn-primary"
              placement="left"
              ngbTooltip="Tooltip on left"
            >
              Tooltip on left
            </button>
            <button
              type="button"
              class="btn btn-primary"
              placement="right"
              ngbTooltip="Tooltip on right"
            >
              Tooltip on right
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">HTML Tags</h5>

          <button
            type="button"
            class="btn btn-primary"
            [ngbTooltip]="htmlTooltip"
          >
            Tooltip with HTML
          </button>
          <ng-template #htmlTooltip>
            <em>New</em> <u>Tooltip</u> <b>with</b> <i>HTML</i><br />Custom
            message here!
          </ng-template>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Color Tooltips</h5>

          <div class="d-flex flex-wrap gap-2">
            @for (variant of tooltipVariants; track $index) {
              <button
                type="button"
                class="btn btn-{{ variant }}"
                placement="top"
                tooltipClass="tooltip-{{ variant }}"
                ngbTooltip="This is a {{
                  variant
                }} tooltip with a custom style."
              >
                {{ toTitleCase(variant) }} tooltip
              </button>
            }
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Tooltips {
  tooltipVariants = [
    'primary',
    'danger',
    'info',
    'success',
    'secondary',
    'warning',
    'dark',
  ]
  protected readonly toTitleCase = toTitleCase
}
