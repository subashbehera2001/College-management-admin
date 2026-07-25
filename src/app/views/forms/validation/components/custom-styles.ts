import { Component, inject, OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-custom-styles',
  imports: [UiCard, NgIcon, FormsModule, ReactiveFormsModule],
  template: `
    <app-ui-card title="Custom styles Validation">
      <a
        helper-text
        href="https://getbootstrap.com/docs/5.3/forms/validation/#custom-styles"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold"
        >View Docs
        <ng-icon name="tablerArrowRight" class="bi fs-lg" />
      </a>
      <form
        card-body
        class="row g-3 needs-validation"
        novalidate
        (ngSubmit)="validSubmit()"
        [formGroup]="validationform"
      >
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            [value]="'John'"
            required
            formControlName="firstName"
            [class]="submit && !form['firstName'].errors ? 'is-valid' : ''"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            [value]="'Doe'"
            formControlName="lastName"
            [class]="submit && !form['lastName'].errors ? 'is-valid' : ''"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label"
            >Username</label
          >
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">&#64;</span>
            <input
              type="text"
              class="form-control"
              placeholder="johndoe123"
              id="validationCustomUsername"
              formControlName="username"
              [class]="
                submit && !form['username'].errors
                  ? 'is-valid'
                  : submit && form['username'].errors
                    ? 'is-invalid'
                    : ''
              "
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            formControlName="city"
            placeholder="San Francisco"
            [class]="
              submit && !form['city'].errors
                ? 'is-valid'
                : submit && form['city'].errors
                  ? 'is-invalid'
                  : ''
            "
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">State</label>
          <select
            class="form-select"
            id="validationCustom04"
            formControlName="state"
            [class]="
              submit && !form['state'].errors
                ? 'is-valid'
                : submit && form['state'].errors
                  ? 'is-invalid'
                  : ''
            "
            required
          >
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Zip Code</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="94107"
            required
            formControlName="zip"
            [class]="
              submit && !form['zip'].errors
                ? 'is-valid'
                : submit && form['zip'].errors
                  ? 'is-invalid'
                  : ''
            "
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              i agree to the terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit Form</button>
        </div>
      </form>
    </app-ui-card>
  `,
  styles: ``,
})
export class CustomStyles implements OnInit {
  public formBuilder = inject(UntypedFormBuilder)
  validationform!: UntypedFormGroup
  submit!: boolean

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      firstName: [
        'john',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      lastName: [
        'Doe',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      agree: ['', [Validators.required]],
    })
  }

  get form() {
    return this.validationform.controls
  }

  validSubmit() {
    this.submit = true
  }
}
