import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-input-fields',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="Input Textfield Type">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="simpleinput" class="col-form-label"
                >Simple Input</label
              >
            </div>
            <div class="col-lg-8">
              <input type="text" id="simpleinput" class="form-control" />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label" for="floatingInput"
                >Floating Input</label
              >
            </div>
            <div class="col-lg-8">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label>Name</label>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="validInput" class="col-form-label">Valid Input</label>
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="validInput"
                class="form-control is-valid"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-rounded" class="col-form-label"
                >Rounded Input</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-rounded"
                class="form-control rounded-pill"
                placeholder="Rounded Input"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-textarea" class="col-form-label"
                >Text area</label
              >
            </div>
            <div class="col-lg-8">
              <textarea
                class="form-control"
                id="example-textarea"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-disable" class="col-form-label"
                >Disabled</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                class="form-control"
                id="example-disable"
                disabled
                value="Disabled value"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-helping" class="col-form-label"
                >Helping text</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-helping"
                class="form-control"
                placeholder="Helping text"
              />
              <small class="form-text text-muted">
                A block of help text that breaks onto a new line and may extend
                beyond one line.
              </small>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Select with Icon</label>
            </div>
            <div class="col-lg-8">
              <div class="app-search">
                <select class="form-select form-control" id="discount">
                  <option selected>Choose Discount</option>
                  <option value="No Discount">No Discount</option>
                  <option value="Flat Discount">Flat Discount</option>
                  <option value="Percentage Discount">
                    Percentage Discount
                  </option>
                </select>
                <ng-icon
                  name="lucidePercent"
                  class="app-search-icon text-muted"
                ></ng-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Label Input</label>
            </div>
            <div class="col-lg-8">
              <div>
                <label for="labelInputInput1" class="form-label"
                  >Label Input</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="labelInputInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="SearchInput" class="col-form-label"
                >Search Style</label
              >
            </div>
            <div class="col-lg-8">
              <div class="app-search">
                <input
                  type="search"
                  class="form-control"
                  id="SearchInput"
                  placeholder="Search for something..."
                />
                <ng-icon
                  name="lucideSearch"
                  class="app-search-icon text-muted"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="inValidationInput" class="col-form-label"
                >Invalid Input</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="inValidationInput"
                class="form-control is-invalid"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-placeholder" class="col-form-label"
                >Placeholder</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-placeholder"
                class="form-control"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-readonly" class="col-form-label"
                >Readonly</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                id="example-readonly"
                class="form-control"
                readonly
                value="Readonly value"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-static" class="col-form-label"
                >Static control</label
              >
            </div>
            <div class="col-lg-8">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="example-static"
                value="email@example.com"
              />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Default Select</label>
            </div>
            <div class="col-lg-8">
              <select class="form-select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="example-multiselect" class="col-form-label"
                >Multiple Select</label
              >
            </div>
            <div class="col-lg-8">
              <select id="example-multiselect" multiple class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class InputFields {}
