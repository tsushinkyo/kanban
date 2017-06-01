import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  tasks : Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks : Task[]) => {
      this.tasks = tasks;
    });
  }

}
