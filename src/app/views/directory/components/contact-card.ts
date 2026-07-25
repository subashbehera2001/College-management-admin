import { Component, Input } from '@angular/core'
import { ContactType } from '@/app/views/directory/types'
import { NgIcon } from '@ng-icons/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-contact-card',
  imports: [NgIcon, NgbDropdownModule],
  template: `
    <div class="card card-hovered">
      <div class="card-body">
        <div class="d-flex align-items-center mb-4">
          <div class="me-3 position-relative">
            <img
              [src]="contact.avatar"
              alt="avatar"
              class="rounded-circle"
              width="72"
              height="72"
            />
            <span
              class="position-absolute bottom-0 end-0 badge bg-primary rounded-circle p-1 shadow-sm"
              title="Rating 4.8"
            >
              <ng-icon
                name="tablerStar"
                class="text-white d-flex align-items-center"
              />
            </span>
          </div>
          <div>
            <h5 class="mb-1 d-flex align-items-center">
              <a
                href="javascript:void(0);"
                class="link-reset fw-medium fs-md"
                >{{ contact.name }}</a
              >
              <img
                [src]="contact.country.flag"
                alt="USA"
                class="ms-2 rounded-circle"
                height="16"
              />
            </h5>
            <p class="text-muted mb-1">{{ contact.jobTitle }}</p>
            @if (contact.verified) {
              <span class="badge bg-success-subtle text-success fw-medium"
                >VERIFIED</span
              >
            }
          </div>
          <div class="ms-auto">
            <div ngbDropdown placement="bottom-end">
              <a
                href="javascript:void(0);"
                ngbDropdownToggle
                class="btn btn-icon btn-ghost-light text-muted drop-arrow-none"
              >
                <ng-icon name="tablerDotsVertical" class="fs-xl" />
              </a>
              <ul ngbDropdownMenu class="dropdown-menu-end">
                <li>
                  <a ngbDropdownItem href="javascript:void(0)">
                    <ng-icon name="tablerShare" class="me-2 fs-15" />
                    Share</a
                  >
                </li>
                <li>
                  <a ngbDropdownItem href="javascript:void(0)">
                    <ng-icon name="tablerEdit" class="me-2 fs-15" />
                    Edit</a
                  >
                </li>
                <li>
                  <a ngbDropdownItem href="javascript:void(0)">
                    <ng-icon name="tablerBan" class="me-2 fs-15" />
                    Block</a
                  >
                </li>
                <li>
                  <a
                    ngbDropdownItem
                    class="text-danger"
                    href="javascript:void(0)"
                  >
                    <ng-icon name="tablerTrash" class="me-2 fs-15" />
                    Delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-muted mb-2">
          {{ contact.about }}
        </p>

        <a
          href="javascript:void(0);"
          class="icon-link icon-link-hover link-reset fw-medium"
        >
          View Profile
          <ng-icon name="tablerArrowNarrowRight" class="bi fs-16" />
        </a>
      </div>
      <div class="card-footer">
        <div class="row text-center">
          <div class="col-4">
            <div class="text-muted fs-xs mb-1">CAMPAIGNS</div>
            <div class="fw-bold">{{ contact.campaigns }}</div>
          </div>
          <div class="col-4">
            <div class="text-muted fs-xs mb-1">CONTACTS</div>
            <div class="fw-bold">{{ contact.contacts }}</div>
          </div>
          <div class="col-4">
            <div class="text-muted fs-xs mb-1">ENGAGEMENT</div>
            <div class="fw-bold">{{ contact.engagement }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContactCard {
  @Input({ required: true }) contact!: ContactType
}
