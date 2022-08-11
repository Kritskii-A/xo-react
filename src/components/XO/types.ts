export enum Figure {
  X = "x",
  O = "o",
}

export type TBoardCell = Figure | null;

export type TBoard = TBoardCell[];

export interface IBoardHistory {
  currentUser?: Figure;
  board?: TBoard;
}
