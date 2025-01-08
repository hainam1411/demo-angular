import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('lightgray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
  }

}

