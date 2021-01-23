import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appRainbow]",
})
export class RainbowDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    //this.changeBgColor("cyan");
  }

  @HostBinding("style.border") border: string;

  changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, "background-color", color);
  }

  @HostListener("mouseenter") onmouseOver() {
    this.border = "5px solid green";
    this.changeBgColor("green");
  }

  @HostListener("mouseleave") onmouseleave() {
    this.border = "1px solid pink";
    this.changeBgColor("blue");
  }
}
