import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-onomatopoeia',
  templateUrl: './onomatopoeia.component.html',
  styleUrls: ['./onomatopoeia.component.css']
})
export class OnomatopoeiaComponent {

  newOnomatopoeia?: string;

  @Output()
  public sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter<string>();

  createOnomatopoeia(): void {
    console.log(this.newOnomatopoeia);
    this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia);

  }
}