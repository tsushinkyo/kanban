import { Component, OnInit } from '@angular/core';
import { MdIcon } from '@angular/material';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';

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
    this.taskService.getTasks().subscribe((tasks : Task[]) => {
      this.tasks = tasks;
    });
  }

  removeCard(task){
     this.taskService.removeTask(task.id).subscribe((msg) => {
      this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
    });
  }

  
}
