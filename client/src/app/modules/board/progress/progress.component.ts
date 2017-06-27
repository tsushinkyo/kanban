import { Component, OnInit } from '@angular/core';
import { DragulaService  } from 'ng2-dragula/ng2-dragula';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';

import { TaskCardComponent } from '../../task-card/task-card/task-card.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  tasks : Task[];
  identifier: string;
  constructor( private taskService: TaskService, private dragulaService: DragulaService) {
    this.identifier = "progress";
    this.tasks = [];

    taskService.removedTaskProgress$.subscribe(
      (taskid : Number) => {
        console.log('recibido task');
        this.tasks = this.tasks.filter((currentTask) => currentTask.id != taskid );
    });
   }

  ngOnInit() {
    this.taskService.getTasks('progress').subscribe((tasks : Task[]) => {
      //console.log(tasks);
      this.tasks = tasks;
    });

    this.dragulaService.drag.subscribe((value:any) => {
          //console.log("drag start");
          //console.log(value);
          //console.log("drag stop");
          //console.log(`drag: ${value[0]}`);
    });

    this.dragulaService.drop.subscribe((value:any) => {
     // console.log(`drop: ${value[0]}`);
     // console.log(value);
      this.onDrop(value.slice(1));
    });
    
    this.dragulaService.over.subscribe((value:any) => {
        //console.log(`over: ${value[0]}`);
    });
    
    this.dragulaService.out.subscribe((value:any) => {
       //console.log(`out: ${value[0]}`);
    });
    
  }

  removeCard(task){
     this.taskService.removeTask(task.id).subscribe((msg) => {
      this.tasks = this.tasks.filter((currentTask) => currentTask.id != task.id );
    });
  }
  private onDrop(args) {
    console.log('onDrop!!!!!!!!!!!!!!!');
    let [element, target, source] = args;
    let taskid = element.getAttribute('data-id');
    console.log(element);
    let task = {
      tittle : element.getAttribute('data-tittle'),
      description : element.getAttribute('data-description'),
      jira: element.getAttribute('data-jira'),
      remedy: element.getAttribute('data-remedy'),
      bag : target.getAttribute('data-id')
    }
    console.log(task);
    this.taskService.changebag(taskid, task ).subscribe((value:any) => {
       //console.log(`out: ${value[0]}`);
       console.log(value);
    });
  }
}
