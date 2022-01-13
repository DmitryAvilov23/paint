import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ICanvasSize } from "./interfaces";

@Injectable({
    providedIn: 'root'
})
export class PaintService {
    public onClear: EventEmitter<void> = new EventEmitter<void>();
    public onLineWidthChange: EventEmitter<number> = new EventEmitter<number>();
    public onColorChange: EventEmitter<string> = new EventEmitter<string>();
    public onBackgroundColorChange: EventEmitter<string> = new EventEmitter<string>();
    public onCanvasSizeChange: BehaviorSubject<ICanvasSize> = new BehaviorSubject<ICanvasSize>( { width: 0, height: 0 } );
}