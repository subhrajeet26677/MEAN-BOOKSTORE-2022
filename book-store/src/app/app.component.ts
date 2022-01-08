import { Component } from '@angular/core';

@Component({
  //used to render components
  selector: 'app-root',
  //locate html part of component
  templateUrl: './app.component.html',
  //locate css part of the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';
}

//angular components
//3 parts (1. html, 2. css, 3. ts)
