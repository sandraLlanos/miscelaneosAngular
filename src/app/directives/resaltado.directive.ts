import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
@Input("appResaltado") obtenerColor:string; 

  constructor( private el:ElementRef) { 
    console.log('Se ha iniciado la directiva');
    // el.nativeElement.style.backgroundColor = "yellow"
  }
    
  @HostListener('mouseenter') mauseEntro(){    
    this.resaltar(this.obtenerColor || 'yellow');
  }

  @HostListener('mouseleave') mauseSalio(){
    this.resaltar(null);   
  }
  
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }


  
}
