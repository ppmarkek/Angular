import { Component } from '@angular/core';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { CustomJsonPipe } from './pipes/custom-json.pipe';
import { ChildComponent } from './components/child/child.component';
import { CommonModule } from '@angular/common';


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
    ChildComponent,
    CommonModule
  ],
})
export class AppComponent {

}
