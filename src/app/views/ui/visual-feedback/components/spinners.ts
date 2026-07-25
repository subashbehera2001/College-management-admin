import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-spinners',
  imports: [UiCard],
  template: `
    <app-ui-card title="Spinners Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Border Spinner</h5>

          <div class="spinner-border m-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Colors</h5>

          <div>
            <div class="spinner-border text-primary m-2" role="status"></div>
            <div class="spinner-border text-secondary m-2" role="status"></div>
            <div class="spinner-border text-success m-2" role="status"></div>
            <div class="spinner-border text-danger m-2" role="status"></div>
            <div class="spinner-border text-warning m-2" role="status"></div>
            <div class="spinner-border text-info m-2" role="status"></div>
            <div class="spinner-border text-light m-2" role="status"></div>
            <div class="spinner-border text-dark m-2" role="status"></div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Alignment</h5>

          <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              class="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>

          <div class="d-flex justify-content-center mt-3">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Buttons Spinner</h5>

          <div class="row g-3">
            <div class="col-lg-6">
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-primary btn-icon" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button
                  class="btn btn-primary btn-icon rounded-circle"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-primary btn-icon" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button
                  class="btn btn-primary btn-icon rounded-circle"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Growing Spinner</h5>

          <div class="spinner-grow m-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          <div class="d-flex justify-content-center mt-3">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Color Growing Spinner</h5>

          <div>
            <div class="spinner-grow text-primary m-2" role="status"></div>
            <div class="spinner-grow text-secondary m-2" role="status"></div>
            <div class="spinner-grow text-success m-2" role="status"></div>
            <div class="spinner-grow text-danger m-2" role="status"></div>
            <div class="spinner-grow text-warning m-2" role="status"></div>
            <div class="spinner-grow text-info m-2" role="status"></div>
            <div class="spinner-grow text-light m-2" role="status"></div>
            <div class="spinner-grow text-dark m-2" role="status"></div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Size</h5>

          <div class="row">
            <div class="col-lg-6">
              <div
                class="spinner-border avatar-lg text-primary m-2"
                role="status"
              ></div>
              <div
                class="spinner-grow avatar-lg text-secondary m-2"
                role="status"
              ></div>
            </div>

            <div class="col-lg-6">
              <div
                class="spinner-border avatar-md text-primary m-2"
                role="status"
              ></div>
              <div
                class="spinner-grow avatar-md text-secondary m-2"
                role="status"
              ></div>
            </div>

            <div class="col-lg-6">
              <div
                class="spinner-border avatar-sm text-primary m-2"
                role="status"
              ></div>
              <div
                class="spinner-grow avatar-sm text-secondary m-2"
                role="status"
              ></div>
            </div>

            <div class="col-lg-6">
              <div
                class="spinner-border spinner-border-sm m-2"
                role="status"
              ></div>
              <div class="spinner-grow spinner-grow-sm m-2" role="status"></div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Spinners {}
