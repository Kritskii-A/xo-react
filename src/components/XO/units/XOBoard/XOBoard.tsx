import { FC } from "react";
import { StyledXOBord } from "../../styled";
import { TBoard } from "../../types";
import XOCell from "./XOCell/XOCell";

interface IXOBoardProps {
  board: TBoard | null;
  handleClickCell: (idx: number) => void;
}

const XOBoard: FC<IXOBoardProps> = ({ board, handleClickCell }) => {
  if (!board) return null;

  return (
    <StyledXOBord>
      {board.map((cell, idx) => (
        <XOCell
          handleClickCell={handleClickCell}
          key={idx}
          idx={idx}
          cell={cell}
        />
      ))}
    </StyledXOBord>
  );
};

export default XOBoard;
