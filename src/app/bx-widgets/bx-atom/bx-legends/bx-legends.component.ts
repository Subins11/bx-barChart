import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-legends',
  templateUrl: './bx-legends.component.html',
  styleUrls: ['./bx-legends.component.scss']
})
export class BxLegendsComponent {

@Input() color: string=""
@Input() background: string=""
@Input() fontSize: string=""
@Input() width: string=""
@Input() height: string=""
@Input() text: string=""
@Input() class: string=""
@Input() label:string=""

}
