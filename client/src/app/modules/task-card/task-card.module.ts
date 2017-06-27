import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule } from '@angular/material';

import { DialogEditTaskComponent } from './dialog-edit-task/dialog-edit-task.component';
import { TaskCardComponent } from './task-card/task-card.component';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  declarations: [TaskCardComponent, DialogEditTaskComponent],
  entryComponents: [DialogEditTaskComponent],
  exports: [TaskCardComponent]
})
export class TaskCardModule { }
