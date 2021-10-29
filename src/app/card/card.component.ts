import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card

  obj: object = {name: 'Voice', age: 10}
  imgUrl1: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1200px-Circle-icons-camera.svg.png'
  imgUrl2: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png'
  disable: boolean = false

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl1 = this.imgUrl2
      this.disable = true
    }, 3000)
  }

  changeVoice() {
    this.card.title = '123'
  }
}
