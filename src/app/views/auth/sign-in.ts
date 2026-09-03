import { Component, inject } from '@angular/core';
import { AppLogo } from '@app/components/app-logo';
import { credits, currentYear } from '@/app/constants';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AppLogo, RouterLink, FormsModule, CommonModule],
  template: `
    <div class="auth-box overflow-hidden align-items-center d-flex">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-4 col-md-6 col-sm-8">
            <div class="card">
              <div class="card-body">
                <div class="auth-brand mb-4 text-center">
                  <app-app-logo />
                  <h4 class="mt-3 fw-bold text-dark">College Admin Portal</h4>
                  <p class="text-muted">
                    Sign in to access your administrative dashboard.
                  </p>
                </div>

                @if (errorMessage) {
                  <div class="alert alert-danger py-2 fs-13 mb-3 d-flex align-items-center" role="alert">
                    <i class="me-2">⚠️</i>
                    <span>{{ errorMessage }}</span>
                  </div>
                }

                <div class="p-2 mb-3 bg-light rounded border fs-12 text-muted">
                  <strong>Demo Admin:</strong> <code class="text-primary">admin&#64;college.edu</code> / <code class="text-primary">admin123</code>
                  <button type="button" class="btn btn-xs btn-outline-primary ms-2 py-0 px-1 float-end" (click)="fillDemoCredentials()">Auto-Fill</button>
                </div>

                <div>
                  <form #loginForm="ngForm" (ngSubmit)="onLogin()">
                    <div class="mb-3">
                      <label for="userEmail" class="form-label"
                        >Email address <span class="text-danger">*</span></label
                      >
                      <div class="input-group">
                        <input
                          type="email"
                          class="form-control"
                          id="userEmail"
                          name="email"
                          [(ngModel)]="email"
                          placeholder="admin@college.edu"
                          required
                        />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="userPassword" class="form-label"
                        >Password <span class="text-danger">*</span></label
                      >
                      <div class="input-group">
                        <input
                          type="password"
                          class="form-control"
                          id="userPassword"
                          name="password"
                          [(ngModel)]="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div class="form-check">
                        <input
                          class="form-check-input form-check-input-light fs-14"
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          [(ngModel)]="rememberMe"
                        />
                        <label class="form-check-label" for="rememberMe"
                          >Keep me signed in</label
                        >
                      </div>
                      <a
                        routerLink="/auth/reset-password"
                        class="text-decoration-underline link-offset-3 text-muted"
                        >Forgot Password?</a
                      >
                    </div>

                    <div class="d-grid">
                      <button
                        type="submit"
                        class="btn btn-primary fw-semibold py-2"
                        [disabled]="isLoading"
                      >
                        {{ isLoading ? 'Signing In...' : 'Sign In' }}
                      </button>
                    </div>
                  </form>

                  <p class="text-muted text-center mt-4 mb-0">
                    New here?
                    <a
                      routerLink="/auth/sign-up"
                      class="text-decoration-underline link-offset-3 fw-semibold"
                      >Create an account</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <p class="text-center text-muted mt-4 mb-0">
              © {{ currentYear }} College Management System — by <span class="fw-semibold">{{ credits.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .btn-xs {
      font-size: 11px;
      padding: 2px 6px;
    }
  `,
})
export class SignIn {
  protected readonly currentYear = currentYear;
  protected readonly credits = credits;

  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email = 'admin@college.edu';
  password = 'admin123';
  rememberMe = true;
  isLoading = false;
  errorMessage = '';

  fillDemoCredentials(): void {
    this.email = 'admin@college.edu';
    this.password = 'admin123';
    this.errorMessage = '';
  }

  onLogin(): void {
    this.errorMessage = '';
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.isLoading = true;
    const success = this.authService.login(this.email, this.password);
    this.isLoading = false;

    if (success) {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
      this.router.navigateByUrl(returnUrl);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
