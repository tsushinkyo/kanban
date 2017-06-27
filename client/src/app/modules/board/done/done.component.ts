import { Component, OnInit } from '@angular/core';
import { DragulaService  } from 'ng2-dragula/ng2-dragula';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';

import { TaskCardComponent } from '../../task-card/task-card/task-card.component';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  tasks : Task[];
  identifier : string;
  constructor( private taskService: TaskService, private dragulaService: DragulaService) {
    this.tasks = [];
    this.identifier = "done";
    taskService.removedTaskDone$.subscribe(
      (taskid : Number) => {
        console.log('recibido task');
        this.tasks = this.tasks.filter((currentTask) => currentTask.id != taskid );
    });
   }

  ngOnInit() {
    this.taskService.getTasks('done').subscribe((tasks : Task[]) => {
      this.tasks = tasks;
    });

    this.dragulaService.drag.subscribe((value:any) => {
          console.log("drag start");
          console.log(value);
          console.log("drag stop");
          console.log(`drag: ${value[0]}`);
    });

    this.dragulaService.drop.subscribe((value:any) => {
     // console.log(`drop: ${value[0]}`);
     // console.log(value);
      this.onDrop(value.slice(1));
    });
    
    this.dragulaService.over.subscribe((value:any) => {
        console.log(`over: ${value[0]}`);
    });
    
    this.dragulaService.out.subscribe((value:any) => {
       console.log(`out: ${value[0]}`);
    });
  }

  removeCard(task){
     this.taskService.removeTask(task.id).subscribe((msg) => {
      this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
    });
  }

  private onDrop(args) {
    let [element, target, source] = args;
    let taskid = element.getAttribute('data-id');
    let task = {
      tittle : element.getAttribute('data-tittle'),
      description : element.getAttribute('data-description'),
      jira: element.getAttribute('data-jira'),
      remedy: element.getAttribute('data-remedy'),
      bag : target.getAttribute('data-id')
    }
    this.taskService.changebag(taskid, task).subscribe((value:any) => {
       //console.log(`out: ${value[0]}`);
       console.log(value);
    });
  }
}
