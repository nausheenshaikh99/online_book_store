import { TestBed } from '@angular/core/testing';

import { AngularOnlinebookstoreService } from './angular-onlinebookstore.service';

describe('AngularOnlinebookstoreService', () => {
  let service: AngularOnlinebookstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularOnlinebookstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
