import { Component, OnInit, HostListener } from '@angular/core';
import { Square } from '../models/square.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  @HostListener('document:contextmenu', ['$event'])
  onDocumentRightClick(event) {
    event.preventDefault();
  }

  shuffle = function(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
  mineCheck = function(row,column){
    var mine = false;
    this.board.forEach(function(boardRow){
      boardRow.forEach(function(square){
        if(square.coordinates[0]===row&&square.coordinates[1]===column){
          if(square.mine===true){
            mine = true;
          }
        }
      })
    })
    return mine;
  }

  rows = 8;
  mines = 10;

  squares: Square[] = [];
  board: any[] = [];
  constructor() { }

  ngOnInit() {
    //Generate and shuffle squares
    for (var i = 0; i < this.mines; i++) {
      this.squares.push(new Square(true,[0,0]))
    }
    for (var i = 0; i < Math.pow(this.rows,2)-this.mines; i++){
      this.squares.push(new Square(false,[0,0]))
    }
    this.shuffle(this.squares);

    //Organize squares into board
    for(var i=0; i<this.rows; i++){
      var output = [];
      for(var j=0; j<this.rows; j++){
        var square = this.squares.pop()
        square.coordinates = [i,j];
        output.push(square)
      }
      this.board.push(output);
    }
  }
  squareFlag(square){
    if(!square.clicked){
      square.flagged = !square.flagged;
    }
  }

  squareClick(square){
    if(!square.clicked){
      square.clicked = true;

      if(square.mine){
        alert('Ded');
      }
      else{
        var row = square.coordinates[0];
        var column = square.coordinates[1];
        var neighbors = [
          [row-1,column-1],
          [row-1,column],
          [row-1,column+1],
          [row+1,column-1],
          [row+1,column],
          [row+1,column+1],
          [row,column-1],
          [row,column+1],
        ];
        neighbors.forEach((coord)=>{
          if(this.mineCheck(coord[0],coord[1])){
            square.adjacentMines += 1;
          }
        })
      }
    }
  }

}
