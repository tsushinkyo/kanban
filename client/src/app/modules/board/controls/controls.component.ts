import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { TaskApi } from '../../shared/sdk/services/index';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  createTask(event){
    console.log(event);
    this.taskService.createTask();
  }

}
