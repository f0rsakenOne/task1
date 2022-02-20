// import { Snake } from "../../dist/GameUI.d604de4c";
import { Cell } from "./Cell";
import { Snake } from "./Snake";



export class GameField {
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16)
  ];
  snake: Snake = new Snake;
  /**
   * Called when level completed
   */
  seed(): void {
    this.apples = [
      new Cell(Math.random()*45|0, Math.random()*25|0),
      new Cell(Math.random()*45|0, Math.random()*25|0),
      new Cell(Math.random()*45|0, Math.random()*25|0),
      new Cell(Math.random()*45|0, Math.random()*25|0),
      new Cell(Math.random()*45|0, Math.random()*25|0)
    ]
  }

  getApples(): Cell[] {
    return this.apples
  }

  isAppleInside(cell: Cell): boolean {
    for (let i in this.apples) {
      if (cell.x == this.apples[i].x && cell.y == this.apples[i].y) {
        return true
      }
    }
    return false

  }

  removeApple(cell: Cell): void {
    const apple = this.apples.find(c => c.x == cell.x && c.y === cell.y)
    if (apple != undefined) {
      this.apples.splice(this.apples.indexOf(apple), 1)
    }
  }

  isEmpty(): boolean {
    return this.apples.length === 0 ? true : false
  }
}
