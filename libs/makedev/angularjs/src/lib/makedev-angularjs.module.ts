import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
   RouterModule.forChild([
      {
        path: '',
        component: AngularjsComponent // parent component of screen 1
      }
    ])],
  declarations: [AngularjsComponent],
   exports: [AngularjsComponent]
})
export class MakedevAngularjsModule {}
