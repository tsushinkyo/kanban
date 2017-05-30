import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskApi } from '../shared/sdk/services/index';


class MockTaskApi {
  public message: string = 'Test message';

  getQuote() {
    return Promise.resolve(this.message);
  }
}

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, {
          provide: TaskApi,
          useClass: MockTaskApi
        }]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService ) => {
    expect(service).toBeTruthy();
  }));
});
