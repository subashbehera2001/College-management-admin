import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { NgIcon } from '@ng-icons/core'
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { CalendarOptions, EventApi, EventClickArg } from '@fullcalendar/core'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { FormsModule } from '@angular/forms'
import listPlugin from '@fullcalendar/list'

@Component({
  selector: 'app-calendar',
  imports: [PageTitle, FullCalendarModule, FormsModule, NgIcon],
  templateUrl: './calendar.html',
  styles: ``,
})
export class Calendar implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent
  @ViewChild('eventModal') eventModal!: TemplateRef<any>
  private modalService = inject(NgbModal)

  currentEventTitle: string = ''
  currentEditingEvent: EventApi | null = null
  modalRef!: NgbModalRef
  selectedDate: Date | null = null
  calendarOptions!: CalendarOptions
  defaultEvents = [
    {
      id: 'event-1',
      title: 'Interview - Backend Engineer',
      start: new Date(),
      end: new Date(),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-2',
      title: 'Design Sprint Planning',
      start: new Date(Date.now() + 16000000),
      end: new Date(Date.now() + 20000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-3',
      title: 'Project Kick-off Meeting',
      start: new Date(Date.now() + 400000000),
      end: new Date(Date.now() + 440000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-4',
      title: 'UI/UX Design Review',
      start: new Date(Date.now() + 80000000),
      end: new Date(Date.now() + 180000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-5',
      title: 'Code Review - Frontend',
      start: new Date(Date.now() + 200000000),
      end: new Date(Date.now() + 220000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-6',
      title: 'Team Stand-up Meeting',
      start: new Date(Date.now() + 340000000),
      end: new Date(Date.now() + 345000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-7',
      title: 'Client Presentation Prep',
      start: new Date(Date.now() + 1200000000),
      end: new Date(Date.now() + 1300000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
    {
      id: 'event-8',
      title: 'Backend API Integration',
      start: new Date(Date.now() + 2500000000),
      end: new Date(Date.now() + 2600000000),
      className:
        'bg-transparent text-body border rounded border-light fw-medium',
    },
  ]

  externalEvents: string[] = [
    'Design Review Meeting',
    'Client Presentation',
    'Marketing Strategy Call',
    'Product Launch Prep',
    'Weekly Standup',
  ]

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List',
        prev: 'Prev',
        next: 'Next',
      },
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      },
      slotDuration: '00:30:00',
      slotMinTime: '07:00:00',
      slotMaxTime: '19:00:00',
      height: window.innerHeight - 240,
      editable: true,
      droppable: true,
      selectable: true,
      events: this.defaultEvents,
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
    }
  }

  ngAfterViewInit(): void {
    const containerEl = document.getElementById('external-events')
    if (containerEl) {
      new Draggable(containerEl, {
        itemSelector: '.external-event',
        eventData: function (eventEl) {
          const title = eventEl.innerText.trim()
          return {
            title,
            className:
              'bg-transparent text-body border rounded border-light fw-medium',
          }
        },
      })
    }
  }

  handleDateClick(arg: any): void {
    this.selectedDate = arg.date
    this.openModal()
  }

  handleEventClick(arg: EventClickArg): void {
    this.openModal(arg.event)
  }

  openModal(event?: EventApi): void {
    this.currentEditingEvent = event || null
    this.currentEventTitle = event?.title || ''
    this.modalRef = this.modalService.open(this.eventModal, { centered: true })
  }

  saveEvent(): void {
    if (!this.currentEventTitle) return
    const calendarApi = this.calendarComponent.getApi()

    if (this.currentEditingEvent) {
      const oldEvent = this.currentEditingEvent.toPlainObject()
      this.currentEditingEvent.remove()
      calendarApi.addEvent({
        ...oldEvent,
        title: this.currentEventTitle,
        className:
          'bg-transparent text-body border rounded border-light fw-medium',
      })
    } else {
      calendarApi.addEvent({
        id: String(Date.now()),
        title: this.currentEventTitle,
        start: this.selectedDate ?? new Date(),
        allDay: true,
        className:
          'bg-transparent text-body border rounded border-light fw-medium',
      })
    }

    this.modalRef.close()
    this.selectedDate = null
  }

  deleteEvent(): void {
    this.currentEditingEvent?.remove()
    this.modalRef.close()
    this.selectedDate = null
  }
}
