import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { TaskService } from './task.service';
import { TaskApi } from '../shared/sdk/services/index';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular/material';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board.component';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  providers: [TaskService, TaskApi ],
  declarations: [ControlsComponent, BacklogComponent, BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule { }
