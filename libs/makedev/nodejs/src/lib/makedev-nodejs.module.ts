import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodejsComponent } from './nodejs/nodejs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
  RouterModule.forChild([
      {
        path: '',
        component: NodejsComponent // parent component of screen 1
      }
    ])],
  declarations: [NodejsComponent],
  exports: [NodejsComponent]
})
export class MakedevNodejsModule {}
