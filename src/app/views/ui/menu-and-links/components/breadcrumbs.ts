import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-breadcrumbs',
  imports: [UiCard, NgIcon],
  template: `
    <app-ui-card title="Breadcrumb Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="pb-1 mb-2">Basic</h5>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-2 py-2">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-2 py-2">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Home</a>
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 py-2">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Home</a>
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>

              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Library</a>
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>

              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>

        <div class="col-xl-6">
          <h5 class="pb-1 mb-2">With Icons</h5>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
              <li class="breadcrumb-item active" aria-current="page">
                <ng-icon name="tablerSmartHome" class="me-1"></ng-icon>Home
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);"
                  ><ng-icon name="tablerSmartHome"></ng-icon> Home</a
                >
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light bg-opacity-50 p-2 mb-0">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);"
                  ><ng-icon name="tablerSmartHome"></ng-icon> Home</a
                >
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>

              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Library</a>
              </li>
              <li
                class="d-flex align-items-center text-muted mx-1"
                aria-current="page"
              >
                <ng-icon name="tablerChevronRight"></ng-icon>
              </li>

              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Breadcrumbs {}
