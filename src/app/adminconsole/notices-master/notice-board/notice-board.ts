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
  displayedNotices: CollegeNotice[] = []

  pageSize = 10
  pageSizeOptions: number[] = [10, 20, 50, 100]
  currentPage = 1
  totalPages = 1

  get paginationSummaryText(): string {
    const total = this.filteredNotices.length
    if (total === 0) {
      return '0 of 0 pages (0 item)'
    }
    const itemWord = total === 1 ? 'item' : 'items'
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`
  }

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
  }

  sortField = 'publishDate'
  sortDirection: 'asc' | 'desc' = 'desc'

  targetAudienceOptions: string[] = []

  ngOnInit(): void {
    this.notices = [...NOTICES_DATA]
    this.targetAudienceOptions = Array.from(
      new Set(this.notices.map((n) => n.targetAudience))
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
      return (
        matchSearch &&
        matchCat &&
        matchTitle &&
        matchCategory &&
        matchTargetAudience &&
        matchPublishDate &&
        matchExpiryDate
      )
    })

    this.applySort()
    this.totalPages = Math.max(1, Math.ceil(this.filteredNotices.length / this.pageSize))
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages)
    this.updatePagination()
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize
    this.displayedNotices = this.filteredNotices.slice(start, start + this.pageSize)
  }

  firstPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(1)
    }
  }

  lastPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.totalPages)
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1)
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1)
    }
  }

  goToPage(page: number): void {
    if (this.totalPages === 0) {
      this.currentPage = 0
      this.updatePagination()
      return
    }
    const targetPage = Math.min(Math.max(page, 1), this.totalPages)
    this.currentPage = targetPage
    this.updatePagination()
  }

  setPage(page: number): void {
    this.goToPage(page)
  }

  changePageSize(size: number | string): void {
    const parsed = Number(size)
    this.pageSize = Math.max(1, isNaN(parsed) ? 10 : parsed)
    this.currentPage = 1
    this.applyFilter()
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
