// Angular
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
// Redux
import { NgRedux, select } from '@angular-redux/store'; 
import { CounterActions } from '../../app.actions'; 
import {IAppState} from "../../store"; 

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  viewProviders: [DragulaService]
})
export class BoardComponent implements OnInit {
  count: number;
  @select() readonly count$: Observable<number>; 
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: CounterActions, private dragulaService: DragulaService) { 
    //this.count$ = ngRedux.select<number>('count'); 
  }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment()); 
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); 
  }

}
