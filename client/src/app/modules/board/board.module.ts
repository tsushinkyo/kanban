import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula";

import { TaskService } from './task.service';
import { TaskApi } from '../shared/sdk/services/index';
import { HttpModule } from '@angular/http';

import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule } from '@angular/material';

import { TaskCardModule } from '../task-card/task-card.module';

import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board.component';
import { DialogCreateTaskComponent } from './controls/dialog-create-task/dialog-create-task.component';
import { ProgressComponent } from './progress/progress.component';
import { DoneComponent } from './done/done.component';
@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TaskCardModule
  ],
  providers: [TaskService, TaskApi],
  declarations: [ControlsComponent, BacklogComponent, BoardComponent, DialogCreateTaskComponent, ProgressComponent, DoneComponent],
  entryComponents: [DialogCreateTaskComponent],
  exports: [BoardComponent, DialogCreateTaskComponent]
})
export class BoardModule { }
