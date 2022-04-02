import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private el:ElementRef) {
   }
   @HostListener('mouseover') mouseover(){
     this.el.nativeElement.style.backgroundColor="#00cc7a"
     this.el.nativeElement.style.transition="all 0.2s ease"
   }
   @HostListener('mouseout') mouseout(){
     this.el.nativeElement.style.backgroundColor="white"
   }

}
