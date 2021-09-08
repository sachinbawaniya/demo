import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvConfigModel } from '../models/env-config.model';
import { EnvironmentSpecificService } from './environment-specific.service';

@Injectable({
  providedIn: 'root'
})
export class SailingService {

  private _apiBasePath: string;

  constructor(
    private http: HttpClient,
    private envConfigService: EnvironmentSpecificService,
  ) {
    this.envConfigService.subscribe(this, this.init);
  }

  // Static Method
  init(caller: any, envConfig: EnvConfigModel) {
    const thisCaller = caller as SailingService;
    thisCaller._apiBasePath = envConfig.APIBasePath;
  }

  getSailingSchedules(fromLocation: string, toLocation: string): Observable<any> {
    return this.http.get(this._apiBasePath + '/schedules',
      { params: { from: fromLocation, to: toLocation } });
  }

}
