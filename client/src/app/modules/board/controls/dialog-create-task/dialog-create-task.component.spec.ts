import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateTaskComponent } from './dialog-create-task.component';

describe('DialogCreateTaskComponent', () => {
  let component: DialogCreateTaskComponent;
  let fixture: ComponentFixture<DialogCreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
