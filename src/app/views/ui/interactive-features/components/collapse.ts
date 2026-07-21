import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-collapse',
  imports: [UiCard, NgbCollapseModule],
  template: `
    <app-ui-card title="Collapse Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Collapse</h5>

          <p>
            <a
              class="btn btn-primary"
              (click)="collapse.toggle()"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              class="btn btn-primary ms-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              (click)="isCollapsed = !isCollapsed"
            >
              Button with data-bs-target
            </button>
          </p>
          <div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
            <div class="card mb-0 card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Collapse Horizontal</h5>

          <p>
            <button
              class="btn btn-primary"
              type="button"
              (click)="horizontalCollapse.toggle()"
            >
              Toggle width collapse
            </button>
          </p>
          <div style="min-height: 100px;">
            <div
              #horizontalCollapse="ngbCollapse"
              [horizontal]="true"
              [(ngbCollapse)]="isHorizontal"
            >
              <div class="card mb-0" style="width: 300px;">
                <div class="card-body">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Multiple Targets</h5>

          <div class="d-flex flex-wrap gap-2 mb-3">
            <a
              class="btn btn-primary"
              (click)="toggleFirst.toggle()"
              role="button"
              >Toggle first element</a
            >
            <button
              class="btn btn-primary"
              type="button"
              (click)="toggleSecond.toggle()"
            >
              Toggle second element
            </button>
            <button
              class="btn btn-primary"
              type="button"
              (click)="toggleFirst.toggle(); toggleSecond.toggle()"
            >
              Toggle both elements
            </button>
          </div>

          <div class="row">
            <div class="col">
              <div #toggleFirst="ngbCollapse" [(ngbCollapse)]="isFirstToggle">
                <div class="card mb-0">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div #toggleSecond="ngbCollapse" [(ngbCollapse)]="isSecondToggle">
                <div class="card mb-0">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row-->
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Collapse {
  isCollapsed = false
  isHorizontal = true
  isFirstToggle = true
  isSecondToggle = true
}
