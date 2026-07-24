import { Component } from '@angular/core'
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-language-dropdown',
  imports: [NgbDropdown, NgbDropdownMenu, NgbDropdownToggle],
  template: `
    <div class="topbar-item">
      <div ngbDropdown placement="bottom-right" class="dropdown">
        <button
          class="topbar-link fw-semibold drop-arrow-none"
          ngbDropdownToggle
          type="button"
        >
          <span class="fw-bold">EN</span>
        </button>
        <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" role="button">
            <span class="align-middle">English</span>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class LanguageDropdown {}
