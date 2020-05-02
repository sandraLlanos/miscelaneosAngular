import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="row m-5">
    <div class="col">
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
      </div>
      <br>
      <hr>
      <app-ng-switch></app-ng-switch>
    </div>
  </div>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    
  }

  ngOnChanges(){
    console.log('OnChanges');
    
  }

  ngDoCheck(){
    console.log('DoCheck');
    
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
    
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked');
    
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
    
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked');
    
  }

  ngOnDestroy(){
    console.log('OnDestroy');
    
  }

}
