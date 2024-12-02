import { Component } from '@angular/core';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LowercasePipe, UppercasePipe, CutTextPipe],
})
export class AppComponent {
  title = 'test';

  user = {
    name: 'Mark',
    age: 19,
  };

  tooltip = "I'm link hint";

  inlineStyles = {
    width: '50%',
    background: 'green',
  };

  cssClass = 'blue';
}
