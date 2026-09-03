import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: `
    <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Logging out...</span>
      </div>
    </div>
  `,
})
export class LogoutComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.logout();
  }
}
