import { Component, OnInit, Input } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';

import { Task } from '../../shared/sdk/models/Task';
import { TaskService } from '../../board/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  
  @Input() public task: Task;

  constructor(private taskService: TaskService, public dialog: MdDialog) { 
    
  }
  ngOnInit() {
  }

  removeCard(task){
     this.taskService.removeTask(task).subscribe((msg) => {
      //this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
      //TODO Show notification
    });
  }

  showComments(task){
    console.log('show comments');
  }

  editTask(event){
    console.log(event);
    let dialogRef:MdDialogRef<DialogEditTaskComponent>  = this.dialog.open(DialogEditTaskComponent, {
      height: '800px',
      width: '800px',
    });
    dialogRef.componentInstance.tittle.setValue(this.task.tittle);
    dialogRef.componentInstance.description.setValue(this.task.description);
    dialogRef.componentInstance.remedy.setValue(this.task.remedy);
    dialogRef.componentInstance.jira.setValue(this.task.jira);
    dialogRef.componentInstance.task = this.task;
  }
}
