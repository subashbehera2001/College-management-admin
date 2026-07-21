import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-input-types',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="Input Types">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-email" class="col-form-label">Email</label>
            </div>
            <div class="col-lg-8">
              <input
                type="email"
                id="example-email"
                name="example-email"
                class="form-control"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="password" class="col-form-label"
                >Show/Hide Password</label
              >
            </div>
            <div class="col-lg-8">
              <div class="input-group" data-password>
                <input
                  [type]="showPassword ? 'text' : 'password'"
                  id="password"
                  class="form-control form-password"
                  placeholder="Enter your password"
                />
                <button
                  class="btn btn-light btn-icon"
                  type="button"
                  (click)="togglePassword()"
                >
                  <ng-icon
                    name="tablerEye"
                    [class.d-block]="showPassword"
                    [class.d-none]="!showPassword"
                  ></ng-icon>
                  <ng-icon
                    name="tablerEyeClosed"
                    [class.d-block]="!showPassword"
                    [class.d-none]="showPassword"
                  ></ng-icon>
                </button>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-time" class="col-form-label">Time</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                id="example-time"
                type="time"
                name="time"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-number" class="col-form-label">Number</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                id="example-number"
                type="number"
                name="number"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-range" class="col-form-label">Range</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-range"
                id="example-range"
                type="range"
                name="range"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-password" class="col-form-label"
                >Password</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="password"
                id="example-password"
                class="form-control"
                value="password"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-month" class="col-form-label">Month</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                id="example-month"
                type="month"
                name="month"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-week" class="col-form-label">Week</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                id="example-week"
                type="week"
                name="week"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2 mb-3">
            <div class="col-lg-4">
              <label for="example-color" class="col-form-label">Color</label>
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                id="example-color"
                type="color"
                name="color"
                value="#3a6c8f"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class InputTypes {
  showPassword: boolean = false

  togglePassword(): void {
    this.showPassword = !this.showPassword
  }
}
