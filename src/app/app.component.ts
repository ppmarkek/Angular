import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule],
})
export class AppComponent {
  toggler: boolean = true;
  arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol];
}
