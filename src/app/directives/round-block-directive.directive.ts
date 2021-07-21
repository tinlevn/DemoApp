import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundBlockDirective]',

})
export class RoundBlockDirectiveDirective {

  @Input() appRoundBlockDirective: any = '.30em';


  constructor(private renderer: Renderer2, private elemRef: ElementRef) {
    debugger;
    console.log(this.appRoundBlockDirective);
    this.renderer.addClass(this.elemRef.nativeElement, 'borderClass');
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-color', 'red')
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.renderer.addClass(this.elemRef.nativeElement, 'borderClass');
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-radius', this.appRoundBlockDirective);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-color', 'blue');

  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.addClass(this.elemRef.nativeElement, 'borderClass');
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-radius', '.1em');
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-color', 'red');

  }


}
