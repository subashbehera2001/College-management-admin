import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-dark">
      <span class="d-flex align-items-center gap-2 logo-wrap">
        <span class="logo-text fw-bold fs-5 text-primary">CollegeMS</span>
      </span>
    </a>
    <a routerLink="/" class="logo-light">
      <span class="d-flex align-items-center gap-2 logo-wrap">
        <span class="logo-text fw-bold fs-5 text-white">CollegeMS</span>
      </span>
    </a>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .logo-wrap {
      display: flex;
      align-items: center;
    }
  `,
})
export class AppLogo {}
