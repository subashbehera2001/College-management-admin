import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carousels',
  imports: [UiCard, NgbCarouselModule],
  template: `
    <app-ui-card title="Carousel Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Slides Only</h5>

          <ngb-carousel
            [showNavigationIndicators]="false"
            [showNavigationArrows]="false"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                class="d-block img-fluid"
                alt="First slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                class="d-block img-fluid"
                alt="Second slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-3.jpg"
                class="d-block img-fluid"
                alt="Third slide"
              />
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">With Controls</h5>

          <ngb-carousel
            [showNavigationIndicators]="false"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-4.jpg"
                class="d-block img-fluid"
                alt="First slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                class="d-block img-fluid"
                alt="Second slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                class="d-block img-fluid"
                alt="Third slide"
              />
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">With Indicators</h5>

          <ngb-carousel
            [showNavigationIndicators]="true"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-3.jpg"
                class="d-block img-fluid"
                alt="First slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                class="d-block img-fluid"
                alt="Second slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                class="d-block img-fluid"
                alt="Third slide"
              />
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">With Captions</h5>

          <ngb-carousel
            [showNavigationIndicators]="false"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                alt="..."
                class="d-block img-fluid"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="text-white">First slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-3.jpg"
                alt="..."
                class="d-block img-fluid"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="text-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                alt="..."
                class="d-block img-fluid"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="text-white">Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Crossfade</h5>

          <ngb-carousel
            [animation]="true"
            class="carousel-fade"
            [showNavigationIndicators]="false"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                class="d-block img-fluid"
                alt="First slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                class="d-block img-fluid"
                alt="Second slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-3.jpg"
                class="d-block img-fluid"
                alt="Third slide"
              />
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Individual Interval</h5>

          <ngb-carousel
            [animation]="true"
            [interval]="10000"
            [showNavigationIndicators]="false"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-4.jpg"
                class="d-block img-fluid"
                alt="First slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-2.jpg"
                class="d-block img-fluid"
                alt="Second slide"
              />
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-1.jpg"
                class="d-block img-fluid"
                alt="Third slide"
              />
            </ng-template>
          </ngb-carousel>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Dark Variant</h5>

          <ngb-carousel
            [animation]="true"
            class="carousel-dark"
            [showNavigationIndicators]="true"
            [showNavigationArrows]="true"
          >
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-8.jpg"
                class="img-fluid"
                alt="Images"
              />
              <div class="carousel-caption d-none d-md-block">
                <h4 class="fw-bold">First slide label</h4>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-9.jpg"
                class="img-fluid"
                alt="Images"
              />
              <div class="carousel-caption d-none d-md-block">
                <h4 class="fw-bold">Second slide label</h4>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </ng-template>
            <ng-template ngbSlide>
              <img
                src="assets/images/stock/small-10.jpg"
                class="img-fluid"
                alt="Images"
              />
              <div class="carousel-caption d-none d-md-block">
                <h4 class="fw-bold">Third slide label</h4>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </ng-template>
          </ngb-carousel>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Carousels {}
