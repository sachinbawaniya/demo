import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvConfigModel } from '../models/env-config.model';
import { EnvironmentSpecificService } from './environment-specific.service';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  
  private _apiBasePath: string;

  constructor(
    private http: HttpClient,
    private envConfigService: EnvironmentSpecificService,
  ) {
    this.envConfigService.subscribe(this, this.init);
  }

  // Static Method
  init(caller: any, envConfig: EnvConfigModel) {
    const thisCaller = caller as CodesService;
    thisCaller._apiBasePath = envConfig.APIBasePath;
  }

  getCountries(): Observable<any> {
    return this.http.get(this._apiBasePath + '/codes/countries')
  }

  getLocations(): Observable<any> {
    return this.http.get(this._apiBasePath + '/codes/locations')
  }
}
