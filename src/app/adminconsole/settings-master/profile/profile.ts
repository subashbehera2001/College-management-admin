import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '@core/services/auth.service';

@Component({
  selector: 'app-settings-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class SettingsProfile implements OnInit {
  private authService = inject(AuthService);

  user: User = {
    id: 'USR001',
    name: 'Debasis Mohanty',
    email: 'admin@college.edu',
    role: 'Admin Head',
    avatar: 'assets/images/passport.png',
    phone: '+91 98765 43210',
    department: 'Administration',
  };

  bio = 'Head of Administrative Affairs and Academic Scheduling at College of Engineering & Technology.';
  savedSuccess = false;

  ngOnInit(): void {
    const current = this.authService.currentUserValue;
    if (current) {
      this.user = { ...this.user, ...current };
    }
  }

  saveProfile(): void {
    this.authService.updateProfile({
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      department: this.user.department,
    });
    this.savedSuccess = true;
    setTimeout(() => (this.savedSuccess = false), 3500);
  }
}
