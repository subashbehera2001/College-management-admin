import { Component, inject } from '@angular/core'
import { AppLogo } from '@app/components/app-logo'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { AuthService } from '@core/services/auth.service'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  tablerEye,
  tablerEyeOff,
  tablerLock,
  tablerMail,
} from '@ng-icons/tabler-icons'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AppLogo, NgIcon, RouterLink, FormsModule, CommonModule],
  viewProviders: [
    provideIcons({
      tablerEye,
      tablerEyeOff,
      tablerLock,
      tablerMail,
    }),
  ],
  template: `
    <div class="auth-box overflow-hidden align-items-center d-flex">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12" style="max-width: 780px;">
            <div class="card border-0 shadow-lg auth-split-card h-100">
              <div class="row g-0 h-100">
                <div class="col-lg-5 auth-hero-side">
                  <div
                    class="auth-hero-content h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3 px-sm-4"
                  >
                    <div class="logo-frame mb-3">
                      <app-app-logo />
                    </div>
                    <h2 class="h3 fw-bold mb-2">Welcome Back</h2>
                    <p class="opacity-90 fs-14 mb-0">
                      Manage faculty, students, and academics all in one place.
                    </p>
                  </div>
                </div>

                <div class="col-lg-7 d-flex align-items-center bg-body">
                  <div class="card-body p-3 p-md-4 w-100">
                    <div class="text-center mb-3">
                      <h2 class="h4 fw-bold text-dark mb-1">Sign In</h2>
                      <p class="text-muted fs-13 mb-0">
                        Enter your credentials to continue
                      </p>
                    </div>

                    @if (errorMessage) {
                      <div
                        class="alert alert-danger py-2 fs-13 mb-3 d-flex align-items-center"
                        role="alert"
                      >
                        <i class="me-2">&#9888;&#65039;</i>
                        <span>{{ errorMessage }}</span>
                      </div>
                    }

                    <div
                      class="p-2 mb-3 bg-light rounded border fs-12 text-muted"
                    >
                      <div
                        class="d-flex flex-column flex-sm-row flex-sm-wrap align-items-center justify-content-between gap-2"
                      >
                        <div>
                          <strong>Demo Admin:</strong>
                          <code class="text-primary"
                            >admin&#64;college.edu</code
                          >
                          /
                          <code class="text-primary">admin123</code>
                        </div>
                        <button
                          type="button"
                          class="btn btn-xs btn-outline-primary ms-sm-2"
                          (click)="fillDemoCredentials()"
                        >
                          Auto-Fill
                        </button>
                      </div>
                    </div>

                    <form #loginForm="ngForm" (ngSubmit)="onLogin()">
                      <div class="mb-3">
                        <label for="userEmail" class="form-label fs-13"
                          >Email address
                          <span class="text-danger">*</span></label
                        >
                        <div class="input-group">
                          <span class="input-group-text bg-white border-0">
                            <ng-icon
                              name="tablerMail"
                              size="18"
                              class="text-muted"
                            ></ng-icon>
                          </span>
                          <input
                            type="email"
                            class="form-control ps-2"
                            id="userEmail"
                            name="email"
                            [(ngModel)]="email"
                            placeholder="admin@college.edu"
                            required
                          />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="userPassword" class="form-label fs-13"
                          >Password <span class="text-danger">*</span></label
                        >
                        <div class="input-group">
                          <span class="input-group-text bg-white border-0">
                            <ng-icon
                              name="tablerLock"
                              size="18"
                              class="text-muted"
                            ></ng-icon>
                          </span>
                          <input
                            [type]="showPassword ? 'text' : 'password'"
                            class="form-control border-0 ps-2"
                            id="userPassword"
                            name="password"
                            [(ngModel)]="password"
                            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                            required
                          />
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            (click)="togglePassword()"
                            [attr.aria-label]="
                              showPassword ? 'Hide password' : 'Show password'
                            "
                          >
                            <ng-icon
                              [name]="
                                showPassword ? 'tablerEyeOff' : 'tablerEye'
                              "
                              size="18"
                            ></ng-icon>
                          </button>
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div class="form-check">
                          <input
                            class="form-check-input form-check-input-light fs-13 mt-0"
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            [(ngModel)]="rememberMe"
                          />
                          <label class="form-check-label fs-13" for="rememberMe"
                            >Keep me signed in</label
                          >
                        </div>
                        <a
                          routerLink="/auth/reset-password"
                          class="text-decoration-underline link-offset-3 fw-medium fs-13"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      .auth-box {
        padding: 30px 15px;
      }

      .auth-split-card {
        border-radius: 1rem;
        overflow: hidden;
      }

      .auth-hero-side {
        background: linear-gradient(
          135deg,
          #1e3a8a 0%,
          #2563eb 40%,
          #7c3aed 100%
        );
        padding: 2.25rem 1.75rem;
      }

      .logo-frame {
        background: #ffffff;
        border-radius: 0.75rem;
        padding: 0.5rem 0.8rem;
        display: inline-flex;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
      }

      .input-group-text {
        width: 2.75rem;
        justify-content: center;
        border-end: 1px solid #e5e7eb;
      }

      .form-control:focus {
        box-shadow: none;
      }

      .btn-primary {
        background: #2563eb;
        border-color: #2563eb;

        &:hover:not(:disabled) {
          background: #1d4ed8;
          border-color: #1d4ed8;
        }
      }

      @media (max-width: 991.98px) {
        .auth-hero-side {
          padding: 1.75rem 1.25rem;
        }
      }
    }
  `,
})
export class SignIn {
  private authService = inject(AuthService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  email = 'admin@college.edu'
  password = 'admin123'
  rememberMe = true
  showPassword = false
  isLoading = false
  errorMessage = ''

  fillDemoCredentials(): void {
    this.email = 'admin@college.edu'
    this.password = 'admin123'
    this.errorMessage = ''
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword
  }

  onLogin(): void {
    this.errorMessage = ''
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.'
      return
    }

    this.isLoading = true
    const success = this.authService.login(this.email, this.password)
    this.isLoading = false

    if (success) {
      const returnUrl =
        this.route.snapshot.queryParams['returnUrl'] || '/dashboard'
      this.router.navigateByUrl(returnUrl)
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.'
    }
  }
}
