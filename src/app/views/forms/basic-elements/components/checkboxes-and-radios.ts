import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-checkboxes-and-radios',
  imports: [UiCard],
  template: `
    <app-ui-card title="Checks, Radios and Switches">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Checkboxes</label>
            </div>
            <div class="col-lg-8">
              <div class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkDefault"
                />
                <label class="form-check-label" for="checkDefault"
                  >Default Checkbox</label
                >
              </div>

              <div class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input form-check-input-light"
                  id="checkLight"
                />
                <label class="form-check-label" for="checkLight"
                  >Light Checkbox</label
                >
              </div>

              <div class="mb-2">
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="checkInline1"
                    checked
                  />
                  <label class="form-check-label" for="checkInline1"
                    >Inline 1</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="checkInline2"
                  />
                  <label class="form-check-label" for="checkInline2"
                    >Inline 2</label
                  >
                </div>
              </div>

              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkIndeterminate"
                />
                <label class="form-check-label" for="checkIndeterminate">
                  Disabled indeterminate checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkCheckedDisabled"
                  checked
                  disabled
                />
                <label class="form-check-label" for="checkCheckedDisabled">
                  Disabled checked checkbox
                </label>
              </div>

              <h5 class="mt-3">Sizes</h5>

              <div class="form-check fs-lg mb-2">
                <input
                  type="checkbox"
                  class="form-check-input mt-1"
                  id="checkSize1"
                  checked
                />
                <label class="form-check-label fs-base" for="checkSize1"
                  >I'm 16px Checkbox</label
                >
              </div>

              <div class="form-check form-check-secondary fs-xxl mb-2">
                <input
                  type="checkbox"
                  class="form-check-input mt-1"
                  id="checkSize2"
                  checked
                />
                <label class="form-check-label fs-base" for="checkSize2"
                  >i'm 20px Checkbox</label
                >
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Switches</label>
            </div>
            <div class="col-lg-8">
              <div class="form-check form-switch mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="switch1"
                  checked
                />
                <label class="form-check-label" for="switch1"
                  >Enabled Switch</label
                >
              </div>
              <div class="form-check form-switch mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="switch2"
                  disabled
                />
                <label class="form-check-label" for="switch2"
                  >Disabled Switch</label
                >
              </div>

              <h5 class="mt-3">Sizes</h5>

              <div class="form-check form-switch fs-lg mb-2">
                <input
                  type="checkbox"
                  class="form-check-input mt-1"
                  id="checkboxSize16"
                  checked
                />
                <label class="form-check-label fs-base" for="checkboxSize16"
                  >I'm 16px Switch</label
                >
              </div>
              

              <div
                class="form-check form-switch form-check-secondary fs-xxl mb-2"
              >
                <input
                  type="checkbox"
                  class="form-check-input mt-1"
                  id="checkboxSize20"
                  checked
                />
                <label class="form-check-label fs-base" for="checkboxSize20"
                  >I'm 20px Switch</label
                >
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Colored Checkboxes</label>
            </div>
            <div class="col-lg-8">
              <div class="d-flex flex-wrap gap-4">
                <div>
                  <div class="form-check form-check-primary mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkPrimary"
                      checked
                    />
                    <label class="form-check-label" for="checkPrimary"
                      >Primary</label
                    >
                  </div>
                  <div class="form-check form-check-secondary mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkSecondary"
                      checked
                    />
                    <label class="form-check-label" for="checkSecondary"
                      >Secondary</label
                    >
                  </div>
                  <div class="form-check form-check-success mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkSuccess"
                      checked
                    />
                    <label class="form-check-label" for="checkSuccess"
                      >Success</label
                    >
                  </div>
                  <div class="form-check form-check-info mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkInfo"
                      checked
                    />
                    <label class="form-check-label" for="checkInfo">Info</label>
                  </div>
                </div>
                <div>
                  <div class="form-check form-check-warning mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkWarning"
                      checked
                    />
                    <label class="form-check-label" for="checkWarning"
                      >Warning</label
                    >
                  </div>
                  <div class="form-check form-check-danger mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkDanger"
                      checked
                    />
                    <label class="form-check-label" for="checkDanger"
                      >Danger</label
                    >
                  </div>
                  <div class="form-check form-check-dark">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkDark"
                      checked
                    />
                    <label class="form-check-label" for="checkDark">Dark</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Colored Switches</label>
            </div>
            <div class="col-lg-8">
              <div class="d-flex flex-wrap gap-4">
                <div>
                  <div class="form-check form-check-primary form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchPrimary"
                      checked
                    />
                    <label class="form-check-label" for="switchPrimary"
                      >Primary</label
                    >
                  </div>
                  <div class="form-check form-check-secondary form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchSecondary"
                      checked
                    />
                    <label class="form-check-label" for="switchSecondary"
                      >Secondary</label
                    >
                  </div>
                  <div class="form-check form-check-success form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchSuccess"
                      checked
                    />
                    <label class="form-check-label" for="switchSuccess"
                      >Success</label
                    >
                  </div>
                  <div class="form-check form-check-info form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchInfo"
                      checked
                    />
                    <label class="form-check-label" for="switchInfo"
                      >Info</label
                    >
                  </div>
                </div>
                <div>
                  <div class="form-check form-check-warning form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchWarning"
                      checked
                    />
                    <label class="form-check-label" for="switchWarning"
                      >Warning</label
                    >
                  </div>
                  <div class="form-check form-check-danger form-switch mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchDanger"
                      checked
                    />
                    <label class="form-check-label" for="switchDanger"
                      >Danger</label
                    >
                  </div>
                  <div class="form-check form-check-dark form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="switchDark"
                      checked
                    />
                    <label class="form-check-label" for="switchDark"
                      >Dark</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Visible to </label>
            </div>
            <div class="col-lg-8">
              <div class="form-check mb-2">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gridRadio"
                  id="radio1"
                  checked
                />
                <label class="form-check-label" for="radio1">Option 1</label>
              </div>

              <div class="form-check mb-2">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gridRadio"
                  id="radio2"
                />
                <label class="form-check-label" for="radio2">Option 2</label>
              </div>

              <div class="mb-2">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Inline 1</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Inline 2</label
                  >
                </div>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="disabledRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                  checked
                  disabled
                />
                <label class="form-check-label" for="inlineRadio3"
                  >Disabled Checked Radio</label
                >
              </div>

              <h5 class="mt-3">Sizes</h5>

              <div class="mb-2">
                <div class="form-check fs-lg form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="radioCash"
                    value="cash"
                    checked
                  />
                  <label class="form-check-label fs-base" for="radioCash"
                    >Cash</label
                  >
                </div>
                <div class="form-check fs-lg form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="radioCard"
                    value="card"
                  />
                  <label class="form-check-label fs-base" for="radioCard"
                    >Card</label
                  >
                </div>
              </div>

              <div class="mb-2">
                <div class="form-check fs-xxl form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="deliveryOption"
                    id="radioPickup"
                    value="pickup"
                    checked
                  />
                  <label class="form-check-label fs-base" for="radioPickup"
                    >Pickup</label
                  >
                </div>
                <div class="form-check fs-xxl form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="deliveryOption"
                    id="radioHome"
                    value="home"
                  />
                  <label class="form-check-label fs-base" for="radioHome"
                    >Home Delivery</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Reverse</label>
            </div>
            <div class="col-lg-8">
              <div class="w-lg-50">
                <div class="form-check form-check-reverse mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="reverseCheck1"
                    checked
                  />
                  <label class="form-check-label" for="reverseCheck1">
                    Reverse checkbox
                  </label>
                </div>
                <div class="form-check form-check-reverse mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    value=""
                    id="reverseCheck2"
                  />
                  <label class="form-check-label" for="reverseCheck2">
                    Disabled reverse radio
                  </label>
                </div>

                <div class="form-check form-switch form-check-reverse">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="switchCheckReverse"
                    checked
                  />
                  <label class="form-check-label" for="switchCheckReverse"
                    >Reverse switch checkbox input</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Colored Radios</label>
            </div>
            <div class="col-lg-8">
              <div class="d-flex flex-wrap gap-4">
                <div>
                  <div class="form-check form-check-primary mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioPrimary"
                      id="radioPrimary"
                      checked
                    />
                    <label class="form-check-label" for="radioPrimary"
                      >Primary</label
                    >
                  </div>
                  <div class="form-check form-check-secondary mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioSecondary"
                      id="radioSecondary"
                      checked
                    />
                    <label class="form-check-label" for="radioSecondary"
                      >Secondary</label
                    >
                  </div>
                  <div class="form-check form-check-success mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioSuccess"
                      id="radioSuccess"
                      checked
                    />
                    <label class="form-check-label" for="radioSuccess"
                      >Success</label
                    >
                  </div>
                  <div class="form-check form-check-info mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioInfo"
                      id="radioInfo"
                      checked
                    />
                    <label class="form-check-label" for="radioInfo">Info</label>
                  </div>
                </div>
                <div>
                  <div class="form-check form-check-warning mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioWarning"
                      id="radioWarning"
                      checked
                    />
                    <label class="form-check-label" for="radioWarning"
                      >Warning</label
                    >
                  </div>
                  <div class="form-check form-check-danger mb-2">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioDanger"
                      id="radioDanger"
                      checked
                    />
                    <label class="form-check-label" for="radioDanger"
                      >Danger</label
                    >
                  </div>
                  <div class="form-check form-check-dark">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radioDark"
                      id="radioDark"
                      checked
                    />
                    <label class="form-check-label" for="radioDark">Dark</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Checkbox Toggle</label>
            </div>

            <div class="col-lg-8">
              <div class="mb-2">
                <input type="checkbox" class="btn-check" id="btncheck1" />
                <label class="btn btn-outline-primary" for="btncheck1"
                  >Single Toggle</label
                >
              </div>

              <div
                class="btn-group"
                role="group"
                aria-label="Checkbox toggle group"
              >
                <input type="checkbox" class="btn-check" id="btncheck2" />
                <label class="btn btn-outline-primary" for="btncheck2"
                  >One</label
                >

                <input type="checkbox" class="btn-check" id="btncheck3" />
                <label class="btn btn-outline-primary" for="btncheck3"
                  >Two</label
                >

                <input type="checkbox" class="btn-check" id="btncheck4" />
                <label class="btn btn-outline-primary" for="btncheck4"
                  >Three</label
                >
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Radio Toggle</label>
            </div>

            <div class="col-lg-8">
              <div
                class="btn-group"
                role="group"
                aria-label="Radio toggle group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  checked
                />
                <label class="btn btn-outline-secondary" for="btnradio1"
                  >Left</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                />
                <label class="btn btn-outline-secondary" for="btnradio2"
                  >Middle</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                />
                <label class="btn btn-outline-secondary" for="btnradio3"
                  >Right</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class CheckboxesAndRadios {}
