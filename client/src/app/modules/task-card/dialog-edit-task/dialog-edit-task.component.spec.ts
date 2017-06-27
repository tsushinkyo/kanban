import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskComponent } from './dialog-edit-task.component';

describe('DialogEditTaskComponent', () => {
  let component: DialogEditTaskComponent;
  let fixture: ComponentFixture<DialogEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
