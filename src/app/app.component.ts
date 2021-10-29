import {Component} from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appTitle: string = 'ArtemFH'

  reverseParam: boolean = true

  reverse() {
    this.reverseParam = !this.reverseParam
  }

  cards: Card[] = [
    {title: '1', text: '123'},
    {title: '2', text: '123'},
    {title: '3', text: '123'},
    {title: '4', text: '123'},
  ]
}
