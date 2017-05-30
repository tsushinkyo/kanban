import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskApi } from '../shared/sdk/services/index';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
