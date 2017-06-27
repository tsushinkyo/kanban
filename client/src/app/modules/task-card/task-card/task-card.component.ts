import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/sdk/models/Task';
import { TaskService } from '../../board/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  
  @Input() public task: Task;

  constructor(private taskService: TaskService) { 
    
  }
  ngOnInit() {
  }

  removeCard(task){
     this.taskService.removeTask(task).subscribe((msg) => {
      //this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
      //TODO Show notification
    });
  }

  showComments(task){
    console.log('show comments');
  }
}
