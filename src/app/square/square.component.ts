import { Component } from '@angular/core';
import {ColorSquareComponent} from "../color-square/color-square.component";

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    ColorSquareComponent
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {

}
