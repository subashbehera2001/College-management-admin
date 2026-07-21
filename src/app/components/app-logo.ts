import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-app-logo',
  imports: [RouterLink, NgIcon],
  template: `
    <a routerLink="/" class="logo-dark">
      <span class="d-flex align-items-center gap-1">
        <span class="avatar avatar-xs rounded-circle text-bg-dark">
          <span class="avatar-title">
            <ng-icon name="lucideSparkles" class="fs-md"></ng-icon>
          </span>
        </span>
        <span class="logo-text text-body fw-bold fs-xl">Simple</span>
      </span>
    </a>
    <a routerLink="/" class="logo-light">
      <span class="d-flex align-items-center gap-1">
        <span class="avatar avatar-xs rounded-circle text-bg-dark">
          <span class="avatar-title">
            <ng-icon name="lucideSparkles" class="fs-md"></ng-icon>
          </span>
        </span>
        <span class="logo-text text-white fw-bold fs-xl">Simple</span>
      </span>
    </a>
  `,
  styles: ``,
})
export class AppLogo {}
