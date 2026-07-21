import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { NgIcon } from '@ng-icons/core'
import { toTitleCase } from '@/app/utils/string-utils'

@Component({
  selector: 'app-dropdowns',
  imports: [UiCard, NgbDropdownModule, NgIcon],
  template: `
    <app-ui-card title="Dropdowns Variations" [isTogglable]="true">
      <ng-content card-body>
        <div class="row">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Single Button Dropdowns</h5>

            <div class="row">
              <div class="col-auto">
                <div ngbDropdown>
                  <button class="btn btn-light" type="button" ngbDropdownToggle>
                    Choose Option
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Profile Settings</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Notifications</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)">Logout</a>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div ngbDropdown>
                  <button
                    class="btn btn-primary"
                    type="button"
                    ngbDropdownToggle
                  >
                    Quick Actions
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Profile Settings</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Notifications</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Menu Alignment</h5>

            <div ngbDropdown placement="bottom-right">
              <button class="btn btn-light" type="button" ngbDropdownToggle>
                Right-aligned menu
              </button>
              <div ngbDropdownMenu>
                <a ngbDropdownItem href="javascript:void(0)"
                  >Profile Settings</a
                >
                <a ngbDropdownItem href="javascript:void(0)">Notifications</a>
                <a ngbDropdownItem href="javascript:void(0)">Logout</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Custom Dropdown Arrow</h5>

            <div class="row">
              <div class="col-auto">
                <div ngbDropdown>
                  <button
                    class="btn btn-primary  drop-arrow-none"
                    ngbDropdownToggle
                    type="button"
                  >
                    Without Arrow
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Download Report</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >View Analytics</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)">Export Data</a>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div ngbDropdown>
                  <button
                    class="btn btn-outline-primary drop-arrow-none"
                    ngbDropdownToggle
                    type="button"
                  >
                    Tabler Icon
                    <ng-icon name="tablerChevronDown" class="ms-1" />
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Edit Profile</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Account Settings</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)">Sign Out</a>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div ngbDropdown>
                  <button
                    class="btn btn-primary drop-arrow-none"
                    type="button"
                    ngbDropdownToggle
                  >
                    Lucide Icon
                    <ng-icon
                      name="lucideSquareChevronDown"
                      class="avatar-xxs ms-2"
                    />
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)">New Project</a>
                    <a ngbDropdownItem href="javascript:void(0)">Manage Team</a>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Billing Info</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Split Button Dropdowns</h5>

            <div class="d-flex flex-wrap gap-2">
              @for (variant of dropdownVariants; track $index) {
                <div class="btn-group" ngbDropdown>
                  <button type="button" class="btn btn-{{ variant }}">
                    {{ toTitleCase(variant) }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-{{
                      variant
                    }}  dropdown-toggle-split drop-arrow-none"
                    ngbDropdownToggle
                  >
                    <ng-icon name="tablerChevronDown" />
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)">Action</a>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Another action</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Something else here</a
                    >
                    <div class="dropdown-divider"></div>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Separated link</a
                    >
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Dropup Variation</h5>

            <div class="d-flex flex-wrap gap-2">
              <div class="btn-group" placement="top-start" ngbDropdown>
                <button type="button" class="btn btn-light" ngbDropdownToggle>
                  Dropup
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0)">Upload File</a>
                  <a ngbDropdownItem href="javascript:void(0)">Sync Data</a>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Import from CSV</a
                  >
                  <div class="dropdown-divider"></div>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Advanced Settings</a
                  >
                </div>
              </div>

              <div class="btn-group" ngbDropdown placement="top-start">
                <button type="button" class="btn btn-light">
                  Split dropup
                </button>
                <button
                  type="button"
                  class="btn btn-light  dropdown-toggle-split"
                  ngbDropdownToggle
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0)">New Task</a>
                  <a ngbDropdownItem href="javascript:void(0)">Assign User</a>
                  <a ngbDropdownItem href="javascript:void(0)">Set Deadline</a>
                  <div class="dropdown-divider"></div>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Project Settings</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Dropstart Variation</h5>

            <div class="d-flex flex-wrap gap-2">
              <div class="btn-group dropstart" placement="left-top" ngbDropdown>
                <button
                  type="button"
                  class="btn btn-secondary"
                  ngbDropdownToggle
                >
                  Dropstart
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0)">Action</a>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Another action</a
                  >
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Something else here</a
                  >
                  <div class="dropdown-divider"></div>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Separated link</a
                  >
                </div>
              </div>

              <div class="btn-group dropstart" ngbDropdown>
                <div
                  class="btn-group"
                  placement="left-top"
                  role="group"
                  ngbDropdown
                >
                  <button
                    type="button"
                    class="btn btn-secondary  dropdown-split dropdown-toggle-split"
                    ngbDropdownToggle
                  >
                    <span class="visually-hidden">Toggle Dropstart</span>
                  </button>
                  <div ngbDropdownMenu>
                    <a ngbDropdownItem href="javascript:void(0)">Action</a>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Another action</a
                    >
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Something else here</a
                    >
                    <div class="dropdown-divider"></div>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Separated link</a
                    >
                  </div>
                </div>
                <button type="button" class="btn btn-secondary">
                  Split dropstart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Dropend Variation</h5>

            <div class="d-flex flex-wrap gap-2">
              <div class="btn-group dropend" placement="right-top" ngbDropdown>
                <button type="button" class="btn btn-primary" ngbDropdownToggle>
                  Dropend
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0)">Action</a>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Another action</a
                  >
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Something else here</a
                  >
                  <div class="dropdown-divider"></div>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Separated link</a
                  >
                </div>
              </div>

              <div class="btn-group dropend" placement="right-top" ngbDropdown>
                <button type="button" class="btn btn-primary ">
                  Split Dropend
                </button>
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle-split"
                  ngbDropdownToggle
                >
                  <span class="visually-hidden">Toggle Dropstart</span>
                </button>
                <div ngbDropdownMenu>
                  <a ngbDropdownItem href="javascript:void(0)">Action</a>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Another action</a
                  >
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Something else here</a
                  >
                  <div class="dropdown-divider"></div>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Separated link</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Active Item</h5>

            <div class="btn-group" ngbDropdown>
              <button type="button" class="btn btn-secondary" ngbDropdownToggle>
                Active Item
              </button>
              <div ngbDropdownMenu>
                <a ngbDropdownItem href="javascript:void(0)">Regular link</a>
                <a class="active" ngbDropdownItem href="javascript:void(0)"
                  >Active link</a
                >
                <a ngbDropdownItem href="javascript:void(0)">Another link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Disabled Item</h5>

            <div class="btn-group" ngbDropdown>
              <button type="button" class="btn btn-primary" ngbDropdownToggle>
                Disabled
              </button>
              <div ngbDropdownMenu>
                <a ngbDropdownItem href="javascript:void(0)">Regular link</a>
                <a
                  class="dropdown-item disabled"
                  href="javascript:void(0)"
                  tabindex="-1"
                  >Disabled link</a
                >
                <a ngbDropdownItem href="javascript:void(0)">Another link</a>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Headers</h5>

            <div class="btn-group" ngbDropdown>
              <button type="button" class="btn btn-secondary" ngbDropdownToggle>
                Header
              </button>
              <div ngbDropdownMenu>
                <h6 class="dropdown-header">Dropdown header</h6>
                <a ngbDropdownItem href="javascript:void(0)">Action</a>
                <a ngbDropdownItem href="javascript:void(0)">Another action</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Dark Dropdowns</h5>

            <div ngbDropdown>
              <button class="btn btn-dark" ngbDropdownToggle type="button">
                Dark Dropdown
              </button>
              <ul ngbDropdownMenu data-bs-theme="dark">
                <li>
                  <a class="dropdown-item active" href="javascript:void(0)"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a ngbDropdownItem href="javascript:void(0)">My Orders</a>
                </li>
                <li>
                  <a ngbDropdownItem href="javascript:void(0)"
                    >Billing Settings</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a ngbDropdownItem href="javascript:void(0)">Logout</a></li>
              </ul>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Centered Dropdowns</h5>

            <div class="hstack gap-2">
              <div class="dropdown-center" ngbDropdown>
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Centered dropdown
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Action two</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Action three</a
                    >
                  </li>
                </ul>
              </div>

              <div class="dropup-center dropup" ngbDropdown placement="top">
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Centered dropup
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Action two</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)"
                      >Action three</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Text</h5>

            <div class="btn-group" ngbDropdown>
              <button type="button" class="btn btn-primary" ngbDropdownToggle>
                Text Dropdown
              </button>
              <div
                class="p-3 text-muted"
                style="max-width: 200px;"
                ngbDropdownMenu
              >
                <p>
                  Some example text that's free-flowing within the dropdown
                  menu.
                </p>
                <p class="mb-0">And this is more example text.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Auto Close Behavior</h5>

            <div class="hstack gap-2">
              <div class="btn-group" ngbDropdown>
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Default dropdown
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group" ngbDropdown autoClose="inside">
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Clickable inside
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group" ngbDropdown autoClose="outside">
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Clickable outside
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group" ngbDropdown [autoClose]="false">
                <button
                  class="btn btn-secondary"
                  ngbDropdownToggle
                  type="button"
                >
                  Manual close
                </button>
                <ul ngbDropdownMenu>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                  <li>
                    <a ngbDropdownItem href="javascript:void(0)">Menu item</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-6"></div>

          <div class="col-xl-6">
            <h5 class="mb-2 pb-1">Forms</h5>

            <div ngbDropdown>
              <button type="button" class="btn btn-secondary" ngbDropdownToggle>
                Form
              </button>
              <div ngbDropdownMenu>
                <form class="px-4 py-3">
                  <div class="mb-3">
                    <label for="exampleDropdownFormEmail1" class="form-label"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleDropdownFormEmail1"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleDropdownFormPassword1" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleDropdownFormPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-2">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="dropdownCheck"
                      />
                      <label class="form-check-label" for="dropdownCheck">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                <div class="dropdown-divider"></div>
                <a ngbDropdownItem href="javascript:void(0)"
                  >New around here? Sign up</a
                >
                <a ngbDropdownItem href="javascript:void(0)"
                  >Forgot password?</a
                >
              </div>
            </div>
          </div>
        </div>
      </ng-content>
    </app-ui-card>
  `,
  styles: ``,
})
export class Dropdowns {
  dropdownVariants = ['primary', 'soft-primary']
  protected readonly toTitleCase = toTitleCase
}
