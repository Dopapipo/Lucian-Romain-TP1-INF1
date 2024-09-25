import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-color-square',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './color-square.component.html',
  styleUrl: './color-square.component.scss'
})
export class ColorSquareComponent {
  @Input() color = "red"

}
