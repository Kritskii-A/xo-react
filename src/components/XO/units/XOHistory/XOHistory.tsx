import { FC } from "react";
import { IBoardHistory } from "../../types";
import { StyledHistoryItemWrapper, StyledHistoryWrapper } from "./styled";
import XOHistoryItem from "./XOHistoryItem/XOHistoryItem";

interface IXOHistoryProps {
  history: IBoardHistory[];
  historyBack: (history: IBoardHistory, idx: number) => void;
}

const XOHistory: FC<IXOHistoryProps> = ({ history, historyBack }) => {
  return (
    <StyledHistoryWrapper>
      <h3>History</h3>
      <StyledHistoryItemWrapper>
        {history.map((item, idx) => (
          <XOHistoryItem
            key={idx}
            idx={idx}
            historyBack={historyBack}
            item={item}
          />
        ))}
      </StyledHistoryItemWrapper>
    </StyledHistoryWrapper>
  );
};

export default XOHistory;
