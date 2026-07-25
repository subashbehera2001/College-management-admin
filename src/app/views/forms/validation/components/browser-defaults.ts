import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-browser-defaults',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="Browser Defaults">
      <a
        helper-text
        href="https://getbootstrap.com/docs/5.3/forms/validation/#browser-defaults"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold"
        >View Docs
        <ng-icon name="tablerArrowRight" class="bi fs-lg" />
      </a>

      <form card-body class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">First name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            value="Mark"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Last name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            value="Otto"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label"
            >Username</label
          >
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">&#64;</span>
            <input
              type="text"
              class="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label">State</label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">Zip</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault05"
            required
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </app-ui-card>
  `,
  styles: ``,
})
export class BrowserDefaults {}
