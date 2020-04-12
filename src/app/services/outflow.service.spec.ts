/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OutflowService } from './outflow.service';

describe('Service: Outflow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutflowService]
    });
  });

  it('should ...', inject([OutflowService], (service: OutflowService) => {
    expect(service).toBeTruthy();
  }));
});
