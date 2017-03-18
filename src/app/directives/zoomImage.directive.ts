import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[zoomImage]'
})
export class ZoomImageDirective {
    constructor(private el: ElementRef) { }


    @HostListener('mouseenter') onMouseEnter() {
        this.addStyle();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.clearStyle();
    }

    private addStyle() {
        this.el.nativeElement.style['border-radius'] = '20px 80px';
        this.el.nativeElement.style['transition'] = 'opacity 0.35s, transform 0.35s';
        this.el.nativeElement.style['transform'] = 'translate3d(-100px,-100px, 0)';
        this.el.nativeElement.style['width'] = '700px';
    }

    private clearStyle() {
        this.el.nativeElement.style['border-radius'] = '0px';
        this.el.nativeElement.style['transition'] = 'opacity 0.35s, transform 0.35s';
        this.el.nativeElement.style['transform'] = '';
        this.el.nativeElement.style['width'] = '';
    }
}