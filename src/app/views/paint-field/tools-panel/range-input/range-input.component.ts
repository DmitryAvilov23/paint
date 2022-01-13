import { Component, OnInit } from '@angular/core';

import { PaintService } from '../../paint.service';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {
  
  public lineWidth: number = 1;

  constructor(private _paintService: PaintService) { }

  ngOnInit(): void {
  }

  changeLineWidth() {
    this._paintService.onLineWidthChange.emit(this.lineWidth);
  }
}
