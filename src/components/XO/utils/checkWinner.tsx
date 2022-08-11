import { Figure, TBoard } from "../types";

export const checkWinner = (
  board: TBoard,
  cb: (figure: Figure | null) => void
): boolean => {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winnerFigure: Figure | null = null;
  const boardX = board?.map((cell, i) => (cell === Figure.X ? i : null));
  const boardO = board?.map((cell, i) => (cell === Figure.O ? i : null));

  combinations.forEach((element) => {
    let countX = 0;
    let countO = 0;
    element.forEach((number) => {
      if (boardX?.includes(number)) countX++;
      if (boardO?.includes(number)) countO++;
    });
    if (countX === 3) winnerFigure = Figure.X;
    if (countO === 3) winnerFigure = Figure.O;
  });

  cb(winnerFigure);
  return !!winnerFigure;
};
