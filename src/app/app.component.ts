import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, ChildComponent],
})
export class AppComponent {
  toggler: boolean = true
  title: string = 'aboba'
}
