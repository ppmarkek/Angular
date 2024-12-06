import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, ChildComponent],
})
export class AppComponent {
  title: string = 'Title';

  // @ViewChild('selector') property: any;
  // @ViewChild('paragrath') paragrath!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('paragrath', { read: ChildComponent, static: true })
  // paragrath!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('template') template!: TemplateRef<HTMLParagraphElement>;
  // @ViewChild('component') component!: ChildComponent;

  @ViewChildren('paragrath')
  paragrath!: QueryList<HTMLParagraphElement>;
  @ViewChildren('template') template!: QueryList<HTMLParagraphElement>;
  @ViewChildren('component') component!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log('paragrath', this.paragrath);
    console.log('template', this.template);
    console.log('component', this.component);

    // this.paragrath.nativeElement.textContent = 'aboba';
  }
}
