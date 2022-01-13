import { AfterViewInit, Component } from '@angular/core';

import { PaintService } from '../../paint.service';

@Component({
  selector: 'app-canvas-size',
  templateUrl: './canvas-size.component.html',
  styleUrls: ['./canvas-size.component.scss']
})
export class CanvasSizeComponent implements AfterViewInit {

  public width: number = 500;
  public height: number = 500;

  constructor(private _paintService: PaintService) { }

  ngAfterViewInit(): void {
    this.changeCanvasSize();
  }

  changeCanvasSize() {
    this._paintService.onCanvasSizeChange.next(
      { width: this.width, height: this.height }
    );
  }
}
