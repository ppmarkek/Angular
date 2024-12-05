import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() title!: string

    constructor() {
      console.log(
        '%c Компонент app-child успешно создан! ',
        'background: darkgreen',
      );
    }
    ngOnChanges(): void {
      console.log('%c дочерний ngOnChanges ', 'color: aqua; background: black');
    }
    ngOnInit(): void {
      console.log(
        '%c дочерний ngOnInit ',
        'color: deepskyblue; background: black',
      );
    }
    ngDoCheck(): void {
      console.log('%c дочерний ngDoCheck ', 'color: pink; background: black');
    }
    ngAfterContentInit(): void {
      console.log(
        '%c дочерний ngAfterContentInit ',
        'color: lightgreen; background: black',
      );
    }
    ngAfterContentChecked(): void {
      console.log(
        '%c дочерний ngAfterContentChecked ',
        'color: green; background: black',
      );
    }
    ngAfterViewInit(): void {
      console.log(
        '%c дочерний ngAfterViewInit ',
        'color: yellow; background: black',
      );
    }
  //   ngAfterViewChecked(): void {
  //     console.log(
  //       '%c дочерний ngAfterViewChecked ',
  //       'color: orange; background: black',
  //     );
  //   }
  ngOnDestroy(): void {
    console.log('Destroy!!!')
  }
}
