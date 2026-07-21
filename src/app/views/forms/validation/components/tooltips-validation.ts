import { Component, inject, OnInit } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-tooltips-validation',
  imports: [UiCard, NgIcon, ReactiveFormsModule, FormsModule],
  template: `
    <app-ui-card title="Tooltips">
      <a
        helper-text
        href="https://getbootstrap.com/docs/5.3/forms/validation/#tooltips"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold"
        >View Docs
        <ng-icon name="tablerArrowRight" class="bi fs-lg" />
      </a>

      <form
        card-body
        class="row g-3 needs-validation"
        novalidate
        novalidate
        (ngSubmit)="formSubmit()"
        [formGroup]="tooltipvalidationform"
      >
        <div class="col-md-4 position-relative">
          <label for="studentFirstName" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            formControlName="firstName"
            value="Emily"
            required
            [class]="
              formsubmit && !formData['firstName'].errors ? 'is-valid' : ''
            "
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="studentLastName" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            formControlName="lastName"
            id="studentLastName"
            value="Chen"
            required
            [class]="
              formsubmit && !formData['lastName'].errors ? 'is-valid' : ''
            "
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="studentID" class="form-label">Stanford ID</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="studentIDPrepend">SU</span>
            <input
              type="text"
              class="form-control"
              formControlName="standfordId"
              id="studentID"
              [class]="
                formsubmit && !formData['standfordId'].errors
                  ? 'is-valid'
                  : formsubmit && formData['standfordId'].errors
                    ? 'is-invalid'
                    : ''
              "
              placeholder="SU1234567"
              required
            />
            <div class="invalid-tooltip">Please enter a valid Stanford ID.</div>
          </div>
        </div>
        <div class="col-md-6 position-relative">
          <label for="studentCity" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            formControlName="city"
            id="studentCity"
            value="Palo Alto"
            required
            [class]="
              formsubmit && !formData['city'].errors
                ? 'is-valid'
                : formsubmit && formData['city'].errors
                  ? 'is-invalid'
                  : ''
            "
          />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 position-relative">
          <label for="studentDepartment" class="form-label">Department</label>
          <select
            class="form-select"
            formControlName="department"
            id="studentDepartment"
            required
            [class]="
              formsubmit && !formData['department'].errors
                ? 'is-valid'
                : formsubmit && formData['department'].errors
                  ? 'is-invalid'
                  : ''
            "
          >
            <option selected disabled value="">Choose...</option>
            <option>Computer Science</option>
            <option>Engineering</option>
            <option>Biology</option>
            <option>Economics</option>
            <option>Psychology</option>
          </select>
          <div class="invalid-tooltip">Please select your department.</div>
        </div>
        <div class="col-md-3 position-relative">
          <label for="studentZip" class="form-label">ZIP Code</label>
          <input
            type="text"
            formControlName="zip"
            class="form-control"
            id="studentZip"
            value="94305"
            required
            [class]="
              formsubmit && !formData['zip'].errors
                ? 'is-valid'
                : formsubmit && formData['zip'].errors
                  ? 'is-invalid'
                  : ''
            "
          />
          <div class="invalid-tooltip">Please provide a valid ZIP code.</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="agreementCheck"
              required
            />
            <label class="form-check-label" for="agreementCheck">
              I confirm my enrollment at Stanford University.
            </label>
            <div class="invalid-tooltip">
              You must confirm before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            <ng-icon name="tablerUserPlus" class="me-1" />
            Submit Enrollment
          </button>
        </div>
      </form>
    </app-ui-card>
  `,
  styles: ``,
})
export class TooltipsValidation implements OnInit {
  public formBuilder = inject(UntypedFormBuilder)
  tooltipvalidationform!: UntypedFormGroup
  submit!: boolean
  formsubmit!: boolean

  ngOnInit(): void {
    this.tooltipvalidationform = this.formBuilder.group({
      firstName: [
        'Emily',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      lastName: [
        'Chen',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      standfordId: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      department: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    })
  }

  get formData() {
    return this.tooltipvalidationform.controls
  }

  formSubmit() {
    this.formsubmit = true
  }
}
