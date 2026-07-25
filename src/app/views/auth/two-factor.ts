import { Component } from '@angular/core'
import { AppLogo } from '@app/components/app-logo'
import { NgOtpInputComponent } from 'ng-otp-input'
import { RouterLink } from '@angular/router'
import { credits, currentYear } from '@/app/constants'

@Component({
  selector: 'app-two-factor',
  imports: [AppLogo, NgOtpInputComponent, RouterLink],
  template: `
    <div class="auth-box overflow-hidden align-items-center d-flex">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-4 col-md-6 col-sm-8">
            <div class="card">
              <div class="card-body">
                <div class="auth-brand mb-4">
                  <app-app-logo />
                  <p class="text-muted w-lg-75 mt-3">
                    We've emailed you a 6-digit verification code we sent to
                  </p>
                </div>

                <div class="text-center mb-4">
                  <div class="fw-bold fs-4">+ (12) ******6789</div>
                </div>

                <form>
                  <label class="form-label"
                    >Enter your 6-digit code
                    <span class="text-danger">*</span></label
                  >
                  <ngx-otp-input
                    [config]="{
                      length: 6,
                      allowNumbersOnly: true,
                      inputClass: 'form-control text-center mb-3',
                    }"
                  >
                  </ngx-otp-input>

                  <div class="d-grid">
                    <button
                      type="submit"
                      class="btn btn-primary fw-semibold py-2"
                    >
                      Confirm
                    </button>
                  </div>
                </form>

                <p class="mt-4 text-muted text-center mb-4">
                  Don’t have a code?
                  <a
                    href="javascript:void(0);"
                    class="text-decoration-underline link-offset-2 fw-semibold"
                    >Resend</a
                  >
                  or
                  <a
                    href="javascript:void(0);"
                    class="text-decoration-underline link-offset-2 fw-semibold"
                    >Call Us</a
                  >
                </p>
                <p class="text-muted text-center mb-0">
                  Return to
                  <a
                    routerLink="/auth/sign-in"
                    class="text-decoration-underline link-offset-3 fw-semibold"
                    >Sign in</a
                  >
                </p>
              </div>
            </div>

            <p class="text-center text-muted mt-4 mb-0">
              ©
              {{ currentYear }}
              Simple — by <span class="fw-semibold">{{ credits.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TwoFactor {
  protected readonly currentYear = currentYear
  protected readonly credits = credits
}
