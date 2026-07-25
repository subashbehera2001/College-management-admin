import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { CounterDirective } from '@core/directive/counter.directive'

@Component({
  selector: 'app-input-touchspin',
  imports: [UiCard, NgIcon, CounterDirective],
  template: `
    <app-ui-card title="Input Touchspin">
      <span badge-text class="badge badge-soft-success badge-label py-1 fs-xxs"
        >Exclusive</span
      >
      <div card-body>
        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Default Touchspin</h5>
          </div>
          <div class="col-lg-6">
            <div
              class="input-group touchspin"
              appCounter
              [(count)]="count"
              #counter="appCounter"
            >
              <button
                type="button"
                class="btn btn-light floating"
                (click)="counter.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                min="0"
                [value]="count"
                class="form-control form-control-sm border-0"
                max="800000"
              />
              <button
                type="button"
                (click)="counter.increment()"
                class="btn btn-light floating"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Sizes</h5>
          </div>
          <div class="col-lg-6">
            <div
              class="input-group input-group-sm touchspin"
              appCounter
              [(count)]="sizeCount"
              #counter2="appCounter"
            >
              <button
                type="button"
                class="btn btn-light floating"
                (click)="counter2.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                min="0"
                [value]="sizeCount"
                class="form-control form-control border-0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-light floating"
                (click)="counter2.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>

            <div
              class="input-group input-group-lg mt-2 touchspin"
              appCounter
              [(count)]="sizeCount2"
              #counter3="appCounter"
            >
              <button
                type="button"
                class="btn btn-light floating"
                (click)="counter3.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                min="0"
                [value]="sizeCount2"
                class="form-control form-control border-0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-light floating"
                (click)="counter3.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Colors</h5>
          </div>
          <div class="col-lg-6">
            @for (color of colors; track $index; let first = $first) {
              <div
                class="input-group touchspin {{ !first ? 'mt-2' : '' }}"
                appCounter
                [(count)]="colorCount"
                #counter4="appCounter"
              >
                <button
                  type="button"
                  class="btn btn-{{ color }} floating"
                  (click)="counter4.decrement()"
                >
                  <ng-icon name="tablerMinus" />
                </button>
                <input
                  type="number"
                  [value]="colorCount"
                  class="form-control form-control-sm border-0"
                  value="100"
                  max="800000"
                />
                <button
                  type="button"
                  class="btn btn-{{ color }} floating"
                  (click)="counter4.increment()"
                >
                  <ng-icon name="tablerPlus" />
                </button>
              </div>
            }
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Readonly</h5>
          </div>
          <div class="col-lg-6">
            <div class="input-group touchspin">
              <button type="button" class="btn btn-light floating">
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control form-control-sm border-0"
                value="1"
                max="800000"
                readonly
              />
              <button type="button" class="btn btn-light floating">
                <ng-icon name="tablerPlus" />
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Disabled</h5>
          </div>
          <div class="col-lg-6">
            <div class="input-group touchspin">
              <button type="button" class="btn btn-light floating" disabled>
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control form-control-sm border-0"
                value="1"
                max="800000"
                disabled
              />
              <button type="button" class="btn btn-light floating" disabled>
                <ng-icon name="tablerPlus" />
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Style</h5>
          </div>
          <div class="col-lg-6">
            <div
              class="input-group touchspin"
              appCounter
              [(count)]="count5"
              #counter5="appCounter"
            >
              <button
                type="button"
                class="btn btn-primary rounded-circle floating"
                (click)="counter5.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control form-control-sm border-0"
                [value]="count5"
                min="0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-primary rounded-circle floating"
                (click)="counter5.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>

            <div
              class="input-group touchspin rounded-pill mt-2"
              appCounter
              [(count)]="count5"
              #counter5="appCounter"
            >
              <button
                type="button"
                class="btn btn-primary rounded-circle floating"
                (click)="counter5.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control form-control-sm border-0"
                [value]="count5"
                min="0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-primary rounded-circle floating"
                (click)="counter5.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>

            <div
              class="input-group touchspin border-0  mt-2"
              appCounter
              [(count)]="count6"
              #counter6="appCounter"
            >
              <button
                type="button"
                class="btn btn-outline-secondary"
                (click)="counter6.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control border-secondary"
                [value]="count6"
                min="0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-outline-secondary"
                (click)="counter6.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>

            <div
              class="input-group touchspin border-0  mt-2"
              appCounter
              [(count)]="count6"
              #counter6="appCounter"
            >
              <button
                type="button"
                class="btn btn-soft-success"
                (click)="counter6.decrement()"
              >
                <ng-icon name="tablerMinus" />
              </button>
              <input
                type="number"
                class="form-control border-success-subtle"
                [value]="count6"
                min="0"
                max="800000"
              />
              <button
                type="button"
                class="btn btn-soft-success"
                (click)="counter6.increment()"
              >
                <ng-icon name="tablerPlus" />
              </button>
            </div>
          </div>
        </div>

        <div class="my-4 border-top border-dashed"></div>

        <div class="row g-3">
          <div class="col-lg-6">
            <h5 class="fw-semibold mb-1">Vertical Style</h5>
          </div>
          <div class="col-lg-6">
            <div
              class="input-group input-group-sm touchspin"
              appCounter
              [max]="10"
              [(count)]="count7"
              #counter7="appCounter"
            >
              <div class="btn-group-vertical">
                <button
                  type="button"
                  class="btn btn-soft-success"
                  (click)="counter7.increment()"
                >
                  <ng-icon name="tablerPlus" />
                </button>
                <button
                  type="button"
                  class="btn btn-soft-danger"
                  (click)="counter7.decrement()"
                >
                  <ng-icon name="tablerMinus" />
                </button>
              </div>
              <input
                type="number"
                class="form-control border-0"
                [value]="count7"
              />
            </div>

            <div
              class="input-group mt-2 touchspin"
              appCounter
              [max]="10"
              [(count)]="count7"
              #counter7="appCounter"
            >
              <div class="btn-group-vertical">
                <button
                  type="button"
                  class="btn btn-success"
                  (click)="counter7.increment()"
                >
                  <ng-icon name="tablerPlus" />
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  (click)="counter7.decrement()"
                >
                  <ng-icon name="tablerMinus" />
                </button>
              </div>
              <input
                type="number"
                class="form-control border-0"
                [value]="count7"
              />
            </div>

            <div
              class="input-group input-group-lg mt-2 touchspin"
              appCounter
              [max]="10"
              [(count)]="count7"
              #counter7="appCounter"
            >
              <div class="btn-group-vertical">
                <button
                  type="button"
                  class="btn btn-dark"
                  (click)="counter7.increment()"
                >
                  <ng-icon name="tablerPlus" />
                </button>
                <button
                  type="button"
                  class="btn btn-dark"
                  (click)="counter7.decrement()"
                >
                  <ng-icon name="tablerMinus" />
                </button>
              </div>
              <input
                type="number"
                class="form-control border-0"
                [value]="count7"
              />
            </div>

            <div
              class="input-group  mt-2 touchspin"
              appCounter
              [max]="10"
              [(count)]="count7"
              #counter7="appCounter"
            >
              <input
                type="number"
                class="form-control border-0"
                [value]="count7"
              />
              <div class="btn-group-vertical">
                <button
                  type="button"
                  class="btn btn-dark"
                  (click)="counter7.increment()"
                >
                  <ng-icon name="tablerPlus" />
                </button>
                <button
                  type="button"
                  class="btn btn-dark"
                  (click)="counter7.decrement()"
                >
                  <ng-icon name="tablerMinus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class InputTouchspin {
  colors = [
    'primary',
    'secondary',
    'info',
    'success',
    'danger',
    'warning',
    'primary',
    'soft-primary',
  ]
  count: number = 0
  sizeCount: number = 0
  sizeCount2: number = 0
  colorCount: number = 100
  count5: number = 100
  count6: number = 100
  count7: number = 0
}
