import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
 
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
  commentCount: Number;
  showCommentsActivated: Boolean;
  constructor(private taskService: TaskService, public dialog: MdDialog, private  builder: FormBuilder, public snackBar: MdSnackBar) { 
    this.showCommentsActivated = false;
  }
  ngOnInit() {

  }
  

  message: FormControl = new FormControl('',[
    Validators.required
  ]);

  addCommentForm: FormGroup = this.builder.group({
    message: this.message,
  });

  addComment(task) {
    let snackBarRef = this.snackBar.open('Comment added to task '+ this.task.tittle,'Ok', {
        duration: 3000
      });
    if(!this.task.commentList) this.task.commentList = [];
    this.task.commentList.push({ message: this.message.value});
    this.taskService.updateTask(this.task);
    this.message.setValue("");
  }

  removeComment(index) {
    this.task.commentList.splice(index, 1);
    this.taskService.updateTask(this.task);
    let snackBarRef = this.snackBar.open('Comment removed from task '+ this.task.tittle,'Ok', {
        duration: 3000
      });
  }

  showBadgeClass(){
    this.task.commentList.length > 0 ? true : false;
  }
  removeCard(task){
     this.taskService.removeTask(task).subscribe((msg) => {
      //this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
      //TODO Show notification
      console.log(msg);
      let snackBarRef = this.snackBar.open('Task has been removed','Ok', {
        duration: 3000
      }); 
    });
  }

  showComments(task){
    this.showCommentsActivated = this.showCommentsActivated ? false : true;
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
