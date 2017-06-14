export class Square {
  public adjacentMines: number = 0;
  public clicked: boolean = false;
  public flagged: boolean = false;  
  constructor(
    public mine: boolean,
    public coordinates: number[],
  ){}
}
