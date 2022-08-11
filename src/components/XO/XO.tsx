import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../Button/Button";
import { StyledXOFigure, StyledXOWinner, StyledXOWrapper } from "./styled";
import { Figure, TBoard, IBoardHistory } from "./types";
import { XOBoard, XOHistory } from "./units";
import { checkWinner } from "./utils";

const XO = () => {
  const [board, setBoard] = useState<TBoard>([]);
  const [currentUser, setCurrentUser] = useState<Figure>(Figure.O);
  const [winner, setWinner] = useState<Figure | null>(null);
  const [history, setHistory] = useState<IBoardHistory[]>([]);

  const initialStateBoard = useMemo(
    () => Array.from({ length: 9 }, () => null),
    []
  );

  const isWinner = useMemo(() => checkWinner(board, setWinner), [board]);

  const handleClickCell = useCallback(
    (idx: number) => {
      if (!isWinner) {
        setBoard((prev) => {
          const movedBoard =
            prev?.map((cell, i) => (idx === i ? currentUser : cell)) || null;
          setHistory((prev) => [
            ...prev,
            {
              currentUser,
              board: movedBoard,
            },
          ]);
          return movedBoard;
        });
        setCurrentUser((prev) => (prev === Figure.X ? Figure.O : Figure.X));
      }
    },
    [currentUser, isWinner]
  );

  const restartBoard = useCallback(() => {
    setBoard(initialStateBoard);
    setCurrentUser(Figure.O);
    setWinner(null);
    setHistory([]);
  }, [initialStateBoard]);

  useEffect(() => {
    restartBoard();
  }, []);

  const historyBack = useCallback(
    (data: IBoardHistory, idx: number) => {
      setBoard(data.board || initialStateBoard);
      setCurrentUser(
        data.currentUser === Figure.X ? Figure.O : Figure.X || Figure.O
      );
      setWinner(null);
      setHistory((prev) => prev.slice(0, idx + 1));
    },
    [initialStateBoard]
  );

  return (
    <StyledXOWrapper>
      <StyledXOWinner isWinner={isWinner}>
        {isWinner && <h2>Winner: {winner?.toLocaleUpperCase()}</h2>}
      </StyledXOWinner>
      <div>
        Now: <StyledXOFigure>{currentUser}</StyledXOFigure>
      </div>
      <XOBoard handleClickCell={handleClickCell} board={board} />
      <XOHistory historyBack={historyBack} history={history} />

      <Button onClick={restartBoard}>Restart</Button>
    </StyledXOWrapper>
  );
};

export default XO;
