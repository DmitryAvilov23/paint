import { Component, OnInit } from '@angular/core';
import { PaintService } from '../../paint.service';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.scss']
})
export class ClearButtonComponent implements OnInit {

  constructor(private _paintService: PaintService) { }

  ngOnInit(): void {
  }

  clearPaintField(): void {
    this._paintService.onClear.emit();
  }
}
