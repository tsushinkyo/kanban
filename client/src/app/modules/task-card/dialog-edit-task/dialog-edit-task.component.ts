import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Task }  from '../../shared/sdk/models/index';
import { TaskService } from '../../board/task.service';
import { TaskApi } from '../../shared/sdk/services/index';
@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {

  constructor(public dialogRef : MdDialogRef<DialogEditTaskComponent>, private  builder: FormBuilder, private taskService: TaskService,  private taskApi: TaskApi) { }

  ngOnInit() {
  }

  task: Task;

  tittle: FormControl = new FormControl('',[
    Validators.required
  ]);
  description: FormControl = new FormControl('',[
    Validators.required
  ]);
  remedy: FormControl = new FormControl('',[]);
  jira: FormControl = new FormControl('',[]);

  editTaskForm: FormGroup = this.builder.group({
    tittle: this.tittle, 
    description: this.description,
    remedy: this.remedy, 
    jira: this.jira
  });

   submit() {
    this.task.tittle = this.tittle.value;
    this.task.description = this.description.value;
    this.task.remedy = this.remedy.value;
    this.task.jira = this.jira.value;

    this.taskApi.replaceById(this.task.id, this.task)
    .subscribe((task) => {
      this.dialogRef.close();
    }, (err) => alert(err.message));
  }  
}