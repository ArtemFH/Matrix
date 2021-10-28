import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  public matrix: any = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  constructor() {
    setInterval(() => {
      for (let i = 0; i < this.matrix.length; i++) {
        if (i == this.matrix.length - 1) {

        }
        for (let j = 0; j < 1; j++) this.matrix[i].unshift(this.matrix[i].pop());
      }
    }, 1000);
  }

  ngOnInit()
    :
    void {
  }
}
