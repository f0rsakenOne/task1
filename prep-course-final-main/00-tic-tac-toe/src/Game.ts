export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  turn: XO = 'X'
  winner: XO = '-'
  
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countO = this.cells.filter(cell => cell === 'X').length
    const countX = this.cells.filter(cell => cell === 'O').length
    return countX === countO ? 'X' : 'O'

  }

  getWinner(): XO {
    if (this.cells[0] !== '-' && this.cells[0] === this.cells[1] && this.cells[0] === this.cells[2]) {
      return this.winner = this.cells[0];
    } if (this.cells[3] !== '-' && this.cells[3] === this.cells[4] && this.cells[3] === this.cells[5]) {
      return this.winner = this.cells[3];
    } if (this.cells[6] !== '-' && this.cells[6] === this.cells[7] && this.cells[6] === this.cells[8]) {
      return this.winner = this.cells[6];
    } if (this.cells[0] !== '-' && this.cells[0] === this.cells[3] && this.cells[0] === this.cells[6]) {
      return this.winner = this.cells[0];
    } if (this.cells[1] !== '-' && this.cells[1] === this.cells[4] && this.cells[1] === this.cells[7]) {
      return this.winner = this.cells[1];
    } if (this.cells[2] !== '-' && this.cells[2] === this.cells[5] && this.cells[2] === this.cells[8]) {
      return this.winner = this.cells[2];
    } if (this.cells[0] !== '-' && this.cells[0] === this.cells[4] && this.cells[0] === this.cells[8]) {
      return this.winner = this.cells[0];
    } if (this.cells[2] !== '-' && this.cells[2] === this.cells[4] && this.cells[2] === this.cells[6]) {
      return this.winner = this.cells[2];
    }
    return this.winner = '-'
  }

  isTie(): boolean {
    if (this.cells.filter(cell => cell === 'X').length + this.cells.filter(cell => cell === 'O').length === 9) return true
    return false
  }

  onClick(i: number): void {
    if (this.cells[i] == '-' && this.winner=='-') {
      this.cells[i] = this.getTurn()   
    }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  }
}
