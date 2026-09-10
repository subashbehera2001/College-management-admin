import { Component, HostListener, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { CollegeNotice, NOTICES_DATA } from './data'

type ColumnFilterField =
  | 'title'
  | 'category'
  | 'targetAudience'
  | 'publishDate'
  | 'expiryDate'
  | 'status'

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notice-board.html',
  styleUrl: './notice-board.scss',
})
export class NoticeBoardComponent implements OnInit {
  private router = inject(Router)

  notices: CollegeNotice[] = []
  filteredNotices: CollegeNotice[] = []

  searchText = ''
  selectedCategory = ''

  categories = [
    'Academic',
    'Examinations',
    'Events',
    'Holiday',
    'Administrative',
  ]

  activeFilter: ColumnFilterField | null = null

  filterValues: Record<ColumnFilterField, string> = {
    title: '',
    category: '',
    targetAudience: '',
    publishDate: '',
    expiryDate: '',
    status: '',
  }

  sortField = 'publishDate'
  sortDirection: 'asc' | 'desc' = 'desc'

  targetAudienceOptions: string[] = []
  statusOptions: string[] = []

  ngOnInit(): void {
    this.notices = [...NOTICES_DATA]
    this.targetAudienceOptions = Array.from(
      new Set(this.notices.map((n) => n.targetAudience))
    ).sort()
    this.statusOptions = Array.from(
      new Set(this.notices.map((n) => n.status))
    ).sort()
    this.applyFilter()
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase()
    this.filteredNotices = this.notices.filter((n) => {
      const matchSearch =
        !s ||
        n.title.toLowerCase().includes(s) ||
        n.description.toLowerCase().includes(s)
      const matchCat =
        !this.selectedCategory || n.category === this.selectedCategory
      const matchTitle = this.matchesContains(n.title, this.filterValues.title)
      const matchCategory = this.matchesExact(
        n.category,
        this.filterValues.category
      )
      const matchTargetAudience = this.matchesExact(
        n.targetAudience,
        this.filterValues.targetAudience
      )
      const matchPublishDate = this.matchesExact(
        n.publishDate,
        this.filterValues.publishDate
      )
      const matchExpiryDate = this.matchesExact(
        n.expiryDate,
        this.filterValues.expiryDate
      )
      const matchStatus = this.matchesExact(n.status, this.filterValues.status)
      return (
        matchSearch &&
        matchCat &&
        matchTitle &&
        matchCategory &&
        matchTargetAudience &&
        matchPublishDate &&
        matchExpiryDate &&
        matchStatus
      )
    })

    this.applySort()
  }

  matchesContains(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase()
    return (
      normalizedFilter === '' || value.toLowerCase().includes(normalizedFilter)
    )
  }

  matchesExact(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase()
    return normalizedFilter === '' || value.toLowerCase() === normalizedFilter
  }

  applySort(): void {
    this.filteredNotices.sort((a, b) => {
      let aValue = this.getSortValue(a)
      let bValue = this.getSortValue(b)

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1
      }

      if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1
      }

      return 0
    })
  }

  getSortValue(n: CollegeNotice): string {
    switch (this.sortField) {
      case 'title':
        return n.title
      case 'category':
        return n.category
      case 'targetAudience':
        return n.targetAudience
      case 'publishDate':
        return n.publishDate
      case 'expiryDate':
        return n.expiryDate
      case 'status':
        return n.status
      default:
        return n.publishDate
    }
  }

  onSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortField = field
      this.sortDirection = 'asc'
    }

    this.applyFilter()
  }

  toggleFilter(filter: ColumnFilterField): void {
    this.activeFilter = this.activeFilter === filter ? null : filter
  }

  closeFilter(): void {
    this.activeFilter = null
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.activeFilter) {
      return
    }

    const target = event.target as HTMLElement | null
    if (!target) {
      this.activeFilter = null
      return
    }

    if (target.closest('.filter-dropdown') || target.closest('.filter-icon')) {
      return
    }

    this.activeFilter = null
  }

  setColumnFilter(
    field: ColumnFilterField,
    value: string,
    closeAfter = false
  ): void {
    this.filterValues[field] = value
    this.applyFilter()

    if (closeAfter) {
      this.closeFilter()
    }
  }

  clearColumnFilter(field: ColumnFilterField): void {
    this.setColumnFilter(field, '', true)
  }

  hasActiveFilter(field: ColumnFilterField): boolean {
    return this.filterValues[field].trim() !== ''
  }

  getFilterValue(field: ColumnFilterField): string {
    return this.filterValues[field]
  }

  addNotice(): void {
    this.router.navigate(['/notices/add-notice'])
  }

  editNotice(n: CollegeNotice): void {
    this.router.navigate(['/notices/add-notice'], { queryParams: { id: n.id } })
  }

  deleteNotice(n: CollegeNotice): void {
    this.notices = this.notices.filter((item) => item.id !== n.id)
    this.applyFilter()
  }
}
export { NoticeBoardComponent as NoticeBoard }
