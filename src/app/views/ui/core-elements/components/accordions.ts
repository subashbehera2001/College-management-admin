import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-accordions',
  imports: [UiCard, NgbAccordionModule, NgIcon],
  template: `
    <app-ui-card title="Accordions Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Default Accordions</h5>

          <div ngbAccordion [closeOthers]="true">
            @for (item of accordionItems; let i = $index; track $index) {
              <div ngbAccordionItem [collapsed]="i !== 0">
                <h2 ngbAccordionHeader>
                  <button ngbAccordionButton>
                    {{ item.title }}
                  </button>
                </h2>
                <div ngbAccordionCollapse>
                  <div ngbAccordionBody [innerHTML]="item.description"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Flush Accordions</h5>

          <div
            ngbAccordion
            [closeOthers]="true"
            class="accordion-flush"
            id="accordionFlushExample"
          >
            @for (item of [].constructor(3); let i = $index; track $index) {
              <div ngbAccordionItem [collapsed]="i !== 0">
                <h2 ngbAccordionHeader>
                  <button ngbAccordionButton>
                    Accordion Item #{{ i + 1 }}
                  </button>
                </h2>
                <div ngbAccordionCollapse>
                  <div ngbAccordionBody>
                    <p class="m-0">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Always Open Accordions</h5>

          <div ngbAccordion>
            @for (item of accordionItems; let i = $index; track $index) {
              <div ngbAccordionItem [collapsed]="i !== 0">
                <h2 ngbAccordionHeader>
                  <button ngbAccordionButton>
                    {{ item.title }}
                  </button>
                </h2>
                <div ngbAccordionCollapse>
                  <div ngbAccordionBody [innerHTML]="item.description"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Accordion Without Arrow</h5>

          <div ngbAccordion [closeOthers]="true" class="accordion-arrow-none">
            @for (item of accordionItems; let i = $index; track $index) {
              <div ngbAccordionItem [collapsed]="i !== 0">
                <h2 ngbAccordionHeader>
                  <button ngbAccordionButton>
                    {{ item.title }}
                  </button>
                </h2>
                <div ngbAccordionCollapse>
                  <div ngbAccordionBody [innerHTML]="item.description"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Bordered Accordions</h5>

          <div ngbAccordion [closeOthers]="true" class="accordion-bordered">
            @for (item of accordionItems; let i = $index; track $index) {
              <div ngbAccordionItem [collapsed]="i !== 0">
                <h2 ngbAccordionHeader>
                  <button ngbAccordionButton>
                    {{ item.title }}
                  </button>
                </h2>
                <div ngbAccordionCollapse>
                  <div ngbAccordionBody [innerHTML]="item.description"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Custom Icon Accordion</h5>

          <div
            ngbAccordion
            class="accordion accordion-custom-icon accordion-arrow-none"
            id="CustomIconaccordionExample"
          >
            <div ngbAccordionItem>
              <h2 ngbAccordionHeader id="CustomIconheadingOne">
                <button ngbAccordionButton>
                  Accordion item with tabler icons
                  <ng-icon
                    name="tablerPlus"
                    class="accordion-icon accordion-icon-on "
                  />
                  <ng-icon
                    name="tablerMinus"
                    class="accordion-icon accordion-icon-off"
                  />
                </button>
              </h2>
              <div ngbAccordionCollapse>
                <div ngbAccordionBody>
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div ngbAccordionItem>
              <h2 ngbAccordionHeader>
                <button ngbAccordionButton>
                  Accordion item with lucide icons
                  <ng-icon
                    name="lucideCirclePlus"
                    class="accordion-icon accordion-icon-on avatar-xxs"
                  />
                  <ng-icon
                    name="lucideCircleMinus"
                    class="accordion-icon accordion-icon-off avatar-xxs"
                  />
                </button>
              </h2>
              <div ngbAccordionCollapse>
                <div ngbAccordionBody>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div ngbAccordionItem>
              <h2 ngbAccordionHeader>
                <button ngbAccordionButton>
                  Accordion item with tabler icons
                  <ng-icon
                    name="tablerArrowDown"
                    class="accordion-icon accordion-icon-on"
                  />
                  <ng-icon
                    name="tablerArrowUp"
                    class="accordion-icon accordion-icon-off"
                  />
                </button>
              </h2>
              <div ngbAccordionCollapse>
                <div ngbAccordionBody>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Accordions {
  accordionItems = [
    {
      title: 'Accordion Item #1',
      description: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
    },
    {
      title: 'Accordion Item #2',
      description: `<strong>This is the second item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
    },
    {
      title: 'Accordion Item #3',
      description: `<strong>This is the third item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
    },
  ]
}
