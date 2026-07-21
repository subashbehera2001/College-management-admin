import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-floating-labels',
  imports: [UiCard],
  template: `
    <app-ui-card title="Floating Labels">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Email address</label>
            </div>
            <div class="col-lg-8">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label for="floatingInputEmail">Email address</label>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="floatingTextarea" class="col-form-label"
                >Comments</label
              >
            </div>
            <div class="col-lg-8">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="floatingPassword" class="col-form-label"
                >Password</label
              >
            </div>
            <div class="col-lg-8">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="floatingSelect" class="col-form-label"
                >Select Menu</label
              >
            </div>
            <div class="col-lg-8">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class FloatingLabels {}
