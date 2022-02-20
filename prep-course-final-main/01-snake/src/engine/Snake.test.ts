import { Snake } from "./Snake";
import { Cell } from "./Cell";


describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });
  it("should be able to move", () => {
    const snake = new Snake();
    snake.move()
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  it("should be able to move more like a snake", () => {
    const snake = new Snake();
    snake.move()
    expect(snake.getHead()).toEqual(new Cell(5, 1));
    expect(snake.getTail()).toEqual([new Cell(4, 0), new Cell(5, 0)]);
  });
});
