import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-pagination',
  imports: [UiCard, NgbPaginationModule, NgIcon],
  template: `
    <app-ui-card title="Pagination Variations" [isTogglable]="true">
      <div class="row" card-body>
        <div class="col-lg-6">
          <div class="">
            <h5 class="mb-2 pb-1">Default Pagination</h5>

            <nav aria-label="Page navigation example">
              <ngb-pagination [collectionSize]="30">
                <ng-template ngbPaginationPrevious>Previous</ng-template>
                <ng-template ngbPaginationNext>Next</ng-template>
              </ngb-pagination>
            </nav>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Alignment</h5>

            <nav aria-label="Page navigation example">
              <ngb-pagination
                [collectionSize]="30"
                class="d-flex justify-content-center mb-3"
              >
                <ng-template ngbPaginationPrevious>Previous</ng-template>
                <ng-template ngbPaginationNext>Next</ng-template>
              </ngb-pagination>
            </nav>

            <nav aria-label="Page navigation example">
              <ngb-pagination
                [collectionSize]="30"
                class="d-flex justify-content-end mb-3"
              >
                <ng-template ngbPaginationPrevious>Previous</ng-template>
                <ng-template ngbPaginationNext>Next</ng-template>
              </ngb-pagination>
            </nav>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Disabled state</h5>

            <nav aria-label="...">
              <ngb-pagination
                [collectionSize]="30"
                [page]="2"
                [disabled]="true"
              >
                <ng-template ngbPaginationPrevious>Previous</ng-template>
                <ng-template ngbPaginationNext>Next</ng-template>
              </ngb-pagination>
            </nav>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Custom Icon Pagination</h5>

            <nav class="mb-3">
              <ngb-pagination
                [collectionSize]="50"
                [page]="2"
                class="pagination-boxed"
              >
                <ng-template ngbPaginationPrevious>
                  <ng-icon name="tablerChevronLeft" />
                </ng-template>
                <ng-template ngbPaginationNext>
                  <ng-icon name="tablerChevronRight" />
                </ng-template>
              </ngb-pagination>
            </nav>

            <nav>
              <ngb-pagination
                [collectionSize]="50"
                [page]="3"
                class="pagination-boxed"
              >
                <ng-template ngbPaginationPrevious>
                  <ng-icon name="tablerArrowLeft" />
                </ng-template>
                <ng-template ngbPaginationNext>
                  <ng-icon name="tablerArrowRight" />
                </ng-template>
              </ngb-pagination>
            </nav>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="">
            <h5 class="mb-2 pb-1">Sizing</h5>

            <nav class="mb-3">
              <ngb-pagination [collectionSize]="30" size="lg" />
            </nav>

            <nav>
              <ngb-pagination [collectionSize]="30" size="sm" />
            </nav>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Boxed Pagination</h5>

            <nav class="d-flex flex-column gap-3">
              <ngb-pagination [collectionSize]="50" class="pagination-boxed" />
              <ngb-pagination
                [collectionSize]="50"
                size="lg"
                class="pagination-boxed"
              />
              <ngb-pagination
                [collectionSize]="50"
                class="pagination-boxed"
                size="sm"
              />
            </nav>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Rounded Pagination</h5>

            <nav>
              <ngb-pagination
                [collectionSize]="50"
                class="pagination-rounded pagination-boxed "
              />
            </nav>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Pagination {}
