import { Component, Input } from '@angular/core';

import { PaintService } from '../../paint.service';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent {

  @Input() isBgInput = false;

  public color: string = "#000";

  constructor(private _paintService: PaintService) { }

  changeColor() {
    if (this.isBgInput) {
      this._paintService.onBackgroundColorChange.emit(this.color);

      return;
    }
    
    this._paintService.onColorChange.emit(this.color);
  }
}
