import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { TaskService } from '../task.service';


class MockTaskService {
  public message: string = 'Test message';

  createTask() {
    return Promise.resolve(this.message);
  }
}

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      providers: [  { provide: TaskService, useClass: MockTaskService } ]
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

  it('should call service', () => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    component.createTask("event");
    expect(component).toBeTruthy();
  });
});
