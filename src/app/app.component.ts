import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, CustomDirectiveDirective],
})
export class AppComponent {
  colorProperty: string = 'orange';

  setColor(newColor: string) {
    this.colorProperty = newColor
  }
}
