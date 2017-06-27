import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';

import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
  ],
  declarations: [TaskCardComponent],
  exports: [TaskCardComponent]
})
export class TaskCardModule { }
