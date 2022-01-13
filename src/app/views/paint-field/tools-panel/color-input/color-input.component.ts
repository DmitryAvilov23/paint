import { Component, OnInit } from '@angular/core';

import { PaintService } from '../../paint.service';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {

  public color: string = "#000";

  constructor(private _paintService: PaintService) { }

  ngOnInit(): void {
  }

  changeLineColor() {
    this._paintService.onColorChange.emit(this.color);
  }
}
