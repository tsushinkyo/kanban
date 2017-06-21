import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

import { TaskService } from '../task.service';
import { DialogCreateTaskComponent } from './dialog-create-task/dialog-create-task.component';

@Component({
  selector: 'app-controls',
  entryComponents: [
    DialogCreateTaskComponent
    ],
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private taskService: TaskService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  createTask(event){
    console.log(event);
    this.taskService.createTask();
  }

  createNewTask(event){
    console.log(event);
    this.dialog.open(DialogCreateTaskComponent);
  }
}
