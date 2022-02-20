import { GameField } from "../../dist/GameUI.d604de4c";
import { Cell } from "./Cell";
import { Direction } from "./Direction";



export class Snake {
  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  tailLenght: number = 2;
  direction: Direction = "Right"
  setDirection(newDirection: Direction) {
    this.direction = newDirection
  }
  
  move() {
    let prevPosHead = this.head
    this.tail.push({ x: prevPosHead.x, y: prevPosHead.y })
    while (this.tailLenght != this.tail.length) {
      this.tail.shift()
    }
   
    
    if (this.direction === 'Right') {
      this.head.x = this.head.x + 1
    }
    if (this.direction === 'Left') {
      this.head.x = this.head.x - 1
    }
    if (this.direction === 'Down') {
      this.head.y = this.head.y + 1
    }
    if (this.direction === 'Up') {
      this.head.y = this.head.y - 1
    }
  }

  grow() {
    this.tailLenght++
    this.tail.push(this.tail[this.tail.length - 1])
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    for (let i in this.tail) {
      if (cell.x === this.tail[i].x && cell.y === this.tail[i].y) {
        return true
      }
    }
    return false;
  }
}
