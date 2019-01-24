import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'javascript',
    data: { preload: true },
    loadChildren: '@makedevelopers/makedev/javascript#MakedevJavascriptModule'
  },
  {
    path: 'jquery',
    loadChildren: '@makedevelopers/makedev/jquery#MakedevJqueryModule'
  },
  {
    path: 'angularjs',
    loadChildren: '@makedevelopers/makedev/angularjs#MakedevAngularjsModule'
  },
  {
    path: 'angular',
    loadChildren: '@makedevelopers/makedev/angular#MakedevAngularModule'
  },
  {
    path: 'nodejs',
    loadChildren: '@makedevelopers/makedev/nodejs#MakedevNodejsModule'
  },

  {
    path: '',
    redirectTo: 'javascript',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'javascript'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
