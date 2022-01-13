import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, pairwise, Subject, switchMap, takeUntil } from 'rxjs';

import { PaintService } from '../paint.service';

function getNativeWindow(): Window {
  return window;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas') canvas!: ElementRef;

  @HostListener('window:resize') onResize(): void { this.initCanvas(); }

  private get _nativeWindow(): Window {
    return getNativeWindow();
  }

  private _canvas!: HTMLCanvasElement;
  private _scale!: number;
  private _context!: CanvasRenderingContext2D;

  private _mouseMove$!: Observable<Event>;
  private _mouseDown$!: Observable<Event>;
  private _mouseUp$!: Observable<Event>;
  private _mouseOut$!: Observable<Event>;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private _paintService: PaintService) { }

  ngAfterViewInit(): void {
    this._canvas = this.canvas.nativeElement;
    this._scale = this._nativeWindow.devicePixelRatio;
    this._context = this._canvas.getContext('2d')!;

    this.initEvents();
    this.initCanvas();

    this.createMouseDownSubscribtion();
    this.createClearFieldSubscribtion();
    this.createLineWidthSubscribtion();
    this.createLineColorSubscribtion();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  private initEvents(): void {
    this._mouseMove$ = fromEvent(this._canvas, 'mousemove');
    this._mouseDown$ = fromEvent(this._canvas, 'mousedown');
    this._mouseUp$ = fromEvent(this._canvas, 'mouseup');
    this._mouseOut$ = fromEvent(this._canvas, 'mouseout');
  }

  private initCanvas(): void {
    const rect: DOMRect = this._canvas.getBoundingClientRect();

    this._canvas.width = rect.width * this._scale;
    this._canvas.height = rect.height * this._scale;

    this._context.scale(1, 1);
  }

  private createMouseDownSubscribtion(): void {
    this._mouseDown$.pipe(
      switchMap(() => this.getMouseMoveSubscribtion()),
      takeUntil(this._ngUnsubscribe))
    .subscribe(([from, to]) => {
      this._context.beginPath();
      this._context.moveTo(from.x, from.y);
      this._context.lineTo(to.x, to.y);
      this._context.stroke();
    });
  }

  private createClearFieldSubscribtion(): void {
    this._paintService.onClear.pipe(takeUntil(this._ngUnsubscribe)).subscribe(() => {
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    });
  }

  private createLineWidthSubscribtion(): void {
    this._paintService.onLineWidthChange.pipe(takeUntil(this._ngUnsubscribe)).subscribe((width: number) => {
      this._context.lineWidth = width;
    })
  }

  private createLineColorSubscribtion(): void {
    this._paintService.onColorChange.pipe(takeUntil(this._ngUnsubscribe)).subscribe((color: string) => {
      this._context.strokeStyle = color;
    })
  }

  private getMouseMoveSubscribtion(): Observable<any> {
    return this._mouseMove$.pipe(
      map((e: any) => { 
        return { x: e.offsetX, y: e.offsetY }
      }),
      pairwise(),
      takeUntil(this._mouseUp$),
      takeUntil(this._mouseOut$),
      takeUntil(this._ngUnsubscribe)
    )
  }
}
