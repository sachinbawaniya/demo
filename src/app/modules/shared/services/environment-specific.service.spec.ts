import { TestBed, inject } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { EnvironmentSpecificService } from './environment-specific.service';

xdescribe('EnvironmentSpecificService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnvironmentSpecificService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should be created', inject([EnvironmentSpecificService], (service: EnvironmentSpecificService) => {
    expect(service).toBeTruthy();
  }));
});
