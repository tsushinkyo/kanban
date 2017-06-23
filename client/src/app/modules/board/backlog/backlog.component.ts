import { Component, OnInit } from '@angular/core';
import { MdIcon } from '@angular/material';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';
import { DragulaService  } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit {
  tasks : Task[];
  constructor(private taskService: TaskService) {
    taskService.newBacklogTask$.subscribe(
      (task : Task) => {
        console.log('recibido task');
        this.tasks.push(task);
    });
   }

  ngOnInit() {
    this.taskService.getTasks('backlog').subscribe((tasks : Task[]) => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  removeCard(task){
     this.taskService.removeTask(task.id).subscribe((msg) => {
      this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
    });
  }

  
}
