import { Component, Input } from '@angular/core'
import { PricingPlanType } from '@/app/views/pages/pricing/types'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-pricing-card',
  imports: [NgIcon],
  template: `
    <div class="card h-100 my-4 my-lg-0 rounded-4 position-relative">
      <div class="card-body rounded-top-4 px-lg-4 p-5 pb-2 text-center">
        <div class="text-center">
          <h3 class="fw-bold mb-1">{{ plan.name }}</h3>
          <p class="text-muted mb-0">{{ plan.description }}</p>
        </div>

        <div class="my-4">
          <h1 class="display-6 fw-bold mb-0">{{ plan.price }}</h1>
          <small class="d-block text-muted fs-base">{{ plan.priceNote }}</small>
          <small class="d-block text-muted">{{ plan.usage }}</small>
        </div>

        <ul class="list-unstyled text-start fs-sm mb-0">
          @for (item of plan.features; track item.label) {
            <li class="mb-2">
              @if (item.included) {
                <ng-icon name="tablerCheck" class="text-success me-2" />
              } @else {
                <ng-icon name="tablerX" class="text-danger me-2" />
              }
              {{ item.label }}
            </li>
          }
        </ul>
      </div>

      <div class="card-footer bg-transparent rounded-bottom-4 px-5 py-4">
        <a
          href=""
          class="btn btn-{{
            plan.buttonVariant
          }} w-100 py-2 fw-semibold rounded-pill"
        >
          {{ plan.buttonLabel }}
        </a>
      </div>
      @if (plan.badge) {
        <span
          class="position-absolute top-0 start-50 translate-middle-x badge bg-{{
            plan.badge.color
          }} text-{{ plan.badge.textColor }} rounded-pill px-3 py-1 mt-3"
        >
          {{ plan.badge.text }}
        </span>
      }
    </div>
  `,
  styles: ``,
})
export class PricingCard {
  @Input() plan!: PricingPlanType
}
