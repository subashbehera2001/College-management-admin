import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-notice.html',
  styleUrl: './add-notice.scss',
})
export class AddNotice {
  private router = inject(Router);

  title = '';
  category = 'Academic';
  targetAudience = 'All';
  publishDate = new Date().toISOString().split('T')[0];
  expiryDate = '';
  description = '';
  attachmentName = '';

  categoryOptions = ['Academic', 'Examinations', 'Events', 'Holiday', 'Administrative'];
  audienceOptions = ['All', 'Students', 'Faculty'];

  onSubmit(): void {
    if (!this.title.trim() || !this.description.trim()) {
      return;
    }
    this.router.navigate(['/notices']);
  }

  viewList(): void {
    this.router.navigate(['/notices']);
  }
}
