import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { EnvironmentSpecificResolver } from './modules/shared/helper/environment-specific.resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sailing',
    pathMatch: 'full',
    resolve: {
      envConfig: EnvironmentSpecificResolver
    }
  },
  {
    path: 'sailing',
    loadChildren: () => import('src/app/modules/sailing/sailing.module').then(m => m.SailingModule),
    resolve: {
      envConfig: EnvironmentSpecificResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
