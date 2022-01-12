import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintDirective } from './paint.directive';
import { PaintFieldComponent } from './paint-field.component';
import { ToolsPanelComponent } from './tools-panel/tools-panel.component';

@NgModule({
  declarations: [
    PaintFieldComponent,
    ToolsPanelComponent,
    PaintDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PaintFieldModule { }
