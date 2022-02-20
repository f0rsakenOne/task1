import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);

  });
  it("should be able to make correct move", () => {
    const game = new Game();
    game.onClick(8)
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "X"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);

  });
  it("may be clicked once", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);

  });
  it("detects horizontal win", () => {
    const game = new Game();
    game.onClick(0)//x
    game.onClick(4)//o
    game.onClick(1)//x
    game.onClick(8)//o
    game.onClick(2)//x
    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "-", "O", "-",
      "-", "-", "O"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);

  });
  it("detects vertical win", () => {
    const game = new Game();
    game.onClick(0)//x
    game.onClick(4)//o
    game.onClick(3)//x
    game.onClick(8)//o
    game.onClick(6)//x
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "X", "O", "-",
      "X", "-", "O"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);

  });
  it("detects diagonal win", () => {
    const game = new Game();
    game.onClick(0)//x
    game.onClick(3)//o
    game.onClick(4)//x
    game.onClick(6)//o 
    game.onClick(8)//x
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "-",
      "O", "-", "X"
    ]); 
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);

  });
  it("restarts after win", () => {
    const game = new Game();
    game.onClick(0)//x
    game.onClick(3)//o
    game.onClick(4)//x
    game.onClick(6)//o 
    game.onClick(8)//x
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "-",
      "O", "-", "X"
    ]); 
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
    game.restart()
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);

  });
  it("detects tie", () => {
    const game = new Game();
    game.onClick(0)//x
    game.onClick(1)//o
    game.onClick(2)//x
    game.onClick(3)//o 
    game.onClick(4)//x
    game.onClick(5)//o 
    game.onClick(7)//X
    game.onClick(6)//O
    game.onClick(8)//X
    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "O", "X", "O",
      "O", "X", "X"
    ]); 
    expect(game.isTie()).toBe(true);

  });
});
