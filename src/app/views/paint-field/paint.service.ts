import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PaintService {
    public onClear: EventEmitter<void> = new EventEmitter<void>();
}