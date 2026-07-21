import { Component } from '@angular/core'
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { userDropdownItems } from '../../../data'

@Component({
  selector: 'app-user-profile-topbar',
  imports: [
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    RouterLink,
    NgIcon,
  ],
  templateUrl: './user-profile.html',
})
export class UserProfile {
  menuItems = userDropdownItems
}
