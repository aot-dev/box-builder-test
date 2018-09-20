import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'box-builder';
  boxCountArray = [];
  addBox() {
    const numOfBox = this.boxCountArray.length;
    this.boxCountArray[numOfBox] = numOfBox + 1;
  }

  removeBox() {
    this.boxCountArray.splice(-1, 1);
  }

  getFontSize() {
    return (this.boxCountArray.length + 15)+'px';
  }
}
