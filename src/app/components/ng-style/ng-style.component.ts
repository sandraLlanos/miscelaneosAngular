import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size':'40px'}">
      Hola mundo... esta es una etiqueta ngStyle = 'font-size':'40px'
    </p>
    <p [style.fontSize]="'30px'">
      Hola mundo... esta es una etiqueta style.fontSize = "'30px'"
    </p>
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta style.fontSize.px = "tamano" y tamano es 20px
    </p>
    <p [style.fontSize.px]="changeSize">
      Hola mundo... esta es una etiqueta style.fontSize.px = "changeSize", este cambia de tmaño
    </p>

    <button class="btn btn-primary" (click)="changeSize = changeSize + 5">
    <em class="fa fa-plus"></em>
    </button>

    <button class="btn btn-primary" (click)="changeSize = changeSize - 5">
    <em class="fa fa-minus"></em>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
tamano:number = 20;
changeSize:number = 10;
  constructor() { }

  ngOnInit() {
  }

}
