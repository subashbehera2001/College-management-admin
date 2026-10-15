import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'
import { userDropdownItems } from '@layouts/components/data'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { AuthService, User } from '@core/services/auth.service'

@Component({
  selector: 'app-user-profile-topbar',
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    RouterLink,
    NgIcon,
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  private authService = inject(AuthService)
  menuItems = userDropdownItems

  get currentUser(): User | null {
    return this.authService.currentUserValue
  }
}
