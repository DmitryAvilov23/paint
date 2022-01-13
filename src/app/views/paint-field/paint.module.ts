import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaintFieldComponent } from './paint-field.component';
import { ToolsPanelComponent } from './tools-panel/tools-panel.component';
import { CanvasComponent } from './canvas/canvas.component';
import { RangeInputComponent } from './tools-panel/range-input/range-input.component';
import { ClearButtonComponent } from './tools-panel/clear-button/clear-button.component';
import { ColorInputComponent } from './tools-panel/color-input/color-input.component';
import { CanvasSizeComponent } from './tools-panel/canvas-size/canvas-size.component';

@NgModule({
  declarations: [
    PaintFieldComponent,
    ToolsPanelComponent,
    CanvasComponent,
    RangeInputComponent,
    ColorInputComponent,
    ClearButtonComponent,
    CanvasSizeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaintModule { }
