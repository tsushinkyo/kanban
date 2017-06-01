import { Injectable } from '@angular/core';

import { TaskApi } from '../shared/sdk/services/index';
import { Task } from '../shared/sdk/models/index';

@Injectable()
export class TaskService {
  newTask : Task;
  constructor(private taskApi : TaskApi) { }

  createTask() {
    this.newTask = new Task();
    this.newTask.tittle = "tittle";
    this.newTask.description = "description";
    this.taskApi.create(this.newTask).subscribe((data) => {
      console.log(data);
    });
  }

  getTasks() {
    let filter : any = {};
    return this.taskApi.find(filter);
  }
}
