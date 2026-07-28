import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-dark">
      <img
        src="assets/images/logo.png"
        alt="College logo"
        style="height: 65px; margin-left: 19px; "
      />
    </a>
    
  `,
  styles: ``,
})
export class AppLogo {}
