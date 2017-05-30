import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { TaskService } from '../task.service';
import { TaskApi } from '../../shared/sdk/services/index';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      providers: [ TaskService, TaskApi ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
