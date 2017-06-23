import { Component, OnInit } from '@angular/core';
import { DragulaService  } from 'ng2-dragula/ng2-dragula';
import { TaskService } from '../task.service';
import { Task } from '../../shared/sdk/models/Task';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  tasks : Task[];
  constructor( private taskService: TaskService, private dragulaService: DragulaService) { }

  ngOnInit() {
    this.taskService.getTasks('progress').subscribe((tasks : Task[]) => {
      console.log(tasks);
      this.tasks = tasks;
    });

    this.dragulaService.drag.subscribe((value:any) => {
          console.log("drag start");
          console.log(value);
          console.log("drag stop");
          console.log(`drag: ${value[0]}`);
    });

    this.dragulaService.drop.subscribe((value:any) => {
      console.log(`drop: ${value[0]}`);
    });
    
    this.dragulaService.over.subscribe((value:any) => {
        console.log(`over: ${value[0]}`);
    });
    
    this.dragulaService.out.subscribe((value:any) => {
       console.log(`out: ${value[0]}`);
    });
    
  }

}
