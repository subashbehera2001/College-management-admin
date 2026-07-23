import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-dark">
      <span class="d-flex align-items-center gap-2 logo-wrap">
        <img
          src="assets/images/logo.png"
          class="logo-image"
          alt="Simple"
        />
      </span>
    </a>
    <a routerLink="/" class="logo-light">
      <span class="d-flex align-items-center gap-2 logo-wrap">
        <img
          src="assets/images/logo.png"
          class="logo-image"
          alt="Simple"
        />
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

    .logo-image {
      display: block;
      width: auto;
    }
  `,
})
export class AppLogo {}
