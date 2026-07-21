import { Component, ViewChild } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { FormsModule } from '@angular/forms'
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  OperatorFunction,
  Subject,
} from 'rxjs'
import {
  states,
  statesWithFlags,
} from '@/app/views/forms/plugins/components/data'

@Component({
  selector: 'app-typeaheds',
  imports: [UiCard, NgIcon, FormsModule, NgbTypeaheadModule],
  template: `
    <app-ui-card title="Typeahead" bodyClass="p-0">
      <div card-body>
        <div class="card-body rounded-bottom-0">
          <p class="text-muted mb-2">
            A flexible JavaScript library that provides a strong foundation for
            building robust typeaheads
          </p>

          <a
            class="btn btn-link shadow-none p-0 fw-semibold"
            href="https://twitter.github.io/typeahead.js/"
            target="_blank"
          >
            View Official Website
            <ng-icon name="tablerChevronRight" class="ms-1" />
          </a>
        </div>

        <div class="card-body rounded-top-0 border-top-0">
          <div class="row g-3">
            <div class="col-lg-6">
              <h5 class="fw-semibold mb-1">Basic</h5>
            </div>
            <div class="col-lg-6">
              <input
                class="form-control typeahead"
                type="text"
                [(ngModel)]="basicTypeahead"
                [ngbTypeahead]="search"
                placeholder="Enter states from USA"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-3">
            <div class="col-lg-6">
              <h5 class="fw-semibold mb-1">Open on focus</h5>
            </div>
            <div class="col-lg-6">
              <input
                class="form-control bloodhound-typeahead"
                type="text"
                [(ngModel)]="focusTypeahead"
                [ngbTypeahead]="searchFocusTypeahead"
                (focus)="focus$.next($any($event).target.value)"
                (click)="click$.next($any($event).target.value)"
                #instance="ngbTypeahead"
                placeholder="Enter states from USA"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-3">
            <div class="col-lg-6">
              <h5 class="fw-semibold mb-1">Formatted results</h5>
            </div>
            <div class="col-lg-6">
              <input
                class="form-control"
                type="text"
                [(ngModel)]="formattedTypeahead"
                [ngbTypeahead]="formatterSearch"
                [resultFormatter]="formatter"
                placeholder="Enter states from USA"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-3">
            <div class="col-lg-6">
              <h5 class="fw-semibold mb-1">Select on exact</h5>
            </div>
            <div class="col-lg-6">
              <input
                class="form-control"
                type="text"
                [(ngModel)]="exactSearchTypeahead"
                [ngbTypeahead]="searchExact"
                [inputFormatter]="exactFormatter"
                [resultFormatter]="exactFormatter"
                [selectOnExact]="true"
                placeholder="Search Exact"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-3">
            <div class="col-lg-6">
              <h5 class="fw-semibold mb-1">Custom Template</h5>
            </div>
            <div class="col-lg-6">
              <ng-template #rt let-r="result" let-t="term">
                <img
                  [src]="
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/' +
                    r['flag']
                  "
                  class="me-1"
                  style="width: 16px"
                />
                <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
              </ng-template>
              <input
                class="form-control custom-template-typeahead"
                type="text"
                [(ngModel)]="customTypeahead"
                [ngbTypeahead]="searchWithFlags"
                [resultTemplate]="rt"
                [inputFormatter]="nameFormatter"
                placeholder="custom template"
              />
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Typeaheds {
  basicTypeahead: any
  focusTypeahead: any
  formattedTypeahead: any
  exactSearchTypeahead: any
  customTypeahead: any

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    )

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead

  focus$ = new Subject<string>()
  click$ = new Subject<string>()

  searchFocusTypeahead: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged())
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    )
    const inputFocus$ = this.focus$

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? states
          : states.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    )
  }

  formatter = (result: string) => result.toUpperCase()

  formatterSearch: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === ''
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    )

  searchExact: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    )

  exactFormatter = (x: string) => x

  searchWithFlags: OperatorFunction<
    string,
    readonly {
      name: string
      flag: string
    }[]
  > = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? []
          : statesWithFlags
              .filter(
                (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    )

  nameFormatter = (x: { name: string }) => x.name
}
