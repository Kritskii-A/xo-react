import { FC, useCallback } from "react";
import { IBoardHistory } from "../../../types";
import { StyledHistoryItem } from "../styled";

interface IXOHistoryItem {
  item: IBoardHistory;
  idx: number;
  historyBack: (history: IBoardHistory, idx: number) => void;
}

const XOHistoryItem: FC<IXOHistoryItem> = ({ item, idx, historyBack }) => {
  const handleClick = useCallback(() => {
    if (historyBack) historyBack(item, idx);
  }, [item, historyBack, idx]);

  return (
    <StyledHistoryItem onClick={handleClick}>
      {idx + 1}. {item.currentUser}
    </StyledHistoryItem>
  );
};

export default XOHistoryItem;
