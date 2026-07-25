import { Routes } from '@angular/router'
import { Vector } from '@/app/views/maps/vector/vector'
import { Leaflet } from '@/app/views/maps/leaflet/leaflet'

export const MAPS_ROUTES: Routes = [
  {
    path: 'maps/vector',
    component: Vector,
    data: { title: 'Vector Maps' },
  },
  {
    path: 'maps/leaflet',
    component: Leaflet,
    data: { title: 'Leaflet Maps' },
  },
]
