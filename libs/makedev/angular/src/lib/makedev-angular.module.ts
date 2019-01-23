import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
   RouterModule.forChild([
      {
        path: '',
        component: AngularComponent // parent component of screen 1
      }
    ])
    ],
  declarations: [AngularComponent],
  exports: [AngularComponent]
})
export class MakedevAngularModule {}
