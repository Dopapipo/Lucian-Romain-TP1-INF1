import {Component, EventEmitter, Output} from '@angular/core';
import {ColorSquareComponent} from "../color-square/color-square.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    CommonModule,
    ColorSquareComponent
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Output() pageColor = new EventEmitter<string>();
  color: string = 'white';

  changeColor(color: string) {
    this.color = color;
    this.pageColor.emit(this.color);
  }
}
