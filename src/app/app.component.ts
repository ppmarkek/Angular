import { Component } from '@angular/core';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { CustomJsonPipe } from './pipes/custom-json.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    LowercasePipe,
    UppercasePipe,
    CutTextPipe,
    SortDataPipe,
    CustomJsonPipe,
  ],
})
export class AppComponent {
  ageOfUsers = [{ age: 19 }, { age: 17 }, { age: 27 }];

  constructor() {
    setTimeout(() => {
      this.ageOfUsers = [...this.ageOfUsers, { age: 13 }];
    }, 3000);
  }
}
