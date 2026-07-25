import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-input-groups',
  imports: [UiCard, NgbDropdownModule],
  template: `
    <app-ui-card title="Input Group">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Username</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">&commat;</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Amount</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Textarea</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Wrapping</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  >&commat;</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Input + Button</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                />
                <button class="btn btn-dark" type="button">Button</button>
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="formFileMultiple01" class="col-form-label"
                >Multiple Files</label
              >
            </div>
            <div class="col-lg-8">
              <input
                class="form-control"
                type="file"
                id="formFileMultiple01"
                multiple
              />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Recipient</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2"
                  >&commat;example.com</span
                >
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Email Login</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
                <span class="input-group-text">&commat;</span>
                <input type="text" class="form-control" placeholder="Server" />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="basic-url" class="col-form-label">Vanity URL</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3"
                  >https://example.com/users/</span
                >
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label class="col-form-label">Dropdown + Input</label>
            </div>
            <div class="col-lg-8">
              <div class="input-group" ngbDropdown>
                <button
                  ngbDropdownToggle
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0);">Action</a>
                  <a ngbDropdownItem href="javascript:void(0);"
                    >Another action</a
                  >
                  <a ngbDropdownItem href="javascript:void(0);"
                    >Something else here</a
                  >
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="inputGroupFile04" class="col-form-label"
                >File Input</label
              >
            </div>
            <div class="col-lg-8">
              <input class="form-control" type="file" id="inputGroupFile04" />
            </div>
          </div>

          <div class="border-top border-dashed my-3"></div>

          <div class="row g-lg-4 g-2">
            <div class="col-lg-4">
              <label for="inputGroupSelect01" class="col-form-label"
                >Input Group Select</label
              >
            </div>
            <div class="col-lg-8">
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01"
                  >Options</label
                >
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class InputGroups {}
