import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintFieldComponent } from './paint-field.component';
import { ToolsPanelComponent } from './tools-panel/tools-panel.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    PaintFieldComponent,
    ToolsPanelComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaintFieldModule { }
