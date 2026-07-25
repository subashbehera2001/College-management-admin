import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { SimplebarAngularModule } from 'simplebar-angular'
type SideBarItemType = {
  label: string
  icon?: string
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgIcon, SimplebarAngularModule],
  template: `
    <div class="card rounded-0 mb-0">
      <ngx-simplebar
        class="card-body sidebar-offcanvas p-0"
        style="height: calc(100vh - 170px);"
      >
        <div class="chat-sidebar p-3">
          <div class="mb-4">
            <div class="list-group list-group-flush list-custom">
              @for (item of sideBarItems; let i = $index; track i) {
                <a
                  [routerLink]="[]"
                  class="list-group-item list-group-item-action d-flex align-items-center gap-2"
                  [class.active]="i === 0"
                >
                  <ng-icon [name]="item.icon" class="fs-md" />
                  {{ item.label }}
                </a>
              }
            </div>
          </div>

          <!-- Workspaces -->
          <div class="mb-3">
            <h6 class="text-muted text-uppercase fs-xs mb-2">Workspaces</h6>
            <div class="list-group list-group-flush list-custom">
              @for (item of workspaceItems; track item.label) {
                <a
                  [routerLink]="[]"
                  class="list-group-item list-group-item-action d-flex align-items-center gap-2"
                >
                  <ng-icon [name]="item.icon" class="fs-md" />
                  {{ item.label }}
                </a>
              }
            </div>
          </div>

          <div>
            <h6 class="text-muted text-uppercase fs-xs mb-2">
              Recent Conversations
            </h6>
            <div class="list-group list-group-flush list-custom">
              @for (item of resentConversations; track item.label) {
                <a
                  [routerLink]="[]"
                  class="list-group-item list-group-item-action text-body py-1"
                >
                  {{ item.label }}
                </a>
              }
            </div>
          </div>
        </div>
      </ngx-simplebar>
    </div>
  `,
  styles: ``,
})
export class Sidebar {
  sideBarItems: SideBarItemType[] = [
    {
      label: 'Start Chat',
      icon: 'tablerMessageCircle',
    },
    {
      label: 'Find Threads',
      icon: 'tablerSearch',
    },
    {
      label: 'Saved Sessions',
      icon: 'tablerArchive',
    },
    {
      label: 'AI Tools',
      icon: 'tablerBrain',
    },
    {
      label: 'AI Vision',
      icon: 'tablerVideo',
    },
    {
      label: 'Explore Models',
      icon: 'tablerGridPattern',
    },
  ]

  workspaceItems: SideBarItemType[] = [
    {
      label: 'New Workspace',
      icon: 'tablerFolderPlus',
    },
    {
      label: 'Marketing',
      icon: 'tablerFolder',
    },
    {
      label: 'Design Team',
      icon: 'tablerFolder',
    },
    {
      label: 'DevOps',
      icon: 'tablerFolder',
    },
    {
      label: 'Legal',
      icon: 'tablerFolder',
    },
    {
      label: 'Freelancers',
      icon: 'tablerFolder',
    },
  ]

  resentConversations: SideBarItemType[] = [
    {
      label: 'Website Redesign Brief',
    },
    {
      label: 'Sprint Planning Q2',
    },
    {
      label: 'Client Onboarding Script',
    },
    {
      label: 'Legal Agreement Review',
    },
    {
      label: 'Product Launch Sequence',
    },
    {
      label: 'Budget Automation Draft',
    },
  ]
}
