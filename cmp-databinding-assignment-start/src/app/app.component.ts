import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd = []
  even = []
  onIntervalFired(event: number) {
    if (event % 2 === 0) {
      this.even.push(event);
    } else {
      this.odd.push(event);
    }
  }

}
