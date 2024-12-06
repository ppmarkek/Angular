import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  exportAs: 'custom'
})
export class CustomDirectiveDirective {
  @Input('color') colorProps!: string;
  @Input('appCustomDirective') appCustomDirectiveProps!: string;

  @Output() colorChange = new EventEmitter<string>();

  constructor(private element: ElementRef) {
    console.log('hello');
    console.log('element', this.element);

    this.element.nativeElement.style.color = 'red';
  }

  @HostBinding('style.color') color: string = 'lime';
  @HostBinding('attr.color') attr: string = 'lime';
  @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.background') bgColor = 'transparent';

  @HostListener('click', ['$event.target']) handleClick(data: any) {
    this.getRandomColor();
  }

  @HostListener('mouseenter', ['$event.target']) handleMouseenter(data: any) {
    this.bgColor = 'orange';
  }

  @HostListener('mouseleave', ['$event.target']) handleMouseleave(data: any) {
    this.bgColor = 'transparent';
  }

  ngOnChanges() {
    console.log('colorProps', this.colorProps);

    this.bgColor = this.appCustomDirectiveProps;
  }

  getRandomColor() {
    const newColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    this.colorChange.emit(newColor);

    return newColor
  }
}
