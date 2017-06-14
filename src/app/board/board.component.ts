import { Component, OnInit } from '@angular/core';
import { Square } from '../models/square.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})



export class BoardComponent implements OnInit {

  shuffle = function(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  rows = 8;
  mines = 10;

  squares: Square[] = [];
  board: any[] = [];
  constructor() { }

  ngOnInit() {
    //Generate and shuffle squares
    for (var i = 0; i < this.mines; i++) {
      this.squares.push(new Square(true,0,[0,0]))
    }
    for (var i = 0; i < Math.pow(this.rows,2)-this.mines; i++){
      this.squares.push(new Square(false,0,[0,0]))
    }
    this.shuffle(this.squares);

    //Organize squares into board
    for(var i=0; i<this.rows; i++){
      var output = [];
      for(var j=0; j<this.rows; j++){
        output.push(this.squares.pop())
      }
      this.board.push(output);
    }
    console.log(this.board);
  }

}
