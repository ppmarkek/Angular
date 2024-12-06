import {
  Component,
  ContentChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { NgContentExampleComponent } from '../../ng-content-example/ng-content-example/ng-content-example.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // @ContentChild('selector') propertyName: dataType;
  @ContentChild('tag') paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChild('tag') template!: TemplateRef<HTMLParagraphElement>;
  @ContentChild(NgContentExampleComponent) component!: NgContentExampleComponent;

  ngAfterContentInit() {
    this.paragraph && console.log('paragraph', this.paragraph);
    this.template && console.log('template', this.template);
    this.component && console.log('component', this.component);
    // this.allChildren && console.log('allChildren', this.allChildren);
    this.component?.getClassName();
  }
}
