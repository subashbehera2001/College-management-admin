import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-list-groups',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="List Group Variations">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Basic Example</h5>

          <ul class="list-group">
            <li class="list-group-item">
              <ng-icon name="tablerCloud" class="me-1 align-top fs-xl" />
              Dropbox Cloud Storage
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandSlack" class="me-1 align-top fs-xl" />
              Slack Team Collaboration
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandWindows" class="me-1 align-top fs-xl" />
              Microsoft Windows OS
            </li>
            <li class="list-group-item">
              <ng-icon
                name="tablerDeviceDesktopAnalytics"
                class="me-1 align-top fs-xl"
              />
              Zendesk Customer Support
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandStripe" class="me-1 align-top fs-xl" />
              Stripe Payment Integration
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Active Items</h5>

          <ul class="list-group">
            <li class="list-group-item active">
              <ng-icon name="tablerBrandGithub" class="me-1 align-top fs-xl" />
              GitHub Repository
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandFigma" class="me-1 align-top fs-xl" />
              Figma Design Tool
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandNotion" class="me-1 align-top fs-xl" />
              Notion Workspace
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandTrello" class="me-1 align-top fs-xl" />
              Trello Task Manager
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerCloud" class="me-1 align-top fs-xl" />
              DigitalOcean Cloud
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Disabled Items</h5>

          <ul class="list-group">
            <li class="list-group-item disabled" aria-disabled="true">
              <ng-icon name="tablerCloud" class="me-1 align-top fs-xl" />
              Dropbox Cloud Storage
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandSlack" class="me-1 align-top fs-xl" />
              Slack Team Collaboration
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandWindows" class="me-1 align-top fs-xl" />
              Microsoft Windows OS
            </li>
            <li class="list-group-item">
              <ng-icon
                name="tablerDeviceDesktopAnalytics"
                class="me-1 align-top fs-xl"
              />
              Zendesk Customer Support
            </li>
            <li class="list-group-item">
              <ng-icon name="tablerBrandStripe" class="me-1 align-top fs-xl" />
              Stripe Payment Integration
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Links and Buttons</h5>

          <div class="list-group">
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action active"
            >
              Stripe Payment Integration
            </a>
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action"
              >Dropbox Cloud Service</a
            >
            <button
              type="button"
              class="list-group-item list-group-item-action"
            >
              Slack Communication
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
            >
              Notion Productivity App
            </button>
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action disabled"
              tabindex="-1"
              >Zendesk Support Tool</a
            >
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Flush</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">Slack Collaboration Tool</li>
            <li class="list-group-item">Dropbox Cloud Storage</li>
            <li class="list-group-item">Notion Workspace Organizer</li>
            <li class="list-group-item">Zendesk Customer Support</li>
            <li class="list-group-item">Stripe Payment Processor</li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Horizontal</h5>

          <ul class="list-group list-group-horizontal mb-3">
            <li class="list-group-item">Slack</li>
            <li class="list-group-item">Notion</li>
            <li class="list-group-item">Dropbox</li>
          </ul>

          <ul class="list-group list-group-horizontal-sm mb-3">
            <li class="list-group-item">Figma</li>
            <li class="list-group-item">Stripe</li>
            <li class="list-group-item">Zendesk</li>
          </ul>

          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item">Trello</li>
            <li class="list-group-item">Asana</li>
            <li class="list-group-item">ClickUp</li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Contextual Classes</h5>

          <ul class="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item list-group-item-primary">
              A simple primary list group item
            </li>
            <li class="list-group-item list-group-item-secondary">
              A simple secondary list group item
            </li>
            <li class="list-group-item list-group-item-success">
              A simple success list group item
            </li>
            <li class="list-group-item list-group-item-danger">
              A simple danger list group item
            </li>
            <li class="list-group-item list-group-item-warning">
              A simple warning list group item
            </li>
            <li class="list-group-item list-group-item-info">
              A simple info list group item
            </li>
            <li class="list-group-item list-group-item-light">
              A simple light list group item
            </li>
            <li class="list-group-item list-group-item-dark">
              A simple dark list group item
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Contextual Classes with Link</h5>

          <div class="list-group">
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action"
              >Darius ac facilities in</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-primary"
              >A simple primary list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-secondary"
              >A simple secondary list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-success"
              >A simple success list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-danger"
              >A simple danger list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-warning"
              >A simple warning list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-info"
              >A simple info list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-light"
              >A simple light list group item</a
            >
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action list-group-item-dark"
              >A simple dark list group item</a
            >
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Custom Content</h5>

          <div class="list-group">
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action active"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a
              href="javascript:void(0);"
              class="list-group-item list-group-item-action"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">With Badges</h5>

          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Gmail Notifications
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Unprocessed Orders
              <span class="badge bg-success rounded-pill">2</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Urgent Tickets
              <span class="badge bg-danger rounded-pill">99+</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Completed Transactions
              <span class="badge bg-success rounded-pill">20+</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              Invoices Awaiting Approval
              <span class="badge bg-warning rounded-pill">12</span>
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Checkboxes and Radios</h5>

          <ul class="list-group">
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="newsletterCheckbox"
              />
              <label class="form-check-label" for="newsletterCheckbox"
                >Subscribe to newsletter</label
              >
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="termsCheckbox"
              />
              <label class="form-check-label" for="termsCheckbox"
                >Accept terms and conditions</label
              >
            </li>
          </ul>

          <ul class="list-group mt-2">
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="radio"
                name="notificationOptions"
                value=""
                id="emailRadio"
                checked
              />
              <label class="form-check-label" for="emailRadio"
                >Notify by Email</label
              >
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="radio"
                name="notificationOptions"
                value=""
                id="smsRadio"
              />
              <label class="form-check-label" for="smsRadio"
                >Notify by SMS</label
              >
            </li>
          </ul>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Numbered</h5>

          <ol class="list-group list-group-numbered">
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Admin Admin</div>
                Admin Admin
              </div>
              <span class="badge bg-primary rounded-pill">865</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Admin React Admin</div>
                Admin React Admin
              </div>
              <span class="badge bg-primary rounded-pill">140</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Angular Version</div>
                Angular Version
              </div>
              <span class="badge bg-primary rounded-pill">85</span>
            </li>
          </ol>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class ListGroups {}
