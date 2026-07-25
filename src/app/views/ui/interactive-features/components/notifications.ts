import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { FormsModule } from '@angular/forms'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-notifications',
  imports: [UiCard, NgbToastModule, FormsModule],
  template: `
    <app-ui-card title="Notifications Variations" [isTogglable]="true">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div>
            <h5 class="mb-2 pb-1">Basic</h5>

            <div class="p-3">
              <ngb-toast class="fade" role="alert">
                <ng-template ngbToastHeader>
                  <img
                    src="assets/images/logo-sm.png"
                    alt="brand-logo"
                    height="16"
                    class="me-1"
                  />
                  <strong class="me-auto text-body">SIMPLE</strong>
                  <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
              </ngb-toast>
            </div>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Placement</h5>

            <div class="p-3">
              <div
                class="d-flex justify-content-center align-items-center"
                style="min-height: 200px;"
              >
                <ngb-toast class="fade" role="alert" [autohide]="false">
                  <ng-template ngbToastHeader>
                    <img
                      src="assets/images/logo-sm.png"
                      alt="brand-logo"
                      height="16"
                      class="me-1"
                    />
                    <strong class="me-auto text-body">SIMPLE</strong>
                    <small>11 mins ago</small>
                  </ng-template>
                  Hello, world! This is a toast message.
                </ngb-toast>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Placement</h5>

            <form>
              <div class="mb-3">
                <label for="selectToastPlacement">Toast placement</label>
                <select
                  [(ngModel)]="toastPlacement"
                  class="form-select mt-2"
                  name="toastPlacement"
                >
                  <option value="" selected>Select a position...</option>
                  <option value="top-0 start-0">Top left</option>
                  <option value="top-0 start-50 translate-middle-x">
                    Top center
                  </option>
                  <option value="top-0 end-0">Top right</option>
                  <option value="top-50 start-0 translate-middle-y">
                    Middle left
                  </option>
                  <option value="top-50 start-50 translate-middle">
                    Middle center
                  </option>
                  <option value="top-50 end-0 translate-middle-y">
                    Middle right
                  </option>
                  <option value="bottom-0 start-0">Bottom left</option>
                  <option value="bottom-0 start-50 translate-middle-x">
                    Bottom center
                  </option>
                  <option value="bottom-0 end-0">Bottom right</option>
                </select>
              </div>
            </form>
            <div
              aria-live="polite"
              aria-atomic="true"
              class="bg-light position-relative bd-example-toasts"
              style="min-height:294px"
            >
              <ngb-toast
                [autohide]="false"
                class=" position-absolute m-3 {{ toastPlacement }}"
                (hidden)="placement = false"
                role="alert"
              >
                <ng-template ngbToastHeader>
                  <img
                    src="assets/images/logo-sm.png"
                    alt="brand-logo"
                    height="16"
                    class="me-1"
                  />
                  <strong class="me-auto text-body">SIMPLE</strong>
                  <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
              </ngb-toast>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div>
            <h5 class="mb-2 pb-1">Live Toast</h5>

            <button
              type="button"
              class="btn btn-primary"
              (click)="liveToast = true"
              id="liveToastBtn"
            >
              Show live toast
            </button>

            <div class="toast-container position-fixed top-0 end-0 p-3">
              @if (liveToast) {
                <ngb-toast class="fade" role="alert">
                  <ng-template ngbToastHeader class="toast-header">
                    <img
                      src="assets/images/logo-sm.png"
                      alt="brand-logo"
                      height="16"
                      class="me-1"
                    />
                    <strong class="me-auto text-body">SIMPLE</strong>
                    <small>11 mins ago</small>
                  </ng-template>
                  Hello, world! This is a toast message.
                </ngb-toast>
              }
            </div>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Translucent</h5>

            <div class="p-3 bg-light bg-opacity-50">
              <ngb-toast class="fade" role="alert" [autohide]="false">
                <ng-template ngbToastHeader>
                  <img
                    src="assets/images/logo-sm.png"
                    alt="brand-logo"
                    height="16"
                    class="me-1"
                  />
                  <strong class="me-auto text-body">SIMPLE</strong>
                  <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
              </ngb-toast>
            </div>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Stacking</h5>

            <div class="p-3">
              <div
                aria-live="polite"
                aria-atomic="true"
                style="position: relative; min-height: 200px;"
              >
                <div
                  class="toast-container"
                  style="position: absolute; top: 0; right: 0;"
                >
                  <ngb-toast class="fade" role="alert">
                    <ng-template ngbToastHeader>
                      <img
                        src="assets/images/logo-sm.png"
                        alt="brand-logo"
                        height="16"
                        class="me-1"
                      />
                      <strong class="me-auto text-body">SIMPLE</strong>
                      <small class="text-muted">just now</small>
                    </ng-template>
                    See? Just like this.
                  </ngb-toast>

                  <ngb-toast class="fade" role="alert">
                    <ng-template ngbToastHeader>
                      <img
                        src="assets/images/logo-sm.png"
                        alt="brand-logo"
                        height="16"
                        class="me-1"
                      />
                      <strong class="me-auto text-body">SIMPLE</strong>
                      <small class="text-muted">2 seconds ago</small>
                    </ng-template>
                    Heads up, toasts will stack automatically
                  </ngb-toast>
                  <!--end toast-->
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Custom content</h5>

            @if (showToast) {
              <ngb-toast class="align-items-center mb-2" role="alert">
                <div class="d-flex">
                  Hello, world! This is a toast message.

                  <button
                    type="button"
                    class="btn-close me-2 m-auto"
                    (click)="close()"
                  ></button>
                </div>
              </ngb-toast>
            }

            @if (showToast2) {
              <ngb-toast
                class="align-items-center text-white bg-primary border-0 mb-2"
                role="alert"
              >
                <div class="d-flex">
                  Hello, world! This is a toast message.

                  <button
                    type="button"
                    class="btn-close btn-close-white me-2 m-auto"
                    (click)="showToast2 = false"
                  ></button>
                </div>
              </ngb-toast>
            }

            @if (showToast3) {
              <ngb-toast class="mb-2" role="alert">
                Hello, world! This is a toast message.
                <div class="mt-2 pt-2 border-top">
                  <button type="button" class="btn btn-primary btn-sm me-1">
                    Take action
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    (click)="showToast3 = false"
                  >
                    Close
                  </button>
                </div>
              </ngb-toast>
            }
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Notifications {
  liveToast = false
  showToast = true
  showToast2 = true
  showToast3 = true
  placement = true
  toastPlacement: string = ''
  close() {
    this.showToast = false
  }
}
