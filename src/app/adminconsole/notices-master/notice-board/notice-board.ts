import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeNotice, NOTICES_DATA } from './data';

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notice-board.html',
  styleUrl: './notice-board.scss',
})
export class NoticeBoardComponent implements OnInit {
  private router = inject(Router);

  notices: CollegeNotice[] = [];
  filteredNotices: CollegeNotice[] = [];

  searchText = '';
  selectedCategory = '';
  selectedNotice: CollegeNotice | null = null;
  showDetailModal = false;

  categories = ['Academic', 'Examinations', 'Events', 'Holiday', 'Administrative'];

  ngOnInit(): void {
    this.notices = [...NOTICES_DATA];
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredNotices = this.notices.filter((n) => {
      const matchSearch = !s || n.title.toLowerCase().includes(s) || n.description.toLowerCase().includes(s);
      const matchCat = !this.selectedCategory || n.category === this.selectedCategory;
      return matchSearch && matchCat;
    });
  }

  addNotice(): void {
    this.router.navigate(['/notices/add-notice']);
  }

  viewDetails(n: CollegeNotice): void {
    this.selectedNotice = n;
    this.showDetailModal = true;
  }

  closeModal(): void {
    this.showDetailModal = false;
    this.selectedNotice = null;
  }

  deleteNotice(n: CollegeNotice): void {
    this.notices = this.notices.filter((item) => item.id !== n.id);
    this.applyFilter();
  }
}
export { NoticeBoardComponent as NoticeBoard };
