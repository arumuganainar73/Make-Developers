import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JqueryComponent } from './jquery/jquery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
   RouterModule.forChild([
      {
        path: '',
        component: JqueryComponent // parent component of screen 1
      }
    ])],
  declarations: [JqueryComponent],
  exports: [JqueryComponent]
})
export class MakedevJqueryModule {}
