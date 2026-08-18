import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ADMINCONSOLE_ROUTES } from './adminconsole-route';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMINCONSOLE_ROUTES)
  ]
})
export class AdminconsoleModule { }
