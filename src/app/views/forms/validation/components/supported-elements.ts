import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-supported-elements',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="Supported Elements">
      <a
        helper-text
        href="https://getbootstrap.com/docs/5.3/forms/validation/#supported-elements"
        target="_blank"
        class="icon-link icon-link-hover link-secondary link-underline-secondarlink-secondary link-underline-opacity-25 fw-semibold"
        >View Docs
        <ng-icon name="tablerArrowRight" class="bi fs-lg" />
      </a>
      <form card-body class="was-validated">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea</label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Required example textarea"
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>

        <div class="form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="validationFormCheck1"
            required
          />
          <label class="form-check-label" for="validationFormCheck1"
            >Check this checkbox</label
          >
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="validationFormCheck2"
            name="radio-stacked"
            required
          />
          <label class="form-check-label" for="validationFormCheck2"
            >Toggle this radio</label
          >
        </div>
        <div class="form-check mb-3">
          <input
            type="radio"
            class="form-check-input"
            id="validationFormCheck3"
            name="radio-stacked"
            required
          />
          <label class="form-check-label" for="validationFormCheck3"
            >Or toggle this other radio</label
          >
          <div class="invalid-feedback">More example invalid feedback text</div>
        </div>

        <div class="mb-3">
          <select class="form-select" required aria-label="select example">
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid select feedback</div>
        </div>

        <div class="mb-3">
          <input
            type="file"
            class="form-control"
            aria-label="file example"
            required
          />
          <div class="invalid-feedback">Example invalid form file feedback</div>
        </div>

        <div>
          <button class="btn btn-primary" type="submit" disabled>
            Submit form
          </button>
        </div>
      </form>
    </app-ui-card>
  `,
  styles: ``,
})
export class SupportedElements {}
