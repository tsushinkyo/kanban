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
  identifier : string;
  constructor(private taskService: TaskService,  private dragulaService: DragulaService) {
    this.identifier = "backlog";
    this.tasks = [];
    taskService.newBacklogTask$.subscribe(
      (task : Task) => {
        console.log('recibido task');
        this.tasks.push(task);
    });
   }

  ngOnInit() {
    this.taskService.getTasks('backlog').subscribe((tasks : Task[]) => {
      //console.log(tasks);
      this.tasks = tasks;
    });

    this.dragulaService.drop.subscribe((value:any) => {
     // console.log(`drop: ${value[0]}`);
     // console.log(value);
      this.onDrop(value.slice(1));
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
    this.taskService.changebag(taskid, task ).subscribe((value:any) => {
       //console.log(`out: ${value[0]}`);
       console.log(value);
    });
  }
  
}
