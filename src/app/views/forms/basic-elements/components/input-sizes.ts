import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-input-sizes',
  imports: [UiCard],
  template: `
    <app-ui-card title="Input Sizes">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-input-small" class="col-form-label"
                >Small</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-input-small"
                name="example-input-small"
                class="form-control form-control-sm"
                placeholder=".input-sm"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-input-large" class="col-form-label"
                >Large</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-input-large"
                name="example-input-large"
                class="form-control form-control-lg"
                placeholder=".input-lg"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Large Select</label>
            </div>
            <div class="col-lg-8">
              <select class="form-select form-select-lg">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-input-normal" class="col-form-label"
                >Normal</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-input-normal"
                name="example-input-normal"
                class="form-control"
                placeholder="Normal"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-gridsize" class="col-form-label"
                >Grid Sizes</label
              >
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="example-gridsize"
                    class="form-control"
                    placeholder=".col-sm-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Small Select</label>
            </div>
            <div class="col-lg-8">
              <select class="form-select form-select-sm">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class InputSizes {}
