import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Colors} from "../theme/colors";

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
  initialColor = this.color
  changeColor() {
    if (this.color===Colors.PageColor) {
      this.color=this.initialColor
    }
    else {
      this.initialColor=this.color
      this.color = Colors.PageColor
    }
  }
}
