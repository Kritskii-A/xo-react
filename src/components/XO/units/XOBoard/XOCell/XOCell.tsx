import { FC, useCallback } from "react";
import { StyledXOCell, StyledXOFigure } from "../../../styled";
import { TBoardCell } from "../../../types";

interface IXOCellProps {
  cell: TBoardCell | null;
  handleClickCell: (idx: number) => void;
  idx: number;
}

const XOCell: FC<IXOCellProps> = ({ cell, handleClickCell, idx }) => {
  const clickCell = useCallback(() => {
    if (handleClickCell && !cell) handleClickCell(idx);
  }, [handleClickCell, cell, idx]);

  return (
    <StyledXOCell onClick={clickCell}>
      <StyledXOFigure>{cell}</StyledXOFigure>
    </StyledXOCell>
  );
};

export default XOCell;
