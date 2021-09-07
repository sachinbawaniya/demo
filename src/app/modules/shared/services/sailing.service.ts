import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getSailing(): Observable<any> {
    return of(1)
  }

}
