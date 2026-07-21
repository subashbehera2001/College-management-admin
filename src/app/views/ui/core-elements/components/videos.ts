import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-videos',
  imports: [UiCard],
  template: `
    <app-ui-card title="Videos Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Responsive embed video 21:9</h5>

          <div class="ratio ratio-21x9">
            <iframe
              src="https://www.youtube.com/embed/TZe5UqlUg0c?rel=0"
              title="7 Best AI Tools You NEED to Try in 2025"
              allowfullscreen
            ></iframe>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Responsive embed video 1:1</h5>

            <div class="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/TZe5UqlUg0c?rel=0"
                title="7 Best AI Tools You NEED to Try in 2025"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Responsive embed video 16:9</h5>

          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/TZe5UqlUg0c?rel=0"
              title="7 Best AI Tools You NEED to Try in 2025"
              allowfullscreen
            ></iframe>
          </div>

          <div class="mt-4">
            <h5 class="mb-2 pb-1">Responsive embed video 4:3</h5>

            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/TZe5UqlUg0c?rel=0"
                title="7 Best AI Tools You NEED to Try in 2025"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Videos {}
