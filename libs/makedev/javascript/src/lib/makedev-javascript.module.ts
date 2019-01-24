import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript/javascript.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JavascriptComponent // parent component of screen 1
      }
    ])
  ],
  declarations: [JavascriptComponent],
  exports: [JavascriptComponent]
})
export class MakedevJavascriptModule {}
