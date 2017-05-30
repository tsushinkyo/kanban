import { Injectable } from '@angular/core';

import { TaskApi } from '../shared/sdk/services/index';
import { Task } from '../shared/sdk/models/index';

@Injectable()
export class TaskService {

  constructor(private taskApi : TaskApi) { }

  createTask() {
    let object = {

    }
    console.log('createTask');
    this.taskApi.create(object).subscribe((data) => {
      console.log(data);
    });
  }
}
