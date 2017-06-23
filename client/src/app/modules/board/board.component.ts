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

  increment() {
    this.ngRedux.dispatch(this.actions.increment()); 
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); 
  }

}
