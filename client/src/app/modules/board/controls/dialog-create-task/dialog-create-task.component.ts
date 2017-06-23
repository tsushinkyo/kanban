import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Task }  from '../../../shared/sdk/models/index';
import { TaskApi } from '../../../shared/sdk/services/index';
import { TaskService } from '../../task.service';
@Component({
  selector: 'app-dialog-create-task',
  templateUrl: './dialog-create-task.component.html',
  styleUrls: ['./dialog-create-task.component.scss']
})
export class DialogCreateTaskComponent implements OnInit {

  constructor(public dialogRef : MdDialogRef<DialogCreateTaskComponent>, private  builder: FormBuilder, private taskApi: TaskApi, private taskService: TaskService) { }

  ngOnInit() {
  }

  tittle: FormControl = new FormControl('',[
    Validators.required
  ]);
  description: FormControl = new FormControl('',[
    Validators.required
  ]);
  newTaskForm: FormGroup = this.builder.group({
    tittle: this.tittle, 
    description: this.description
  });

  submit() {
    this.taskApi.create({'tittle':this.tittle.value, 'description':this.description.value, 'bag' : 'backlog'})
    .subscribe((task) => {
      this.taskService.addTaskBacklog(task);
      this.dialogRef.close();
    }, (err) => alert(err.message));
  }  

}
