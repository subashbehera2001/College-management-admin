import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-placeholders',
  imports: [UiCard],
  template: `
    <app-ui-card title="Placeholders Variations">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Examples</h5>

          <div class="row">
            <div class="col-md-6">
              <div class="card border shadow-none mb-md-0">
                <img
                  src="assets/images/stock/small-1.jpg"
                  class="card-img-top"
                  alt="..."
                />

                <div class="card-body">
                  <h5 class="card-title mb-2">Card Title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="javascript: void(0);" class="btn btn-primary"
                    >Go somewhere</a
                  >
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card border shadow-none mb-0" aria-hidden="true">
                <svg
                  class="card-img-top"
                  width="100%"
                  style="aspect-ratio: 16 / 10;"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 16 10"
                >
                  <title>Placeholder</title>
                  <rect width="16" height="10" fill="#b1b2f8"></rect>
                </svg>

                <div class="card-body">
                  <h5 class="card-title mb-2 placeholder-glow">
                    <span class="placeholder col-6">&nbsp;</span>
                  </h5>
                  <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-3"></span>
                  </p>
                  <a
                    class="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  >
                    <span class="invisible">Read Only</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Color</h5>

          <span class="placeholder col-12"></span>
          <span class="placeholder col-12 bg-primary"></span>
          <span class="placeholder col-12 bg-secondary"></span>
          <span class="placeholder col-12 bg-success"></span>
          <span class="placeholder col-12 bg-danger"></span>
          <span class="placeholder col-12 bg-warning"></span>
          <span class="placeholder col-12 bg-info"></span>
          <span class="placeholder col-12 bg-light"></span>
          <span class="placeholder col-12 bg-dark"></span>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Width</h5>

          <span class="placeholder col-6"></span>
          <span class="placeholder w-75"></span>
          <span class="placeholder" style="width: 25%;"></span>
          <span class="placeholder" style="width: 10%;"></span>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Sizing</h5>

          <span class="placeholder col-12 placeholder-lg"></span>
          <span class="placeholder col-12"></span>
          <span class="placeholder col-12 placeholder-sm"></span>
          <span class="placeholder col-12 placeholder-xs"></span>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">How it works</h5>

          <p aria-hidden="true">
            <span class="placeholder col-6"></span>
          </p>

          <a
            href="javascript: void(0);"
            class="btn btn-primary disabled placeholder col-4"
            aria-hidden="true"
          ></a>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Animation</h5>

          <p class="placeholder-glow">
            <span class="placeholder col-12"></span>
          </p>

          <p class="placeholder-wave mb-0">
            <span class="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Placeholders {}
