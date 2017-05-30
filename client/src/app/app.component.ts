import { Component } from '@angular/core';
import { LoopBackConfig } from './modules/shared/sdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban';

  constructor() {
    LoopBackConfig.setBaseURL("http://localhost:3000");
    LoopBackConfig.setApiVersion("api");
  }

}
