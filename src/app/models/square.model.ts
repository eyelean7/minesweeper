export class Square {
  constructor(
    public mine: boolean,
    public adjacentMines: number,
    public coordinates: number[],
  ){}
}
