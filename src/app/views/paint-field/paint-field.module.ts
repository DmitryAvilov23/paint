import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintDirective } from './paint.directive';

@NgModule({
  declarations: [
    PaintDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PaintFieldModule { }
