import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChange } from '@angular/core';

export type TButtonColor = 'orange' | 'navy' | '';

@Component({
  selector: 'button[buttonStyle], a[buttonStyle]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonStyle: TButtonColor = 'orange'

  @Input()
  busy: boolean = false;

  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, 'background-' + (this.buttonStyle || 'orange'))
  }

  ngOnChanges(): void {
    const element = this.ref.nativeElement as HTMLElement
    if (this.busy) {
      this.renderer.addClass(element, 'busy')
    } else {
      this.renderer.removeClass(element, 'busy')
    }
  }
}
