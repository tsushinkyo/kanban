import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { TaskApi } from '../shared/sdk/services/index';
import { Task } from '../shared/sdk/models/index';

@Injectable()
export class TaskService {
  newTask : Task;
  // Observable string sources
  private newBacklogTask = new Subject<Task>();

  // Observable string streams
  newBacklogTask$ = this.newBacklogTask.asObservable();
  constructor(private taskApi : TaskApi) { }

  createTask() {
    this.newTask = new Task();
    this.newTask.tittle = "tittle";
    this.newTask.description = "description";
    this.taskApi.create(this.newTask).subscribe((data) => {
      console.log(data);
    });
  }

  getTasks(bag) {
    let filter : any = {};
    filter = { where: {
        bag : bag
      }
    }
    console.log(filter);
    return this.taskApi.find(filter);
  }

  removeTask(taskid) {
    return this.taskApi.deleteById(taskid);
  }

  addTaskBacklog(task) {
    this.newBacklogTask.next(task);
  }

  changebag(taskid, taskObject) {
    return this.taskApi.updateAttributes(taskid, taskObject);
  } 

}
