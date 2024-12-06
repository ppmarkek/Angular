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

}
