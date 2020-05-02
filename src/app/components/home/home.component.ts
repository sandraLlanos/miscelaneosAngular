import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
  <app-ng-style></app-ng-style>
  <hr>
  <p>
    Scope de css para componentes
  </p>
  <app-css></app-css>

  <p>
    Hola Mundo desde app.components
  </p>


<app-ng-class></app-ng-class>

<hr>

<div>
<p [appResaltado]="'orange'">
  Hola mundo, enviando color
</p>
<p [appResaltado]="">
  Hola mundo, no enviando color
</p>



<br>
<hr>

<app-ng-switch></app-ng-switch>


  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
