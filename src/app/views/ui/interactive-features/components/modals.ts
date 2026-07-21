import { Component, inject, TemplateRef } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import {
  NgbModal,
  NgbModalModule,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-modals',
  imports: [UiCard, NgbModalModule, FormsModule],
  template: `
    <app-ui-card title="Modals Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Bootstrap Modals</h5>

          <ng-template #standardModal let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="standard-modalLabel">
                Modal Heading
              </h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Text in a modal</h5>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <hr />
              <h5>Overflowing text to show scroll behavior</h5>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p class="mb-0">
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </ng-template>

          <ng-template #modalLg let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">...</div>
          </ng-template>

          <ng-template #modalSm let-modal>
            <div class="modal-header">
              <h4 class="modal-title">Small modal</h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">...</div>
          </ng-template>

          <ng-template #fullWidthModal let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="fullWidthModalLabel">
                Modal Heading
              </h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Text in a modal</h5>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <hr />
              <h5>Overflowing text to show scroll behavior</h5>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p class="mb-0">
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </ng-template>

          <ng-template #scrollableModal let-modal>
            <div class="modal-header">
              <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p class="mb-0">
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </ng-template>

          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              (click)="open(standardModal)"
            >
              Standard Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(modalLg, { size: 'lg' })"
            >
              Large Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(modalSm, { size: 'sm' })"
            >
              Small Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullWidthModal, { size: 'xl' })"
            >
              Full Width Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(scrollableModal, { scrollable: true })"
            >
              Scrollable Modal
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Modal Position</h5>

          <ng-template #topmodal let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.close()"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="mt-0">Text in a modal</h5>
              <p class="mb-0">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                (click)="modal.close()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </ng-template>

          <ng-template #bottomModal let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="bottomModalLabel">Modal Heading</h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="mt-0">Text in a modal</h5>
              <p class="mb-0">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </ng-template>

          <ng-template #centeredModal let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="myCenterModalLabel">Center modal</h4>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="mt-0">Overflowing text to show scroll behavior</h5>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p class="mb-0">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
            </div>
          </ng-template>

          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              (click)="open(topmodal)"
            >
              Top Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="
                openModal(bottomModal, { modalDialogClass: 'modal-bottom' })
              "
            >
              Bottom Modal
            </button>

            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(centeredModal, { centered: true })"
            >
              Center modal
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Multiple Modal</h5>

          <ng-template #multipleone let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="multiple-oneModalLabel">
                Modal Heading
              </h4>
              <button
                type="button"
                (click)="modal.dismiss()"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="mt-0">Text in a modal</h5>
              <p class="mb-0">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                (click)="open(multipletwo); modal.dismiss()"
              >
                Next
              </button>
            </div>
          </ng-template>

          <ng-template #multipletwo let-modal>
            <div class="modal-header">
              <h4 class="modal-title" id="multiple-twoModalLabel">
                Modal Heading
              </h4>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              <h5 class="mt-0">Text in a modal</h5>
              <p class="mb-0">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                (click)="modal.dismiss()"
              >
                Close
              </button>
            </div>
          </ng-template>

          <div class="d-flex flex-wrap gap-2">
            <button
              (click)="open(multipleone)"
              type="button"
              class="btn btn-primary"
            >
              Multiple Modal
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Toggle Between Modals</h5>

          <ng-template #exampleModalToggle let-modal>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
              ></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                (click)="
                  openModal(exampleModalToggle2, { centered: true });
                  modal.dismiss()
                "
              >
                Open second modal
              </button>
            </div>
          </ng-template>

          <ng-template #exampleModalToggle2 let-modal>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                (click)="
                  openModal(exampleModalToggle, { centered: true });
                  modal.dismiss()
                "
              >
                Back to first
              </button>
            </div>
          </ng-template>

          <a
            class="btn btn-primary"
            (click)="openModal(exampleModalToggle, { centered: true })"
            >Open first modal</a
          >
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Fullscreen Modal</h5>

          <div class="hstack gap-2 flex-wrap">
            <!-- Fullscreen Modal -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: true })"
            >
              Fullscreen Modal
            </button>
            <!-- Full Screen Below sm -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: 'sm' })"
            >
              Full Screen Below sm
            </button>
            <!-- Full Screen Below md -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: 'md' })"
            >
              Full Screen Below md
            </button>
            <!-- Full Screen Below lg -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: 'lg' })"
            >
              Full Screen Below lg
            </button>
            <!-- Full Screen Below xl -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: 'xl' })"
            >
              Full Screen Below xl
            </button>
            <!-- Full Screen Below xxl -->
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(fullscreenExampleModal, { fullscreen: 'xxl' })"
            >
              Full Screen Below xxl
            </button>
          </div>

          <!-- Full Screen Modal -->
          <ng-template
            class="modal fade"
            #fullscreenExampleModal
            let-modal
            tabindex="-1"
          >
            <div class="modal-header">
              <h5 class="modal-title" id="fullscreeexampleModalLabel">
                Full Screen Modal
              </h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <a
                href="javascript:void(0);"
                class="btn btn-light"
                (click)="modal.dismiss()"
                >Close</a
              >
              <button type="button" class="btn btn-primary">
                Save Changes
              </button>
            </div>
          </ng-template>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Static Backdrop</h5>

          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              (click)="openModal(static, { backdrop: 'static' })"
            >
              Static Backdrop
            </button>
          </div>

          <ng-template let-modal #static>
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="m-0">
                I will not close if you click outside me. Don't even try to
                press escape key.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </ng-template>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Varying Modal Content</h5>

          <div class="hstack gap-2 flex-wrap">
            <button
              (click)="openvaryingModal(exampleModal, '@mdo')"
              type="button"
              class="btn btn-primary"
            >
              Open modal for &#64;mdo
            </button>
            <button
              (click)="openvaryingModal(exampleModal, '@fat')"
              type="button"
              class="btn btn-primary"
            >
              Open modal for &#64;fat
            </button>
            <button
              (click)="openvaryingModal(exampleModal, '@getbootstrap')"
              type="button"
              class="btn btn-primary"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              Open modal for &#64;getbootstrap
            </button>
          </div>

          <ng-template #exampleModal let-modal>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message to {{ name }}
              </h5>
              <button
                type="button"
                class="btn-close"
                (click)="modal.dismiss()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Recipient:</label
                >
                <input
                  type="text"
                  [(ngModel)]="name"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Message:</label
                >
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                (click)="modal.dismiss()"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </ng-template>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Modals {
  private modalService = inject(NgbModal)

  name: string = ''

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
    this.modalService.open(content, options)
  }

  openvaryingModal(content: TemplateRef<HTMLElement>, name: string) {
    this.modalService.open(content)
    this.name = name
  }
}
