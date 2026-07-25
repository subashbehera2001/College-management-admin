import { Component, inject, TemplateRef } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-offcanvas',
  imports: [UiCard],
  template: `
    <app-ui-card title="Offcanvas Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Offcanvas</h5>

          <div class="d-flex flex-wrap gap-2">
            <a
              class="btn btn-primary"
              (click)="openStart(content)"
              role="button"
            >
              Link with href
            </a>
            <button
              class="btn btn-primary"
              type="button"
              (click)="openStart(content)"
            >
              Button with data-bs-target
            </button>
          </div>
          <!-- end d-flex flex-wrap gap-2-->

          <ng-template let-offcanvas #content>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                (click)="offcanvas.close('Close click')"
              ></button>
            </div>
            <!-- end offcanvas-header-->

            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 class="mt-3">List</h5>
              <ul class="ps-3">
                <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                <li class="">Neque porro quisquam est, qui dolorem</li>
                <li class="">Quis autem vel eum iure qui in ea</li>
              </ul>

              <ul class="ps-3">
                <li class="">
                  At vero eos et accusamus et iusto odio dignissimos
                </li>
                <li class="">Et harum quidem rerum facilis</li>
                <li class="">Temporibus autem quibusdam et aut officiis</li>
              </ul>
            </div>
          </ng-template>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Offcanvas Backdrop</h5>

          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-primary"
              type="button"
              (click)="openNoBackdrop(backdrop)"
            >
              Enable body scrolling
            </button>

            <button
              class="btn btn-primary"
              type="button"
              (click)="openStart(enableBackdrop)"
            >
              Enable backdrop (default)
            </button>

            <button
              class="btn btn-primary"
              type="button"
              (click)="openScroll(scroll)"
            >
              Enable both scrolling & backdrop
            </button>
          </div>

          <ng-template #backdrop let-offcanvas>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                Colored with scrolling
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                (click)="offcanvas.close()"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 class="mt-3">List</h5>
              <ul class="ps-3">
                <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                <li class="">Neque porro quisquam est, qui dolorem</li>
                <li class="">Quis autem vel eum iure qui in ea</li>
              </ul>

              <ul class="ps-3">
                <li class="">
                  At vero eos et accusamus et iusto odio dignissimos
                </li>
                <li class="">Et harum quidem rerum facilis</li>
                <li class="">Temporibus autem quibusdam et aut officiis</li>
              </ul>
            </div>
          </ng-template>

          <ng-template #enableBackdrop let-offcanvas>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
                Offcanvas with backdrop
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                (click)="offcanvas.close()"
              ></button>
            </div>

            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 class="mt-3">List</h5>
              <ul class="ps-3">
                <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                <li class="">Neque porro quisquam est, qui dolorem</li>
                <li class="">Quis autem vel eum iure qui in ea</li>
              </ul>

              <ul class="ps-3">
                <li class="">
                  At vero eos et accusamus et iusto odio dignissimos
                </li>
                <li class="">Et harum quidem rerum facilis</li>
                <li class="">Temporibus autem quibusdam et aut officiis</li>
              </ul>
            </div>
          </ng-template>

          <ng-template #scroll let-offcanvas>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Backdroped with scrolling</h5>
              <button
                type="button"
                class="btn-close text-reset"
                (click)="offcanvas.close()"
              ></button>
            </div>

            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 class="mt-3">List</h5>
              <ul class="ps-3">
                <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                <li class="">Neque porro quisquam est, qui dolorem</li>
                <li class="">Quis autem vel eum iure qui in ea</li>
              </ul>

              <ul class="ps-3">
                <li class="">
                  At vero eos et accusamus et iusto odio dignissimos
                </li>
                <li class="">Et harum quidem rerum facilis</li>
                <li class="">Temporibus autem quibusdam et aut officiis</li>
              </ul>
            </div>
          </ng-template>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Offcanvas Placement</h5>

          <div>
            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary"
                type="button"
                (click)="openTop(topOffcanvas)"
              >
                Toggle Top offcanvas
              </button>

              <button
                class="btn btn-primary"
                type="button"
                (click)="openEnd(rightOffcanvas)"
              >
                Toggle right offcanvas
              </button>

              <button
                class="btn btn-primary"
                type="button"
                (click)="openBottom(bottomOffcanvas)"
              >
                Toggle bottom offcanvas
              </button>

              <button
                class="btn btn-primary mt-2 mt-lg-0"
                type="button"
                (click)="openStart(leftOffcanvas)"
              >
                Toggle Left offcanvas
              </button>
            </div>

            <ng-template #topOffcanvas let-offcanvas>
              <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel">Offcanvas Top</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  (click)="offcanvas.close()"
                ></button>
              </div>

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>
              </div>
            </ng-template>

            <ng-template #rightOffcanvas let-offcanvas>
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  (click)="offcanvas.close()"
                ></button>
              </div>

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>
              </div>
            </ng-template>

            <ng-template #bottomOffcanvas let-offcanvas>
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                  Offcanvas bottom
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  (click)="offcanvas.close()"
                ></button>
              </div>

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>
              </div>
            </ng-template>

            <ng-template #leftOffcanvas let-offcanvas>
              <div class="offcanvas-header">
                <h5 id="offcanvasLeftLabel">Offcanvas Left</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  (click)="offcanvas.close()"
                ></button>
              </div>

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>
              </div>
            </ng-template>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Dark Offcanvas</h5>

          <button
            class="btn btn-primary"
            type="button"
            (click)="openDark(darkOffcanvas)"
          >
            Dark offcanvas
          </button>

          <ng-template #darkOffcanvas let-offcanvas>
            <div class="offcanvas-header">
              <h5 id="offcanvasDarkLabel">Dark Offcanvas</h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                (click)="offcanvas.close()"
              ></button>
            </div>

            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 class="mt-3">List</h5>
              <ul class="ps-3">
                <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                <li class="">Neque porro quisquam est, qui dolorem</li>
                <li class="">Quis autem vel eum iure qui in ea</li>
              </ul>
            </div>
          </ng-template>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Offcanvas {
  private offcanvasService = inject(NgbOffcanvas)

  openStart(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.dismiss()
    this.offcanvasService.open(content, { position: 'start' })
  }

  openEnd(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'end' })
  }

  openTop(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'top' })
  }

  openBottom(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'bottom' })
  }

  openNoBackdrop(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { backdrop: false, scroll: true })
  }

  openScroll(scroll: TemplateRef<any>) {
    this.offcanvasService.open(scroll, { scroll: true })
  }

  openDark(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, {
      position: 'start',
      panelClass: 'text-bg-dark',
    })
  }
}
