import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { TaskApi } from '../shared/sdk/services/index';
import { Task } from '../shared/sdk/models/index';

@Injectable()
export class TaskService {
  newTask : Task;
  // Observable string sources
  private newBacklogTask = new Subject<Task>();
  private removedTaskBacklog = new Subject<Number>();
  private removedTaskProgress = new Subject<Number>();
  private removedTaskDone = new Subject<Number>();

  // Observable string streams
  newBacklogTask$ = this.newBacklogTask.asObservable();
  removedTaskBacklog$ = this.removedTaskBacklog.asObservable();
  removedTaskProgress$ = this.removedTaskProgress.asObservable();
  removedTaskDone$ = this.removedTaskDone.asObservable();

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

  removeTask(task) {
    switch (task.bag){
      case 'backlog':
         this.removedTaskBacklog.next(task.id);
         break;
      case 'progress':
         this.removedTaskProgress.next(task.id);
         break;
      case 'done':
         this.removedTaskDone.next(task.id);
         break;
      default:
        break;
    }
    return this.taskApi.deleteById(task.id);
  }

  

  addTaskBacklog(task) {
    this.newBacklogTask.next(task);
  }

  changebag(taskid, taskObject) {
    return this.taskApi.updateAttributes(taskid, taskObject);
  } 

}
