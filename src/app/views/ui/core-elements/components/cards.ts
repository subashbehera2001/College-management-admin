import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-cards',
  imports: [UiCard],
  template: `
    <app-ui-card title="Cards Variations" [isTogglable]="true">
      <div card-body>
        <div class="row g-4">
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Button</a
                >
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-2">Basic Card with Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Button</a
                >
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="card text-bg-primary border-0">
              <div class="card-body">
                <h5 class="card-title mb-2">Card with Background Color</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-light"
                  >Button</a
                >
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="card text-bg-secondary bg-gradient border-0">
              <div class="card-body">
                <h5 class="card-title mb-2">
                  Card with Background Color + Gradient
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-light"
                  >Button</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card">
              <h5 class="card-header">Card with Header</h5>
              <div class="card-body">
                <h5 class="card-title mb-2">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Go somewhere</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-header d-block">
                <h5 class="card-title mb-1">Card with Sub Header</h5>

                <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
              </div>

              <div class="card-body">
                <blockquote class="card-bodyquote mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer class="mb-0">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-header">Featured Card Title</div>
              <div class="card-body">
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Go somewhere</a
                >
              </div>
              <div class="card-footer">2 days ago</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h5 class="mb-2 pb-1">Advanced Card</h5>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <app-ui-card
              title="Card with Action Tools"
              [isTogglable]="true"
              [isReloadable]="true"
              [isCloseable]="true"
            >
              <div card-body>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Go somewhere</a
                >
              </div>
            </app-ui-card>
          </div>
          <div class="col-md-4">
            <app-ui-card
              title="Card with Action Tools & Background Colors"
              [isTogglable]="true"
              [isReloadable]="true"
              [isCloseable]="true"
            >
              <div card-body>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-light"
                  >Go somewhere</a
                >
              </div>
            </app-ui-card>
          </div>
          <div class="col-md-4">
            <app-ui-card
              title="Card with Action Tools"
              class="card-filled"
              [isTogglable]="true"
            >
              <div card-body>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-sm btn-primary"
                  >Go somewhere</a
                >
              </div>
            </app-ui-card>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h5 class="mb-2 pb-1">Bordered Card</h5>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body border-primary">
                <h5 class="card-title mb-2">Card with Colored Border</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-primary btn-sm"
                  >Button</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-primary border border-dashed">
              <div class="card-body">
                <h5 class="card-title mb-2 text-primary">
                  Card with Simple Border
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-primary btn-sm"
                  >Button</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-primary border-2">
              <div class="card-body">
                <h5 class="card-title mb-2 text-primary">
                  Card with Double Border
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="javascript: void(0);" class="btn btn-primary btn-sm"
                  >Button</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h5 class="mb-2 pb-1">Stretched Link</h5>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <img
                src="assets/images/stock/small-3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mb-2">Card with stretched link</h5>
                <a
                  href="javascript: void(0);"
                  class="btn btn-primary mt-2 stretched-link"
                  >Go somewhere</a
                >
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <img
                src="assets/images/stock/small-4.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mb-2">
                  <a
                    href="javascript: void(0);"
                    class="text-primary stretched-link"
                    >Card with stretched link</a
                  >
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <img
                src="assets/images/stock/small-5.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mb-2">Card with stretched link</h5>
                <a
                  href="javascript: void(0);"
                  class="btn btn-primary mt-2 stretched-link"
                  >Go somewhere</a
                >
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <img
                src="assets/images/stock/small-6.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mb-2">
                  <a
                    href="javascript: void(0);"
                    class="text-primary stretched-link"
                    >Card with stretched link</a
                  >
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h5 class="mb-2 pb-1">Card Group</h5>
          </div>
        </div>

        <div class="card-group mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-2">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <span class="text-body-secondary">Last updated 3 mins ago</span>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-2">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <span class="text-body-secondary">Last updated 3 mins ago</span>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-2">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <span class="text-body-secondary">Last updated 3 mins ago</span>
            </div>
          </div>
        </div>
      </div>
      <app-ui-card> </app-ui-card
    ></app-ui-card>
  `,
  styles: ``,
})
export class Cards {}
