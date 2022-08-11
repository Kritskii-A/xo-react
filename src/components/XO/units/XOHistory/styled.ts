import styled from "styled-components";

export const StyledHistoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 130px;
  padding: 12px;
  border: 1px solid #333;
  width: 562px;
  border-radius: 3px;

  h3 {
    font-family: "Orbitron";
  }
`;

export const StyledHistoryItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledHistoryItem = styled.span`
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 3px;
  font-family: "Orbitron";
`;
