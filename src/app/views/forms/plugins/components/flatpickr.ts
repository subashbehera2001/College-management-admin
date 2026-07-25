import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { FormsModule } from '@angular/forms'
import {
  FlatpickrDirective,
  provideFlatpickrDefaults,
} from 'angularx-flatpickr'

@Component({
  selector: 'app-flatpickr',
  providers: [provideFlatpickrDefaults()],
  imports: [UiCard, NgIcon, FormsModule, FlatpickrDirective],
  template: `
    <app-ui-card title="Flatpickr" bodyClass="p-0">
      <div card-body>
        <div class="card-body rounded-bottom-0">
          <p class="text-muted mb-2">
            Lightweight, powerful javascript datetimepicker with no dependencies
          </p>

          <a
            class="btn btn-link shadow-none p-0 fw-medium"
            href="https://flatpickr.js.org/"
            target="_blank"
          >
            View Official Website
            <ng-icon name="tablerChevronRight" class="ms-1" />
          </a>
        </div>

        <div class="card-body border-top-0 rounded-0">
          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Basic</h5>
              <p class="text-muted mb-0">
                Set
                <code> [options]=&quot;dateFormat: &#39;d M, Y&#39;&quot;</code>
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                mwlFlatpickr
                [options]="{ dateFormat: 'd M, Y' }"
                id="basic-datepicker"
                class="form-control"
                [(ngModel)]="basicDate"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>DateTime</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;dateFormat: &#39;d M, Y
                  H:i;,enableTime:true&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                mwlFlatpickr
                [(ngModel)]="dateTime"
                [options]="{ dateFormat: 'd M, Y H:i', enableTime: true }"
                class="form-control"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Human-Friendly Dates</h5>
              <p class="text-muted mb-0">
                Set
                <code> [options]=&quot;dateFormat: &#39;F d, Y&#39;&quot;</code>
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control flatpickr-input"
                mwlFlatpickr
                [options]="{ dateFormat: 'F d, Y' }"
                [(ngModel)]="humanFriendlyDate"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>MinDate and MaxDate</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;minDate:
                  &#39;...&#39;,maxDate:&#39;...&#39;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                mwlFlatpickr
                class="form-control"
                [options]="{
                  altInput: true,
                  minDate: '25-12-2021',
                  maxDate: '29-12-2021',
                }"
                placeholder="Select Date"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Disabling Dates</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;dateFormat: &#39;d M,
                  Y&#39;,disable:&#39;[...]&#39;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                mwlFlatpickr
                [(ngModel)]="disableDate"
                [options]="{ dateFormat: 'd M, Y', disable: ['14 5,2025'] }"
                class="form-control"
                data-provider="flatpickr"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Selecting Multiple Dates</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;dateFormat: &#39;d M,
                  Y&#39;,mode:&apos;multiple&apos;&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                [(ngModel)]="multipleDate"
                mwlFlatpickr
                class="form-control"
                [options]="{ dateFormat: 'd M, Y', mode: 'multiple' }"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Range</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;dateFormat: &#39;d M,
                  Y&#39;,mode:&apos;range&apos;&rbrace;&quot;</code
                >.
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{ dateFormat: 'd M, Y', mode: 'range' }"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Inline</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;dateFormat: &#39;d M,
                  Y&#39;,inline:true&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{ dateFormat: 'd M, Y', inline: true }"
              />
            </div>
          </div>
        </div>

        <div class="card-body rounded-0 border-top-0">
          <h4 class="card-title fs-sm fw-bold mb-4">Timepicker</h4>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Timepicker</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;noCalendar:
                  true,enableTime:true&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{
                  noCalendar: true,
                  dateFormat: 'H:i',
                  defaultHour: 1.4,
                  enableTime: true,
                }"
                placeholder="Select Time"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>24-hour Time Picker</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;noCalendar:
                  true,enableTime:true,time24hr:true&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{
                  noCalendar: true,
                  dateFormat: 'H:i',
                  defaultHour: 1.4,
                  time24hr: true,
                  enableTime: true,
                  mode: 'multiple',
                }"
                placeholder="Select Time"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Time Picker w/ Limits</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;noCalendar:
                  true,enableTime:true,maxTime:&apos;...&apos;,minTime:&apos;...&apos;&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{
                  noCalendar: true,
                  dateFormat: 'H:i',
                  defaultHour: 1.4,
                  enableTime: true,
                  maxTime: '16:00',
                  minTime: '13:00',
                }"
                placeholder="Select Time"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Preloading Time</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;noCalendar:
                  true,enableTime:true,dateFormat:&apos;H:i&apos;&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <input
                type="text"
                class="form-control"
                mwlFlatpickr
                [options]="{
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time24hr: false,
                  enableTime: true,
                  mode: 'multiple',
                }"
              />
            </div>
          </div>

          <div class="my-4 border-top border-dashed"></div>

          <div class="row g-4">
            <div class="col-lg-6">
              <h5>Inline</h5>
              <p class="text-muted mb-0">
                Set
                <code>
                  [options]=&quot;&lbrace;noCalendar:
                  true,enableTime:true,inline:true&rbrace;&quot;</code
                >
              </p>
            </div>
            <div class="col-lg-6">
              <div
                mwlFlatpickr
                [options]="{ noCalendar: true, enableTime: true, inline: true }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Flatpickr {
  basicDate = '20 Jun, 2025'
  disableDate = '20 Jun, 2025'
  multipleDate = '20 Jun, 2025'
  dateTime = '"20 Jun, 2025 14:25'
  humanFriendlyDate = 'Jun 20, 2025'
}
