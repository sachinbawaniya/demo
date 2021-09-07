import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { EnvironmentSpecificService } from 'src/app/modules/shared/services/environment-specific.service';
import { EnvConfigModel } from '../models/env-config.model';


@Injectable()
export class EnvironmentSpecificResolver implements Resolve<EnvConfigModel> {
  constructor(private envConfigService: EnvironmentSpecificService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<EnvConfigModel> {
    return this.envConfigService.loadEnvironment()
    .then( (envConfig: EnvConfigModel)  => {
        this.envConfigService.setEnvConfig(envConfig);
        return this.envConfigService.getEnvConfig();
    }, error => {
        return null;
    });
  }
}
