import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-images',
  imports: [UiCard],
  template: `
    <app-ui-card title="Avatar & Image Styles" [isTogglable]="true">
      <div card-body>
        <div class="row">
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/stock/small-1.jpg"
              alt="image"
              class="img-fluid"
            />
            <p class="mb-0 mt-2"><code>.img-fluid</code></p>
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/stock/small-2.jpg"
              alt="image"
              class="img-fluid rounded"
            />
            <p class="mb-0 mt-2"><code>.rounded</code></p>
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/users/user-2.jpg"
              alt="image"
              class="img-fluid rounded"
              width="120"
            />
            <p class="mb-0 mt-2"><code>.rounded</code></p>
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/users/user-5.jpg"
              alt="image"
              class="img-fluid rounded-circle"
              width="120"
            />
            <p class="mb-0 mt-2"><code>.rounded-circle</code></p>
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/stock/small-5.jpg"
              alt="image"
              class="img-fluid img-thumbnail"
            />
            <p class="mb-0 mt-2"><code>.img-thumbnail</code></p>
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="assets/images/users/user-8.jpg"
              alt="image"
              class="img-fluid rounded-circle img-thumbnail"
              width="120"
            />
            <p class="mb-0 mt-2"><code>.rounded-circle .img-thumbnail</code></p>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <div class="col">
              <h5 class="mb-2 pb-1">Avatar Sizes</h5>

              <div class="row text-center">
                <div class="col">
                  <img
                    src="assets/images/users/user-2.jpg"
                    alt="image"
                    class="img-fluid avatar-xs rounded"
                  />
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xs mx-auto">
                    <span class="avatar-title text-bg-primary rounded">
                      xs
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xs mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded"
                    >
                      xs
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-3.jpg"
                    alt="image"
                    class="img-fluid avatar-sm rounded"
                  />
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-sm mx-auto">
                    <span class="avatar-title text-bg-primary rounded">
                      sm
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-sm mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded"
                    >
                      sm
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-4.jpg"
                    alt="image"
                    class="img-fluid avatar-md rounded"
                  />
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-md mx-auto">
                    <span class="avatar-title text-bg-primary rounded">
                      md
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-md mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded"
                    >
                      md
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-5.jpg"
                    alt="image"
                    class="img-fluid avatar-lg rounded"
                  />
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-lg mx-auto">
                    <span class="avatar-title text-bg-primary rounded">
                      LG
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-lg mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded"
                    >
                      LG
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-6.jpg"
                    alt="image"
                    class="img-fluid avatar-xl rounded"
                  />
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xl mx-auto">
                    <span class="avatar-title text-bg-primary rounded">
                      XL
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xl mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded"
                    >
                      XL
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="col">
              <h5 class="mb-2 pb-1">Avatar Sizes with Rounded</h5>
              <div class="row text-center">
                <div class="col">
                  <img
                    src="assets/images/users/user-7.jpg"
                    alt="image"
                    class="img-fluid avatar-xs rounded-circle"
                  />
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xs mx-auto">
                    <span class="avatar-title text-bg-primary rounded-circle">
                      xs
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xs mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle"
                    >
                      xs
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xs</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-8.jpg"
                    alt="image"
                    class="img-fluid avatar-sm rounded-circle"
                  />
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-sm mx-auto">
                    <span class="avatar-title text-bg-primary rounded-circle">
                      sm
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-sm mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle"
                    >
                      sm
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-sm</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-9.jpg"
                    alt="image"
                    class="img-fluid avatar-md rounded-circle"
                  />
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-md mx-auto">
                    <span class="avatar-title text-bg-primary rounded-circle">
                      md
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-md mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle"
                    >
                      md
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-md</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-10.jpg"
                    alt="image"
                    class="img-fluid avatar-lg rounded-circle"
                  />
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-lg mx-auto">
                    <span class="avatar-title text-bg-primary rounded-circle">
                      LG
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-lg mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle"
                    >
                      LG
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-lg</code>
                  </p>
                </div>
              </div>

              <div class="row text-center mt-3">
                <div class="col">
                  <img
                    src="assets/images/users/user-1.jpg"
                    alt="image"
                    class="img-fluid avatar-xl rounded-circle"
                  />
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xl mx-auto">
                    <span class="avatar-title text-bg-primary rounded-circle">
                      XL
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
                <div class="col">
                  <div class="avatar-xl mx-auto">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle"
                    >
                      XL
                    </span>
                  </div>
                  <p class="mt-2">
                    <code>.avatar-xl</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <h5 class="mb-2 pb-1">Avatar Groups</h5>
            <div class="row">
              <div class="col-xl-3">
                <div class="avatar-group">
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-4.jpg"
                      alt=""
                      class="rounded-circle avatar-sm"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-5.jpg"
                      alt=""
                      class="rounded-circle avatar-sm"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-3.jpg"
                      alt=""
                      class="rounded-circle avatar-sm"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-8.jpg"
                      alt=""
                      class="rounded-circle avatar-sm"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-2.jpg"
                      alt=""
                      class="rounded-circle avatar-sm"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="avatar-group">
                  <div class="avatar avatar-md">
                    <span
                      class="avatar-title text-bg-primary rounded-circle fw-bold"
                    >
                      K
                    </span>
                  </div>
                  <div class="avatar avatar-md">
                    <span
                      class="avatar-title text-bg-primary rounded-circle fw-bold"
                    >
                      H
                    </span>
                  </div>
                  <div class="avatar avatar-md">
                    <span
                      class="avatar-title text-bg-primary rounded-circle fw-bold"
                    >
                      L
                    </span>
                  </div>
                  <div class="avatar avatar-md">
                    <span
                      class="avatar-title text-bg-primary rounded-circle fw-bold"
                    >
                      G
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="avatar-group">
                  <div class="avatar avatar-lg">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow"
                    >
                      K
                    </span>
                  </div>
                  <div class="avatar avatar-lg">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow"
                    >
                      H
                    </span>
                  </div>
                  <div class="avatar avatar-lg">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow"
                    >
                      L
                    </span>
                  </div>
                  <div class="avatar avatar-lg">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow"
                    >
                      G
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="avatar-group">
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-10.jpg"
                      alt=""
                      class="rounded-circle avatar-xl"
                    />
                  </div>
                  <div class="avatar avatar-xl">
                    <span
                      class="avatar-title text-bg-primary rounded-circle fs-xl fw-bold"
                    >
                      D
                    </span>
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-7.jpg"
                      alt=""
                      class="rounded-circle avatar-xl"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      src="assets/images/users/user-1.jpg"
                      alt=""
                      class="rounded-circle avatar-xl"
                    />
                  </div>
                  <div class="avatar avatar-xl">
                    <span
                      class="avatar-title fs-xl text-bg-primary rounded-circle fw-bold"
                    >
                      9+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Images {}
