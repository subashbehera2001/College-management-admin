import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';

  get passwordStrength(): { text: string; color: string; width: string } {
    if (!this.newPassword) return { text: '', color: '', width: '0%' };
    if (this.newPassword.length < 6) return { text: 'Weak', color: 'bg-danger', width: '33%' };
    if (this.newPassword.length < 10) return { text: 'Medium', color: 'bg-warning', width: '66%' };
    return { text: 'Strong', color: 'bg-success', width: '100%' };
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.currentPassword) {
      this.errorMessage = 'Please enter your current password.';
      return;
    }

    if (this.newPassword.length < 6) {
      this.errorMessage = 'New password must be at least 6 characters.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'New password and confirm password do not match.';
      return;
    }

    this.successMessage = 'Your password has been changed successfully!';
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
